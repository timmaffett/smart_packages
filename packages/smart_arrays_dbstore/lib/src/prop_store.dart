// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';
import 'dart:async';
import 'dart:indexed_db';
import 'package:pedantic/pedantic.dart';

/// The purpose of this class is to provide functionalities allowing one to
/// store and retrieve key-value String pairs ("properties") in a database of
/// type IndexedDB. The class is used in the [smart_array_dbstore] package to
/// save information in a database which are common to dataset of type [DSet]
/// also stored in databases.
/// Note: You may of course also store data types more complex than String if
/// they can be represented as Strings, e.g. in jsonified form such as Lists
/// or Maps.
/// Usage:
///  1) Call constructor to define the db name
///  2) Call loadProps() once to open the db, or create a new one if not existing.
///  3) use [propGet], [propSave], or [propDel].
/// For an introduction to IndexedDB see for example
///   http://dartdoc.takyam.com/docs/tutorials/indexeddb/
class PropStore {
  /// Must be changed if the structure of the db is changed fundamentally
  static final int DB_VERSION_PROP = 1;

  /// currently we employ only a single object store in the IndexedDB
  static final String OBJ_STORE_PROP = 'OBJ_STORE_PROP';

  /// This is the list of object stores employed.
  /// Note that adding a store would need a new db version number, otherwise
  /// a version change event is not sent and _initDBProp() not called.
  final List<String> objectstoreList = [OBJ_STORE_PROP];

  /// When reading a property from our store, we read it from the cache for speed.
  /// Respectively all methods in this class must make sure the cache is uptodate.
  Map<String, String> propCache;

  /// The name of the database used by [PropStore]
  String dbnameProp;

  /// Creates a [PropStore] whose underlying IndexedDB will get [dbnameProp].
  PropStore(this.dbnameProp);

  /// Returns the value of the property with name [propName] from the db.
  /// Requires that loadProps() was called: This allows for getting a property
  /// without waiting (no async method!).
  /// Returns null if [propName] not found.
  String propGet(String propName) {
    return propCache[propName];
  }

  /// Saves the property with key [propName] and value [propValue]
  ///  a) in this [PropStore]'s cache ([propCache]
  ///  b) in the database
  /// If [propName] already exists in the db, its value will be overridden.
  /// Returns [propName] in the case of success, null if failed. The latter
  /// is true if the db could not be opened or created.
  Future<String> propSave(String propName, String propValue) async {
//    print("prop_store.dart 1000=opendb");
    Database db = await openPropDB();
    if (db == null) {
      return Future.value(null);
    }

//    print("prop_store.dart 1010=$propName: $propValue");
    propCache[propName] = propValue; // make globally available
    Transaction transaction = db.transaction(OBJ_STORE_PROP, 'readwrite');
    ObjectStore objectStore = transaction.objectStore(OBJ_STORE_PROP);

    // add or override propName
    // result, the added key, non needed for now
    String addedKey = await objectStore.put(propValue, propName);
    // more request could made here on the object store, they would be q'd.

    // The transaction completes after all q'd operations on the object store
    // are complete
    return transaction.completed.then((_) {
      // Return the result of the future.
      db.close();
      return addedKey;
    });
  }

  /// Deletes [propName] from the db. Returns false on error.
  Future<bool> propDel(String propName) async {
    Database db = await openPropDB();
    if (db == null) {
      return Future.value(false);
    }
    Transaction trans;
    ObjectStore store;

    String storename = OBJ_STORE_PROP;
    trans = db.transaction(storename, 'readwrite');
    store = trans.objectStore(storename);
    unawaited(store.delete(propName)); // TODO need wait here?
    return trans.completed.then((_) {
      propCache.remove(propName);
      db.close();
      return true;
    });
  }

