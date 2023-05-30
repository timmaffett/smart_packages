// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';
import 'dart:typed_data';
import 'dart:async';
import 'dart:convert';
import 'dart:indexed_db';

import 'package:smart_arrays_base/smart_arrays_base.dart';

import '../smart_arrays_dbstore.dart';

/// A "dataset" is represented by a [DSet] object consisting of one or
/// several 1D or 2D arrays, and of metadata. The arrays and the metadata
/// are called the "dataset components".
///
/// This class handles the storage of such datasets in an IndexedDB.
/// Example: In NMR spectroscopy, datasets are often 1D or 2D floating arrays
/// plus spectral parameters ( = "metadata").
/// The following holds:
///
/// - Each dataset is stored in its own data base.
///
/// - The data base name is: [dbBaseName] + < a data base number 1, 2, 3, ...>
///
/// - In a dataset's db, the dataset's arrays and its metadata are stored: the
///   dataset components.
///
/// - Each db contains several "IndexedDB object stores". A data set component
///   (an array or metadata) is stored in such an object store.
///
/// - An object store has a name, which is chosen to be the component name of the dataset.
///   DSC_REAL, DSC_IMAG, DSC_META ...
///
///   An object store may contain several items identified by a "key". A dataset
///   component is stored inside its object store with a key identical to the
///   object store's name. This is an arbitrary convention.
///
/// - Note: a component name may be extended by a running number if a
///   component (a large array) must be split due to its size (the max component
///   size is browser dependent, usually several megabytes).
///
/// - A dataset is identified by a "dataset key".
///
/// - The database name for a dataset is created from [dbBaseName] and from
///   the dataset's [encodedDskey] via [dbnameCreate].
///
/// - All existing data base names and their corresponding data set names are
///   kept in the map [dbnamesMap]. The map is saved in the [propStore]
///   under the key [DS_DB_NAMES].
///
/// - [dskeys] are required in the format according to via [DSKey.create].
///
/// NOTE: The number of data bases (and therefore the number of datasets) that
/// can be stored under a browser is browser dependent.
/// As of June 2017: Chrome Android or Windows > 100, Safari iOS < 70.
/// These values may depend on other apps.
///
/// As of June 2017 Chrome supports getting the names of all databases
/// (=datasets) stored by specpad, but Safari doesn't.
/// Therefore we maintain our own data base list YDATA_DB_LIST.
//    if(!window.indexedDB.supportsDatabaseNames){
//      new InfoDialog("NO SUPPORT", null);
//    }
class DSetDB extends DSetStore {
  static final int DB_VERSION_YDATA = 1; // same version for all datasets fornow
  static final String BLK_SEP = ":::";

  // July 2017: Bigger [MAXSIZE] will crash Chrome and Safari.
  // MAXSIZE is the maximum size of e.g. a Float64List or List<Float64List>
  // which can be store in a DB's object store with a single "put(..)" call.
  // The following MAXSIZE has been found experimentally and could change
  // with future browser versions. In this class, if data are bigger,
  // we split the data up in smaller chunks when storing them, and recombining
  // the pieces when reading them.
  static int MAXSIZE = 8 * 1024 * 1024;

  static String DS_DB_NAMES = "DS_DB_NAMES";

  // The database with the above version contains these object stores.
  // Adding a store would need a new db version number, otherwise no
  // version change event is sent and [dbCreateStores] is not called.
  // The DSC_FUT01,... stores are not currently used, but using them will
  // not require a new database version because they exist.
  final List<String> DSC_OBJECT_STORES = [
    DSetStore.DSC_META,
    DSetStore.DSC_REAL,
    DSetStore.DSC_IMAG,
    DSetStore.DSC_IMAG_IR,
    DSetStore.DSC_IMAG_RI,
    DSetStore.DSC_COMPR_POS,
    DSetStore.DSC_COMPR_NEG,
    DSetStore.DSC_PROJ_ROW,
    DSetStore.DSC_PROJ_COL,
    DSetStore.DSC_FUT03,
    DSetStore.DSC_FUT04,
    DSetStore.DSC_FUT05,
    DSetStore.DSC_FUT06,
    DSetStore.DSC_FUT07,
    DSetStore.DSC_FUT08,
    DSetStore.DSC_FUT09,
    DSetStore.DSC_FUT10
  ];

  /// A dataset in a [DSetStore] is identified by a dataset key [dskey] of type
  /// [DSKey]. Each dataset is stored
  /// in its own database whose name consists of [dbBaseName], plus a number.
  /// For each dataset, [dbnamesMap] contains this mapping:
  /// {dskey.encode(): number}
  /// It is saved in the global properties store [propStore] under the key
  /// [DS_DB_NAMES] by [dbnamesSave].
  late Map<String, int> dbnamesMap;

