// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import "dart:typed_data";

import '../smart_arrays_base.dart';

/// Used in [Array2D]
enum MatrixProjSlice {
  PROJ_ROW,
  PROJ_COL,
  PROJ_EXT_ROW,
  PROJ_EXT_COL,
  SLICE_ROW,
  SLICE_COL,
}

/// This class defines the result delivered by the method [Array2D.getMinMax].
/// The minimum value and the maximum value of a matrix are stored, and
/// the respective row and column indices in the matrix
class MinMax {
  double minValue, maxValue;
  int minValueIndexCol, maxValueIndexCol;
  int minValueIndexRow, maxValueIndexRow;
  MinMax(this.minValue, this.maxValue, this.minValueIndexCol,
      this.maxValueIndexCol, this.minValueIndexRow, this.maxValueIndexRow);
}

/// This class provides utility functions for 2D arrays (matrices):
/// - Extracting rows, columns, appending rows
/// - Extracting sub-matrices, building envelopes
/// - Computing projections or sums over rows or columns
/// - Swapping or reversing rows
/// - Finding minimum or maximum values
class Array2D {
  /// Returns the column [col] >= 0 of [matrix].
  /// Returns null if [col] is outside range.
  /// The result is a new Float64List!
  /// Modifying the col will therefore NOT modify the matrix!
  static Float64List getColumn(List<Float64List> matrix, int col) {
    if (col < 0 || col >= matrix[0].length) return null;
    int nrows = matrix.length; // col length
    Float64List result = new Float64List(nrows);
    for (int i = 0; i < nrows; i++) {
      result[i] = matrix[i][col];
    }
    return result;
  }

  /// Returns the row [row] >= 0 from [matrix].
  /// Returns null if [row] of range.
  /// The result is the original row in the matrix, not a new list!
  /// Modifying the row will therefore modify the matrix!
  static Float64List getRow(List<Float64List> matrix, int row) {
    if (row < 0 || row >= matrix.length) return null;
    return matrix[row];
  }

  /// Returns the maximum value in the column [col] of [matrix]. If
  /// [firstRow] and [lastRow] are not null, the maximum search inside [col]
  /// is performed from [firstRow], inclusive, to [lastRow], also inclusive.
  static double getColumnMax(
      List<Float64List> matrix, int col, int firstRow, int lastRow) {
    Float64List coldata = getColumn(matrix, col);
    return Array1D.getMaxInRange(coldata, firstRow, lastRow);
  }

  /// Returns the maximum value in the row [row] of [matrix]. If
  /// [firstCol] and [lastCol] are not null, the maximum search inside [row]
  /// is performed from [firstCol], inclusive, to [lastCol], also inclusive.
  static double getRowMax(
      List<Float64List> matrix, int row, int firstCol, int lastCol) {
    Float64List rowdata = getRow(matrix, row);
    return Array1D.getMaxInRange(rowdata, firstCol, lastCol);
  }

  /// Returns a projection of rows (= "row projection") or of columns (= "column
  ///  projection") of [matrix].
  /// [type] = [MatrixProjSlice.PROJ_ROW] computes a "row" projection,
  ///   [MatrixProjSlice.PROJ_COL] computes a "column" projection.
  /// If you think rows drawn horizontally (=x axis) and columns drawn perpendicular
  /// to the rows (= y axis), then a ROW projection "projects" the rows
  /// on to the x axis. A COLUMN projection "project" the columns onto the yaxis.
  /// project onto the row axis = F2.
  /// A ROW projection is defined as an array containing the maximum values of
  /// the columns between [firstIx] and [lastIx] (both indices inclusive).
  /// A COLUMN projection is defined as an array containing the maximum values of
  /// the rows between [firstIx] and [lastIx] (both indices inclusive).
  /// [firstIx] and [lastIx] are allowed to be null (at the same time). Then
  /// teh whole matrix is projected onto the axis defined by [type].
  static Float64List getProjection(
      List<Float64List> matrix, int firstIx, int lastIx, MatrixProjSlice type) {
    Float64List result;
    if (type == MatrixProjSlice.PROJ_ROW) {
      int ncols = matrix[0].length; // = rowlength!
      result = new Float64List(ncols);
      for (int j = 0; j < ncols; j++) {
        result[j] = getColumnMax(matrix, j, firstIx, lastIx);
      }
    } else if (type == MatrixProjSlice.PROJ_COL) {
      int nrows = matrix.length; // = collength!
      result = new Float64List(nrows);
      for (int j = 0; j < nrows; j++) {
        result[j] = getRowMax(matrix, j, firstIx, lastIx);
      }
    }
    return result;
  }

