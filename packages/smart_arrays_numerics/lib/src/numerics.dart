// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'dart:math' as math;
import 'dart:typed_data';

/// This class provides a number of useful numeric calculations with vectors
/// and matrices, such as multiplication, transpose, invert.
/// Some of the provided methods are based on the respective js MIT-licensed code of
/// https://github.com/sloisel/numeric.
class Numerics {
  /// Creates instance for accessing the methods
  Numerics();

  /// Returns scalar product [vec1] dot  [vec2].
  double dotVV(List<double> vec1, List<double> vec2) {
    int i, n = vec1.length, i1;
    double ret = vec1[n - 1] * vec2[n - 1];
    for (i = n - 2; i >= 1; i -= 2) {
      i1 = i - 1;
      ret += vec1[i] * vec2[i] + vec1[i1] * vec2[i1];
    }
    if (i == 0) {
      ret += vec1[0] * vec2[0];
    }
    return ret;
  }

  /// Returns product [matr] dot [vec].
  List<double> dotMV(List<List<double>> matr, List<double> vec) {
    List<double> row = List<double>.filled(vec.length,0.0);
    List<double> result = List<double>.filled(vec.length,0.0);
    for (int i = 0; i < matr.length; i++) {
      row = matr[i];
      result[i] = dotVV(row, vec);
    }
    return result;
  }

  /// Returns new matrix, the pointwise multiplication of [matr] with [c].
  List<List<double>> dotCM(double c, List<List<double>> matr) {
    //OBSOLETE//List<List<double>?> result = List<List<double>?>.filled(matr.length, null);  
    List<List<double>> result = List<List<double>>.generate(matr.length, (_) => List<double>.filled(matr[0].length,0.0));

    for (int i = 0; i < matr.length; i++) {
      //OBSOLETE//result[i] = List<double>.filled(matr[0].length, 0.0);
      for (int k = 0; k < matr[0].length; k++) {
        result[i][k] = matr[i][k] * c;
      }
    }
    return result;
  }

  /// Returns new vector, the pointwise square root of [vec].
  List<double> sqrtV(List<double> vec) {
    List<double> result = List<double>.filled(vec.length, 0.0);
    for (int i = 0; i < vec.length; i++) {
      result[i] = math.sqrt(vec[i]);
    }
    return result;
  }

  /// Utility for dotMM
  List<List<double>> dotMMsmall(List<List<double>> x, List<List<double>> y) {
    int i, j, k, i0;
    int p = x.length;
    int q = y.length;
    int r = y[0].length;
    List<List<double>> ret = List<List<double>>.generate(p, (_) => List<double>.filled(r,0.0));
    List<double> foo, bar;
    double woo;

    for (i = p - 1; i >= 0; i--) {
      foo = ret[i];
      bar = x[i];
      for (k = r - 1; k >= 0; k--) {
        woo = bar[q - 1] * y[q - 1][k];
        for (j = q - 2; j >= 1; j -= 2) {
          i0 = j - 1;
          woo += bar[j] * y[j][k] + bar[i0] * y[i0][k];
        }
        if (j == 0) {
          woo += bar[0] * y[0][k];
        }
        foo[k] = woo;
      }
    }
    return ret;
  }

  /// Returns columns [j] of [A] in [x].
  void _getCol(List<List<double>> A, int j, List<double> x) {
    int n = A.length, i;
    for (i = n - 1; i > 0; --i) {
      x[i] = A[i][j];
      --i;
      x[i] = A[i][j];
    }
    if (i == 0) x[0] = A[0][j];
  }

  /// Utility for dotMM
  List<List<double>> dotMMbig(List<List<double>> x, List<List<double>> y) {
    int p = y.length;
    List<double> v = List<double>.filled(p,0.0);
    List<double> xj;
    int m = x.length, n = y[0].length;
    List<List<double>> A = List<List<double>>.generate(m, (_) => List<double>.filled(n,0.0));

    int i, j;
    --p;
    --m;
    //PRE_GENERATEOBSOLETE//for (i = m; i != -1; --i) {
    //PRE_GENERATE//  A[i] = List<double>.filled(n,0.0);
    //PRE_GENERATE//}
    --n;
    for (i = n; i != -1; --i) {
      _getCol(y, i, v);
      for (j = m; j != -1; --j) {
        xj = x[j];
        A[j][i] = dotVV(xj, v);
      }
    }
    return A;
  }

