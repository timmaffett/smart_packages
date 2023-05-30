// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:typed_data';
import 'dart:async';

import '../smart_arrays_dbstore.dart';

/// The purpose of the class is to provide an interface for storing [DSet]
/// dataset objects (i.e. 1D or 2D array with metadata) in the browser.
/// A concrete implementation is [DSetDB] which stores datasets in an
/// "IndexedDB" database.
/// It could also be used for a concrete implementation using the html5 file
/// system HTML5 FS or other.
/// This class provides methods to:
/// - save data or components of the data to the storage device
/// - save data or components of the data from the storage device
/// - Delete, copy, rename stored data
/// - Group stored data into categories ("projects") and manage projects
/// - Save / read information common to all stored data ("global properties")
/// Usage: [README.md] and [example.dart] of this package.
abstract class DSetStore {
  /// Defines the dataset components
  /// (note: the selection of "NMR" as a data component String DSC
  /// is due to historical reasons):
  static String DSC = "_NMR_"; // data file/entry leader
  static final US = "_",
      // 01- etc: define some order for important items because indexeddb
      // has an internal storage order, hopefully we can accellerate access
      // by this.
      DSC_META = "${DSC}01-ATTR$US",
      DSC_REAL = "${DSC}02-REAL$US", // 1r, 2rr
      DSC_DATA = DSC_REAL,
      DSC_COMPR_POS = "${DSC}03-COMPRESSED_POS$US",
      DSC_COMPR_NEG = "${DSC}04-COMPRESSED_NEG$US",
      DSC_IMAG = "${DSC}IMAG$US", // 1i, 2ii
      DSC_DATA_2 = DSC_IMAG,
      DSC_IMAG_IR = "${DSC}IMAG_IR$US", // 2ir
      DSC_IMAG_RI = "${DSC}IMAG_RI$US", // 2ri
      // Future unused stores which can already be created in a data base.
      // They can be used without changing the data base version.
      // If the String values are changed (e.g. FUT01) also a new version is
      // necessary.
      DSC_PROJ_ROW = "${DSC}FUT01$US",
      DSC_PROJ_COL = "${DSC}FUT02$US",
      DSC_FUT03 = "${DSC}FUT03$US",
      DSC_FUT04 = "${DSC}FUT04$US",
      DSC_FUT05 = "${DSC}FUT05$US",
      DSC_FUT06 = "${DSC}FUT06$US",
      DSC_FUT07 = "${DSC}FUT07$US",
      DSC_FUT08 = "${DSC}FUT08$US",
      DSC_FUT09 = "${DSC}FUT09$US",
      DSC_FUT10 = "${DSC}FUT10$US";

  /// Error message
  static final String IDB_NOT_SUPPORTED = """Severe problem:
        Can't open or create the 'indexeddb' data base
        (possibly not support by the browser).
        Program can't continue.""";

  /// Required for 2D storage if data must be broken into blocks for large sizes
  static final String BLOCKS_OF_ROWS_INFO = "BLOCKS_OF_ROWS_INFO";

  /// Maximum number of projects in this [DSetStore]. Arbitrary, can be
  /// overridden of required, depending on a concrete implementation of this
  /// class.
  static int MAX_STORES = 50;
  late PropStore propStore;

  /// Saves the metadata [meta] of the [dset] under [dskey].
  Future<bool> dsmetaSave(DSKey dskey, DSet dset);

  /// Saves [matrix] as the dataset component [dsc], e.g. as
  /// [DSC_REAL], under the identifier [DSKey]. A p otentially existing [dsc]
  /// component will be overridden.
  /// Throws a message upon error.
  /// [dsc] is one of [DSC_REAL], [DSC_IMAG], [DSC_REAL], [DSC_COMPR_POS],
  /// [DSC_COMPR_NEG], [DSC_IMAG_IR], [DSC_IMAG_RI], [DSC_IMAG_ROW], [DSC_IMAG_COL].
  Future dscompSave(DSKey dskey, List<Float64List> matrix, String dsc);

