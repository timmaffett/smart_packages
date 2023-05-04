// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'dart:typed_data';

import 'lor_gauss.dart';

/// Computes a matrix containing a sum auf 2D Lorentz-Gauss functions
/// (a "2D spectrum").
class LorentzGaussMatrix {
  List<Float64List> _matrix; // the matrix
  Float64List _xColCoord, _yRowCoord;

  /// [c], [w] must be in the range (0, rows_cols[0/1])
  /// Computes a matrix containing a sum of two-dimensional mixed Gauss-Lorentz
  /// shapes, consisting of [rows_cols][0] rows and [rows_cols][1] columns.
  /// [a] - shape amplitudes ,
  /// [c] - shape centers, in the range 0...number rows/cols, respectively
  /// [w] - shape widths, in the range 0...number rows/cols, respectively
  /// [m] - shape mixing factors (0 <= m <= 1).
  ///
  /// If  m=1 (pure Lorentzian) then w is the "Lorentzian width".
  /// If  m=0 (pure Gaussian), then w is the "Gaussian sigma".
  ///
  /// If [noiseAmpl] is not null, random noise will be added to each point
  /// whose amplitude is controlled by this parameter, e.g. 0.005, as fraction
  /// of the current shape value.
  LorentzGaussMatrix(List<int> rows_cols, List<double> a, List<List<double>> c,
      List<List<double>> w, List<List<double>> m,
      [double noiseAmpl]) {
    int nrows = rows_cols[0], ncols = rows_cols[1];
    _matrix = List<Float64List>(nrows); // the matrix
    _xColCoord = Float64List(ncols); // its col coordinates
    _yRowCoord = Float64List(nrows); // its row coordinates

    int nlines = a.length;
    List<Float64List> array2D;
    for (int i = 0; i < nlines; i++) {
      array2D =
          LorentzGauss.array2D(rows_cols, a[i], c[i], w[i], m[i], noiseAmpl);
      if (i == 0) {
        _matrix = array2D;
      } else {
        _matrix = addToM(_matrix, array2D);
      }
    }

    for (int i = 0; i < nrows; i++) {
      _yRowCoord[i] = i / (nrows - 1); // normalize to 0.0 ... 1.0
      for (int k = 0; k < ncols; k++) {
        _xColCoord[k] = k / (ncols - 1); // normalize to 0.0 ... 1.0
      }
    }
  }

  /// Returns the computed matrix with the sum of the Lorentz-Gauss functions.
  List<Float64List> get matrix => _matrix;

  /// Returns the "x" (column coodinate) values where the matrix was computed,
  /// divided by the number of columns (i.e. normalized to 0.0 ... 1.0).
  Float64List get xColCoordinates => _xColCoord;

  /// Returns the "y" (row coodinate) values where the matrix was computed,
  /// divided by the number of rows (i.e.. normalized to 0.0 ... 1.0).
  Float64List get yRowCoordinates => _yRowCoord;

  /// Adds matr2 to matr1 and returns the modified matr1.
  /// The matrices must have the same number of rows and colmuns.
  static List<Float64List> addToM(
      List<Float64List> matr1, List<Float64List> matr2) {
    for (int i = 0; i < matr1.length; i++) {
      for (int k = 0; k < matr1[0].length; k++) {
        matr1[i][k] += matr2[i][k];
      }
    }
    return matr1;
  }
}
