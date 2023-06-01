// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'package:smart_arrays_base/smart_arrays_base.dart';
import 'dart:typed_data';
import '../smart_arrays_peaks.dart';

/// Peak picking utilities for a 2D array (matrix).
class PeakPicker2D {
  // rowPeaks: key=row, value=list of the peak indices in that row
  // colPeaks: key=col, value=list of the peak indices in that col
  late Map<int, List<int>> rowPeaks, colPeaks;

  PeakPicker2D();

  /// Detects 2D peaks in [matrix].
  /// Method: Detects row an col peaks separately. A 2D peak is found if a row
  /// and a column both have a peak at their crossing point.
  /// Detection is performed in the submatrix defined by
  ///  [ixstartRows], [ixendRows], [ixstartCols], [ixendCols] (end exclusive).
  ///  [noise] is used for differentiating peaks from noise, i.e. small
  ///  variations of the array values, e.g. in case the values represent
  ///  measurements.The noise is data dependent and must be estimated from
  ///  the data.
  /// All peaks less or equal than [threshold] will not be added to the list.
  ///  [peakSign] is one of [PeakPicker1D]'s PICK_POS, PICK_NEG, PICK_POSNEG.
  /// If [maxPeaks] > 0, the returned list will only contain the [maxPeaks]
  /// biggest peaks (or smallest for negative peaks) of all detected ones.
  /// Possibly in this case the returned list has not the length [maxPeaks]*2,
  /// but it is smaller, even 0.
  /// Returns the peak coordinates as a list of [row,col] pairs: [row, col], [row, col], ...
  /// The resulting array's length is the number of peaks found.
  List<List<int>> detectPeaks(
      List<Float64List> matrix,
      int startRow,
      int endRow,
      int startCol,
      int endCol,
      double noise,
      double threshold,
      String peakSign,
      int maxPeaks) {
    detectRowPeaks(matrix, startRow, endRow, startCol, endCol, noise, threshold,
        peakSign, maxPeaks);
    detectColPeaks(matrix, startRow, endRow, startCol, endCol, noise, threshold,
        peakSign, maxPeaks);

    List<List<int>> peaklist = [];
    // check if a column has a peak at the same position as a row.
    // if yes, at the 2D peak to the list.
    rowPeaks.forEach((int row, List<int> cols) {
      cols.forEach((int col) {
        if (colPeaks.containsKey(col) && colPeaks[col]!.contains(row)) {
          peaklist.add([row, col]);
        }
      });
    });
    return peaklist;
  }

  /// Detects the peaks in each [matrix] row (1D picking for each row).
  /// [ixstartRows, ixendRows, ixstartCols, ixendCols] (end exclusive).
  /// All peaks <= [threshold] will not be added to the list.
  /// [peakSign] is one of PeakPicker1D.PICK_POS, PICK_NEG, PICK_POSNEG.
  /// If [maxPeaks] > 0, the returned list will only contain the [maxPeaks]
  /// biggest peaks (or smallest for negative peaks) of all detected ones.
  /// Possibly in this case the returned list has not the length [maxPeaks*2],
  /// but it is smaller, even 0.
  /// Returns the peak coordinates as a list of [row,col] pairs:
  ///    [row, col], [row, col], ...
  /// The resulting array's length is the number of peaks found.
  /// Puts result also into [rowPeaks] used by detectPeaks().
  List<List<int>> detectRowPeaks(
      List<Float64List> matrix,
      int startRow,
      int endRow,
      int startCol,
      int endCol,
      double noise,
      double threshold,
      String peakSign,
      int maxPeaks) {
    rowPeaks = Map<int, List<int>>();
    Float64List row;
    List<int>? peaks1D;
    for (int i = startRow; i < endRow; i++) {
      row = matrix[i];
      peaks1D = PeakPicker1D.detectPeaks(
          row, startCol, endCol, noise, threshold, peakSign, maxPeaks);
      if (peaks1D!=null && peaks1D.isNotEmpty) rowPeaks[i] = peaks1D;
    }

    List<List<int>> peaklist = [];
    rowPeaks.forEach((int row, List<int> cols) {
      cols.forEach((int col) {
        peaklist.add([row, col]);
      });
    });
    return peaklist;
  }

  /// Assumes that detectRowPeaks() was called before.
  /// Sorts the resulting peaklist so as to return a "stacked peaks" list, sorted
  /// according same columns by considering [drift].
  /// A peak in the result is given as a [row,col] pair.
  /// A list of such pairs represents "stacked peaks", i.e. peaks occuring
  /// in all rows at the same column (+-drift). In the contour display
  /// "stacked peaks" are displayed in the same column (+-drift).
  /// The returned list is a list of stacked peak lists, where the first list
  /// has the smalled column:
  /// Result =
  /// [stacked peaklist1, stacked peaklist2, ...] where
  /// stacked peaklist = [[row, col], [row, col],...], hence
  /// [[[row, col], [row, col],...],  [[row, col], [row, col],...], ...]
  /// A peak is only taken over into a stacked peak list if its column index
  /// is no more than [drift] apart from the column index of the first row.
  /// [0, 20
  List<List<List<int>>> getColumnSorting(int drift) {
    List<List<List<int>>> result = [];

    // Returns a list of peaks whose column coordinate matches [col].
    // Matching means a peak's cols coordinate is close to [col] and
    // at maximum [drift] points apart from it.
    List<List<int>> getPeaksWithCol(int col, int drift) {
      List<List<int>> result = [];
      rowPeaks.forEach((int rowi, List<int> cols) {
        cols.forEach((int colk) {
          if ((colk - col).abs() <= drift) {
            result.add([rowi, colk]);
          }
        });
      });
      return result;
    }

    // construct a Map of columns
    Map<int, List<int>> colmap = {};
    rowPeaks.forEach((int row, List<int> cols) {
      cols.forEach((int col) {
        colmap[col] = [row, col];
      });
    });

    // for each column find machting columns in all rows
    colmap.forEach((int coli, List<int> peaks) {
      List<List<int>> rowsWithCol = getPeaksWithCol(coli, drift);
      if (rowsWithCol.isNotEmpty) {
        result.add(rowsWithCol);
      }
    });
    return result;
  }

  /// Detects column peaks in [matrix] between
  /// [startRow, endRow, startCol, endCol] (end exclusive).
  /// [peakSign] is one of PeakPicker1D.PICK_POS, PICK_NEG, PICK_POSNEG.
  /// Puts result in [colPeaks].
  void detectColPeaks(
      List<Float64List> matrix,
      int startRow,
      int endRow,
      int startCol,
      int endCol,
      double noise,
      double threshold,
      String peakSign,
      int maxPeaks) {
    colPeaks = Map<int, List<int>>();
    Float64List? col;
    List<int>? peaks1D;
    for (int i = startCol; i < endCol; i++) {
      col = Array2D.getColumn(matrix, i);
      if(col==null) throw ArgumentError('Array2D.getColumn() returned null in detectColPeaks');
      peaks1D = PeakPicker1D.detectPeaks(
          col, startRow, endRow, noise, threshold, peakSign, maxPeaks);
      if (peaks1D!=null && peaks1D.isNotEmpty) colPeaks[i] = peaks1D;
    }
  }

//  static List<List<int>> sortAlongColumns(List<List<int>> peaklist){
//    peaklist.sort((List<int> a, List<int> b){
//      return a[1] - b[1];
//    });
//    return peaklist;
//  }
}
