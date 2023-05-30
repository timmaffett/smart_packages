// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:convert';
import '../smart_arrays_dbstore.dart';

/// Provides functionalities for maintaining an audit trail for a dataset
/// of type [DSet]. The purpose of an audit trail is to store information
/// about the history of a dataset, e.g.: who changed the dataset at which
/// time by applying which procedure for which reason?
/// Details are up to the user of this class. This class just provides methods
/// to maintain and store an audit trail.
/// An audit trail will be stored together with the metadata of a dataset under
/// the key [DSET_AUDIT_TRAIL] in jsonified form.
/// Usage: call [addToAuditTrail].
class DSAuditTrail {
  /// Key in the [meta] field of [DSet]. The audit trail is stored under
  /// this key in jsonified form.
  static String DSET_AUDIT_TRAIL = "DSET_AUDIT_TRAIL";

  /// Version key of the audit trail.
  static String DSET_AUDIT_TRAIL_VERSION = "DSET_AUDIT_TRAIL_VERSION";

  /// Change the version of an audit trail if you change its format.
  /// Each audit trail will contain its version.
  static final Map<String, String> AUDIT_VERSION_INFO = {
    DSET_AUDIT_TRAIL_VERSION: "1.0"
  };

  /// Adds a new audit trail [entry] to the dataset [ds]. This is the most
  /// important methods for users of this class.
  static void addToAuditTrail(DSet ds, Map<String, String> entry) {
    ds.audittrail?.add(entry);
    ds.meta[DSET_AUDIT_TRAIL] = json.encode(ds.audittrail);
  }

  /// Sets the audit trail of dataset [ds] dataset from another dataset [sourceDs].
  static void setAuditTrailFrom(DSet ds, DSet sourceDs) {
    ds.audittrail = sourceDs.audittrail;
    ds.meta[DSET_AUDIT_TRAIL] = sourceDs.meta[DSET_AUDIT_TRAIL]!;
  }

  /// Initializes the audit trail for dataset [ds] from the metadata of [ds].
  /// After this, the audit trail is available in the field [audittrail] of [ds].
  /// Decodes existing audit trail, or creates a new one whose onyl memmber is
  /// its version. This method is automatically called when creating a [DSet]
  /// and therefore needs not be used normally.
  static void init(DSet ds) {
    String? json1 = ds.meta[DSET_AUDIT_TRAIL];
    if (ds.audittrail == null) {
      if (json1 != null && json1.isNotEmpty) {
        List<Map<String, String>> xlist = UtilsJson.decodeLMSS(json1);
        if (xlist.isNotEmpty) {
          Map<String, String> versionInfo = xlist[0];
          if (versionInfo[DSET_AUDIT_TRAIL_VERSION] != null) {
            ds.audittrail = xlist;
          }
        }
      }
    }

    if (ds.audittrail == null) {
      ds.audittrail = [];
      ds.audittrail!
          .add(AUDIT_VERSION_INFO); // per definition the first list entry
    }
  }
}