  /// Returns product of matrices [matr1] and [matr2]. Suitable sizes required!
  List<List<double>> dotMM(List<List<double>> matr1, List<List<double>> matr2) {
    if (matr2.length < 10) {
      return dotMMsmall(matr1, matr2);
    } else {
      return dotMMbig(matr1, matr2);
    }
  }

  /// Returns pointwise sum of [matr1] and [matr2] in a new matrix.
  List<List<double>> addMM(List<List<double>> matr1, List<List<double>> matr2) {
    //OBSOLETE//List<List<double>?> result = List<List<double>?>.filled(matr1.length, null);
    List<List<double>> result = List<List<double>>.generate(matr1.length, (_) => List<double>.filled(matr1[0].length,0.0));

    for (int i = 0; i < matr1.length; i++) {
      //OBSOLETE//result[i] = List<double>.filled(matr1[0].length,0.0);
      for (int k = 0; k < matr1[0].length; k++) {
        result[i][k] = matr1[i][k] + matr2[i][k];
      }
    }
    return result;
  }

  /// Returns pointwise sum of [vec1] and [vec2] in a new vector.
  List<double> addVV(List<double> vec1, List<double> vec2) {
    List<double> result = List<double>.filled(vec1.length,0.0);
    for (int i = 0; i < vec1.length; i++) {
      result[i] = vec1[i] + vec2[i];
    }
    return result;
  }

  /// Returns the sum of all entries of [matrix].
  double sumM(List<List<double>> matrix) {
    double sum = 0;
    for (int i = 0; i < matrix.length; i++) {
      for (int k = 0; k < matrix[0].length; k++) {
        sum += matrix[i][k];
      }
    }
    return sum;
  }

  /// Returns a new [nrows] x [ncols] matrix. All elements are set to [value].
  List<List<double>> createMatrix(int nrows, int ncols, double value) {
    List<List<double>> matrix = List<List<double>>.generate(nrows, (_) => List<double>.filled(ncols,value));
    //PRE_GENERATE//for (int i = 0; i < nrows; i++) {
    //PRE_GENERATE//  matrix[i] = List<double>.filled(ncols,value);
    //PRE_GENERATE//}
    return matrix;
  }

  /// Creates [n] x [n] diagonal matrix with [value].
  List<List<double>> createDiagMatrix(int n, double value) {
    List<List<double>> matrix = createMatrix(n, n, 0.0);
    for (int i = 0; i < n; i++) {
      matrix[i][i] = value;
    }
    return matrix;
  }

  /// Clones a [matrix]: Returns a new matrix with same contents.
  List<List<double>> cloneMatrix(List<List<double>> matrix) {
    int nrows = matrix[0].length;
    int ncols = matrix.length;
    List<List<double>> clone = createMatrix(nrows, ncols, 0.0);
    for (int i = 0; i < nrows; i++) {
      for (int k = 0; k < ncols; k++) {
        clone[i][k] = matrix[i][k];
      }
    }
    return clone;
  }

  /// Transposes [matrix]: Returns a new matrix.
  List<List<double>> transpose(List<List<double>> matrix) {
    int nrows = matrix[0].length; // of result
    int ncols = matrix.length;
    //OBSOLETE//List<List<double>> ret = List<List<double>?>.filled(nrows,null);
    List<List<double>> ret = List<List<double>>.generate(nrows, (_) => List<double>.filled(ncols,0.0));

    int i, j;
    List<double> A0, A1, Bj;

    //OBSOLETE//for (j = 0; j < nrows; j++) {
    //OBSOLETE//  ret[j] = List<double>.filled(ncols,0.0);
    //OBSOLETE//}
    for (i = ncols - 1; i >= 1; i -= 2) {
      A1 = matrix[i];
      A0 = matrix[i - 1];
      for (j = nrows - 1; j >= 1; --j) {
        Bj = ret[j];
        Bj[i] = A1[j];
        Bj[i - 1] = A0[j];
        --j;
        Bj = ret[j];
        Bj[i] = A1[j];
        Bj[i - 1] = A0[j];
      }
      if (j == 0) {
        Bj = ret[0];
        Bj[i] = A1[0];
        Bj[i - 1] = A0[0];
      }
    }
    if (i == 0) {
      A0 = matrix[0];
      for (j = nrows - 1; j >= 1; --j) {
        ret[j][0] = A0[j];
        --j;
        ret[j][0] = A0[j];
      }
      if (j == 0) {
        ret[0][0] = A0[0];
      }
    }
    return ret;
  }

