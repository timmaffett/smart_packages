// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'dart:typed_data';
import 'dart:math' as math;

/// Generates a 2D array from the function f(x,y)=x*sin(y)+y*cos(x).
class XsinYcos2D {
  late List<Float64List> _matrix; // the matrix
  late Float64List _xColCoord, _yRowCoord;

  /// Computes the function f(x,y)=x*sin(y)+y*cos(x).
  /// Returns a 2D array with [nrows] rows and [ncols] columns.
  /// The function is computed at the x,y-positions [xColCoordinates] and
  /// [yRowCoordinates] (which can be accessed via the respective getters)
  /// ranging from [-xstart] to [xstart], and [-ystart] and
  /// [ystart], respectively.
  /// The start coodinates must be specified in radians (1 rad= 360 degr / 2*pi).
  XsinYcos2D(int nrows, int ncols, double xstart, double ystart) {
    List<Float64List?> work_matrix = List<Float64List?>.filled(nrows, null); // the matrix
    _xColCoord = Float64List(ncols); // its col coordinates
    _yRowCoord = Float64List(nrows); // its row coordinates

    double x, y;
    for (int i = 0; i < nrows; i++) {
      _matrix[i] = Float64List(ncols);
      y = ystart * (-1.0 + 2 * i / (nrows - 1));
      _yRowCoord[i] = i / (nrows - 1); // normalize to 0.0 ... 1.0
      for (int k = 0; k < ncols; k++) {
        x = xstart * (-1.0 + 2 * k / (ncols - 1));
        _matrix[i][k] = x * math.sin(y) - y * math.cos(x);
        _xColCoord[k] = k / (ncols - 1); // normalize to 0.0 ... 1.0
      }
    }
    _matrix  = work_matrix as List<Float64List>;
  }

  /// Returns the computed matrix.
  List<Float64List> get matrix => _matrix;

  /// Returns the "x" (column coodinate) values where the matrix was computed.
  Float64List get xColCoordinates => _xColCoord;

  /// Returns the "y" (row coodinate) values where the matrix was computed.
  Float64List get yRowCoordinates => _yRowCoord;
}