  /// The db's "base name" identical to all [DSet] databases managed by this [DSetDB].
  String dbBaseName;

  /// The name of the "global (common) properties" database belonging to this [DSetDB].
  String dbBaseNameGlobals;

  /// Creates a dataset storage handler [DSetDB] which can store datasets of type
  /// [DSet] in databases whose names all begin with [dbBaseName].
  /// Also creates a [PropStore] for this [DSetDB] used to store common
  /// information for all datasets managed by this [DSetDB], e.g. the
  /// [dbnamesMap] and more. [PropStore] stores its properties in its own
  /// database with name [dbBaseNameGlobals].
  DSetDB(this.dbBaseName, this.dbBaseNameGlobals) {
    propStore = PropStore(dbBaseNameGlobals);
  }

  /// Deletes all datasets maintained by this [DSetStore] whose dataset key
  /// component "projectName" is equal to [projectName]. Or. in other words:
  /// Deletes those datasets belonging to the project [projectName].
  Future<bool> projectDel(String projectName) async {
    List<DSKey> dskeys = await dskeysWithProject(projectName);
    return dsDel(dskeys, false);
  }

  /// Renames project [projectName] to [newProjectName]. This means that all datasets
  /// belonging to [projectName] will belong to [newProjectName] afterwards.
  /// In this implementation, all datasets (i.e. the respective data bases)
  /// will be renamed accordingly.
  /// Returns false if [newProjectName]==[projectName].
  Future<bool> projectRen(String projectName, String newProjectName) async {
    if (newProjectName == projectName) return Future.value(false);

    Completer<bool> cpl = Completer();

    List<DSKey> dskeys = await dskeysWithProject(projectName);
    DSKey destDatasetKey;
    for (DSKey dskey in dskeys) {
      destDatasetKey = DSKey.changeProject(dskey, newProjectName);
      await dsRen(dskey, destDatasetKey);
    }
    cpl.complete(true);
    return cpl.future;
  }

  /// Returns all available project names. They are compiled from all datasets
  /// managed by this [DSetStore] (can be done because each dataset MUST belong
  /// to a project). Keys and values in the returned Map are
  /// identical (by history). The result can be empty, but not null.
  Map<String, String> projectsGet() {
    Map<String, String> pmap = {};
    String projectName;
    for (String eDskey in dbnamesMap.keys) {
      projectName = DSKey.fromEncoded(eDskey).project;
      pmap[projectName] = projectName;
    }
    return pmap;
  }

  /// Returns true if [projectName] exists in the database, i.e. there is at least
  /// one dataset in the db belonging to this project (= whose dataset key
  /// was create with this [projectName].
  bool projectExists(String projectName) {
    if (projectsGet().containsKey(projectName.trim())) return true;
    return false;
  }

  /// Saves the metadata [meta] of the [dset] under [dskey] in a database.
  /// The database name is implicitely defined by [dskey].
  /// Existing metadata will be overridden.
  Future<bool> dsmetaSave(DSKey dskey, DSet ds) async {
    String? dbname = dbnameGet(dskey);
    if (dbname == null) {
      dbname = dbnameCreate(dskey); // creates/stores new dbname
      await dbnamePut(dskey, dbname); // update list
    }

    Database db;
    try {
      db = await dbOpen(dbname);
    } catch (e) {
      unawaited(dbnameRemove(dskey)); // not necessary to wait for completion
      throw dskey.encode() +
          "<br>Maximum number of data files reached: " +
          "${dbnamesMap.keys.length}" +
          "<br>Delete data sets no longer needed.";
    }
    if (db == null) return Future.value(null);

    // We store the attributes under [dataKey] in the object store [storename].
    // The dataKey has the same name as the object stored. This is pure
    // convention so as not to have to invent a new name.
    String storename = DSetStore.DSC_META;
    String dataKey = DSetStore.DSC_META;

    Transaction transaction;
    ObjectStore objectStore;
    try {
      transaction = db.transaction(storename, 'readwrite');
      objectStore = transaction.objectStore(storename);
    } catch (e) {
      // enters here when a data base was opened not containg the object store.
      // this occurs e.g. when a database was created for testing purposes
      db.close();
      await dbnameRemove(dskey); // no longer use this db
      unawaited(window.indexedDB!
          .deleteDatabase(dbname)); // not necessary to wait for completion
      throw "$storename of database $dbname does not exist:<br>$e";
    }

    Future putfut;
    try {
      ds.encodedDskey = dskey; // save storage location in meta
      putfut = objectStore.put(ds.meta, dataKey);
    } catch (e) {
      unawaited(dbnameRemove(dskey));
      db.close();
      throw "Error storing attribute data '$dskey': $e.";
    }
    unawaited(putfut.then((addedKey) {
      ds.meta["dbKey"] = addedKey;
    }));

    return transaction.completed.then((_) {
      db.close();
      // Return the result of the future.
      return true;
    });
  }

