// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import "dart:typed_data";

/// This class provides utility functions for 1D arrays (vectors):
/// - adding arrays with various options
/// - Finding the minimum or maximum values with various options
/// - splitting, shuffling, swapping, extracting given index ranges
class Array1D {
  /// Makes 2 arrays "resultArray" (of half length) from [array]:
  /// resultArray[0] consists of the even indices of [array].
  /// resultArray[1] consists of the even indices of [array].
  /// Application: [array] represents a sequence complex numbers:
  ///   [real, imag, real, imag, ....]. Then:
  ///  resultArray[0] is the real part: [real, real, ...],
  ///  resultArray[1] is the imaginary part: [imag, imag, ...].
  ///  See also method [shuffle].
  static List<Float64List> unshuffle(Float64List array) {
    if (array.length % 2 != 0) {
      throw "unshuffle: Data length=${array.length} must be even!";
    }

    Float64List real = new Float64List(array.length ~/ 2);
    Float64List imag = new Float64List(array.length ~/ 2);
    int i = 0, ir = 0, ii = 0;
    while (true) {
      if (i > array.length - 1) break; // end reached
      real[ir] = array[i];
      i++;
      ir++;
      if (i > array.length - 1) break; // end reached
      imag[ii] = array[i];
      i++;
      ii++;
    }
    return [real, imag];
  }

  /// Merges the arrays [a1] and [a2] to a new array "result" with double size.
  /// The even indices of "result" will be filled with [a1], the odd ones
  /// of [a2].
  /// [a1] and [a2] must have the same length.
  /// See also method [unshuffle].
  static Float64List shuffle(Float64List a1, Float64List a2) {
    if (a1.length != a2.length) {
      throw "shuffle: Data lengths=${a1.length}/${a2.length} must be equal!";
    }

    Float64List result = new Float64List(a1.length * 2);
    for (int i = 0; i < a1.length; i++) {
      result[2 * i] = a1[i];
      result[2 * i + 1] = a2[i];
    }
    return result;
  }

  /// Reverses the order of the first half and the second half of [array] in place.
  /// Example:
  /// [1,2,3,4,5,6,7,8,9,10] => [5,4,3,2,1,10,9,8,7,6].
  /// See also method [swap].
  static void swapHalf(Float64List array) {
    int right;
    double temp;
    int halfsize = array.length ~/ 2;

    // reverse 1st half of array
    for (int i = 0; i < halfsize ~/ 2; i++) {
      right = halfsize - 1 - i;
      temp = array[i];
      array[i] = array[right];
      array[right] = temp;
    }

    // reverse 2nd half of array
    for (int i = 0; i < halfsize ~/ 2; i++) {
      right = array.length - 1 - i;
      temp = array[halfsize + i];
      array[halfsize + i] = array[right];
      array[right] = temp;
    }
  }

  /// Inverts the order of the first half and the second half of [array] in place.
  static void swapHalfStr(List<String> array) {
    int right;
    String temp;
    int halfsize = array.length ~/ 2;

    // reverse 1st half of array
    for (int i = 0; i < halfsize ~/ 2; i++) {
      right = halfsize - 1 - i;
      temp = array[i];
      array[i] = array[right];
      array[right] = temp;
    }

    // reverse 2nd half of array
    for (int i = 0; i < halfsize ~/ 2; i++) {
      right = array.length - 1 - i;
      temp = array[halfsize + i];
      array[halfsize + i] = array[right];
      array[right] = temp;
    }
  }

  /// Inverts the order of [array] in place.
  /// Reverses the order of [array] in place.
  /// Example:
  /// [1,2,3,4,5,6,7,8,9,10] => [10,9,8,7,6,5,4,3,2,1]
  /// See also method [swapHalf].
  static void swap(Float64List array) {
    int right;
    double temp;
    int halfsize = array.length;

    // reverse array
    for (int i = 0; i < halfsize ~/ 2; i++) {
      right = halfsize - 1 - i;
      temp = array[i];
      array[i] = array[right];
      array[right] = temp;
    }
  }

  /// Inverts the order of [array] in place.
  static void swapStr(List<String> array) {
    int right;
    String temp;
    int halfsize = array.length;

    // reverse array
    for (int i = 0; i < halfsize ~/ 2; i++) {
      right = halfsize - 1 - i;
      temp = array[i];
      array[i] = array[right];
      array[right] = temp;
    }
  }

