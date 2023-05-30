// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'package:smart_arrays_base/smart_arrays_base.dart';
import 'dart:typed_data';

/// Usage of this class: Invoke the constructor. Invoke [compress].
/// The compression result is [cvalsPos] and [cvalsNeg].
/// See [README.md] of this package about when this class should be employed.
class CompressedArray2D {
  /// compression result
  late List<Float64List> cvalsPos, cvalsNeg;

  CompressedArray2D();

  /// Compresses the submatrix of the matrix [yValues2D] given by
  ///  [row1], [row2], [col1], [col2] to a matrix of size [nrowsNew, ncolsNew].
  ///  All indices are meant inclusive.
  /// Returns the result in [cvalsPos] and [cvalsNeg], both representing lists
  /// of rows ([cvalsNeg] remains null if negLevels is false).
  /// [negLevels] = true means get also a compression of the negative values
  /// (result is [cvalsNeg]), false means get only a compression of the positive
  /// values (result is [cvalsPos]).
  /// [cvalsPos] only contains positive or zero values, and zeroes are filled in
  /// where formerly were negative values. [cvalsNeg] only contains negative
  /// or zero values, and zeroes are filled in where formerly were positive values.
  /// Note: The index inside a row is the col index and counts the cols.
  /// [cvalsPos] and [cvalsNeg] will remain null if unsuitable input parameters
  /// are specified.
  void compress(List<Float64List> yValues2D, int row1, int row2, int col1,
      int col2, int nrowsNew, int ncolsNew, bool negLevels) {
//    Stopwatch stopwatch = new Stopwatch();
//    stopwatch.start();
    // say 512 out of 2048, or 665 out of 2048
    int nrows = (row2 - row1 + 1).abs(); // +1: indices inclusive
    int ncols = (col2 - col1 + 1).abs();
    if (nrows == 0 || ncols == 0 || nrowsNew == 0 || ncolsNew == 0) {
      return;
    }

    if (nrowsNew >= nrows && ncolsNew >= ncols) return; // nothing to compress
    if (nrowsNew > nrows) nrowsNew = nrows;
    if (ncolsNew > ncols) ncolsNew = ncols;

    int rowFirst = row1, rowLast = row2;
    if (row1 > row2) {
      rowFirst = row2;
      rowLast = row1;
    }

    int colFirst = col1, colLast = col2;
    if (col1 > col2) {
      colFirst = col2;
      colLast = col1;
    }

    List<double>? cellsize =
        computeCellsize(row1, row2, col1, col2, nrowsNew, ncolsNew);
    if (cellsize == null) return; // security exit, no compression can be done
    double cellsizeRow = cellsize[0];
    double cellsizeCol = cellsize[1];

//    print("compress rows cols=$row1 $row2 $col1 $col2 ${yValues2D.length}");
//    print("compress cellsize=$cellsize");

    cvalsPos = [];
    cvalsNeg = [];
    Float64List? smallMatrix, newrowPos, newrowNeg;
    double curvalPos, curvalNeg;
    int irowsNew = 0, icolsNew; // current count of destination rows, cols
    int rowFrom, colFrom;
    int rowTo = rowFirst - 1, colTo;

    while (irowsNew < nrowsNew) {
      newrowPos = new Float64List(ncolsNew); // all elements are initally zero!
      newrowNeg = new Float64List(ncolsNew);

      rowFrom = rowTo + 1;
      if (rowFrom > rowLast) rowFrom = rowLast;
      rowTo = rowFirst + ((irowsNew + 1) * cellsizeRow).floor();
      if (nrowsNew == nrows) rowTo = rowFrom; // no row compression
      if (rowTo > rowLast) rowTo = rowLast; // may occur in very last cell

      icolsNew = 0;
      colTo = colFirst - 1;

      while (icolsNew < ncolsNew) {
        colFrom = colTo + 1;
        if (colFrom > colLast) colFrom = colLast;
        colTo = colFirst + ((icolsNew + 1) * cellsizeCol).floor();
        if (ncolsNew == ncols) colTo = colFrom; // no col compression
        if (colTo > colLast) colTo = colLast;

        try {
          smallMatrix = Array2D.getSubmatrixAs1D(
              yValues2D, rowFrom, rowTo, colFrom, colTo);
        } catch (e) {
          print("compress2D=$e <br> $rowFrom $rowTo $colFrom $colTo");
        }

        curvalPos = Array1D.getMaxInRange(smallMatrix!, null, null);
        if (curvalPos > 0) {
          newrowPos[icolsNew] = curvalPos; // only values > 0 to be used
        }

        if (negLevels) {
          curvalNeg = Array1D.getMinVal(smallMatrix);
          if (curvalNeg < 0) {
            newrowNeg[icolsNew] = curvalNeg; // only values < 0 to be used
          }
        }

        icolsNew++;
      } // while(resultCol < ncolsNew)

      cvalsPos.add(newrowPos);
      if (negLevels) cvalsNeg.add(newrowNeg);

      irowsNew++;
    } // rows
//    stopwatch.stop();
//    print("time=${stopwatch.elapsedMilliseconds} msec");
  } // compress

//--------------------- static methods ----------------------

