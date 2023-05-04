// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'dart:typed_data';
import 'dart:math' as math;

/// Sine wave generator, optional with noise added.
class Sine1D {
  Float64List _array, _xValues;

  /// Computes the sine function
  ///   f(x) = offset + amplitude*(sin(x+phase) + noiseValue),
  /// where
  ///  noiseValue = [noise] * [amplitude] * (2 * rand.nextDouble() - 1.0).sign
  /// The resulting array of size [npoints] will contain [nperiods] (2*pi)
  /// of a sine wave with the specified [amplitude] and [phase] .
  /// Set [noise] to a desired fraction of [amplitude] if you want to simulate
  /// a "noisy" sine signal instead of a pure sine wave.
  Sine1D(int npoints, double amplitude, double phase, int nperiods,
      double noise, double offset) {
    math.Random rand = math.Random();
    double xmax = 2 * math.pi * nperiods, x, y;
    _array = Float64List(npoints);
    _xValues = Float64List(npoints);
    for (int i = 0; i < npoints; i++) {
      x = (i * xmax) / npoints;
      y = amplitude * math.sin(x + phase);
      // add noise between -1 and 1
      _array[i] =
          y + offset + noise * amplitude * (2 * rand.nextDouble() - 1.0).sign;
    }
  }

  /// Returns the computed array containing the sine wave
  Float64List get array => _array;

  /// Returns the "x" values corresponding to the sine array values.
  Float64List get xValues => _xValues;
}
