// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'dart:typed_data';
import 'dart:math' as math;

/// Sine cardinal ("sinc") generator.
class Sinc1D {
  late Float64List _array, _xValues;

  /// Computes the "sine cardinal" = "sinc" function
  ///   f(x) = offset + amplitude*sin(x+phase)/(x+phase)
  /// The resulting array of size [npoints] will contain "[nperiods]" (2*pi)
  /// of the damped sinc wave with the specified [amplitude] and [phase] .
  Sinc1D(int npoints, double amplitude, double phase, int nperiods,
      double offset) {
    double xmax = 2 * math.pi * nperiods;

    _xValues = Float64List(npoints);
    _array = Float64List(npoints);
    double x, y, a;

    a = amplitude;

    for (int i = 0; i < npoints; i++) {
      x = (i * xmax) / npoints;
      if (i == 0 && phase.abs() < 0.00001) {
        y = a;
      } else {
        double ph = x + phase;
        y = a * math.sin(ph) / ph;
      }
      _xValues[i] = x;
      _array[i] = y + offset;
    }
  }

  /// Returns the computed array containing the sinc damped wave
  Float64List get array => _array;

  /// Returns the "x" values corresponding to the sinc array values.
  Float64List get xValues => _xValues;
}
