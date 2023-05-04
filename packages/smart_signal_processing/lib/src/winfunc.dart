// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'dart:typed_data';
import 'dart:math' as math;

/// This class provides windowing (apodization) function that are for example applied
/// to measured time signals before Fourier transforming them, e.g. to obtain
/// an optima for data resultion in the presence of noise.
class WinFunc {
  /// This is an in-place pointwise multiplication of an [array] with an
  /// exponential function ("em=exponential multiply"):
  ///   array[i] = array[i] * exp(a*i), i=0,..,array.length-1.
  /// The exponential is computed recursively: em(0) = 1,  em(i+1) = exp(a) * em(i).
  /// If [isComplex] is true, [array] is considered as a sequence of complex points,
  /// [re,im,re,im, ... ] where re (real) and im (imaginary) are on the same scale:
  ///   array[i] = array[i] * exp(a*i), i=0,..,(array.length-1)/2, i += 2;
  /// or equivalently:
  ///   array[i+1] = array[i] * exp(a), i=0,..,array.length-1.
  ///
  /// [groupDelay] is the value for t=0 given in complex data points.
  ///  See [FFT.transformShuffled] for details. Exponential mult. will only start
  ///  from this delay on if not null.
  /// [a] defines the exponential decay and is application dependent, for example:
  ///     a = -PI*LB*AQ/(td - 1) (for complex data, set a=2*a), where
  ///     LB is the "line broading", given in Hertz, e.g. 0.5, for time signals which
  ///     would yield this line broadening after Fourier transform. In this
  ///     case AQ would be the length of the time signal in seconds, and
  ///     td the "time domain size", i.e. [array].length.
  static void expMult(
      Float64List array, double a, bool isComplex, String groupDelay) {
    int i = 0;
    if (groupDelay != null && double.parse(groupDelay) > 0) {
      i = double.parse(groupDelay).round();
    }

    double emi = 1.0;
    double fact = math.exp(a);
    if (isComplex) {
      i *= 2;
      while (true) {
        emi *= fact;
        if (i + 2 >= array.length) break;
        array[i + 2] = array[i + 2] * emi;

        if (i + 3 >= array.length) break;
        array[i + 3] = array[i + 3] * emi;
        i += 2;
      }
    } else {
      while (true) {
        emi *= fact;
        if (i + 1 >= array.length) break;
        array[i + 1] = array[i + 1] * emi;

        i += 1;
      }
    }
  }

  /// This is an in-place pointwise multiplication of an [array] with an
  /// Gaussian function ("gm=Gaussian multiply"):
  ///  fid[i] = fid[i] * exp(r*i + s*i*i)), i=0,..,fid.length-1.
  /// The Gaussian is computed recursively:
  ///   1) gm(0) = 1, q(0) = exp(r+s)
  ///   2) q(i+1) = exp(2*s)*q(i)
  ///   3) gm(i+1) = q(i)*gm(i)
  /// If [isComplex] is true, [array] is considered as a sequence of complex points,
  /// [re,im,re,im, ... ] where re (real) and im (imaginary) are on the same scale.
  ///
  /// [r] and [s] define the Gaussian shape and are application dependent, for example:
  ///   r = -(PI*LB)*(AQ/size1),
  ///   s = (PI*LB/(2*GB*AQ))*(AQ/(td-1))*(AQ/(td-1)), td = size-1
  ///  where
  ///   LB is the "line broading", given in Hertz,for time signals which
  ///   would yield this line broadening after Fourier transform. GB determines
  ///   at which position the maximum of the Gaussian shape occurs.
  ///   Exammples: LB = -1.0, GB= 0.2. LB is often chosen negative so as to
  ///   enhance signal resolution after Fourier transform.
  ///   AQ would be the length of the time signal in seconds, and
  ///   td the "time domain size", i.e. [array].length.
  static void gaussMult(Float64List array, double r, double s, bool isComplex) {
    int i = 0;
    double gmi = 1.0;
    double qi = math.exp(r + s);
    double fact = math.exp(2 * s);
    if (isComplex) {
      i *= 2;
      while (true) {
        array[i] = gmi * array[i];
        array[i + 1] = gmi * array[i + 1];

        if (i + 2 >= array.length) break;

        if (i + 3 >= array.length) break;

        qi = fact * qi;
        gmi = qi * gmi;
        i += 2;
      }
    } else {
      // TODO
      while (true) {
        array[i] = gmi * array[i];

        if (i + 1 >= array.length) break;

        qi = fact * qi;
        gmi = qi * gmi;
        i += 1;
      }
    }
  }
}
