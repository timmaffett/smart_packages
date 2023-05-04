// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'package:smart_arrays_base/smart_arrays_base.dart';
import 'dart:typed_data';

/// Utilities for peak detection in one-dimensional arrays
class PeakPicker1D {
  /// Used to select which type of peaks get picked
  static final String PICK_POS = "positive",
      PICK_NEG = "negative",
      PICK_POSNEG = "pos+neg";

  /// Detects peaks in [array] between [ixstart], [ixend] (ixend exclusive).
  /// [noise] is used for differentiating peaks from noise, i.e. small
  ///  variations of the array values, e.g. in case the values represent
  ///  measurements.The noise is data dependent and must be estimated from
  ///  the data.
  /// All peaks less or equal to [threshold] will not be added to the list.
  /// [peakSign] is one of PICK_POS, PICK_NEG, PICK_POSNEG to pick only
  ///   positive or only negative peaks, or peak of any sign.
  /// If [maxPeaks] > 0, the returned list will only contain the [maxPeaks]
  /// biggest peaks (or smallest for negative peaks).
  /// Returns a list of sorted indices where the peaks occur in [array].
  //   (could be empty, but not null).
  static List<int> detectPeaks(Float64List array, int ixstart, int ixend,
      double noise, double threshold, String peakSign, int maxPeaks) {
    List<int> negpeaks, result;
    if (peakSign == PICK_POS) {
      result = detectPeaks0(
          array, ixstart, ixend, noise, threshold, false, maxPeaks);
    } else if (peakSign == PICK_POSNEG) {
      result = detectPeaks0(
          array, ixstart, ixend, noise, threshold, false, maxPeaks);
      negpeaks =
          detectPeaks0(array, ixstart, ixend, noise, threshold, true, maxPeaks);
      result.addAll(negpeaks);
      result.sort();
    } else if (peakSign == PICK_NEG) {
      result =
          detectPeaks0(array, ixstart, ixend, noise, threshold, true, maxPeaks);
    }
    return result;
  }

  /// Helper for detectPeaks().
  /// Detects peaks in [data] between [ixstart, ixend] (ixend exclusive).
  /// [noise] is used for differentiating peaks from noise.
  /// All peaks <= [threshold] will not be addedto the list.
  /// Returns a list of sorted indices in the data array.
  /// (could be empty, but not null).
  /// If [pickNegs] is true, find only negative peaks.
  /// If [maxPeaks] > 0, the returned list will only contain the [maxPeaks]
  ///  biggest peaks (or smallest for negative peaks)
  static List<int> detectPeaks0(Float64List data, int ixstart, int ixend,
      double noise, double threshold, bool pickNegs, int maxPeaks) {
    List<int> peakIndices = detectPeaksEmiAbs(
        data, ixstart, ixend, noise, true, threshold, pickNegs)[0];
    if (maxPeaks <= 0 || peakIndices.length <= maxPeaks) return peakIndices;

    List<double> peakValues = [];
    for (int i = 0; i < peakIndices.length; i++) {
      peakValues.add(data[peakIndices[i]]);
    }

    // leave only the maxPeaks biggest peaks.
    int peakix;
    List<int> maxIndices = [];

    for (int i = 0; i < maxPeaks; i++) {
      peakix = Array1D.getMax(Float64List.fromList(peakValues))[1];
      maxIndices.add(peakIndices[peakix]);
      peakValues.removeAt(peakix); // already treated
      peakIndices.removeAt(peakix);
    }
    maxIndices.sort();
    return maxIndices;
  }

  /// Helper for detectPeaks0().
  /// Detects peaks in [data] between [ixstart, ixend] (ixend exclusive).
  /// [noise] is used for differentiating peaks from noise.
  /// [emi_first] == true if emission peaks to be searched first.
  ///   (emission = "mountains" peaks, absorption = "valleys").
  /// All peaks <= [threshold] will not be addedto the list.
  /// If [pickNegs] is true, find only negative peaks.
  /// Returns [list indices emission peaks, list indices absorption peaks]
  /// (could be empty, but not null).
  static List<List<int>> detectPeaksEmiAbs(
      Float64List data,
      int ixstart,
      int ixend,
      double noise,
      bool emi_first,
      double threshold,
      bool pickNegs) {
    void invert() {
      if (pickNegs) {
        for (int i = ixstart; i < ixend; i++) {
          data[i] = -data[i];
        }
        // user may specify e.g. 10 or -10, for negative peaks this will be allright
        threshold = threshold.abs();
      }
    }

    invert(); // if necessary

    int i;
    int curmax_ix = ixstart;
    int curmin_ix = ixstart;
    bool is_detecting_emi = emi_first;

    double curmax = data[ixstart];
    double curmin = data[ixstart];

    List<int> emi_peaks = [];
    List<int> absop_peaks = [];

    double datai;
    for (i = ixstart; i < ixend; i++) {
      datai = data[i];
      if (datai > curmax) {
        curmax_ix = i;
        curmax = datai;
      }
      if (datai < curmin) {
        curmin_ix = i;
        curmin = datai;
      }

      if (is_detecting_emi && datai < (curmax - noise)) {
        if (data[curmax_ix] > threshold) emi_peaks.add(curmax_ix);

        is_detecting_emi = false;

        i = curmax_ix - 1;

        curmin = data[curmax_ix];
        curmin_ix = curmax_ix;
      } else if ((!is_detecting_emi) && datai > (curmin + noise)) {
        if (data[curmin_ix] > threshold) absop_peaks.add(curmin_ix);

        is_detecting_emi = true;

        i = curmin_ix - 1;

        curmax = data[curmin_ix];
        curmax_ix = curmin_ix;
      }
    }

    List.from(absop_peaks).forEach((pos) {
      if (data[pos] < threshold) absop_peaks.remove(pos);
    });

    invert(); // restore inverted if necessary
    return [emi_peaks, absop_peaks];
  }
}