  /// Error message from [matrixLoad]
  static String? load_error;

  /// Inverse of [matrixSave]. See also comment there.
  /// Returns the matrix stored in the database [db] (whose name is derived from
  /// [encodedDskey]) inside the object store [objectStoreName]
  /// Returns null if the data don't exist, or an error occured.
  /// The error message is then available in [load_error];
  Future<List<Float64List>> matrixLoad(
      Database db, String objectStoreName, String dataKey) async {
    load_error = null;
    Transaction transaction = db.transaction(objectStoreName, 'readonly');
    if (transaction == null) {
      return Future.value(null);
    }

    ObjectStore objectStore = transaction.objectStore(objectStoreName);
    if (objectStore == null) {
      return Future.value(null);
    }

    Object value = await objectStore.getObject(dataKey);

    Completer<List<Float64List>> cpl = Completer();
    if (value == null) {
      cpl.complete(null);
    } else if (value is List) {
      List<Float64List> matrix = List.from(value);
      cpl.complete(matrix);
    } else {
      load_error =
          "dset_db.dart: matrixLoad(${db.name}, $objectStoreName): Illegal type:" +
              "${value.runtimeType}";
      cpl.complete(null);
    }
    return cpl.future;
  }

  /// Saves [matrix] in the object store [objectStoreName] of the database [db]
  /// under [nameInObjectStore]. Overrides a potentially exsting matrix.
  /// It is expected that:
  /// - the caller opened the database, and will close it
  /// - the size of the data is not bigger than [MAXSIZE]. Bigger data
  ///   must be handled by the caller by splitting them up.
  Future<Null> matrixSave(Database db, String objectStoreName,
      List<Float64List> matrix, String nameInObjectStore) async {
    Transaction transaction;
    ObjectStore objectStore;

    try {
      transaction = db.transaction(objectStoreName, 'readwrite');
      objectStore = transaction.objectStore(objectStoreName);
    } catch (e) {
      // enters here when a data base was opened not containg the object store.
      // this occurs e.g. when a database was created for testing purposes
      throw "dset_db.dart: $objectStoreName of database ${db.name} does not exist:<br>$e";
    }

    // this crashes the browser if map too big (>10MB) Aug.11, 2017. See above.
    await objectStore.put(matrix, nameInObjectStore);

    return transaction.completed.then((_) {
      return null;
    });
  }

