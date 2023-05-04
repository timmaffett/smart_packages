// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

/// This class respresents a  "dataset key". A dataset key acts as an identifier
/// for a dataset [DSet] when the dataset is stored by [DSStore].
/// A [DSet] is, apart from some extras, an array of floating numbers with
/// associated metadata of type String.
class DSKey {
  static final String DSKEY_SEP = "_--_"; // not longer, name length limits!
  static String defaultDatatype = "datatype-undefined";

  String _datasetName, _projectName, _dataType;

  /// Constructs a [DSKey] from [datasetName], [projectName], [dataType].
  /// [projectName] serves to classify data into the same or different
  /// "projects". [dataType] is an arbitrary indicator about the nature of the data.
  /// It is legal for 2 datasets to have a common [datasetName] and
  /// [projectName], however a different [dataType].
  /// Example: For spectroscopy applications, [dataType] could differ
  /// between "raw measurement data" and "processed data".
  /// NOTE: All arguments MUST be non-null and non-empty, otherwise they will
  /// get a default value: "undefined_name", etc.
  DSKey(String datasetName, String projectName, String dataType) {
    _init(datasetName, projectName, dataType);
  }

  /// Constructs a [DSKey] from and encoded dskey [eDskey]. Inverse of [encode].
  DSKey.fromEncoded(String eDskey) {
    if (eDskey == null ||
        eDskey.isEmpty ||
        eDskey.split(DSKEY_SEP).length != 3) {
      _init("name-undefined", "project-undefined", "datatype-undefined");
    } else {
      List<String> temp = eDskey.split(DSKEY_SEP);
      _init(temp[0], temp[1], temp[2]);
    }
  }

  /// Needed because we have various constructors
  void _init(String datasetName, String projectName, String dataType) {
    if (datasetName == null) {
      datasetName = "";
    }
    if (projectName == null) {
      projectName = "";
    }
    if (dataType == null) {
      dataType = "";
    }
    _datasetName = datasetName.trim();
    _projectName = projectName.trim();
    _dataType = dataType.trim();
  }

  /// Encodes this [DSKey] into a single String.
  /// See [DSKey.fromEncoded].
  String encode() {
    if (_datasetName == null || _datasetName.isEmpty) {
      _datasetName = "name-undefined";
    }
    if (_projectName == null || _projectName.isEmpty) {
      _projectName = "project-undefined";
    }
    if (_dataType == null || _dataType.isEmpty) {
      _dataType = defaultDatatype;
    }
    return "$_datasetName$DSKEY_SEP$_projectName$DSKEY_SEP$_dataType";
  }

  /// Returns this [DSKey]'s [datasetName].
  String get name => _datasetName;

  /// Returns this [DSKey]'s [projectName]
  String get project => _projectName;

  /// Returns this [DSKey]'s [dataType]
  String get type => _dataType;

  /// Returns true if this [DSKey]'s datasetName, or projectName, or dataType
  /// are not valid (null or empty).
  bool get isEmty {
    if (_datasetName == null || _datasetName.isEmpty) {
      return true;
    }
    if (_projectName == null || _projectName.isEmpty) {
      return true;
    }
    if (_dataType == null || _dataType.isEmpty) {
      return true;
    }
    return false;
  }

  /// Inverse of [isEmty].
  bool get isNotEmpty => !isEmty;

  /// Returns true if this [DSKey]'s is equal to [dskey] because their parameters
  /// such as datasetName, and projectName,and dataType are identical.
  bool equals(DSKey dskey) {
    if (_datasetName == dskey._datasetName &&
        _projectName == dskey._projectName &&
        _dataType == dskey._dataType) {
      return true;
    }
    return false;
  }

  //------------ static methods -------------------------------------------

  /// Returns a list of encoded dskeys from a list of dskeys.
  static List<String> encodeList(List<DSKey> dskeys) {
    List<String> eDskeys = List<String>(dskeys.length);
    for (int i = 0; i < dskeys.length; i++) {
      eDskeys[i] = dskeys[i].encode();
    }
    return eDskeys;
  }

  /// Returns a list of dskeys from a list of encoded dskeys.
  static List<DSKey> decodeList(List<String> eDskeys) {
    List<DSKey> dskeys = List<DSKey>(eDskeys.length);
    for (int i = 0; i < dskeys.length; i++) {
      dskeys[i] = DSKey.fromEncoded(eDskeys[i]);
    }
    return dskeys;
  }