  /// Deletes the component [dsc] of the dataset stored under [dskey].
  Future dscompDel(DSKey dskey, String dsc);

  /// Deletes all datasets with the identifiers [dskeys]. If [imagOnly] is true
  /// only the [DSC_IMAG] component of a daatset is deleted.
  /// Returns true on success.
  Future<bool> dsDel(List<DSKey> dskeys, bool imagOnly);

  /// Renames a dataset identified by [sourceDatasetKey] to the new
  /// identifier [destDatasetKey].
  Future<bool> dsRen(DSKey sourceDatasetKey, DSKey destDatasetKey);

  /// Returns true if a dataset with [datasetKey] exists in the store.
  Future<bool> dsExist(DSKey datasetKey);

  /// Returns the metadata of a dataset stored under [dskey].
  /// Returns null on error or no metadata.
  /// The error message is then available in [load_meta_error].
  Future<Map<String, String>?> dsmetaLoad(DSKey dskey);

  /// Inverse of [dscompSave]: Returns [matrix] stored under [dskey]
  /// as the dataset component [dsc]. Returns null if the component doesn't
  /// exist, or any error occured.
  Future<List<Float64List>> dscompLoad(DSKey dskey, String dsc);

  /// Deletes the property [propName] from the [PropStore] common ("global") to
  /// all datasets of this [DSetStore]. Returns true if succeeded.
  Future<bool> gpropDel(String propName);

  /// Saves the property with name [propName] and with value [propValue] to
  /// the [PropStore] common ("global") to all datasets of this [DSetStore].
  /// Returns [propName] in the case of success, null if failed. The latter
  /// is true if the db could not be opened or created.
  Future<String?> gpropSave(String propName, String propValue);

  /// Returns true if [project] exists in this [DSetStore].
  bool projectExists(String project);

  /// Returns all [DSKey]s belonging to [projectName]. The result is compiled
  /// from all stored datasets managed by this [DSetStore].
  /// The result can be empty, but not null.
  List<DSKey> dskeysWithProject(String projectName);

  /// Returns the value of the property [propName] from the [propStore]
  /// maintained by this [DSetStore].
  String? gpropGet(String propName);

  /// Deletes all datasets managed by this [DSetStore] that belong to the
  /// project [projectName].
  Future<bool> projectDel(String projectname);

  /// Renames project [projectName] to [newName]. This means that all datasets
  /// belonging to [projectName] will belong to [newName] afterwards.
  /// Returns false if [newName]==[projectName].
  Future<bool> projectRen(String projectName, String newName);

  /// Returns all available project names in the key list of this Map.
  /// They are compiled from all datasets managed by this [DSetStore]
  /// (can be done because each dataset MUST belong to a project).
  /// The Map values (other than the keys are not currently used in this package.
  Map<String, String> projectsGet();

