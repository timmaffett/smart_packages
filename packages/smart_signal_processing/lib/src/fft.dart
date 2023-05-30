// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'package:smart_arrays_base/smart_arrays_base.dart';
import 'dart:typed_data';
import 'dart:math' as math;

import '../smart_signal_processing.dart';

typedef void RowDoneCallback(int row);

/// This class provides forward and inverse in-place Radix 2 Fourier transforms for
/// discrete data stored in a 1D array. Input data may be ordered in several ways.
/// In addition, the class provides a combi-transform that transforms a series of
/// arrays, optionally applying an apozidation (window) function and baseline adjustment.
/// The transform algorithm itself is based on MIT-licensed js code of Nayuki Minase,
/// see http://nayuki.eigenstate.org/page/free-small-fft-in-multiple-languages.
class FFT {
  /// Define the origin (reference point) of the transform
  static final int FT_SWAP_MODE_NO = -1,
      FT_SWAP_MODE_FULL = 0,
      FT_SWAP_MODE_HALF = 1;

  /// Computes the discrete FFT of a complex array in place.
  /// [real] = the real values of the array
  /// [imag] = the imaginary values of the array.
  /// Throws if [real] and [imag] have different lengths, and if the
  /// length is not a power of 2.
  /// The result is again complex, and is contained in the original array.
  /// The resulting array values are scaled relatively (non absolute values).
  static void transform(Float64List real, Float64List imag) {
    if (real.length != imag.length) throw "Mismatched lengths";
    int n = real.length;
    if (n == 0) {
      return;
    } else if ((n & (n - 1)) == 0) {
      // Is power of 2
      transformRadix2(real, imag);
    } else {
      throw "array size is not a power of 2!";
    }
  }

  /// Computes the inverse discrete Fourier transform (IDFT) of the given complex
  /// vector, storing the result back into the vector.
  /// The vector can have any length. This is a wrapper function.
  /// This transform does not perform scaling, so the inverse is not a true inverse.
  ///
  /// Computes the inverse FFT of a complex array in place.
  /// [real] = the real values of the array
  /// [imag] = the imaginary values of the array.
  /// Throws if [real] and [imag] have different lengths, and if the
  /// length is not a power of 2.
  /// The result is again complex, and is contained in the original array.
  /// NOTE: Since this transform does not perform scaling, the inverse is not a
  /// true inverse with respect to the array values (intensities)!
  void computeInverseFft(Float64List real, Float64List imag) {
    transform(imag, real);
  }

  /// Computes the discrete FFT of a complex array in place.
  /// [real] = the real values of the array
  /// [imag] = the imaginary values of the array.
  /// Throws if [real] and [imag] have different lengths, and if the
  /// length is not a power of 2.
  /// The result is again complex, and is contained in the original array.
  /// The resulting array values are scaled relatively (non absolute values).
  /// Uses the Cooley-Tukey decimation-in-time radix-2 algorithm.
  static void transformRadix2(Float64List real, Float64List imag) {
    // Initialization
    if (real.length != imag.length) throw "Mismatched lengths";
    int n = real.length;
    if (n == 1) {
      // Trivial transform
      return;
    }
    int levels = -1;
    for (int i = 0; i < 32; i++) {
      if (1 << i == n) levels = i; // Equal to log2(n)
    }
    if (levels == -1) throw "Length is not a power of 2";
    Float64List cosTable = Float64List(n ~/ 2);
    Float64List sinTable = Float64List(n ~/ 2);
    for (int i = 0; i < n / 2; i++) {
      cosTable[i] = math.cos(2 * math.pi * i / n);
      sinTable[i] = math.sin(2 * math.pi * i / n);
    }

    // Bit-reversed addressing permutation
    for (int i = 0; i < n; i++) {
      int j = reverseBits(i, levels);
      if (j > i) {
        double temp = real[i];
        real[i] = real[j];
        real[j] = temp;
        temp = imag[i];
        imag[i] = imag[j];
        imag[j] = temp;
      }
    }

    // Cooley-Tukey decimation-in-time radix-2 FFT
    for (int size = 2; size <= n; size *= 2) {
      int halfsize = size ~/ 2;
      int tablestep = n ~/ size;
      for (int i = 0; i < n; i += size) {
        for (int j = i, k = 0; j < i + halfsize; j++, k += tablestep) {
          double tpre = real[j + halfsize] * cosTable[k] +
              imag[j + halfsize] * sinTable[k];
          double tpim = -real[j + halfsize] * sinTable[k] +
              imag[j + halfsize] * cosTable[k];
          real[j + halfsize] = real[j] - tpre;
          imag[j + halfsize] = imag[j] - tpim;
          real[j] += tpre;
          imag[j] += tpim;
        }
      }
    }
  }

