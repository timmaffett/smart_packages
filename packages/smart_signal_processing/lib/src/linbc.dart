// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'dart:typed_data';
import '../smart_signal_processing.dart';

/// This class provides function to subtract a "baseline" from an array.
/// The baseline is a linear function computed from the array contents.
/// The functions are useful for measured signal showing a linear baseline
/// distortion due to imperfections in the measurement device.
class BaseLine {
  /// Subtracts a straight line from [array] constructed as follows:
  /// 1) Two regions of length [nBaselinePoints] in [array] are considered.
  ///    The first region starts at index [offset] of [array], the second
  ///    one ends at [array].length-[offset] (i.e. is at near the end of [array]).
  /// 2) In both regions, the average of the data are computed. The resulting
  ///    values define a straigt line which is subtracted from [array]
  static int bcLinear(Float64List array, double offset, int nBaselinePoints) {
    if (array.length <= 10 * nBaselinePoints) {
      nBaselinePoints = array.length ~/ 10;
      if (nBaselinePoints == 0) nBaselinePoints = 1;
    }

    int start1 = (array.length * offset).round();
    if (start1 < 0 || start1 >= array.length) start1 = 0;

    int end1 = start1 + nBaselinePoints;
    if (end1 <= start1 || end1 >= array.length) end1 = start1;

    int start2 =
        (array.length - array.length * offset - nBaselinePoints).round();
    if (start2 < 0 || start2 >= array.length) start2 = array.length;

    int end2 = start2 + nBaselinePoints;
    if (end2 <= start2 || end2 >= array.length) end2 = array.length - 1;

    double mean1 = Sigma.meanValue(array, start1, end1);
    double mean2 = Sigma.meanValue(array, start2, end2);

    // if the means are the same, just do an offset correction
    if ((mean1 - mean2).abs() < Sigma.sigma(array, start1, end1)) {
      if (start1 + end1 >= array.length) return -1;
      bcOffset(array, false, start1, end1);
      return 0;
    }

    // used equations:
    //  y = m*x + b
    //  mean1 = m*x1 + b
    //  mean2 = m*x2 + b
    //  mean2 - mean1 = m*x2 - m*x1
    //  m = (mean2 - mean1)/(x2 - x1);
    //  b = mean1 - m*x1

    int x1 = start1 + nBaselinePoints ~/ 2;
    int x2 = start2 + nBaselinePoints ~/ 2;
    double m = (mean2 - mean1) / (x2 - x1);
    double b = mean1 - m * x1;

    for (int i = 0; i < array.length; i++) {
      array[i] -= m * i + b;
    }
    return 0;
  }

  /// Subtracts a number from [array] which is the mean value of the [array]
  /// region defined by [bcstart] and [bcsize].
  /// If [complex] is true, [array] is considered as a sequence of [real, imag] pairs.
  /// In this case [bcsize] must be even and is considered as the number of real points
  ///  and the number of imaginary points for which the mean value is computed.
  static void bcOffset(
      Float64List array, bool isComplex, int bcstart, int bcsize) {
    double meanReal = 0.0, meanImag = 0.0;
    if (isComplex) {
      for (int i = bcstart; i < bcstart + bcsize - 1; i += 2) {
        meanReal += array[i];
        meanImag += array[i + 1];
      }
      meanReal /= bcsize / 2;
      meanImag /= bcsize / 2;

      for (int i = 0; i < array.length - 1; i += 2) {
        if (meanReal.abs() > 1.0e-10) {
          array[i] -= meanReal;
        }

        if (meanImag.abs() > 1.0e-10) {
          array[i + 1] -= meanImag;
        }
      }
    } else {
      for (int i = bcstart; i < bcstart + bcsize; i++) {
        meanReal += array[i];
      }
      meanReal /= bcsize;

      for (int i = 0; i < array.length; i++) {
        if (meanReal.abs() > 1.0e-10) {
          array[i] -= meanReal;
        }
      }
    }
  }
}