  /// Saves the dataset [ds] under the identifier [dskey] in this store.
  /// If [ds] already exists, it is overriden silently.
  /// Throws an error message in case of a problem.
  Future dsSave(DSKey dskey, DSet ds) async {
    if (ds == null) {
      throw ("No data specified: '$dskey'.");
    }

    List<Float64List> yValues,
        yValuesImag,
        yValuesImagIR,
        yValuesImagRI,
        yPositive,
        yNegative;
    Completer cpl = Completer();
    await dsmetaSave(dskey, ds);

    if (ds.values2D != null) {
      // 2D data
      yValues = ds.values2D!;
      yPositive = ds.compressedPos!; // compression of reals
      yNegative = ds.compressedNeg!;

      // save real data
      await dscompSave(dskey, yValues, DSetStore.DSC_REAL);
      // save pos. and neg compression data
      if (ds.compressedPos != null) {
        await dscompSave(dskey, yPositive, DSetStore.DSC_COMPR_POS);
      }
      if (ds.compressedNeg != null) {
        await dscompSave(dskey, yNegative, DSetStore.DSC_COMPR_NEG);
      }

      // save imags
      if (ds.values2DImag != null) {
        yValuesImag = ds.values2DImag![0]!; // 2ii
        yValuesImagIR = ds.values2DImag![1]!; // 2ir
        yValuesImagRI = ds.values2DImag![2]!; // 2ri
        if (yValuesImag != null) {
          await dscompSave(dskey, yValuesImag, DSetStore.DSC_IMAG);
        }
        if (yValuesImagIR != null) {
          await dscompSave(dskey, yValuesImagIR, DSetStore.DSC_IMAG_IR);
        }
        if (yValuesImagRI != null) {
          await dscompSave(dskey, yValuesImagRI, DSetStore.DSC_IMAG_RI);
        }
      }
    } else {
      // 1D data
      yValues = [ds.values!];
      await dscompSave(dskey, yValues, DSetStore.DSC_REAL);
      if (ds.valuesImag != null) {
        yValuesImag = [ds.valuesImag!];
        await dscompSave(dskey, yValuesImag, DSetStore.DSC_IMAG);
      }
    }

    cpl.complete();
    return cpl.future;
  }

  /// Loads and returns the dataset identified by [dskey] from this data store.
  /// The resulting dataset will contain the metadata and the component
  /// [DSetStore.DSC_REAL]. For performance reason no other components,
  /// should they if present (e.g. DSC_IMAG), are loaded because the respective
  /// arrays might be large. They have to be loaded, when needed,
  /// separately using [dscompLoad].
  /// Throws an error message in case of a problem.
  Future<DSet> dsLoad(DSKey dskey) async {
    Map<String, Object>? attr1 = await dsmetaLoad(dskey);
    Map<String, String> attr = {};
    if (attr1 != null) {
      attr = Map.from(attr1);
    }

    List<Float64List> reals = await dscompLoad(dskey, DSetStore.DSC_REAL);
    if (reals == null) {
      return Future.value(null);
    }
    DSet ds;
    if (reals.length == 1) {
      ds = DSet(reals[0], null, attr);
    } else {
      ds = DSet.twoD(reals, null, attr);
    }
    return ds;
  }

  /// Convenience method to load the component DSC_IMAG of a dataset defined by
  /// [dskey] from this data store.
  /// Returns null if no such component there, or on error.
  /// For 1D datasets, the result has only 1 List entry which is the DSC_IMAG
  /// component. For 2D, the result is the DSC_IMAG matrix.
  Future<List<Float64List>> dsimagLoad(DSKey dskey) async {
    List<Float64List> imags = await dscompLoad(dskey, DSetStore.DSC_IMAG);
    if (imags == null) {
      return Future.value(null);
    }
    return imags; // 1D: expect a single list member
  }

  /// Makes a copy of the dataset identified by [sourceDskey] and stores it
  /// under the new identifier [destDskey].
  /// Note: for 2D data, if array components other than DSC_REAL and DSC_IMAG
  ///  are present, these are not copied (TODO).
  ///  Returns false if error. Also throws error message.
  Future<bool> dsCopy(DSKey sourceDskey, DSKey destDskey) async {
    DSet dsSource = await dsLoad(sourceDskey);
    if (dsSource == null) {
      return Future.value(false);
    }

    Completer<bool> cpl = Completer();
    List<Float64List> imag = await dsimagLoad(sourceDskey);
    if (dsSource.is1D) {
      if (imag != null) {
        dsSource.valuesImag = imag[0];
      }
    } else {
      if (imag != null) {
        dsSource.values2DImag![0] = imag; // 2D: 2ii. 2ri+2ir not handled.
      }
    }

    // new name after imag was loaded! save under new dskey
    dsSource.encodedDskey = destDskey;
    await dsSave(destDskey, dsSource);
    cpl.complete(true);
    return cpl.future;
  }

  //---------------- static methods ---------------

  /// Contains message when [dsmetaLoad] failed
  static String? load_meta_error;
}