  /// Computes and returns the inverse of an invertible matrix [mat].
  List<List<double>> invMatrix(List<List<double>> mat) {
    int m = mat.length;
    int n = mat[0].length;

    List<List<double>> A = cloneMatrix(mat);
    List<double> Ai, Aj, Ii, Ij;
    List<List<double>> I = createDiagMatrix(m, 1.0); // identity matrix
    int i, j, k;
    double x, kx;
    for (j = 0; j < n; ++j) {
      int i0 = -1;
      double v0 = -1;
      for (i = j; i != m; ++i) {
        kx = (A[i][j]).abs();
        if (kx > v0) {
          i0 = i;
          v0 = kx;
        }
      }

      if (i0 == -1) throw "Matrix not invertible.";
      Aj = A[i0];
      A[i0] = A[j];
      A[j] = Aj;
      Ij = I[i0];
      I[i0] = I[j];
      I[j] = Ij;
      x = Aj[j];

      for (k = j; k != n; ++k) {
        Aj[k] /= x;
      }
      for (k = n - 1; k != -1; --k) {
        Ij[k] /= x;
      }
      for (i = m - 1; i != -1; --i) {
        if (i != j) {
          Ai = A[i];
          Ii = I[i];
          x = Ai[j];
          for (k = j + 1; k != n; ++k) {
            Ai[k] -= Aj[k] * x;
          }
          for (k = n - 1; k > 0; --k) {
            Ii[k] -= Ij[k] * x;
            --k;
            Ii[k] -= Ij[k] * x;
          } // for k
          if (k == 0) {
            Ii[0] -= Ij[0] * x;
          }
        } // if
      } // for i
    } // for j
    return I;
  }

  /// Returns the diagonal of a matrix [matr]
  /// Its length is the minimum of the row or column size of [matr].
  List<double> getDiag(List<List<double>> matr) {
    int n = math.min(matr.length, matr[0].length), i;
    List<double> ret = List<double>.filled(n,0.0);
    for (i = n - 1; i >= 1; --i) {
      ret[i] = matr[i][i];
      --i;
      ret[i] = matr[i][i];
    }
    if (i == 0) {
      ret[0] = matr[0][0];
    }
    return ret;
  }

  /// Compares two matrices [mat1] and [mat2]. If all elements are not different
  /// more than [epsilon], the matrices are considered as equals, and null is
  /// returned. Otherwise, a String of the form "i, k, mat1[i][k], mat2[i][k]"
  /// is returned showing the first encountered unequal matrix element.
  String compareMM(
      List<List<double>> mat1, List<List<double>> mat2, double epsilon) {
    for (int i = 0; i < mat1.length; i++) {
      for (int k = 0; k < mat1[0].length; k++) {
        if ((mat1[i][k] - mat2[i][k]).abs() > epsilon) {
          return "$i, $k, ${mat1[i][k]}, ${mat2[i][k]}";
        }
      }
    }
    return '';
  }

  /// Adds [matr2] to [matr1] and returns the modified [matr1].
  /// The matrices must have the same number of rows and colmuns.
  static List<Float64List> addToM(List<Float64List> matr1, List<Float64List> matr2) {
    for (int i = 0; i < matr1.length; i++) {
      for (int k = 0; k < matr1[0].length; k++) {
        matr1[i][k] += matr2[i][k];
      }
    }
    return matr1;
  }
}
