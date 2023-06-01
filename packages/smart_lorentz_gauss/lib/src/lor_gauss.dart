// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'dart:typed_data';
import 'dart:math' as math;

/// This class provides functionalities to compute an n-dimensional mixed
/// Lorentz-Gauss line shape, also called an n-dimensional Pseudo-Voigt
/// function V(x) (see https://de.wikipedia.org/wiki/Voigt-Profil):
///
/// V(x) = m*L(x) + (1-m)*G(x), m = 0...1
/// where L is a Lorentzian and G a Gaussian line shape.
/// In detail:
/// V(x1, ... , xn)) = Product(i=1,n){
///  a * (m[i]) / ( (1+ FLORENTZ*((x[i]-c[i])/w[i])^2) ) +
///  a * (1-m[i])*exp(-FGAUSS*((x[i]-c[i])/w[i])^2)}
class LorentzGauss extends LineShapeND {
  /// defaults for [fGauss] and [fLorentz]
  static final double FGAUSS = 4.0 * math.log(2);
  static const double FLORENTZ = 4.0;

  /// centers, widths, L/G mixing factors
  List<double> c, w, m;
  // amplitude
  double a;

  /// combination of parameters above in an array
  late List<double> pars;

  /// line shape dimension
  int dim = 0;

  /// factors for shape consistency (see constructor comment)
  late double fGauss, fLorentz;

  /// Constructs a mixed Gauss-Lorentz shape defined by:
  /// [a] - amplitude,
  /// [c] - center,
  /// [w] - width,
  /// [m] - mixing factors (0 <= m <= 1).
  ///
  /// If  m=1 (pure Lorentzian) then w is the "Lorentzian width".
  /// If  m=0 (pure Gaussian), then w is the "Gaussian sigma".
  ///
  /// The dimension n of c,w,m must be the same (>0) and define the dimension of
  /// the shape. Otherwise an exception is thrown.
  ///
  /// [fGauss] and [fLorentz] will take on default values if omitted.
  /// Different literature references are using different defaults. The factors
  /// used here ensure that [w] is the line width at half maximum height
  /// for L, G, and mixed mode.
  LorentzGauss.fromPars(this.a, this.c, this.w, this.m,
      [double? fGauss, double? fLorentz]) {
    if (fGauss == null) fGauss = FGAUSS;
    if (fLorentz == null) fLorentz = FLORENTZ;
    this.fGauss = fGauss;
    this.fLorentz = fLorentz;

    dim = c.length;
    if (dim != w.length || dim != m.length) {
      throw "List size error\n. Expected: $dim";
    }

    pars = List<double>.filled(1 + c.length + w.length + m.length,0.0);
    pars[0] = a;
    for (int i = 0; i < dim; i++) {
      pars[i + 1] = c[i];
      pars[i + 1 + dim] = w[i];
      pars[i + 1 + dim + dim] = m[i];
    }
    shapeParameters = pars;
  }

  /// Returns the value of this mixed Gauss-Lorentz shape
  /// at the n-dimensional point [x].
  /// Throws Exception if the dimension of [x] is not in accordance with
  /// the parameters specified at shape construction time.
  double getValueAt(List<double> x) {
    if (dim != x.length) {
      throw "Illegal dimension. Should be $dim";
    }

    double voigt = 1.0;
    double lorentz = 0.0, gauss = 0.0, factor = 0.0;
    for (int i = 0; i < dim; i++) {
      factor = (x[i] - c[i]) / (1.0 * w[i]); // stored widths are half-widths
      factor *= factor;

      lorentz = m[i] / (1 + fLorentz * factor);
      // speed up: only compute exp() if no pure Lorentzian (0 <= m[i] <= 1
      if ((1 - m[i]) > 0.001) {
        gauss = (1 - m[i]) * math.exp(-fGauss * factor);
        voigt *= lorentz + gauss;
      } else {
        voigt *= lorentz;
      }
    }
    voigt *= a;
    return voigt;
  }

  /// Returns an array containing a one-dimensional mixed Gauss-Lorentz shape
  /// consisting of [npoints] defined by:
  /// [a] - amplitude,
  /// [c] - center,
  /// [w] - width,
  /// [m] - mixing factors (0 <= m <= 1).
  ///
  /// If  m=1 (pure Lorentzian) then w is the "Lorentzian width".
  /// If  m=0 (pure Gaussian), then w is the "Gaussian sigma".
  ///
  /// If [noiseAmpl] is not null, random noise will be added to each point
  /// whose amplitude is controlled by this parameter, e.g. 0.005, as fraction
  /// of the current shape value.
  ///
  /// [fGauss] and [fLorentz] will take on default values if omitted.
  /// Different literature references are using different defaults. The factors
  /// used here ensure that [w] is the line width at half maximum height
  /// for L, G, and mixed mode.
  /// [c], [w] must be in the range (0, rows_cols)
  static Float64List array1D(
      int npoints, double a, double c, double w, double m, double? noiseAmpl,
      [double? fGauss, double? fLorentz]) {
    LorentzGauss lg = LorentzGauss.fromPars(a, [c], [w], [m], fGauss, fLorentz);
    Float64List yvals = Float64List(npoints);
    math.Random rand = math.Random();
    for (int i = 0; i < npoints; i++) {
      double x = i.toDouble();
      yvals[i] = lg.getValueAt([x]);
      if (noiseAmpl != null) {
        double noise = (2 * rand.nextDouble() - 1.0) * yvals[i] * noiseAmpl;
        yvals[i] += noise;
      }
    }
    return yvals;
  }