  /// Considers [array] as a two-dimensional array with [nrows] rows. The rows,
  /// when appended to each other in sequence, are building up [array].
  /// Returns a new array consisting of the row [row] whose length will be
  /// (array.length / nrows).
  /// Returns null if [row] outside range.
  /// Conditions: row >= 0. If array.length cannot be divided by nrows without
  /// a remainder, the repective part of [array] can't be obtained.
  /// [array] will remain unmodified.
  static Float64List getRow(Float64List array, int row, int nrows) {
    if (row < 0 || row >= nrows) return null;
    int rowLength = array.length ~/ nrows;
    Float64List result = new Float64List(rowLength);
    for (int i = 0; i < rowLength; i++) {
      result[i] = array[row * rowLength + i];
    }
    return result;
  }

  /// Used in [addArrays]
  static int POS = 0, NEG = 1, POSNEG = 1;

  /// Returns the index-wise sum of [a1] and [a2] according to [type]:
  /// [type] = POS: adds the positive or zero values of [a1] and [a2] only
  /// [type] = NEG: adds the negative or zero values of [a1] and [a2] only
  /// [type] = POSNEG: normal add of all values
  /// Application: Building "projections".
  static Float64List addArrays(Float64List a1, Float64List a2, int type) {
    assert(a1.length == a2.length);

    Float64List result = new Float64List(a1.length);
    double sum;
    bool doSum;

    for (int i = 0; i < a1.length; i++) {
      sum = 0.0;
      doSum = false;
      if (type == POSNEG) {
        doSum = true;
      } else if (type == POS && a1[i] >= 0 && a2[i] >= 0) {
        doSum = true;
      } else if (type == NEG && a1[i] <= 0 && a2[i] <= 0) {
        doSum = true;
      }

      if (doSum) {
        sum = a1[i] + a2[i];
      }

      result[i] = sum;
    }

    return result;
  }

  /// Finds the maximum value of the numbers in [array].
  /// [array] may contain null values, they are skipped.
  /// Returns [the maximum, its index].
  /// If 2 maxima with the same value exist, the 1st one is returned.
  static List<dynamic> getMax(Float64List array) {
    double max_value = -double.maxFinite;
    int max_index = -1;
    if (array != null) {
      for (int i = 0; i < array.length; i += 1) {
        if (array[i] != null && array[i] > max_value) {
          max_value = array[i];
          max_index = i;
        }
      }
    }
    return [max_value, max_index];
  }

  /// Finds the positive-valued maximum value of the numbers in [array],
  /// assuming that [array]] contains values >= 0.
  /// [array] may contain null values, they are skipped.
  /// Returns [the maximum, its index].
  /// If 2 maxima with the same value exist, the 1st one is returned.
  static List<int> getMaxIntPos(List<int> array) {
    int max_value = -1;
    int max_index = -1;
    if (array != null) {
      for (int i = 0; i < array.length; i += 1) {
        if (array[i] != null && array[i] > max_value) {
          max_value = array[i];
          max_index = i;
        }
      }
    }
    return [max_value, max_index];
  }

  /// Finds the maximum value of the numbers in [array] in the range from
  /// [firstIx] to [lastIx], both indices inclusive.
  /// Both indices may have the values null (at the same time), the the entire
  /// [array] is searched.
  /// [array] may contain null values, they are skipped.
  /// Returns the maximum, if 2 maxima with the same value exist,
  /// the 1st one is returned.
  static double getMaxInRange(Float64List arr, int firstIx, int lastIx) {
    double max_value = -double.maxFinite;
    if (arr == null) return max_value;

    double curval;

    if (firstIx == null && lastIx == null) {
      firstIx = 0;
      lastIx = arr.length - 1;
    }

    int n = lastIx - firstIx + 1;
    if (n < 0) {
      int temp = lastIx;
      lastIx = firstIx;
      firstIx = temp;
    }

    if (lastIx > arr.length - 1) lastIx = arr.length - 1; // security check

    for (int i = firstIx; i <= lastIx; i += 1) {
      curval = arr[i];
      if (curval != null && curval > max_value) {
        max_value = curval;
      }
    }
    return max_value;
  }

  /// Finds the maximum value of the numbers in [array] in the range from
  /// [firstIx], inclusive, to [endix], exclusive. [incr] is an index increment.
  /// If, e.g., [incr]==1, only every second array element is considered.
  /// [array] may contain null values, they are skipped.
  /// Returns [the maximum, its index].
  /// If 2 maxima with the same value exist, the 1st one is returned.
  static List<dynamic> getMaxInRangeStep(
      Float64List array, int startix, int endix, int incr) {
    if (endix <= startix) return [array[startix], startix];

    double max_value = -double.maxFinite;
    int max_index = -1;
    if (array != null) {
      for (int i = startix; i < endix; i += incr) {
        if (array[i] != null && array[i] > max_value) {
          max_value = array[i];
          max_index = i;
        }
      }
    }
//  print("max=$max_value");
    return [max_value, max_index];
  }

