// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:typed_data';
import 'package:smart_arrays_base/smart_arrays_base.dart';
import '../smart_arrays_dbstore.dart';

/// The purpose of this class is to define a "dataset" [DSet] consisting of
/// arrays of floating numbers and of metadata consisting of Strings.
/// A entire [DSet] may be stored the browser area of the device's storage medium
/// (e.g. disk) using the functionalities of [DSetStore].
///
/// [DSet] supports 1D and 2D datasets:
/// - 1D data: a 1D dataset may contain 1 or 2 1D arrays.
///   The 2nd array, if not null may for example be used to represent the
///   "imaginary" part of the data if [DSet] is to display complex data, or for
///   any other purpose.
///   A 1D dataset is created using the constructor [DSet].
///
/// - 2D data: a 2D dataset must contain at least one 2D array (a matrix).
///   Optionally additional matrices may be present which
///   may be used, for example, for "imaginary" or "hypercomplex" data
///   where the additional matrices are the imaginary parts, or other purposes.
///   A 2D dataset is created using the constructor [DSet..twoD].
///
/// - Metadata: Each 1D or 2D dataset must contain metadata, i.e. information
///   that provides String type information about the arrays.
///
/// The arrays and their metadata are called the "dataset components".
///
/// Example: In NMR spectroscopy, datasets are 1D or 2D free induction decays
/// and spectra. 1D spectra consist of: an array respresenting
/// "real data", an array respresenting "imaginary data", and the "NMR parameters"
/// which form the dataset's metadata.
///
/// In addition a YData object has
/// - an audit trail [audittrail], handled by class [DSAuditTrail]
/// - some other properties which are set during construction [vmin], ...
/// - some properties that can be filled in by the user for special applications:
///   [compressedPos], [compressedNeg], [projRows], [projCols].
///   In NMR, they can e.g. be used to hold compressed data (for large arrays),
///   and to hold data projections.
///
/// Usage of this class: see [example.dart].
class DSet {
  /// Only for 1D datasets: the 2 arrays which can be stored, e.g. real + imag part
  /// [valuesImag] may be null
  Float64List values, valuesImag;

  /// Only for 2D datasets: the matrix data to be stored, e.g. the "real" matrix
  List<Float64List> values2D; // 2D data, reals only

  /// The optional additional matrices (e.g. imaginary parts ii, ir, ri)
  List<List<Float64List>> values2DImag;

  /// The metadata. May also hold more complex data types such as Lists or Maps
  /// if stored as jsonified String.
  Map<String, String> meta; // metadata

  /// The value of a _audittrail entry (which is defined to be a String) may
  /// also be a JSON String from a List or a Map.
  List<Map<String, String>> audittrail;

  /// Optional compressed version of 2D data (see pub package 'smart_arrays_compress'
  /// on how to compress a matrix)
  List<Float64List> compressedPos, compressedNeg;

  /// Optional projections of 2D data (see pub package 'smart_arrays_base'
  /// on how to computes projections of a matrix)
  Float64List projRows, projCols;

  /// the data ranges over all data values, computed automatically at
  /// [DSet] construction time.
  double vmin, vmax;

  /// indices of vmin, vmax within [values].
  int vmin_index, vmax_index;

  /// the data sizes, computed automatically at [DSet] construction time.
  /// For 2D, [size] is the # columns, [sizef1] the # of rows.
  int size, sizef1;

  /// If this function is non-null, it will get called with [meta] as its
  /// argument upon while the [DSet] is created. It allows users to
  /// initialize [meta] with specific properties.
  static DSetInit dsetInit;

  /// Creates a 1D [DSet]. Argument descriptions see above. If [meta] is null,
  /// an empty Map is created.
  DSet(this.values, this.valuesImag, this.meta) {
    assert(valuesImag == null ||
        valuesImag.isEmpty ||
        values.length == valuesImag.length);
    if (valuesImag != null && valuesImag.isEmpty) {
      valuesImag = null;
    }
    init();
  }

  /// Creates a 2D [DSet]. Argument descriptions see above. If [meta] is null,
  /// an empty Map is created.
  DSet.twoD(this.values2D, this.values2DImag, this.meta) {
    assert(values2DImag == null || values2DImag.length == 3);

    if (values2DImag != null && values2DImag.length == 3) {
      if (values2DImag[0] != null && values2DImag[0].isEmpty) {
        values2DImag[0] = null;
      }
      if (values2DImag[1] != null && values2DImag[1].isEmpty) {
        values2DImag[1] = null;
      }
      if (values2DImag[2] != null && values2DImag[2].isEmpty) {
        values2DImag[2] = null;
      }
    }
    init();
  }

  /// Performs some initializations needed to fully construct a [DSet]
  void init() {
    if (meta == null) {
      meta = Map<String, String>();
    }
    // if provided, call a user-defined function to do something with [meta]
    if (dsetInit != null) {
      dsetInit(meta);
    }
    DSAuditTrail.init(this); // Decode if existing, or create new one
    initY();
  }

  /// Sets sizes and minmax values for a newly created dataset
  void initY() {
    if (values2D == null) {
      size = values.length;
      List temp = Array1D.getMin(values);
      vmin = temp[0];
      vmin_index = temp[1];

      temp = Array1D.getMax(values);
      vmax = temp[0];
      vmax_index = temp[1];
    } else if (values2D != null && values2D.isNotEmpty) {
      size = values2D[0].length;
      sizef1 = values2D.length;

      MinMax minmax = Array2D.getMinMax(values2D);
      vmin = minmax.minValue;
      vmax = minmax.maxValue;
      vmin_index = minmax.minValueIndexRow;
      vmax_index = minmax.maxValueIndexRow;
    }
  }

  /// Returns true if this [DSet] is 1D
  bool get is1D => values != null;

  /// Returns the [dskey] under which this [DSet] was stored in a [DSetStore]
  /// using the setter below.
  DSKey get dskey => DSKey.fromEncoded(meta[DSET_DSKEY]);

  /// Saves [dskey] as encoded String in [meta]. Recommended use:
  /// When this [DSet] is stored in a database using [DSetStore], it gets
  /// stored under an indetified of type [DSKey].
  /// Storing this key (here in an encode version) allows one later to find
  /// out under which key a dataset was stored.
  /// Note: Renaming a dataset must account for that!
  set encodedDskey(DSKey dskey) {
    meta[DSET_DSKEY] = dskey.encode();
  }

  /// See [is1D] and [encodedDskey] for explanation
  static String DSET_DSKEY = "DSET_DSKEY";
}

/// User function to initialize some [meta] entries, if provided
typedef void DSetInit(Map<String, String> meta);