  /// Returns a matrix containing a two-dimensional mixed Gauss-Lorentz shape
  /// consisting of [rows_cols][0] rows and [rows_cols][1] columns
  /// Check method [array1D] for the other parameters. However, [c], [w], [m]
  /// are arrays of length 2.
  /// [c], [w] must be in the range (0, rows_cols[0/1])
  static List<Float64List> array2D(List<int> rows_cols, double a,
      List<double> c, List<double> w, List<double> m, double? noiseAmpl,
      [double? fGauss, double? fLorentz]) {
    LorentzGauss lg = LorentzGauss.fromPars(a, c, w, m, fGauss, fLorentz);

    int nrows = rows_cols[0], ncols = rows_cols[1];
    List<Float64List> matrix = List<Float64List>.filled(nrows,Float64List(ncols));
    math.Random rand = math.Random();
    for (int i = 0; i < nrows; i++) {
      Float64List currow = matrix[i];
      for (int k = 0; k < ncols; k++) {
        double zval = lg.getValueAt([i.toDouble(), k.toDouble()]);
        if (noiseAmpl != null) {
          double noise = (2 * rand.nextDouble() - 1.0) * zval * noiseAmpl;
          zval += noise;
        }
        currow[k] = zval;
      }
    }
    return matrix;
  }
}

/// Defines an n-dimensional abstract shape.
abstract class LineShapeND {
  Object? shapeParameters; // e.g. List<double>, ...
  double integral=0.0;
  bool integralCalculated = false;
  final String NOT_IMPL = "Method not implemented";

  /// pars - the parameters of the shape. Can be anything.
  /// For Gauss-Lorentz, e.g. a List<double> (see there)
  fromList(Object pars) {
    shapeParameters = pars;
  }

  /// Calculates and returns the values of the Shape at the given position [x].
  /// [x].length is the dimension of the shape, so a position has n coordinate values.
  double getValueAt(List<double> x);

  /// Calculates and returns the values of the Shape at the given positions [xxx].
  /// xxx.length is the dimension of the shape, so a position has n coordinate values.
  ///  xxx[0].length is the number of points for which to calculate the shape value.
  ///  xxx[n][p]  the n-dimensional coordinate of a point p
  /// [integralType] - how the integral is computed. 0=sum of all values.
  ///   -1 = compute no integral
  Float64List getValuesAt(List<List<double>> xxx, int integralType) {
    int dim = xxx.length;
    int npoints = xxx[0].length;
    Float64List values = Float64List(npoints);
    List<double> curpoint = List<double>.filled(dim,0.0);

    integral = 0.0;
    for (int i = 0; i < npoints; i++) {
      for (int k = 0; k < dim; k++) {
        curpoint[k] = xxx[k][i];
      }

      values[i] = getValueAt(curpoint);

      if (integralType == 0) {
        integral += values[i];
      }
    }

    integralCalculated = false;
    if (integralType != -1) {
      integralCalculated = true;
    }
    return values;
  }

  /// Returns the integral of this shape if its was computed (see [getValuesAt],
  /// otherwise throws.
  double getIntegral() {
    if (!integralCalculated) {
      throw "Integral not available.\nCall getValuesAt(..) first.";
    }
    return integral;
  }

  /// Returns teh shape parameters
  Object? getShapeParams() {
    return shapeParameters;
  }

  /// Returns an estimate of the width at half height of the peak at [peakindex]
  /// of the data given by [array].
  /// This assumes a Gauss/Lorentz type line shape.
  /// Typically used if [array] contains experimental data of Gauss/Lorentz type.
  static double getWidth(Float64List array, int peakindex) {
    double peakheight = array[peakindex];
    double halfheight = peakheight / 2;
    int leftpos = peakindex - 1, rightpos = peakindex + 1;

    // move down at the left of the peak
    while (true) {
      if (!(leftpos >= 1 && leftpos < array.length)) break;
      if (array[leftpos] < halfheight) break;
      if (array[leftpos - 1] > array[leftpos]) break; // raises again
      leftpos--;
    }

    // move down at the right of the peak
    while (true) {
      if (!(rightpos >= 0 && rightpos < array.length - 1)) break;
      if (array[rightpos] < halfheight) break;
      if (array[rightpos + 1] > array[rightpos]) break; // raises again
      rightpos++;
    }

    double result = (rightpos - leftpos).toDouble().abs();
    return result;
  }
}