  /// Bit reversal
  static int reverseBits(int x, int bits) {
    int y = 0;
    for (int i = 0; i < bits; ++i, x >>= 1) {
      y = (y << 1) | (x & 0x01);
    }
    return y;
  }

  /// Computes the discrete FFT of a complex array.
  /// [complArray] = the complex values of the array if [isComplex] is true (the
  ///   default value). The array must be ordered
  ///   in the form [real value 0, imag value 0,  real value 1, imag value 1,...].
  ///   If [isComplex] is false, the array must be ordered
  ///   in the form [real value 0, real value 1, ...].
  /// Throws if the length is not a power of 2.
  /// Returns the result: The result consists of 2 new arrays representing
  /// complex data, the input array remains unchanged:
  /// The real part is the array stored under index 0 of the returned list, the
  /// imaginary part corresponds to index 1.
  /// If [isComplex] is true, the lengths of the resulting real part and of the
  /// corresponding imaginary part are half of the length of the input array
  /// [complArray]. If [isComplex] is false, the lengths of the resulting real
  /// part and of the corresponding imaginary part are the same as the length of
  /// the input array [complArray] because internally [complArray] is treated
  /// as a complex array with a zero imaginary part.
  /// The resulting array values are scaled relatively (non absolute values).
  /// [groupDelay] = a double in String format. In some measurement time data, the
  ///   actual data do not start at 0, but [groupDelay] later, in terms of
  ///   complex points. For such types of data
  ///   the FFT would produce a "phase shifted" result (see function [phascor] below).
  ///   This phase shift is accounted for if [groupDelay] is chosen not be zero
  ///   but according to the measurement.
  /// [swapMode] = one of [FT_SWAP_MODE_NO], [FT_SWAP_MODE_FULL], [FT_SWAP_MODE_HALF].
  /// These modes are needed depending on how the data to be transformed
  /// were sampled on a measurement device, e.g. a spectrometer.
  ///  [FT_SWAP_MODE_NO]: no special effect
  ///  [FT_SWAP_MODE_FULL]: 1) every other complex points is negated before th
  ///    transform. 2) The order of the real data points is reversed after transform.
  ///    The same is done for the imaginary data points.
  ///  [FT_SWAP_MODE_HALF]: The order of the first half of the real data points,
  ///   and of the seconds half of the real data points is reversed after transform.
  ///   The same is applied to the imaginary data points.
  static List<Float64List> transformShuffled(
      Float64List complArray, String? groupDelay, int swapMode,
      [bool isComplex = true]) {
    // reim in new, shuffledArray remains unchanged.
    List<Float64List?> work_reim;
    if (isComplex) {
      work_reim = Array1D.unshuffle(complArray); // returns 2 new arrays
    } else {
      work_reim = List<Float64List?>.filled(2,null); // creates 2 new arrays
      work_reim[0] = Float64List(complArray.length);
      for (int i = 0; i < complArray.length; i++) {
        work_reim[0]![i] = complArray[i];
      }
      work_reim[1] = Float64List(complArray.length);
    }
    List<Float64List> reim = work_reim as List<Float64List>;
    // negation of every other (complex) point needed
    // e.g. data with bruker groupDelay -1, but DECIM and DSPFVS > 0
    if (swapMode == FT_SWAP_MODE_FULL) {
      for (int i = 0; i < reim[0].length; i += 2) {
        reim[0][i + 1] = -reim[0][i + 1];
        reim[1][i + 1] = -reim[1][i + 1];
      }
    }

    transform(reim[0], reim[1]); // in-place transform of complex data

    if (groupDelay != null && double.parse(groupDelay) > 0) {
      phascor(reim[0], reim[1], 0, double.parse(groupDelay) * 360); // orig
    }

    // e.g. data with  groupDelay -1, but DECIM and DSPFVS > 0
    if (swapMode == FT_SWAP_MODE_FULL) {
      Array1D.swap(reim[0]);
      Array1D.swap(reim[1]);
    } else if (swapMode == FT_SWAP_MODE_HALF) {
      // e.g. data with bruker groupDelay > 0,
      Array1D.swapHalf(reim[0]);
      Array1D.swapHalf(reim[1]);
    }
    return reim;
  }