  /// Saves [matrix] in a database as the dataset component [dsc], e.g. as
  /// [DSC_REAL]. The database name is obtained from [dskey] via [dbnameGet].
  /// If the database exists, a potentially existing
  /// [dsc] will be overridden. If it does not exist, it will be created with
  /// a unique name using [dbnameCreate].
  /// This method handles both cases: Data are stored in a single block or in
  /// several blocks (the latter: if the data [MAXSIZE] was exceeded when storing
  /// the data, a browser limitation).
  /// Throws a message upon error.
  Future dscompSave(DSKey dskey, List<Float64List> matrix, String dsc) async {
    if (matrix == null || matrix.isEmpty) {
      throw ("No data specified: '$dskey'.");
    }

    String? dbname = dbnameGet(dskey);
    if (dbname == null) {
      dbname = dbnameCreate(dskey); // creates/stores new dbname
      await dbnamePut(dskey, dbname); // update list
    }

    Database db;
    try {
      db = await dbOpen(dbname);
    } catch (e) {
      unawaited(dbnameRemove(dskey)); // no need to wait here
      throw dskey.encode() +
          "<br>Maximum number of data files reached: " +
          "${dbnamesMap.keys.length}" +
          "<br>Delete data sets no longer needed.";
    }
    if (db == null) return Future.value(null);

    Completer cpl = Completer();

    int ncols = matrix[0].length; // assuming all rows have same length!!!
    int nrows = matrix.length;
    int nblocks = 0; // counts blocks of rows stored in one piece
    int rowsPerBlock = 0; // counts the rows in a block
    int subrow_length = 0; // if a row gets split before storing

    // We are using thes dataset component [dsc] as the object store name in the
    // db. This means different components goto different object stores:
    String objectStoreName = dsc;

    // we are also using (arbitrarily) [dsc] as the name under which the
    // matrix is stored inside the object store:
    String nameInObjectStore = dsc;
    if (ncols <= MAXSIZE && (ncols * nrows <= MAXSIZE)) {
      // we can store the data in a single piece
      try {
        await matrixSave(db, objectStoreName, matrix, nameInObjectStore);
      } catch (e) {
        db.close();
        unawaited(dbnameRemove(dskey));
        String msg = "Exception while storing $dskey.<br>" + "$dsc <br>$e.";
        throw (msg);
      }
    } else {
      // we must store the data in several pieces
      if (ncols >= MAXSIZE) {
        subrow_length = ncols ~/ 2;
        while (subrow_length >= MAXSIZE) {
          subrow_length ~/= 2; // could also be -1 instead of ~/2, takes longer
        }
      }

      List<Float64List> ybuffer = []; //OBSOLETE//List<Float64List>(); // storage buffer

      for (int i = 0; i < nrows; i++) {
        // split a row if already a single row is bigger that MAXSIZE
        List<Float64List> subrows =
            Array1D.splitArray(matrix[i], subrow_length);
        Array2D.appendRows(subrows, ybuffer);

        late String ext;
        if (subrow_length > 0) {
          // store a single row: store all subrows into which the row was
          // split in the case ncols exceeds MAXSIZE.
          // "ext" will contain the number of subrows,
          // the row and the subrow number, in this order
          for (int j = 0; j < ybuffer.length; j++) {
            ext = "$BLK_SEP$nblocks";
            try {
              await matrixSave(
                  db, objectStoreName, [ybuffer[j]], nameInObjectStore + ext);
              nblocks++; // here a block consists of several subrows
            } catch (e) {
              db.close();
              unawaited(dbnameRemove(dskey));
              String msg = "Exception 1 while storing $dskey.<br>" +
                  "$dsc / $ext <br>$e.";
              throw msg;
            }
          }
          ybuffer.clear();
          // the following is actually independent of [i]: we assume that a
          // 2D data set has rows having the same length. Therefore the number
          // of subrows is the same in each block.
          rowsPerBlock = subrows.length;
        } else {
          // store a single row or a block of rows in a single piece,
          // depending on how many rows fit into MAXSIZE.
          // "ext" will contain the number of rows in a block and the number
          // of the first row in the block, in this order.
          rowsPerBlock = ybuffer.length;
          if (rowsPerBlock * ybuffer[0].length > MAXSIZE ~/ 2 ||
              i == nrows - 1) {
            try {
              ext = "$BLK_SEP$nblocks";
              await matrixSave(
                  db, objectStoreName, ybuffer, nameInObjectStore + ext);
              nblocks++; // here a block consists of several rows
              ybuffer.clear(); // no longer valid
            } catch (e) {
              db.close();
              unawaited(dbnameRemove(dskey));
              String msg = "Exception 2 while storing $dskey.<br>" +
                  "$objectStoreName / $ext <br>$e.";
              throw msg;
            }
          }
        }
      }
    }
    // we save [nblocks] etc. in the same store as the matrix. This info is
    // needed when loading data not stored in a single piece:
    await propSave(db, objectStoreName, DSetStore.BLOCKS_OF_ROWS_INFO,
        json.encode([nblocks, rowsPerBlock, subrow_length]));
    db.close();
    cpl.complete();
    return cpl.future;
  } // [dscompSave]

  /// Saves the property with name [propName] and with value [propValue] to
  /// the [PropStore] common ("global") to all datasets of this [DSetStore].
  /// Returns [propName] in the case of success, null if failed. The latter
  /// is true if the db could not be opened or created.
  Future<String> gpropSave(String propName, String propValue) async {
    return propStore.propSave(propName, propValue);
  }

  /// Deletes the property [propName] from the [PropStore] common ("global") to
  /// all datasets of this [DSetStore]. Returns true if succeeded.
  Future<bool> gpropDel(String propName) async {
    return propStore.propDel(propName);
  }

  /// Returns the value of the property [propName] from the [propStore]
  /// maintained by this [DSetStore].
  String? gpropGet(String propName) {
    return propStore.propGet(propName);
  }

  /// Returns all [DSKey]s belonging to [projectName]. The result is compiled
  /// from all stored datasets managed by this [DSetStore].
  /// The result can be empty, but not null.
  List<DSKey> dskeysWithProject(String projectName) {
    List<DSKey> dskeysProject = [];
    for (String eDskey in dbnamesMap.keys) {
      DSKey dskey = DSKey.fromEncoded(eDskey);
      if (dskey.project == projectName) dskeysProject.add(dskey);
    }
    return dskeysProject;
  }

  /// Deletes the [DSKey] component [componentKey] of the data set [dskey] from
  /// the database defined by [dskey].
  /// A component consists of the actual component data (e.g. DSC_REAL) and
  /// possibly other associated data (e.g. a special property) all contained in
  /// an object store whose name is [componentKey].
  /// Therefore we delete here the entire contents of object store [componentKey].
  Future dscompDel(DSKey dskey, String componentKey) async {
    String? dbname = dbnameGet(dskey);
    if (dbname == null) return Future.value(null); // dataset does not exist

    Database db;
    try {
      db = await dbOpen(dbname);
    } catch (e) {
      return Future.value(null); // dataset does not exist
    }
    if (db == null) return Future.value(null);

    String storename = componentKey;

    Transaction trans = db.transaction(storename, 'readwrite');
    ObjectStore store = trans.objectStore(storename);
    await store.clear(); // TODO is await orrect here?
    return trans.completed.then((_) {
      db.close();
      return true;
    });
  }