  /// Used by [compress]: Returns the cellsize [cellsizeRow, cellsizeCol]
  /// (corresponding to the interval size in 1D).
  /// Returns null is nothing to compress.
  static List<double>? computeCellsize(
      int row1, int row2, int col1, int col2, int nrowsNew, int ncolsNew) {
    Stopwatch stopwatch = new Stopwatch();
    stopwatch.start();
    // say 512 out of 2048, or 665 out of 2048
    int nrows = (row2 - row1 + 1).abs(); // +1: indices inclusive
    int ncols = (col2 - col1 + 1).abs();
    if (nrows == 0 || ncols == 0 || nrowsNew == 0 || ncolsNew == 0) {
      return null;
    }

    if (nrowsNew >= nrows && ncolsNew >= ncols) {
      return null; // nothing to compress
    }
    if (nrowsNew > nrows) nrowsNew = nrows;
    if (ncolsNew > ncols) ncolsNew = ncols;

    double cellsizeRow = nrows / nrowsNew;
    double cellsizeCol = ncols / ncolsNew;
    double cellArea = cellsizeRow * cellsizeCol;
    double newArea = nrows * ncols.toDouble();
    double ncells = newArea / cellArea;
    return [cellsizeRow, cellsizeCol, ncells];
  } // compress

//  static void testCompress2D() {
//    // build data matrix
//    final int NROWS = 11, NCOLS = 64;
//    List<Float64List> matrix = [];
//    Float64List rowdata;
//    for (int i = 0; i < NROWS; i++) {
//      rowdata = new Float64List(NCOLS);
//      for (int j = 0; j < NCOLS; j++) {
//        rowdata[j] = i + j / 100.0;
//      }
//      matrix.add(rowdata);
//    }
//
//    // compress matrix
//    CompressedData2D cdata = new CompressedData2D();
//
////    int row1 = 25, row2 = 50, col1 = 15, col2 = 25, nrowsNew = 16, ncolsNew = 8;
//    // T1 type
//    int row1 = 0,
//        row2 = NROWS - 1,
//        col1 = 0,
//        col2 = NCOLS - 1,
//        nrowsNew = NROWS,
//        ncolsNew = 11;
//    // keep NCOLS
////    int row1 = 0,
////        row2 = NROWS - 1,
////        col1 = 0,
////        col2 = NCOLS - 1,
////        nrowsNew = NROWS ~/ 2,
////        ncolsNew = NCOLS;
//    // keep NROWS
////    int row1 = 0,
////        row2 = NROWS - 1,
////        col1 = 0,
////        col2 = NCOLS - 1,
////        nrowsNew = NROWS,
////        ncolsNew = NCOLS ~/ 2;
//    print("Input params=$row1 $row2 $col1 $col2 $nrowsNew $ncolsNew");
//    bool negLevels = false;
//    cdata.compress(
//        matrix, row1, row2, col1, col2, nrowsNew, ncolsNew, negLevels);
//    if (cdata.cvalsPos == null) {
//      print("Nothing to compress");
//      return;
//    }
//    String out;
//    for (int i = 0; i < cdata.cvalsPos.length; i++) {
//      out = "";
//      for (int j = 0; j < cdata.cvalsPos[0].length; j++) {
//        out += "${cdata.cvalsPos[i][j]} ";
//      }
//      print("$i ${cdata.cvalsPos[0].length} -- $out");
//    }
//  }

//  void compressOld(List<Float64List> yValues2D, int row1, int row2, int col1,
//      int col2, int nrowsNew, int ncolsNew, bool negLevels) {
//    // say 512 out of 2048, or 665 out of 2048
//    int nrows = (row2 - row1 + 1).abs();
//    int ncols = (col2 - col1 + 1).abs();
//    if (nrows == 0 || ncols == 0) {
//      return;
//    }
//
//    int rowFirst = row1, rowLast = row2;
//    if (row1 > row2) {
//      rowFirst = row2;
//      rowLast = row1;
//    }
//
//    int colFirst = col1, colLast = col2;
//    if (col1 > col2) {
//      colFirst = col2;
//      colLast = col1;
//    }
//
//    double cellsizeRow = nrows / nrowsNew;
//    double cellsizeCol = ncols / ncolsNew;
////    print("1000=$cellsizeRow $cellsizeCol");
//
//    cvalsPos = [];
//    cvalsNeg = [];
//    Float64List smallMatrix, newrowPos, newrowNeg;
//    double curvalPos, curvalNeg;
//    int irowsNew = 0, icolsNew = 0; // cuurent count of destination rows, cols
//    int rowFrom = rowFirst;
//    int rowTo = (rowFirst + cellsizeRow).round();
//
//    int colFrom = colFirst;
//    int toCol = (colFirst + cellsizeCol).round();
//
//    while (irowsNew < nrowsNew) {
//      newrowPos = new Float64List(ncolsNew); // all elements are initally zero!
//      newrowNeg = new Float64List(ncolsNew);
//
//      if (rowFrom > rowLast) rowFrom = rowLast - 1;
//      if (rowTo <= rowFrom || rowTo > rowLast) rowTo = rowLast;
////      if (nrows <= nrowsNew) {
////        rowFrom = resultRow;
////        rowTo = rowFrom;
////      }
//
//      while (icolsNew < ncolsNew) {
//        if (colFrom > colLast) colFrom = colLast - 1;
//        if (toCol <= colFrom || toCol > colLast) toCol = colLast;
//
//        try {
//          smallMatrix = ArrayUtils.getSubmatrixAs1D(
//              yValues2D, rowFrom, rowTo, colFrom, toCol);
//        } catch (e) {
//          print("XXXXXX=$rowTo $rowFrom");
//        }
//
//        curvalPos = ArrayUtils.getMaxVal(smallMatrix, null, null);
//        if (curvalPos > 0)
//          newrowPos[icolsNew] = curvalPos; // only values > 0 to be used
//
//        if (negLevels) {
//          curvalNeg = ArrayUtils.getMinVal(smallMatrix);
//          if (curvalNeg < 0)
//            newrowNeg[icolsNew] = curvalNeg; // only values < 0 to be used
//        }
//
//        // next col:
//        colFrom = toCol + 1; // because we treated [fromCol, toCol]
//        // this accounts properly for fractional cellsize
//        toCol = (colFirst + cellsizeCol * (icolsNew + 2)).round();
//        icolsNew++;
//      } // while(resultCol < ncolsNew)
//
//      cvalsPos.add(newrowPos);
//      if (negLevels) cvalsNeg.add(newrowNeg);
//
//      // reset col
//      icolsNew = 0;
//      colFrom = colFirst;
//      toCol = (colFirst + cellsizeCol).round();
//
//      // next row:
//      rowFrom = rowTo + 1; // because we treated [fromRow, toRow]
//      // this accounts properly for fractional cellsize
////  ori    rowTo = (rowFirst + cellsizeRow * (resultRow + 2)).round();
//      rowTo = (rowFirst + cellsizeRow * (irowsNew + 2)).round();
//      irowsNew++;
//    } // rows
//  } // compress
}