  /// Computes the sum of all rows, or the sum of all columms.
  /// [sumRows] - set true to sum rows, false to sum columns.
  /// [type] = POS: adds the positive or zero values of [a1] and [a2] only
  /// [type] = one of [Array1D.POS],  [Array1D.NEG],  [Array1D.POSNEG] to
  /// take into account only positive, negative, or all values to build the sum.
  static Float64List getSumRowsCols(
      List<Float64List> matrix, bool sumRows, int type) {
    int ncols = matrix[0].length; // = rowlength!
    int nrows = matrix.length; // = collength

    Float64List cursum; // has 0.0 elements initially!
    if (sumRows) {
      cursum = new Float64List(ncols);
      for (int i = 0; i < nrows; i++) // all rows
      {
        cursum = Array1D.addArrays(matrix[i], cursum, type);
      }
    } else {
      Float64List curcol;
      cursum = new Float64List(nrows);
      for (int i = 0; i < ncols; i++) // all cols
      {
        curcol = getColumn(matrix, i);
        cursum = Array1D.addArrays(curcol, cursum, type);
      }
    }
    return cursum;
  }

  /// Returns the mimimum and maximum value in a [matrix] and
  /// the respective indices.
  static MinMax getMinMax(List<Float64List> matrix) {
    int nrows = matrix.length;

    double ymin = double.maxFinite;
    int ymin_index_col = -1, ymin_index_row;
    double ymax = -double.maxFinite;
    int ymax_index_col = -1, ymax_index_row;
    List<dynamic> temp;
    // search for min
    for (int i = 0; i < nrows; i++) {
      temp = Array1D.getMin(matrix[i]);
      if (temp[0] < ymin) {
        ymin = temp[0];
        ymin_index_col = temp[1];
        ymin_index_row = i;
      }
    }

    // search for max
    for (int i = 0; i < nrows; i++) {
      temp = Array1D.getMax(matrix[i]);
      if (temp[0] > ymax) {
        ymax = temp[0];
        ymax_index_col = temp[1];
        ymax_index_row = i;
      }
    }
    return new MinMax(ymin, ymax, ymin_index_col, ymax_index_col,
        ymin_index_row, ymax_index_row);
  }

  /// Returns the submatrix of [matrix] defined by [row1, row2, col1, col2]
  /// as a 1D array, a sequence of rows. The total array length is nrows * ncols,
  /// where nrows = row2 - row1 + 1 and ncols = col2 - col1 + 1.
  /// The indices are inclusive.
  /// The result may have 0 elements, depending on input indices.
  /// It is not relevant wheter rows1 is < or > row2, or col1 < or > col2.
  /// See also [Array1D.splitArray] to make a 2D array from the result.
  /// See also [getSubmatrix].
  static Float64List getSubmatrixAs1D(
      List<Float64List> matrix, int row1, int row2, int col1, int col2) {
    // Enable for check
//    if(row1 < 0 || row2 < 0 || col1 < 0 ||col2 < 0 || row1 > sizef1-1 || row2 > sizef1-1 ||
//        col1 > size-1 || col2 > size-1)
//      throw new Exception("CompressedData2D: Submatrix out of bounds (2)");

    if (row1 == row2 && col1 == col2) {
      return new Float64List.fromList([matrix[row1][col1]]); // single point
    }

    int firstRow = row1;
    int endRow = row2;
    if (row1 > row2) {
      firstRow = row2;
      endRow = row1;
    }

    int firstCol = col1;
    int endCol = col2;
    if (col1 > col2) {
      firstCol = col2;
      endCol = col1;
    }

    int nrows = (row2 - row1 + 1).abs();
    int ncols = (col2 - col1 + 1).abs();

    if (row1 == row2) {
      Float64List row = Array2D.getRow(matrix, firstRow);
      Float64List result = new Float64List(ncols);
      for (int i = 0; i < ncols; i++) {
        result[i] = row[firstCol + i];
      }
      return result;
    }

    if (col1 == col2) {
      Float64List col = Array2D.getColumn(matrix, firstCol);
      Float64List result = new Float64List(nrows);
      for (int i = 0; i < nrows; i++) {
        result[i] = col[firstRow + i];
      }
      return result;
    }

    Float64List submatrix = new Float64List(nrows * ncols);

    Float64List rowdata;
    int isub = 0;
    for (int i = firstRow; i <= endRow; i++) {
      rowdata = matrix[i];
      for (int j = firstCol; j <= endCol; j++) {
        submatrix[isub++] = rowdata[j];
      }
    }
    return submatrix;
  }