  /// Deletes all datasets indetified by [dskeys] by deleting the respective
  /// databases if [imagOnly] is [false]. Otherwise deletes only the imaginary
  /// data of the datasets from the database.
  /// Returns true on success.
  Future<bool> dsDel(List<DSKey> dskeys, bool imagOnly) async {
    Completer<bool> cpl = Completer();
    for (DSKey dskey in dskeys) {
      if (!imagOnly) {
        String? dbname = dbnameGet(dskey);
        if (dbname == null) {
          return Future.value(false); // dataset does not exist
        }

        try {
          await dbnameRemove(dskey);
          await window.indexedDB!.deleteDatabase(dbname);
        } catch (e) {
          continue; // dataset does not exist
        }
      } else {
        await dscompDel(dskey, DSetStore.DSC_IMAG);
      }
    }
    cpl.complete(true);
    return cpl.future;
  }

  /// Renames a dataset identified by [sourceDatasetKey] to the new
  /// identifier [destDatasetKey].
  Future<bool> dsRen(DSKey sourceDatasetKey, DSKey destDatasetKey) async {
    if (sourceDatasetKey.isEmty ||
        destDatasetKey.isEmty ||
        sourceDatasetKey.equals(destDatasetKey)) return Future.value(false);
    if ((await dsCopy(sourceDatasetKey, destDatasetKey)) == false) {
      return Future.value(false);
    }
    return dsDel([sourceDatasetKey], false);
  }

  /// Inverse of [dscompSave]:
  /// Returns the matrix that was stored as dataset component [dsc] in the
  /// database whose name is derived from [dskey].
  /// Returns null if the component doesn't
  /// exist, or an error occured. Handles both cases:  Data are stored in a
  /// single block or in several blocks by [dscompSave].
  Future<List<Float64List>> dscompLoad(DSKey dskey, String dsc) async {
    String? dbname = dbnameGet(dskey);
    if (dbname == null) return Future.value(null); // dataset does not exist

    Database db;
    try {
      db = await dbOpen(dbname);
    } catch (e) {
      return Future.value(null); // dataset does not exist
    }
    if (db == null) return Future.value(null);

    Object value;
    Completer<List<Float64List>> cpl = Completer();
    late List<Float64List> matrix;
    int nblocks = 0; // counts blocks of rows stored in one piece
    int rowsPerBlock = 0; // counts the rows in a block
    int subrow_length = 0; // >0 if a row gets split before storing
    String json1 = await propGet(db, dsc, DSetStore.BLOCKS_OF_ROWS_INFO);
    if (json1 != null) {
      List<int> blockinfo = UtilsJson.decodeLI(json1);
      nblocks = blockinfo[0];
      rowsPerBlock = blockinfo[1];
      subrow_length = blockinfo[2];
    }

    if (nblocks == 0) {
      // data stored in a single piece
      value = await matrixLoad(db, dsc, dsc);
      if (value is List<Float64List>) {
        matrix = value;
      }
    } else if (subrow_length > 0) {
      // data stored in nblocks subrows. rowsPerBlock subrows form a row.
      matrix = []; //OBSOLETE//List<Float64List>();
      List<Float64List?> partialRows = List<Float64List?>.filled(rowsPerBlock,null);
      int partialRowCount = 0;
      for (int i = 0; i < nblocks; i++) {
        String ext = "$BLK_SEP$i";
        // the result is 1 subrow
        value = await matrixLoad(db, dsc, dsc + ext);
        if (value is List<Float64List>) {
          partialRows[partialRowCount] = value[0]; // sub rows is its own block
        }
        partialRowCount++;

        if (partialRowCount == rowsPerBlock) {
          // build row from subrows
          Float64List row = Array2D.join(partialRows as List<Float64List>);
          matrix.add(row);
          partialRows = List<Float64List?>.filled(rowsPerBlock,null);
          partialRowCount = 0;
        }
      }
    } else {
      // data stored in nblocks rows
      matrix = []; //OBSOLETE//List<Float64List>();
      List<Float64List> rows;
      for (int i = 0; i < nblocks; i++) {
        String ext = "$BLK_SEP$i";
        // the result is a list of complete rows
        value = await matrixLoad(db, dsc, dsc + ext);
        if (value is List<Float64List>) {
          rows = value;
          Array2D.appendRows(rows, matrix);
        }
      }
    }

    cpl.complete(matrix);
    db.close();
    return cpl.future;
  }

