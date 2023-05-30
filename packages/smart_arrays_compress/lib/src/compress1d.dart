// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'package:smart_arrays_base/smart_arrays_base.dart';
import 'dart:typed_data';

/// Usage of this class: Invoke the static function [compress]. The compression
/// result is either [cArray], or [cArrayPos] and [cArrayNeg], depending
/// on the argument [separate] of [compress].
/// See [README.md] of this package about when this class should be employed.
class CompressedArray1D {
  /// The compressed array: if positive and negative array values not to be separated
  Float64List cArray=Float64List(0);

  /// The compressed array: if positive and negative array values to be separated
  Float64List cArrayPos=Float64List(0), cArrayNeg=Float64List(0);

  /// Indices in the original uncompressed array (same length as cValues).
  /// Can be used to find out from which orginal index range a value in the compressed
  /// array originated.
  List<int> uIndices;

  /// The index difference between 2 adjacent values in uIndices.
  int cpdIndexIncrement;

  CompressedArray1D(this.cArray, this.uIndices, this.cpdIndexIncrement);
  CompressedArray1D.sep(
      this.cArrayPos, this.cArrayNeg, this.uIndices, this.cpdIndexIncrement);

  /// Compresses a desired section of an [array] to a smaller
  /// [newLength], defaulting to 1024.
  /// [ixFirst_], [ixLast_] are the left and right section limits (indices).
  /// Returns a [CompressedArray1D] object with [cArray] being the
  /// compressed values if [separate] is false. If true, the compressed values are
  /// instead stored in 2 arrays, [cArrayPos] and [cArrayNeg], with only positive and
  /// negative values.
  /// The algorithm fragments the considered section into intervals with a size
  /// computed from [newLength]. In each interval, it discards all but 2 values,
  /// the minimum and maximum.
  /// NOTE: If [newLength] is not a divisor of the [array] length, the last
  /// compressed values are sampled from a wider index interval than the other
  /// compressed values!
  static CompressedArray1D compress(
      Float64List array, int? ixFirst_, int? ixLast_, bool separate,
      [int? newLength]) {
    if (newLength == null) newLength = 1024;

    if (newLength <= 0) newLength = array.length;

    if (newLength % 2 != 0) {
      newLength += 1; // make even for the following algorithms
    }

    // make some index checks and adjustment if indices out of range
    if (ixFirst_ == null) ixFirst_ = 0;
    if (ixLast_ == null) ixLast_ = array.length - 1;

    int ixFirst = ixFirst_, ixLast = ixLast_;


    if (ixLast <= ixFirst) {
      ixLast = ixFirst + 1;
    }

    if (ixFirst < 0 || ixFirst > array.length - 1) ixFirst = 0;

    if (ixLast > array.length - 1 || ixLast < 0) ixLast = array.length - 1;

    // build subset of full data containing only the data from ixFirst to ixLast
    int rangeLength = ixLast - ixFirst + 1;
    Float64List arrayRange;
    if (rangeLength == array.length) {
      arrayRange = array;
    } else {
      arrayRange = new Float64List(ixLast - ixFirst + 1);
      for (int i = ixFirst; i < ixLast + 1; i++) {
        arrayRange[i - ixFirst] = array[i];
      }
    }

    List<int> indexList;

    // return the original data if the input data are too short.
    // use all data
    if (!separate && arrayRange.length <= 2 * newLength) {
      indexList = new List<int>.filled(arrayRange.length, 0);
      for (int i = 0; i < arrayRange.length; i++) {
        indexList[i] = ixFirst + i;
      }
      return new CompressedArray1D(arrayRange, indexList, 1);
    }

    // perform the compression:
    // First select newLength*2 rangeLength from the original array because
    // we need an x for ymax and one for ymin
    indexList = getCompressionIntervals(arrayRange, newLength * 2, ixFirst);

    int ixLeft, ixRight;
    List<double> yminMax;
    Float64List? curYvalues;
    Float64List? newYvalues;
    Float64List? newYvaluesPos;
    Float64List? newYvaluesNeg;

    if (separate) {
      newYvaluesPos = Float64List(newLength);
      newYvaluesNeg = Float64List(newLength);
    } else {
      newYvalues = Float64List(newLength * 2);
    }

    int curix = 0;
    for (int i = 0; i < indexList.length; i += 2) {
      ixLeft = indexList[i] - ixFirst;
      if ((i + 2 > indexList.length - 1) && (i + 1 > indexList.length - 1)) {
        ixRight = indexList.last;
      } else if (i + 2 > indexList.length - 1) {
        ixRight = indexList[i + 1] - ixFirst;
      } else {
        // we skip one index to double the interval size because from each
        // interval we get ymax/ymin
        ixRight = indexList[i + 2] - ixFirst;
      }

      curYvalues = new Float64List(ixRight - ixLeft);

      // extract all y values from interval
      for (int k = ixLeft; k < ixRight; k++) {
        curYvalues[k - ixLeft] = arrayRange[k];
      }

      if (curYvalues.isEmpty) {}

      yminMax = Array1D.getMinMaxVals(curYvalues); // put min/max in right order

      if (separate) {
        // separate the positive and negative values in separate arrays
        if (curix == newYvaluesPos!.length - 1) {
          yminMax = [array[ixLast - 1], array[ixLast]];
          print("XX=$yminMax");
        }
        double min = Array1D.getMinVal(new Float64List.fromList(yminMax));
        if (min < 0) {
          newYvaluesNeg![curix] = min;
        } else if (min > 0) {
          newYvaluesPos[curix] = min;
        }

        double max = Array1D.getMaxInRange(
            new Float64List.fromList(yminMax), null, null);
        if (max < 0) {
          newYvaluesNeg![curix] = max;
        } else if (max > 0) {
          newYvaluesPos[curix] = max;
        }

        if (curix > 120) print("X1000=$i $curix $max $min");
        curix++;
      } else {
        // normal case
        newYvalues![curix] = yminMax[0];
        curix++;
        newYvalues[curix] = yminMax[1];
        curix++;
      }
//    print("i=$i ixLeft=$ixLeft ixRight=$ixRight yminMax=$yminMax newLength=$newLength ${indexList.length}");
    }

    int cpdIndexIncrement = 1;
    int delta;
    for (int i = 0; i < indexList.length - 1; i++) // find largest delta
    {
      delta = indexList[i + 1] - indexList[i];
      if (delta > cpdIndexIncrement) cpdIndexIncrement = delta;
    }

    if (separate) {
      return new CompressedArray1D.sep(
          newYvaluesPos!, newYvaluesNeg!, indexList, cpdIndexIncrement);
    } else {
      return new CompressedArray1D(newYvalues!, indexList, cpdIndexIncrement);
    }
  }

  /// [array] = array (e.g. to be compressed)
  /// [nIntervals] = size of compressed array
  /// [ixFirst] = first index in [array to be considered]
  /// Returns the computed interval indices with respect to [array].
  /// The size of the result is [nIntervals].
  static List<int> getCompressionIntervals(
      Float64List array, int nIntervals, int ixFirst) {
    List<int> newxValuesIndices = [];
    double deltaIx = array.length / nIntervals;
    int curix;
    for (int i = 0; i < nIntervals; i++) {
      curix = (i * deltaIx).round();

      newxValuesIndices.add(curix + ixFirst);
      if (curix >= array.length) break;
    }

    if (newxValuesIndices.length < nIntervals) {
      newxValuesIndices.add(array.length - 1 + ixFirst);
    } else {
      newxValuesIndices[newxValuesIndices.length - 1] =
          array.length - 1 + ixFirst;
    }

//    print("===>$nIntervals = $ixFirst = $newxValuesIndices");
    return newxValuesIndices;
  }
}