  /// Finds the minimum value of the numbers in [array].
  /// [array] may contain null values, they are skipped.
  /// Returns [the minimum, its index].
  /// If 2 minima with the same value exist, the 1st one is returned.
  static List<dynamic> getMin(Float64List array) {
    double min_value = double.maxFinite;
    int min_index = -1;
    if (array != null) {
      for (int i = 0; i < array.length; i += 1) {
        if (array[i] != null && array[i] < min_value) {
          min_value = array[i];
          min_index = i;
        }
      }
    }
//  print("min=$min_value");
    return [min_value, min_index];
  }

  /// Returns the minimum value of the numbers in [array].
  static double getMinVal(Float64List array) {
    double min_value = double.maxFinite;
    double curval;
    if (array != null) {
      for (int i = 0; i < array.length; i += 1) {
        curval = array[i];
        if (curval != null && curval < min_value) {
          min_value = curval;
        }
      }
    }
    return min_value;
  }

  /// Finds the minimum value of the numbers in [array] in the range from
  /// [firstIx], inclusive, to [endix], exclusive. [incr] is an index increment.
  /// If, e.g., [incr]==1, only every second array element is considered.
  /// [array] may contain null values, they are skipped.
  /// Returns [the minimum, its index].
  /// If 2 minima with the same value exist, the 1st one is returned.
  static List<dynamic> getMinInRange(
      Float64List array, int startix, int endix, int incr) {
    if (endix <= startix) return [array[startix], startix];

    double min_value = double.maxFinite;
    int min_index = -1;
    if (array != null) {
      for (int i = startix; i < endix; i += incr) {
        if (array[i] != null && array[i] < min_value) {
          min_value = array[i];
          min_index = i;
        }
      }
    }
//  print("min=$min_value");
    return [min_value, min_index];
  }

  /// Returns a pair of doubles which are the max and min values contained in [array],
  /// in the following order: [min, max] or [max, min] depending on whether
  /// min occurs before max in the array, or the other way around.
  static List<double> getMinMaxVals(Float64List array) {
    int max_index = -1;
    double max_value = -double.maxFinite;
    double curval;
    for (int i = 0; i < array.length; i++) {
      curval = array[i];
      if (curval > max_value) {
        max_value = curval;
        max_index = i;
      }
    }

    var min_index = -1;
    var min_value = double.maxFinite;
    for (int i = 0; i < array.length; i++) {
      curval = array[i];
      if (curval < min_value) {
        min_value = curval;
        min_index = i;
      }
    }

    if (min_index <= max_index) {
      return [min_value, max_value];
    } else {
      return [max_value, min_value];
    }
  }

  /// Makes a 2D array from [array]. Each row of the 2D array will have
  /// [size] elements. The last row may be smaller if the length of [array]
  /// can't be divided by [size] without remainder.
  /// If [size] is 0 or equal or greater than the length of [array], the result
  /// will contain [array] as its single row.
  static List<Float64List> splitArray(Float64List array, int size) {
    int len = array.length;
    if (size >= len || size == 0) return [array];
    int nrows = len ~/ size;
    int lastsubrowLength = 0;
    if (len.remainder(size) > 0) {
      nrows++;
      lastsubrowLength = len.remainder(size);
    }

    List<Float64List> result = new List<Float64List>(nrows);
    int arrix = 0;
    for (int i = 0; i < nrows; i++) {
      int rowlen = size;
      if (i == nrows - 1 && lastsubrowLength > 0) rowlen = lastsubrowLength;
      Float64List row = new Float64List(rowlen);
      for (int k = 0; k < rowlen; k++) {
        row[k] = array[arrix++];
      }
      result[i] = row;
    }
    return result;
  }