  /// Returns the metadata of a dataset identified by [dskey].
  /// Returns null on error or no metadata.
  /// The error message is then available in [load_meta_error].
  Future<Map<String, String>?> dsmetaLoad(DSKey dskey) async {
    String? dbname = dbnameGet(dskey);
    if (dbname == null) return Future.value(null);

    Completer<Map<String, String>> cpl = Completer();
    Map<String, String>? attr = await dsmetaLoad_db(dbname);
    if (attr == null) return Future.value(null);
    if (attr.keys.length == 1 && attr.keys.first == "ERR") {
      DSetStore.load_meta_error = attr["ERR"] ?? '';
      cpl.complete(null);
    } else {
      cpl.complete(attr);
    }
    return cpl.future;
  }

  /// Returns true if a dataset described by [dskey] exists.
  /// Checks if a database for [dskey] exists and contains at least
  /// metadata.
  /// Note: If the database didn't exist before, it will exist afterwards
  /// because openDB() will create a database if it doesn't exist. This is
  /// not a problem because, for a [DSet] set to exist we check for existing
  /// metadata. The created database will NOT be present in [dbnamesMap].
  /// For this reason the created empty db will be used next time a dataset is
  /// stored.
  Future<bool> dsExist(DSKey dskey) async {
    Completer<bool> cpl = Completer();
    Map<String, Object>? attr = await dsmetaLoad(dskey);
    if (attr == null) {
      cpl.complete(false);
    } else {
      cpl.complete(true);
    }
    return cpl.future;
  }

  /// Returns the metadata of a dataset stored as a database with name [dbname].
  /// Under metadata we understand the component [DSetStore.DSC_META] of
  /// a dataset.
  /// Returns null if no metadata exist in [dbname].
  /// Returns a map of the form {"ERR": error message} if metadata exist, but
  /// have a wrong data type ( probably a programming error).
  /// Note: if a database with [dbname] doesn't exist, also null is returned.
  /// However, afterwards a database with this name was created, with no content.
  /// It will later be re-used when one is needed. No harm otherwise.
  Future<Map<String, String>?> dsmetaLoad_db(String dbname) async {
    Database db;
    try {
      db = await dbOpen(dbname);
    } catch (e) {
      return Future.value(null); // dataset does not exist
    }
    if (db == null) return Future.value(null);

    // store and key in store: As used in [dsmetaSave]
    String storename = DSetStore.DSC_META;
    String dataKey = DSetStore.DSC_META;
    Transaction? transaction;
    try {
      transaction = db.transaction(storename, 'readonly');
    } catch (e) {
      return Future.value(null); // dataset does not exist
    }
    if (transaction == null) return null;
    ObjectStore objectStore = transaction.objectStore(storename);
    if (objectStore == null) {
      db.close();
      return Future.value(null);
    }

    // The following will deliver a Map<dynamic,dynamic> at runtime
    dynamic value = await objectStore.getObject(dataKey);

    return transaction.completed.then((_) {
      Map<String, String> attr;
      try {
        attr = value.cast<String, String>(); // convert dynamic Map to String
      } catch (e) {
        attr = {
          "ERR":
              "dset_db.dart 10000: dsmetaLoad_db(): Illegal type: ${value.runtimeType}"
        };
      }
      db.close();
      return attr;
    });
  }

  /// Returns the database with [dbname] if it exists and has the version
  /// number DB_VERSION_YDATA. [onUpgradeNeeded] is not called.
  /// Creates and returns a new database with [dbname] if it does not exists
  /// or it exists, but DB_VERSION_YDATA is different from that of the existing
  /// database. After creation, [onUpgradeNeeded] gets called where the object
  /// store[s] in the db can be crated.
  Future<Database> dbOpen(String dbname) async {
    return await window.indexedDB!.open(dbname,
        version: DB_VERSION_YDATA, onUpgradeNeeded: dbCreateStores);
  }

  /// Called when a new DB was created, or the version of an existing
  /// DB was changed.
  void dbCreateStores(VersionChangeEvent e) {
    Database db = e.target.result; // get the db
    // We set autoIncrement=false because we supply our own unique
    // keys (= property names) under which objects are stored. Such keys are called
    // "out-of-line" keys in contrast to "in-line" keys which are generated
    // automatically if autoIncrement=true. In the latter cases no key needs to
    // be specified when putting an object into the object store (objects would
    // be retrieved then using a properly generated index then rather than
    // and own key).
    for (String storename in DSC_OBJECT_STORES) {
      if (!db.objectStoreNames!.contains(storename)) {
        db.createObjectStore(storename, autoIncrement: false);
      }
    }
  }

  /// Initializes the contents of [dbnamesMap].
  /// Requires that the global properties [propStore] are available, otherwise
  /// [dbnamesMap] would remain empty.
  /// Note that [propStore] is available after calling [createDSetStore].
  void dbnamesInit() {
    String? json1 = propStore.propGet(DS_DB_NAMES); // stored jsonified
    if (json1 != null && json1.isNotEmpty) {
      dbnamesMap = UtilsJson.decodeMSI(json1);
//      try {
//        dbnamesMap = Ujson.decodeMSI(json1);
//      }catch(e){
//      }
    } else {
      dbnamesMap = Map<String, int>();
    }
  }