  /// In-place phase correction (rotation in the complex plane)
  /// of the complex array with real part [real] and imaginary part [imag]
  /// according to
  ///  realcor[i] = real[i]*cos(a[i]) - imag[i]*sin(a[i])
  ///  imagcor[i] = imag[i]*cos(a[i]) + real[i]*sin(a[i])
  ///  a[i] = phc0 + i*phc1
  /// The phase angles [phc0], [phc1] are to be specified in degrees.
  static void phascor(
      Float64List real, Float64List imag, double phc0, double phc1) {
    if (real.length != imag.length) {
      throw "real and imaginary spectrum have unequal sizes: " +
          "${real.length} / ${imag.length}";
    }

    double toRad = math.pi / 180;
    double curreal, curimag;
    double phinc = phc1 * toRad / (real.length - 1);
    double curph = phc0 * toRad;
    for (int i = 0; i < real.length; i++) {
      curreal = real[i];
      curimag = imag[i];
      real[i] = curreal * math.cos(curph) - curimag * math.sin(curph);
      imag[i] = curimag * math.cos(curph) + curreal * math.sin(curph);
      curph += phinc;
    }
  }

  static final String dobc = "dobc", // bool
      bcstart = "bcstart", // int
      bcsize = "bcsize", // int
      doem = "doem", // bool
      dogm = "dogm", // bool
      doft = "doft", // bool

      complex = "complex", // bool
      ftzerofill = "ftzerofill", // bool
      ema = "ema", // double
      gmr = "gmr", // double,
      gms = "gms", // double
      groupDelay = "groupDelay", // String
      swapMode = "swapMode" // int,
      ;

  /// Processes [complexArray2D] by treating it as a 2D array with [nrows] (=1 for 1D).
  /// Each row is assumed to be complex: (re, im, re, im, ..)
  /// Returns null for 1D, while [complexArray2D] contain the processing result.
  /// Otherwise returns a list with 2 entries: The reals and the imaginaries (which
  /// can be an empty array if processing does not generate imaginaries).
  /// Processing means:
  /// bcoffset - em - gm - ft for each row of [complexArray2D],
  /// in this sequence, depending on args[dobc], ..doem, ..dogm, ..doft.
  /// Processing is performed for each of the rows.
  /// The function rcb, if not null, will be called with the row number
  /// after processing a row.
  /// If [userFTSize] is not null, the transform size  of each row
  /// is adjusted respectively: (zero-filling if bigger, cut-off if smaller)
  /// NOTE: bc/em/gm are do not consider [userFTSize].
  /// If a row is not a power of two, it is zero-filled to the next power of 2.
  static List<List<Float64List>>? combiTransform(
      Float64List complexArray2D,
      Map<String, Object?> args,
      int nrows,
      int userFTSize,
      RowDoneCallback rcb) {
    List<Float64List> real2d, imag2d, reim;
    int rowLength = complexArray2D.length ~/ nrows;
    real2d = []; //OBSOLETE//List<Float64List>();
    imag2d = []; //OBSOLETE//List<Float64List>();
    Float64List yValues;
    for (int i = 0; i < nrows; i++) {
      if (nrows == 1) {
        yValues = complexArray2D;
      } else {
        Float64List? tmp = Array1D.getRow(complexArray2D, i, nrows);
        if(tmp==null) return null;
        yValues = tmp;
      }

      if (args[dobc]!=null && args[dobc] is bool && args[dobc] as bool) {
        BaseLine.bcOffset(yValues, args[complex] as bool, args[bcstart] as int, args[bcsize] as int);
      }
      if(args[doem]!=null && args[doem] is bool && args[doem] as bool) {
        WinFunc.expMult(yValues, args[ema] as double, args[complex] as bool, args[groupDelay] as String);
      }
      if (args[dogm]!=null && args[dogm] is bool && args[dogm] as bool) {
        WinFunc.gaussMult(yValues, args[gmr] as double, args[gms] as double, args[complex] as bool);
      }

      if (args[doft] as bool) {
        yValues = Array1D.zeroFill(yValues, userFTSize, true);
        reim = transformShuffled(yValues, args[groupDelay] as String?, args[swapMode] as int);
        real2d.add(reim[0]); // after transform: reals+imags
        imag2d.add(reim[1]);
      }

      if (!(args[doft] as bool)) {
        // replace original fidvalues by result
        for (int k = 0; k < yValues.length; k++) {
          complexArray2D[i * rowLength + k] = yValues[k];
        }
      }

      if (rcb != null) rcb(i);
    }

    if (args[doft] as bool) {
      return [real2d, imag2d]; // Two 2D arrays
    } else {
      return null; // fidValues were replaced
    }
  }
}