  /// Loads all properties [propName] from the db. Opens (connects) to the db,
  /// loads the properties and closes (disconnects from) the db.
  /// Returns a Map of key,value pairs.
  /// May return an empty Map. Creates the db if not existing. In this case
  /// the returned Map is empty. Returns null if the data base can't be created,
  /// e.g. due to lack of browser support.
  Future<Map<String, String>> loadProps() async {
    Database db = await openPropDB();
    if (db == null) {
      return Future.value(null);
    }
    List<String> keys = await loadDBKeys(db, OBJ_STORE_PROP);

    Map<String, String> result = {};

    String storename = OBJ_STORE_PROP;
    Transaction transaction = db.transaction(storename, 'readonly');
    if (transaction == null) {
      return Future.value(null);
    }
    ObjectStore objectStore = transaction.objectStore(storename);
    if (objectStore == null) {
      return Future.value(null);
    }
    for (String propName in keys) {
      String value = await objectStore.getObject(propName);
      if (value != null) {
        result[propName] = value;
      }
    }

    // The transaction completes after all q'd operations on the object store
    // are complete
    return transaction.completed.then((_) {
      // make props also available in cache, which will be kept
      // synchronized with [propDel], [propSave].
      propCache = result;
      db.close();
      return result;
    });
  }

  /// Opens or creates a db of name [dbnameProp], as supplied to the constructor.
  /// Opens if db exists, creates if db doesn't exist.
  /// Returns the db. Returns null if browser doesn't support indexeddb.
  Future<Database> openPropDB() async {
    if (!IdbFactory.supported) {
      return null;
    }
    return await window.indexedDB.open(dbnameProp,
        version: DB_VERSION_PROP, onUpgradeNeeded: _initPropDB);
  }

  /// Called when a new DB was created, or the version of an existing
  /// DB was changed.
  void _initPropDB(VersionChangeEvent e) {
//    Database db = (e.target as IndexedDB.Request).result; // get the db
    Database db = e.target.result; // get the db
    // Initial creation of the object stores if not yet there
    // We set autoIncrement=false because we supply our own unique
    // keys (= property names) for the store.
    for (String storename in objectstoreList) {
      if (!db.objectStoreNames.contains(storename)) {
        db.createObjectStore(storename, autoIncrement: false);
      }
    }
  }

  //-------------------- static methods ---------------------------

  /// Returns all keys in the object store [storename] of data base [db].
  /// Assumes [db] is open.
  static Future<List<String>> loadDBKeys(Database db, String storename) async {
    Stream<CursorWithValue> cursors;
    List<String> keyList = [];

    Transaction trans = db.transaction(storename, 'readonly');
    ObjectStore store = trans.objectStore(storename);

    cursors = store.openCursor(autoAdvance: true).asBroadcastStream();
    cursors.listen((cursor) {
      keyList.add(cursor.key);
    });

    return cursors.length.then((_) {
      return keyList;
    });
  }

  //------------ end static methods-------------------------------

  /// Test how many data bases can be created before an exception occurs.
//  static Future<String> open100dbs() async {
//    String basenam = "DBTEST_";
//    int NDBS = 100;
//    int ncreated;
//    Database curdb;
//    bool deletAll = true;
//    String out = "";
//    for (int i = 0; i < NDBS; i++) {
//      if (deletAll) {
//        IdbFactory idf = await window.indexedDB.deleteDatabase(basenam + "$i", onBlocked: (Event e){
//          InfoDialog("Blocked: $i", null);
//        });
//        await idf.deleteDatabase(basenam + "$i");
//        continue;
//      }
//
//
//      Database curdb = null;
//      try {
//        ncreated = i;
//        curdb = await openDB(basenam + "$i");
//        if (curdb == null) {
//          out += "<br>EXCEEDED";
//          break;
//        } else {
//          out += "$i, ";
//        }
//      } catch (e) {
//        ncreated = -ncreated;
//        out += "<br>" + e.runtimeType.toString() + " / " + e.toString();
//        break;
//      }
//    }
//    return Future.value("created=$ncreated<br>$out");
//  }
}