  /// Returns a new [DSKey] whose [datasetName] was exchanged by
  /// [newDatasetName] while [projectName] and [dataType] remain the same
  /// as in [dskey].
  static DSKey changeName(DSKey dskey, String newDatasetName) {
    return DSKey(newDatasetName, dskey._projectName, dskey._dataType);
  }

  /// Returns a new [DSKey] whose [projectName] was exchanged by
  /// [newProjectName] while [datasetName] and [dataType] remain the same
  /// as in [dskey
  static DSKey changeProject(DSKey dskey, String newProjectName) {
    return DSKey(dskey._datasetName, newProjectName, dskey._dataType);
  }

  /// Returns true if [encodedDskey] is a properly constructed encoded key
  /// using [encode].
//  static bool _isValidDskey(String encodedDskey) {
//    if (encodedDskey == null || encodedDskey.isEmpty) return false;
//    List<String> temp = encodedDskey.split(DSKEY_SEP);
//    if (temp.length == 3) return true;
//    return false;
//  }

  /// It is expected that [dskeys] is a list of datasets keys created by [create].
  /// In a [datasetName] of the form xx.yy, xx is considered as the pure "name"
  /// and .yy as the "extension" (the dot is part of the extension).
  /// If [datasetName] or [datasetName(2)] or  [datasetName(3)] or ...
  /// occurs in [dskeys] as the [datasetName] component of a dataset key, the
  /// next free number n is computed and [datasetName(n)] is returned.
  /// If [extensions] is not null or not empty, and if [datasetName] has an
  /// extension occurring in [extensions], it is removed from the name and
  /// does no longer play a role.
  /// Returns [datasetName] if it not occur in [dskeys].
  static String mkUniqueName(
      List<DSKey> dskeys, String datasetName, List<String> extensions) {
    if (extensions != null && extensions.isNotEmpty) {
      datasetName = removeExtensions(datasetName, extensions);
    }
    String dsname = datasetName;

    // e.g. "exam(122)" ==> "exam"
    String removeNumberExtensions(String aDsname) {
      int ix1 = aDsname.indexOf("(");
      int ix2 = aDsname.indexOf(")");
      if (ix1 < 1 || ix2 < 3) {
        return aDsname;
      }

      String snum = aDsname.substring(ix1 + 1, ix2);
      try {
        int.parse(snum); // check if a number is inside (), otherwise throw
        return aDsname.substring(0, ix1); // return stripped name
      } catch (e) {
        return aDsname;
      }
    }

    dsname = removeNumberExtensions(dsname);

    List<String> datasetNames = [];
    dskeys.forEach((DSKey dskey) {
      datasetNames.add(dskey._datasetName);
    });

    int ext = 2; // start renaming with this number
    String uniquName = datasetName; // orig, without .dx
    while (datasetNames.contains(uniquName)) {
      uniquName = "${removeNumberExtensions(dsname)}($ext)";
      ext++;
    }

    return uniquName;
  }

  /// In the "filename" xx.yy, xx is considered as the pure "name" and .yy as the
  /// "extension" (note that the dot is part of the extension).
  /// If [filename] has an extension occurring in [extensions], its pure name
  /// is returned. Otherwise the full unchanged [filename] is returned.
  static String removeExtensions(String filename, List<String> extensions) {
    String ext = getExtension(filename);
    if (extensions.contains(ext)) {
      return filename.substring(0, filename.length - ext.length);
    }
    return filename;
  }

  /// In the "filename" xx.yy, xx is considered as the pure "name" and .yy as the
  /// "extension" (note that the dot is part of the extension).
  /// Returns the extension of [filename] (including the ".").
  /// Returns an empty String if [filename] has no extension.
  static String getExtension(String filename) {
    if (filename.endsWith("/")) {
      // e.g. in exam.jdx/ remove the /
      filename = filename.substring(0, filename.length - 1);
    }
    int index = filename.lastIndexOf(".");
    if (index == -1 && filename.length > index) {
      return "";
    }
    return filename.substring(index);
  }

  /// Convenience method to make a human-readable String from a dataset [dskey]
  /// conforming to [DSKey.create], e.g. for display purposes.
  /// Example:
  ///  dskey = "cyclops_--_Project-1_--_Spectrum"
  ///   ==> returns "cyclops / Project-1"
  static String makeDisplayName(DSKey dskey) {
    if (dskey._projectName != null) {
      return "${dskey._datasetName} / ${dskey._projectName}";
    }
    return "${dskey._datasetName}";
  }

  /// See above.
  static String makeDisplayNameEncoded(String dskeyEncoded) {
    DSKey dskey = DSKey.fromEncoded(dskeyEncoded);
    return makeDisplayName(dskey);
  }
}