  /// Saves [dbnamesMap] jsonified in [propStore] under [DS_DB_NAMES].
  /// Returns [DS_DB_NAMES] in the case of success, null if failed. The latter
  /// is true if the db could not be opened or created.
  Future<String> dbnamesSave() async {
    if (dbnamesMap == null) dbnamesMap = {};
    return propStore.propSave(DS_DB_NAMES, json.encode(dbnamesMap));
  }

  /// Removes [dskey] from [dbnamesMap] and updates [propStore].
  /// Returns [DS_DB_NAMES] in the case of success, null if failed. The latter
  /// is true if the db could not be opened or created.
  Future<String> dbnameRemove(DSKey dskey) async {
    if (dbnamesMap == null || dbnamesMap.isEmpty) return Future.value(null);
    dbnamesMap.remove(dskey.encode());
    return dbnamesSave();
  }

  /// Returns the name of the database where the dataset defined by [dskey]
  /// is stored. Locates [dskey] in [dbnamesMap]. Returns null if [dskey]
  /// is not there.
  String? dbnameGet(DSKey dskey) {
    if (dskey.isEmty) return null;
    if (dbnamesMap == null || dbnamesMap.isEmpty) {
      dbnamesInit();
      if (dbnamesMap == null || dbnamesMap.isEmpty) return null;
    }
    if (dbnamesMap[dskey.encode()] == null) return null;
    return dbBaseName + "${dbnamesMap[dskey.encode()]}";
  }

  /// Assigns [dskey] a new database number and updates [dbnamesMap] respectively
  /// (possibly overriding an existing value). The changed map is stored in
  /// [propStore].
  /// Returns true if successful.
  Future<bool> dbnamePut(DSKey dskey, String dbname) async {
    Completer<bool> cpl = Completer();
    int dbnum = dbnumGet(dbname);
    if (dbnum < 1) {
      cpl.complete(false);
    } else {
      if (dbnamesMap == null || dbnamesMap.isEmpty) {
        dbnamesInit();
        if (dbnamesMap == null) {
          cpl.complete(false);
          return cpl.future;
        }
      }
      dbnamesMap[dskey.encode()] = dbnum;
      await dbnamesSave();
      cpl.complete(true);
    }
    return cpl.future;
  }

  /// Returns the database number (>0) ("extension") of [dbname].
  /// Returns -1 if illegal dbname.
  int dbnumGet(String dbname) {
    try {
      int num = int.parse(dbname.substring(dbBaseName.length));
      return num;
    } catch (e) {
      return -1;
    }
  }

  /// Returns the [DSKey] belonging to the data base number [dbnum] in
  /// [dbnamesMap]. Returns null if not existing.
  DSKey? dskeyGet(int dbnum) {
    if (dbnamesMap == null || dbnamesMap.isEmpty) {
      dbnamesInit();
      if (dbnamesMap == null || dbnamesMap.isEmpty) return null;
    }

    for (String eDskey in dbnamesMap.keys) {
      if (dbnamesMap[eDskey] == dbnum) return DSKey.fromEncoded(eDskey);
    }
    return null;
  }

  /// Return the first unused db number in [dbnamesMap].
  /// Can be used to create a new db.
  /// 2, 8, 13
  /// 1,2,3,4,5,13
  int dbnumFreeGet() {
    if (dbnamesMap == null || dbnamesMap.isEmpty) return 1;
    List<int> curnums = List<int>.from(dbnamesMap.values);
    int maxval = Array1D.getMaxIntPos(curnums)[0];
    for (int i = 1; i <= maxval; i++) {
      if (!curnums.contains(i)) return i;
    }
    return maxval + 1;
  }

  /// Returns a unique DB name for a dataset described by [dskey].
  /// [constructed from [dbBaseName], [dskey] and
  /// the first unused db number.
  String dbnameCreate(DSKey dskey) {
    return dbBaseName + "${dbnumFreeGet()}";
  }

  //------------------- static methods -------------------------------