  /// Rotates [array] to the right by [n] positions in place. For example,
  /// with n = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
  //  NOTE: Time is O(n*array.length)! Can be slow for big arrays!
  static void rotate(Float64List array, int n) {
    for (int i = 0; i < n; i++) {
      for (int j = array.length - 1; j > 0; j--) {
        double temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }

  /// Zero-fills [array] as follows and returns the result:
  /// 1) if [newLength] is different from array.length, the input
  ///   array is either cut, or extended by zeroes, respectively.
  /// 2) if the array is not a power of 2, it is extended and filled to the
  ///    next power of 2.
  /// 3) if [zeroFillExtend] is true, the array is doubled and filled.
  /// Returns a new array. Only if none of the above conditions are fulfilled
  /// the original array is returned.
  static Float64List zeroFill(
      Float64List array, int newLength, bool zeroFillExtend) {
    int newsize;

    Float64List result = array;

    int ftsize = array.length;
    if (newLength != null && newLength != ftsize) {
      ftsize = newLength;
      result = Float64List(ftsize); // is autofilled with 0.0
      for (int i = 0; i < array.length; i++) {
        if (i > ftsize - 1) {
          // must cut in this case
          break;
        }
        result[i] = array[i];
      }
    }

    // zero-fill array up to next power of two if array size is not a power of 2
    Float64List zeroFilledValues;
    if (!isPowerOfTwo(ftsize)) {
      newsize = nextPowerOfTwo(ftsize);
      zeroFilledValues = Float64List(newsize); // is autofilled with 0.0
      for (int i = 0; i < result.length; i++) {
        zeroFilledValues[i] = result[i];
      }
      result = zeroFilledValues;
    }

    // zero-filled array to become twice as big.
    // example: for spectrum real part to get the right size
    if (zeroFillExtend) {
      newsize = result.length * 2;
      zeroFilledValues = Float64List(newsize); // auto zero-filled
      for (int i = 0; i < result.length; i++) {
        zeroFilledValues[i] = result[i];
      }
      result = zeroFilledValues;
    }
    return result;
  }

  /// Returns true if [n] is a power of 2.
  static bool isPowerOfTwo(int n) {
    if ((n & (n - 1)) == 0) return true;
    return false;
  }

  /// Returns a number which:
  /// 1) is a power of 2, and 2) is >= n
  static int nextPowerOfTwo(int n) {
    n--;
    n |= n >> 1; // Divide by 2^k for consecutive doublings of k up to 32,
    n |= n >> 2; // and then or the results.
    n |= n >> 4;
    n |= n >> 8;
    n |= n >> 16;
    n++; // The result is a number of 1 bits equal to the number
    // of bits in the original number, plus 1. That's the
    // next highest power of 2.
    return n;
  }

  /// Computes a new array representing the integral function of [array] in
  /// the specified range.
  /// [array] represents the values of a function at equidistant x coordinates.
  /// [firstix] first index in [array] to contribute to integral.
  /// [lastix] last index in [array] to contribute to integral.
  /// Returns the integral function computed from [firstix] until [lastix]
  /// with index increment 1.
  /// The last value in the returned array is the integral value over the entire region.
  ///
  /// Integration is performed according to the trapezoidal rule:
  ///  I ~= (y0/2 + y1 + y2 + y3 +  ... + y[n-1]/2)/h
  /// with:
  ///  n data points y0...y[n-1]
  ///  h = (b-a)/(n-1) (n points, but n-1 intervals of this size)
  ///
  ///  h = 1 in our case.
  ///  [bias] and [slope] (if their abs. value is > 0) define a linear function
  ///  whose value at each point is added to the integral function.
  ///  It can be used as a linear baseline correction of the integral function.
  static Float64List integ_trapez(
      Float64List array, int firstix, int lastix, double bias, double slope) {
    assert(firstix >= 0 && lastix <= (array.length - 1));
    assert(lastix >= 0 && firstix <= (array.length - 1));

    int ixstart = firstix;
    int ixend = lastix;
    if (firstix == lastix) {
      Float64List integFunc = new Float64List(1);
      integFunc[0] = array[firstix];
      return integFunc;
    }

    if (firstix > lastix) // swap to obtain an increasing order
    {
      ixstart = lastix;
      ixend = firstix;
    }

    // As the bias reference we will used the first data point of the region.
    // One could also use an average over several points, however then we would possibly
    // give the user the ability to change this number.
    double biasref = 0.0;
    if (bias.abs() > 0.0000001) {
      biasref = array[firstix];
    }

    double totalBias = biasref * bias;

    Float64List integFunc = new Float64List(ixend - ixstart + 1);
//  double sum = biasref*bias + (ydata[ixstart] + (ixend - ixstart)*slope + ydata[ixend])/2;
    double sum = biasref * bias + array[ixstart] / 2;
    integFunc[0] = sum;

    for (int i = ixstart + 1; i < ixend; i++) {
      sum += totalBias + (i - ixstart) * slope + array[i];
      integFunc[i - ixstart] = sum;
    }

    sum += totalBias + ((ixend - ixstart) * slope + array[ixend]) / 2;
    integFunc[ixend - ixstart] = sum;

    return integFunc;
  }
}