  /// Returns the submatrix of [matrix] defined by [row1, row2, col1, col2].
  /// [row2] and [col2] are exclusive indices!
  /// row1/2 and col1/2 need not be ordered. 0<=row1,2<=sizef1, 0<=col1,2<=size-
  /// An exception is thrown in case of errors, e.g. indices out of range.
  /// The result may have 0 elements, depending on input indices.
  /// The result has (col2 - col1).abs() columns and (row2 - row1).abs() rows.
  /// [negLevels] = true means only negative values are retained, false means
  /// only positive values are retained, the respective others are set to 0
  /// (= positive and negative envelopes, e.g. usefull for contour or 3D surface
  /// display of a matrix).
  /// Null means all values are retained without change.
  /// Returns the list of rows of the submatrix.
  static List<Float64List> getSubmatrix(List<Float64List> matrix, int row1,
      int row2, int col1, int col2, bool negLevels) {
    int size = matrix[0].length; // assuming all rows have the same length
    int sizef1 = matrix.length;
    if ((row1 == 0 && row2 == sizef1) && col1 == 0 && col2 == sizef1) {
      return matrix; // full matrix
    }

    if (row1 < 0 ||
        row2 < 0 ||
        col1 < 0 ||
        col2 < 0 ||
        row1 > sizef1 ||
        row2 > sizef1 ||
        col1 > size ||
        col2 > size) {
      throw new Exception("CompressedData2D: Submatrix out of bounds");
    }

    int nrows = (row2 - row1).abs();
    int ncols = (col2 - col1).abs();

    int firstRow = row1;
    int endRow = row2;
    if (row1 > row2) {
      firstRow = row2;
      endRow = row1;
    }

    int firstCol = col1;
    if (col1 > col2) {
      firstCol = col2;
    }

    Float64List resultRow;
    Float64List inputRow;
    List<Float64List> result = new List<Float64List>(nrows);
    double curval;
    int destrow = 0;
    for (int i = firstRow; i < endRow; i++) {
      inputRow = matrix[i];
      resultRow = new Float64List(ncols); // will contain zeroes!
      for (int j = 0; j < ncols; j++) {
        curval = inputRow[firstCol + j];
        if (negLevels != null) {
          if (negLevels && curval > 0 || !negLevels && curval < 0) curval = 0.0;
        }
        resultRow[j] = curval;
      }
      result[destrow++] = resultRow;
    }
    return result;
  }

  /// Appends each row of [rows] to [matrix].
  static void appendRows(List<Float64List> rows, List<Float64List> matrix) {
    for (Float64List row in rows) {
      matrix.add(row);
    }
  }

  /// Returns a one-dimensional array from a two-dimensional [matrix]
  /// by appending their rows in sequence. See also [getSubmatrixAs1D].
  static Float64List join(List<Float64List> matrix) {
    int size = 0;
    for (int i = 0; i < matrix.length; i++) {
      size += matrix[i].length;
    }

    Float64List result = new Float64List(size);
    int count = 0;
    for (int i = 0; i < matrix.length; i++) {
      for (int j = 0; j < matrix[i].length; j++) {
        result[count++] = matrix[i][j];
      }
    }
    return result;
  }

  /// Swaps (interchanges) rows [i] and [j] of [matrix]
  static void swapRows(List<List<double>> matrix, int i, int j) {
    List<double> temp = matrix[i];
    matrix[i] = matrix[j];
    matrix[j] = temp;
  }

  /// Reverses the order of all rows of [matrix]. The result has the last
  /// row as the first one, the 2nd last one as the 2nd, etc.
  static void reverseRows(List<List<double>> matrix) {
    for (int i = 0; i < matrix.length ~/ 2; i++) {
      swapRows(matrix, i, matrix.length - 1 - i);
    }
  }

  /// Integrates a submatrix of [matrix]. The submatrix boundaries are given by
  /// [startRow], [endRow], [startCol], [endCol]. The indices are inclusive.
  /// Returns a list with 3 elements:
  /// [0] = sum of All matrix values in the region
  /// [1] = sum of the POSITIVE matrix values in the region
  /// [2] = sum of the NEGATIVE matrix values in the region
  static Float64List integrateRegion(List<Float64List> matrix, int startRow,
      int endRow, int startCol, int endCol) {
    Float64List submatrixAs1D =
        getSubmatrixAs1D(matrix, startRow, endRow, startCol, endCol);

    double sumAll = 0.0, sumPos = 0.0, sumNeg = 0.0;
    submatrixAs1D.forEach((double matrixValue) {
      sumAll += matrixValue;
      if (matrixValue > 0) sumPos += matrixValue;
      if (matrixValue < 0) sumNeg += matrixValue;
    });
    return new Float64List.fromList([sumAll, sumPos, sumNeg]);
  }
} // Array2D