  /// Returns a [DSetStore]:
  /// a) creates a [DSetStore] from [dbBaseName] and [dbBaseNameGlobals] if
  ///    no such store exists, i.e. no datasets are available which are stored
  ///    in 'IndexedDB' databases whose names start with [dbBaseName]. In this
  ///    case also a new [PropStore] is created, i.e. an IndexedDB' database
  ///    with name [dbBaseNameGlobals] which is used to store common information
  ///    for all datasets, e.g. a directory of all datasets.
  /// b) opens a [DSetStore] from [dbBaseName] and [dbBaseNameGlobals] if
  ///    at least one 'IndexedDB' database exists whose name start with
  ///    [dbBaseName]. In this case also the associated [PropStore], i.e.
  ///    an IndexedDB' database with name [dbBaseNameGlobals] is opened and
  ///    its contents is loaded to be accessed with the methods of [DSetStore],
  ///    e.g. [gpropGet] or [projectDel].
  ///
  /// Returns null if 'IndexedDB' databases are not supported by the browser,
  /// or in case of other storage problems. See [create_dsstore_error].
  /// Note that Chrome Windows/Android/iOS/Linux, MS Edge and Safari/iOS do
  /// support 'IndexedDB' databases.
  ///
  /// Note 1: This method is specially designed for opening or creating a [DSetStore]
  /// which stores each dataset in its own 'IndexedDB' using the concrete
  /// implementation [DSetDB] of [DSetStore]. This is the only implementation
  /// this package provides. For possible other implementations a respectively
  /// specialized [createDSetStore] must be provided.
  ///
  /// Note 2: Chrome and Safari were tested to support many 'IndexedDB' databases
  /// at the same time (e.g. 100), so may datasets of type [DSet] can be stored
  /// at the same time. However, browsers limit the storage space for each app
  /// depending on the capacity of the device and many other factors. One of
  /// these factors is of course the size of a dataset.
  /// A single dataset may have many megabytes, this was tested as well.
  static Future<DSetStore> createDSetStore(
      String dbBaseName, String dbBaseNameGlobals) async {
    Completer<DSetStore> cpl = Completer();
    if (!IdbFactory.supported) {
      create_dsstore_error = DSetStore.IDB_NOT_SUPPORTED;
      cpl.complete(null);
    } else {
      // first load the metadata global to all datasets.
      // load global properties which are then available in [propCache],
      // or create if not existing yet.
      DSetDB dstore = DSetDB(dbBaseName, dbBaseNameGlobals);
      if (await dstore.propStore.loadProps() == null) {
        create_dsstore_error = DSetStore.IDB_NOT_SUPPORTED;
        cpl.complete(null);
      } else {
        dstore.dbnamesInit();
        cpl.complete(dstore);
      }
    }
    return cpl.future;
  }

  /// Contains message when [createDSetStore] failed
  static String? create_dsstore_error;

  /// Saves the property defined by the key [propName] and its value [propValue]
  /// in the database [db] inside the object store with [objectStoreName].
  /// [db] must be opened and closed by the caller.
  /// A potentially existing value is overridden.
  /// Returns [propName].
  static Future<String> propSave(Database db, String objectStoreName,
      String propName, String propValue) async {
    Transaction transaction = db.transaction(objectStoreName, 'readwrite');
    ObjectStore objectStore = transaction.objectStore(objectStoreName);

    // add or override propName
    // result, the added key, non needed for now
    String addedKey = await objectStore.put(propValue, propName);
    // more request could made here on the object store, they would be q'd.

    // The transaction completes after all q'd operations on the object store
    // are complete
    return transaction.completed.then((_) {
      return addedKey;
    });
  }

  /// Inverse of [propSave].
  /// Returns the value stored under the key [propName] from the database [db]
  /// inside [objectStoreName].
  /// [db] must be opened and closed by the caller.
  /// Returns null if [propName] doesn't exist in [db]/[objectStoreName] or there
  /// is a problem with accessing the db.
  static Future<String> propGet(
      Database db, String objectStoreName, String propName) async {
    Transaction transaction = db.transaction(objectStoreName, 'readonly');
    if (transaction == null) return Future.value(null);
    ObjectStore objectStore = transaction.objectStore(objectStoreName);
    if (objectStore == null) return Future.value(null);

    String value = await objectStore.getObject(propName);
    return transaction.completed.then((_) {
      return value;
    });
  }

  /// Requests from the browser to make storage persistent.
  /// Returns true if granted.
  static Future<bool> persistent() async {
    Navigator navigator = window.navigator;
    bool granted = false;
    if (navigator.storage != null && navigator.storage!.persist != null) {
      granted = await navigator.storage!.persist();
    }

    Completer<bool> cpl = Completer<bool>();
    cpl.complete(granted);
    return cpl.future;
  }

  /// Requests from the browser to make storage persistent.
  /// Returns true if granted.
  /// In addition, alerts the user about the result.
  static Future<bool> persistentAlert() async {
    Navigator navigator = window.navigator;
    bool granted = false;
    if (navigator.storage != null && navigator.storage!.persist != null) {
      granted = await navigator.storage!.persist();
    }

    Completer<bool> cpl = Completer<bool>();
    if (granted) {
      window
          .alert("Storage will not be cleared except by explicit user action");
    } else {
      window.alert("Storage may be cleared by the UA under storage pressure.");
    }

    cpl.complete(granted);
    return cpl.future;
  }
}
