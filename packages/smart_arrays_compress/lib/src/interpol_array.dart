// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'dart:typed_data';
/**
 * Linear interpolation utilities
 */

/// Expands an array to a larger size by inserting extra points whose
/// values are computed from their neighbours by linear interpolation of
/// the array data.
class ArrayInterpolator {
  /// Makes an array [data] larger by linear interpolation.
  /// [newSize] is the desired size after interpolation.
  /// Returns a new array of [newSize].
  /// Works evens if [newSize] is smaller than [data] size, but this is not a true
  /// compression preserving minima an maxima. See [CompressedArray1D] instead.
  static Float64List interpolateArray(Float64List data, int newSize) {
    Float64List newData = new Float64List(newSize);
    double springFactor = ((data.length - 1) / (newSize - 1));

    newData[0] = data[0]; // for new allocation
    for (var i = 1; i < newSize - 1; i++) {
      double tmp = i * springFactor;
      int before = tmp.floor();
      int after = tmp.ceil();
      double atPoint = tmp - before;
      newData[i] = linearInterpolate(data[before], data[after], atPoint);
    }
    newData[newSize - 1] = data[data.length - 1]; // for new allocation

    return newData;
  }

  /// Interpolates two values [before], [after] linearly at the position
  /// [atPoint] which must be in [0, 1] and returns the result.
  static double linearInterpolate(double before, double after, double atPoint) {
    return before + (after - before) * atPoint;
  }
}
