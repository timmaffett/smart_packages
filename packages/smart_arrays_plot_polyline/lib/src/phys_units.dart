/// Helper class to convert array indices to "physical" units,
/// and to scale ("normalize") the values of the array.
/// Its is used to label x and y axes when the array is displayed as a graph,
/// e.g. using [Polyline].
class PhysUnits {
  /// Returns the physical unit for [index].
  /// Assume you have a data array of [n] points. You want to  assign each [index]
  /// of the array a "physical unit", e.g. seconds, Hertz, or whatever. Also
  /// assume that there is a linear relationship between indices and unit.
  /// [physStart] is the unit for index=0.
  /// [physWidth] is the unit range covered by all indices, from the first
  ///   to the last one.
  /// [center] defines whether the computed unit value corresponds exactly to
  ///   [index] (if false), or to the mean value between to subsequent indices
  ///   (if true). Either choice can be convenient, depending on the application.
  /// [increasing] defines whether [physXRangeStart] will be the smallest value
  ///   (true, increasing units), or the biggest one (false: decreasing unit).
  /// [calib] is an optional calibration factor. If not null, both [physStart]
  /// and [physWidth] are multiplied with calib.
  static double physFromIndex(double index, double physStart, double physWidth,
      int n, bool center, bool? increasing, double? calib) {
    if (calib != null) {
      physStart *= calib;
      physWidth *= calib;
    }
    double physX;
    double delta = physWidth / n; // we'll get n sections of length delta
    if (increasing==null || !increasing) delta = -delta;
    if (center) {
      physX = physStart + (index + 0.5) * delta;
    } else {
      // make increasing x values! (as expected by axis drawing)
      physX = physStart + index * delta;
    }
    return physX;
  }

  /// This is the inverse of [getPhysXFromDataIndex]:
  /// Returns the index corresponding to the physcial unit [physX].
  static double physToIndex(double physX, double physStart, double physWidth,
      int n, bool center, bool? increasing, double? calib) {
    if (calib != null) {
      physStart *= calib;
      physWidth *= calib;
    }
    double index;
    double delta = physWidth / n; // we'll get n sections of length delta
    if (increasing==null || !increasing) delta = -delta;

    if (center) {
      index = (physX - physStart) / delta - 0.5;
    } else {
      index = (physX - physStart) / delta;
    }

    return index;
  }

  /// Normalizes [num] such that [num2] would obtain the value
  /// [normalizedNum2]. Returns the respective new value for [num].
  /// If [normalizedNum2] is null, [num] is returned.
  static double normalize(double num, double num2, double normalizedNum2) {
    double normalizedY = num;
    if (normalizedNum2 != null && num2 != null && num2.abs() > 0.00000001) {
      normalizedY = (num * normalizedNum2) / num2;
    }
    return normalizedY;
  }

  /// Inverse of [normalize]: If [numNormalized] was computed by [normalize] using
  /// [num2] and [normalizedNum2], this method returns the original value [num]
  /// which was fed into [normalize].
  /// If [normalizedNum2] is null, [num] is returned.
  static double undoNormalize(
      double numNormalized, double num2, double normalizedNum2) {
    double unnormalized = numNormalized;
    if (normalizedNum2 != null && num2 != null) {
      unnormalized = (numNormalized * num2) / normalizedNum2;
    }
    return unnormalized;
  }
}
