// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'dart:typed_data';
import 'dart:math' as math;

import 'package:smart_arrays_base/smart_arrays_base.dart';

/// This class provides functions to compute the mena value, the variance
/// and the standard deviation of the data in an array.
class Sigma {
  /// Returns the mean value of the numbers in [array]
  /// in the region [ixstart, ixend] (ixend exclusive)
  /// [ixstart] and [ixend] may be null, equivalent to the left/rightmost index.
  static double meanValue(Float64List array, int? ixstart, int? ixend) {
    if (ixstart == null) ixstart = 0;
    if (ixend == null) ixend = array.length - 1;
    double mean = 0.0;
    for (int i = ixstart; i < ixend; i++) {
      mean += array[i];
    }

    mean /= ixend - ixstart + 1;
    return mean;
  }

  /// Returns the variance of the numbers in [array] in the region [ixstart, ixend]
  /// (ixend exclusive): variance = mean(x**2) - (mean(x))**2
  /// [ixstart] and [ixend] may be null, equivalent to the left/rightmost index.
  static double variance(Float64List array, int? ixstart, int? ixend) {
    if (ixstart == null) ixstart = 0;
    if (ixend == null) ixend = array.length - 1;
    double mean = meanValue(array, ixstart, ixend);
    double variance = 0.0;
    double value;
    for (int i = ixstart; i < ixend; i++) {
      value = array[i];
      variance += (value - mean) * (value - mean);
    }

    variance /= ixend - ixstart + 1;

    return variance;
  }

  /// Returns the standard deviation of the numbers in [array] in the region
  /// [ixstart, ixend] (ixend exclusive): sigma = Sqrt(variance(arr))
  /// [ixstart] and [ixend] may be null, equivalent to the left/rightmost index.
  static double sigma(Float64List array, int? ixstart, int? ixend) {
    if (ixstart == null) ixstart = 0;
    if (ixend == null) ixend = array.length - 1;
    return math.sqrt(variance(array, ixstart, ixend));
  }

  /// Returns sigma of [matrix] by evaluating a 16x16 square at the top
  /// left of the spectrum (outside nmr diagonal)
  /// [posneg] is one of [SIGMA_POS_ONLY], [SIGMA_NEG_ONLY], [SIGMA_POS_NEG].
  /// It defines whether only positive, negative or all numbers in the region
  /// should contribute to sigma.
  static int SIGMA_POS_ONLY = 0, SIGMA_NEG_ONLY = 1, SIGMA_POS_NEG = 2;
  static double sigma2D(List<Float64List> matrix, int posneg, double ymax) {
    int nrowsNoise = 16, ncolsNoise = 16;
    int noisRowMax, noisRowMin;
    int noisColMax, noisColMin;

    int sizef1 = matrix.length;
    int size = matrix[0].length;
    if (sizef1 <= nrowsNoise) nrowsNoise = 4;
    if (size <= ncolsNoise) ncolsNoise = 4;
    noisRowMax = sizef1 - 1;
    noisRowMin = noisRowMax - nrowsNoise;
    noisColMax = ncolsNoise;
    noisColMin = 0;
    Float64List? tmp = Array2D.getSubmatrixAs1D(
        matrix, noisRowMin, noisRowMax, noisColMin, noisColMax);
    if(tmp==null) {
      throw ArgumentError('Array2D.getSubmatrixAs1D unexpectedly returned null');
    };
    Float64List noisreg = tmp;
    for (int i = 0; i < noisreg.length; i++) {
      if (posneg == SIGMA_POS_ONLY && noisreg[i] < 0) {
        noisreg[i] = 0.0;
      } else if (posneg == SIGMA_NEG_ONLY && noisreg[i] > 0) {
        noisreg[i] = 0.0;
      }
    }

    double sigma = Sigma.sigma(noisreg, null, null);
    if (sigma < 1.0e-10) sigma = ymax / 1000.0;
    return sigma;
  }
}
