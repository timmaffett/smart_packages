// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'dart:typed_data';

import 'package:smart_arrays_numerics/smart_arrays_numerics.dart';
import 'dart:math' as math;
import 'dart:async';

/// Fit function definition to be used as the fit model by [LMfit].
/// This is the function to which the data will be fitted ("model function").
/// Will be called by [LMfit] during its work. Computes the model function
/// value at position [x] from the current iterated model parameters [pars].
/// At the beginning [pars] are the initial parameters.
typedef double FitFunction(double x, List<double> pars);

/// A general curve fitter using an implementation of Levenberg-Marquardt,
/// based on https://github.com/reptillicus/jsfit.
/// Usage: 1) call constructor, 2) call fit()
/// NOTE:
/// On http://statpages.info/nonlin.html you can fit an arbitrary function
/// to arbitrary values, can be used for testing.
class LMfit {
  static final double EPSILON = 2.220446049250313e-16;
  Numerics numeric = Numerics();
//  Function pprint;
  double epsilon;

  FitFunction model;
  List<double> xvals, yvals, userWeights, initialParams;
  Map<String, List<String>> options;

  List<double> weights, params;
  List<bool> free;
  int nvals, npars, nfree, dof, numJac, iterationNumber;
  bool weightedFit;
  double lambda, lambdaPlus, lambdaMinus;
  String stopReason, warnings;
  Map<String, List<String>> fitterOptions;

  /// Creates instance for accessing the methods, especially fit().
  /// The other methods are helper function for fit().
  LMfit();

// These are the map entries returned by js fitting
  //  "params": \\The parameters that best fit the model
  //  "parameterErrors": \\Estimates of the errors on the parameters
  //  "parInfo": \\The parInfo array of objects that was used
  //  "hessian": \\The Hessian matrix
  //  "jac": \\The Jacobian of the last iteration
  //  "covar": \\Covariance matrix
  //  "chi2": \\The Chi^2
  //  "chi2red": \\The reduced Chi^2
  //  "dof": \\Number of degrees of freedom,
  //  "iterations": \\Total number of iterations,
  //  "stopReason": \\The reason for stopping,
  //  "initialParams": \\the initial parameters used in the fit,
  //  "xvals": \\An array of all the x values,
  //  "yvals": \\An array of all the y values,
  //  "residuals": \\An array of the residuals,
  //  "numJac": \\The number of times the jacobian was calculated,
  //  "time": \\Total run time for the fitting

  // These will be used in the code
  static String PARAMS = "params",
      PARAMETER_ERRORS = "parameterErrors",
      PARAM_DELTA_CONVERGE = "paramDeltaConverge",
      CHI2 = "chi2",
      CHI2RED = "chi2red",
      ITERATIONS = "iterations",
      STOP_REASON = "stopReason",
      INITIAL_PARAMS = "initialParams",
      TIME = "time",
      FIT_OPT_TOLERANCE = "ftol",
      MAX_ITERATIONS = "maxIterations",
      PAR_INFO = "parInfo";

  /// Fits the data [xvals] with their [yvals] to [userFitFunc] by iterating
  /// [initialParams]. If [userWeights] is not null, if must have the same length
  /// as [xvals] and [yvals] and applies the respective weight to each point.
  /// Otherwise, if null, alls weight are assumed to be 1.0.
  ///
  /// [options] allows one to override default values for the following map keys:
  ///  MAX_ITERATIONS: 200,
  ///  "ftol": 1e-10, // iterations terminate when reached
  ///  "paramDeltaConverge": 0.0001,
  ///  "parInfo":  ["name1 fixed 0.5 1.0", "name2 free null null"] // example!
  ///
  ///
  /// parInfo, if present in options: Sometimes we need to fix a parameter when fitting.
  /// Without modifying the underlying data model, we can hold parameters fixed
  /// during the fit.
  ///
  /// Generallly: List<String> parInfo =[entry1, entry2, ...].
  ///  with: entry = "parname fixed/free limit1 limit2"
  /// 1 String entry in the list for each parameter! The number of entries must be
  /// the same as the number of parameter.
  /// The limits specify in which interval a parameter may vary. "null" means no
  /// limits imposed.
  ///
  /// [fit] returns a map with the keys / values defined above. Note that
  /// the returned values are dynamic and need to be accessed correctly.
  /// The method [lmfit] of [LMfit] returns respective String conversions.
  Map<String, dynamic> fit(
      FitFunction userFitFunc,
      List<double> xvals,
      List<double> yvals,
      List<double> userWeights,
      List<double> initialParams,
      Map<String, List<String>> options) {
    this.model = userFitFunc;
    this.xvals = xvals;
    this.yvals = yvals;
    this.userWeights = userWeights;
    this.initialParams = initialParams;
    this.options = options;
    stopReason = null;
    warnings = "";
    init();
    return runFitter();
  }

  /// Calculates the residuals from the  y-values and the model [params]
  /// r_i = 1/w_i * (y_i - model(x_i, params))
  List<double> residuals(List<double> params) {
    List<double> resid = List<double>(xvals.length);
    for (int i = 0; i < xvals.length; i++) {
      double val = (1 / weights[i]) * (yvals[i] - model(xvals[i], params));
      resid[i] = val;
    }
    return resid;
  }

  /// Returns the sum of the squared residuals [params].
  double ssr(List<double> params) {
    double ssr1 = numeric.dotVV(residuals(params), residuals(params));
    return ssr1;
  }

  double chi2(List<double> params) {
    double chi2 = 0.0, obs, exp, w;

    for (int i = 0; i < xvals.length; i++) {
      exp = model(xvals[i], params);
      obs = yvals[i];
      w = weights[i];
      chi2 += math.pow((obs - exp), 2) / math.pow(w, 2);
    }
    return chi2;
  }

  /// Passing in an m x n array, returns an array with only the main diagonals,
  /// all the rest are zeros
  List<List<double>> diagonal(List<List<double>> arr) {
    int nrows = arr.length;
    int ncols = arr[0].length;
    List<List<double>> out;
    out = numeric.createMatrix(nrows, ncols, 0.0);

    for (int i = 0; i < nrows; i++) {
      for (int j = 0; j < ncols; j++) {
        if (i == j) {
          out[i][j] = arr[i][j];
        }
      }
    }
    return out;
  }

  /// Returns sig^2 = r(p)T * r(p) / (m -n) , m=# of obs, n = #of free params
  double totalError() {
    List<double> r = residuals(params);
    double totalError = numeric.dotVV(r, r) / dof;
    return totalError;
  } // totalError

  /// Calculate a numeric jacobian of the parameters.
  /// Jt•J is the approximation of the hessian
  List<List<double>> jacobian(List<double> params) {
    int ncols = params.length;
    List<List<double>> fjac = numeric.createMatrix(xvals.length, ncols, 0);
    List<double> modParamsHigh, modParamsLow;
    double h,

        // fjac = [],

        left,
        right;

    for (int i = 0; i < ncols; i++) {
      modParamsLow = params.sublist(0);
      modParamsHigh = params.sublist(0);
//        modParamsLow = params.slice(0);
//        modParamsHigh = params.slice(0);
      //Scale the step to the magnitude of the paramter
      h = (params[i] * epsilon).abs();
      if (h < 1.0e-25) {
        h = epsilon;
      }
      modParamsLow[i] = params[i] - h;
      modParamsHigh[i] = params[i] + h;
      for (int j = 0; j < xvals.length; j++) {
        left = model(xvals[j], modParamsHigh);
        right = model(xvals[j], modParamsLow);
        fjac[j][i] = ((left - right) / (2 * h)) / weights[j];
      }
    }
    //update the number of times jac has been calculated
    numJac++;
    return fjac;
  } // jacobian

  /// Returns H = 2 * Jt•J
  List<List<double>> hessian(List<double> params) {
    List<List<double>> jac = jacobian(params);
    List<List<double>> jacTrans = numeric.transpose(jac);
    List<List<double>> hes = numeric.dotCM(2.0, numeric.dotMM(jacTrans, jac));

    //fixed parameters should have a zero in the hessian
    // dim = numeric.dim(hes);
    // for (var i=0; i<dim[0]; i++) {
    //   if (free[i] === 0) {
    //     hes[i][i] = 0.0;
    //   }
    // }
    return hes;
  } // hessian

  ///  If the minimisation uses the weighted least-squares function
  ///  f_i = (Y(x, t_i) - y_i) / \sigma_i then the covariance matrix
  ///  gives the statistical error on the best-fit parameters resulting from
  ///  the Gaussian errors \sigma_i onthe underlying data y_i.
  ///  This can be verified from the relation \delta f = J \delta c and the
  ///   fact that the fluctuations in f from the data y_i are normalised by
  ///   \sigma_i and so satisfy <\delta f \delta f^T> = I.
  ///  For an unweighted least-squares function f_i = (Y(x, t_i) - y_i) t
  ///  he covariance matrix above should be multiplied by the variance of the
  ///  residuals about the best-fit \sigma^2 = \sum (y_i - Y(x,t_i))^2 / (n-p)
  ///  to give the variance-covariance matrix \sigma^2 C
  ///  . This estimates the statistical error on the best-fit
  ///  parameters from the scatter of the underlying data.
  List<List<double>> covar(List<double> params) {
    List<List<double>> covar1;
    List<List<double>> hes = hessian(params);
    // the following limit is arbitrary, BG
    if ((numeric.sumM(hes)).abs() > 1.0e-8) {
      covar1 = numeric.invMatrix(hes);
    } else {
      covar1 = numeric.createMatrix(hes.length, hes[0].length, 0.0);
    }
    if (!weightedFit) {
      covar1 = numeric.dotCM(totalError(), covar1);
    }
    return covar1;
  } // covar

  /// Returns the diagonal elements of the covariance matrix.
  List<double> parameterErrors() {
    List<double> out = List(npars);
    out.fillRange(0, npars, 0.0);
    List<double> parameterErrors;
    List<List<double>> covar1 = covar(params);
    parameterErrors = numeric.sqrtV(numeric.getDiag(covar1));
    //Patch in the fixed parameters. . .
    for (int i = 0; i < params.length; i++) {
      if (free[i]) {
        out[i] = parameterErrors[i];
      } else {
        out[i] = 0.0;
      }
    }
    return out;
  } // parameterErrors

  /// Fixes any parameters if they are going out of bounds
  /// Generallly: List<String> parInfo =[entry1, entry2, ...].
  /// with: entry = "parname fixed/free limit1 limit2"
  /// Example:
  /// parInfo = ["name1 fixed 0.5 1.0", "name2 free null null", ...]
  List<double> fixParameters(List<double> pars) {
    //print("jsfit 2000=$pars");
    //print("jsfit 2001=${fitterOptions.runtimeType}");
    //print("jsfit 2002=${fitterOptions}");
    List<String> parInfo = fitterOptions["parInfo"];
    //print("jsfit 2003=${parInfo}");
    if (parInfo != null) {
      for (int k = 0; k < pars.length; k++) {
        //set the limits, if they exist in the parInfo array
        String entry = parInfo[k];
        if (entry == null) {
          continue;
        }
        List<String> entryItems = entry.split(" ");
        if (entryItems[2] != "null" && entryItems[3] != "null") {
          double limit1 = double.parse(entryItems[2]);
          double limit2 = double.parse(entryItems[3]);
          if (pars[k] < limit1) {
            pars[k] = limit1;
          }
          if (pars[k] > limit2) {
            pars[k] = limit2;
          }
        }

        //reset the fixed params to the initial values
        if (entryItems[1] == "fixed") {
          pars[k] = initialParams[k];
        }
      }
    }
    return pars;
  } // fixParameters

  /// Levenberg-Marquardt step
  List<double> lmStep(List<double> params, List<List<double>> jac) {
    List<double> newParams;
    List<double> allDelta = List(npars);
    allDelta.fillRange(0, npars, 0.0);

    // jac = jacobian(params);
    //print("jsfit 4900=${jac.length} ${jac[0].length}");
    List<List<double>> jacTrans = numeric.transpose(jac);
    //print("jsfit 4901=${jacTrans.length} ${jacTrans[0].length}");
    List<List<double>> jtj = numeric.dotMM(jacTrans, jac);
    //print("jsfit 4902=${jtj.length}  ${jtj[0].length}");
    List<List<double>> diag = diagonal(jtj);
    //print("jsfit 4903=${diag.length} ${diag[0].length}");
    List<double> cost_gradient = numeric.dotMV(jacTrans, residuals(params));
    //print("jsfit 4904=${cost_gradient.length}");

    List<List<double>> g = numeric.addMM(jtj, numeric.dotCM(lambda, diag));
//      List<int> gdim = numeric.dim(g);

    //TODO: Q R fact orization? this just sets any zero elements in the
    // diagonals to be small but non-zero ( /100 is arbitrary, BG)
    for (int i = 0; i < g.length; i++) {
      if (g[i][i].abs() < epsilon / 100) {
        g[i][i] = epsilon;
      }
    }

    //print("jsfit 5000=${cost_gradient.length} ${g.length} ${g[0].length}");
    List<List<double>> inverse = numeric.invMatrix(g);
    //print("jsfit 5001=$cost_gradient ${inverse.length} ${inverse[0].length}");
    List<double> delta = numeric.dotMV(inverse, cost_gradient);
    //print("jsfit 5002=${cost_gradient.length}");
    // console.log(delta);

    //Patch in the fixed parameters. . .
    for (int i = 0; i < free.length; i++) {
      if (free[i]) {
        allDelta[i] = delta[i];
      }
    }

    // delta = numeric.mul(delta, 1.0)
    newParams = numeric.addVV(params, allDelta);
    // console.log(params, newParams, allDelta)
    return newParams;
  } // lmStep

  /// Performs the minimization iteratively
  List<double> iterate(List<double> params) {
    //print("jsfit 4000=${params}");
    List<List<double>> fjac = jacobian(params);
    //print("jsfit 4001=${fjac}");
    double cost = 0.5 * ssr(params);
    //print("jsfit 4002=${cost}");
    List<double> newParams = lmStep(params, fjac);
    //print("jsfit 4003=${newParams}");
    //fix the params that are fixed or limited
    newParams = fixParameters(newParams);
    //print("jsfit 4004=${newParams}");
    double newCost = 0.5 * ssr(newParams);
    //print("jsfit 4005=${newCost}");
    // console.log(cost, newCost, params, newParams)
    if (newCost < cost) {
      lambda *= lambdaMinus;
    }
    // console.log(lambda, cost, newCost, params, newParams);
    //this is the inner loop, where we keep increasing the damping parameter if
    //the cost is greater
    while (newCost > cost) {
      lambda *= lambdaPlus;
      newParams = lmStep(params, fjac);
      newCost = 0.5 * ssr(newParams);
    }
    return newParams;
  } // iterate()

  //the method for the fitter. All other methods are really internal.
  Map<String, dynamic> runFitter() {
    List<double> paramEstimate = params, oldParams;
    double oldSSR, converge, ssr1 = ssr(paramEstimate);
    int t1 = DateTime.now().millisecondsSinceEpoch;

    //reset lambda each time a new fit is called?
    lambda = 0.01;
    params = initialParams;
    iterationNumber = 0;

    int maxIt = int.parse(fitterOptions[MAX_ITERATIONS][0]);
    double ftol = double.parse(fitterOptions[FIT_OPT_TOLERANCE][0]);
    for (int i = 0; i < maxIt; i++) {
      //print("jsfit 3000=${fitterOptions.runtimeType}");
      //print("jsfit 3001=${fitterOptions}");
      iterationNumber++;
      //print("jsfit 3002=${iterationNumber}");
      oldParams = params;
      //print("jsfit 3003=${oldParams}");
      oldSSR = ssr(oldParams);
      //print("jsfit 3004=${oldSSR}");
      params = iterate(oldParams);
      //print("jsfit 3005=${params}");
      ssr1 = ssr(params);
      //print("jsfit 3006=${ssr1}");

      //print("jsfit 3011=${fitterOptions[FIT_OPT_TOLERANCE].runtimeType}");
      //print("jsfit 3012=${fitterOptions[FIT_OPT_TOLERANCE]}");
      //If the SSR is really small, that means we are getting a perfect fit, so stop
      if (ssr1 < ftol) {
        stopReason = FIT_OPT_TOLERANCE;
        //print("jsfit 3013=${stopReason}");
        break;
      }
      //print("jsfit 3014=${stopReason}");

      //check for convergence based on change in SSR over last iterations
      converge = ((ssr1 - oldSSR) / ssr1).abs();
      if (converge < ftol) {
        stopReason = "convergence";
        break;
      }
    }
    if (iterationNumber == int.parse(fitterOptions[MAX_ITERATIONS][0])) {
      stopReason = MAX_ITERATIONS;
    }
    //print("jsfit 1000=$params");
    return {
      PARAMS: params,
      PARAMETER_ERRORS: parameterErrors(),
      "parInfo": fitterOptions["parInfo"],
      "hessian": hessian(params),
      "jac": jacobian(params),
      "covar": covar(params),
      CHI2: chi2(params),
      CHI2RED: chi2(params) / dof,
      "dof": dof,
      ITERATIONS: iterationNumber,
      STOP_REASON: stopReason,
      INITIAL_PARAMS: initialParams,
      "xvals": xvals,
      "yvals": yvals,
      "residuals": residuals(params),
      "numJac": numJac,
      TIME: DateTime.now().millisecondsSinceEpoch - t1,
      "warnings": warnings
    };
  } // runFitter()

  /// init. variables
  init() {
//      //print("yy2000=${numeric}");
    //print("yy2001=${numeric.epsilon}");
    //the smallest possible delta due to floating point precision.
    epsilon = EPSILON * 100;
//      //print("yy2002=${epsilon"]}");
//      //print("yy2003=${data}");
    //store the x values on self
    //number of observations
    nvals = xvals.length;
    //the weights array, if it exists. If not, set all points to have unit weights
    if (userWeights == null || userWeights.length != nvals) {
      weightedFit = false;
      weights = List(nvals);
      weights.fillRange(0, nvals, 1.0);
    } else {
      weights = userWeights;
      weightedFit = true;
    }

    //store the parameters on self
    params = initialParams;
    npars = initialParams.length;
    //An array indicating if the parameter is free of fixed
    free = List(npars);
    free.fillRange(0, npars, true);
    //the number of free parameters
    nfree = params.length;
    //the number of degrees of freedom
    dof = nvals - nfree;

    //the l-m damping parameter
    lambda = 0.1;
    //the lambda up paramaeter
    lambdaPlus = 5.0;
    //the lambda decrease parameter
    lambdaMinus = 0.5;
    //stopping reason
    stopReason = null;
    //number of jac calcs
    numJac = 0;
    //the default fitter options
    Map<String, List<String>> defaultOptions = {
      MAX_ITERATIONS: ["200"],
      "debug": ["false"],
      FIT_OPT_TOLERANCE: ["1e-10"],
      "chart": ["false"],
      "paramDeltaConverge": ["0.0001"],
    };

    if (xvals.length != yvals.length) {
      throw 'x and y arrays are different lengths';
    }

    if (xvals.length != weights.length) {
      throw 'x and weights arrays are different lengths';
    }

    //merge in any options that are passed in into the defaultOptions object
    fitterOptions = defaultOptions;
    for (String key in options.keys) {
      if (options[key] != null) {
        fitterOptions[key] = options[key];
      }
    }

    //Make sure that parInfo, if it came through, is the same length as the
    //parameter array:
    // parInfo = ["name1 fixed limit1 limit2", "name2 free limit1 limit2", ...]
    List<String> parInfo = fitterOptions["parInfo"];

    nfree = npars;
    if (parInfo != null) {
      if (parInfo.length != npars) {
        throw 'parInfo and params must be SAME length';
      }

      String entry;
      // parameter name not evaluated, expect correct sequence of entries.
      for (int i = 0; i < npars; i++) {
        entry = parInfo[i];
        if (entry == null) {
          continue;
        }
        if (entry.split(" ")[1] == "fixed") {
          free[i] = false;
          nfree--;
        }
      }
      //degrees of freedom
      dof = nvals - nfree;
    }
  } // init()

//some commonly used models.
//  Map<String, Function> models = {
//  Map<String, Function> models = {
//    "exponential": (x, params) {
//      var C = params[0], A = params[1], k = params[2];
//      return (C + A * math.exp(-k * x));
//    },
//    "flat": (x, params) {
//      var k = params[0];
//      return k;
//    },
//    "linear": (x, params) {
//      var m = params[0], b = params[1];
//      return (m * x + b);
//    },
//    "sine": (x, params) {
//      var C = params[0], A = params[1], w = params[2];
//      return C + A * math.sin(w * x);
//    },
//    "gaussian": (x, params) {
//      var C = params[0], A = params[1], mu = params[2], sig = params[3];
//      return C + A * math.exp(-(math.pow(x - mu, 2)) / (2 * math.pow(sig, 2)));
//    },
//    "rosenbrock": (X, params) {
  ///*
//         f(x,y)=(1-x)^2+100(y-x^2)^2
//         Has a global minimum at (1, 1)
//         */
//
//      var x = params[0], y = params[1];
//      return math.pow((1 - x), 2) + 100 * math.pow((y - math.pow(x, 2)), 2);
//    }
//  }; // Map models

  /// A general curve fitter using Levenberg-Marquardt, based on class [LMfit].
  static final String FIT_ERROR = "fiterror";

  /// See [fit] function for a description of the parameters.
  /// This method is an async version of [fit] on the one hand, and returns the fit
  /// result stringified, on the other, rather than as dynamic values.
  /// NOTE: If [xvals] is null, it is created automatically with the values
  ///  [0.0, 1.0, 2.0, ... , yvals.length-1].
  Future<Map<String, List<String>>> lmfit(
      FitFunction fitFunction,
      List<double> xvals,
      List<double> yvals,
      List<double> initialPars,
      Map<String, List<String>> fitOptions) async {
    if (xvals == null) {
      xvals = List<double>(yvals.length);
      for (int i = 0; i < yvals.length; i++) {
        xvals[i] = i.toDouble();
      }
    }
    Completer<Map<String, List<String>>> cpl = Completer();

    LMfit lmfit = LMfit();
    Map<String, List<String>> fitResult = {};
    List<String> li;
    List<double> userWeights; // no non-null such weights for now
    try {
      //print("fitcurve 1000=$initialPars");
      Map<String, dynamic> fitResultSD = lmfit.fit(
          fitFunction, xvals, yvals, userWeights, initialPars, fitOptions);
      //print("fitcurve 1010=$fitResultSD");
      // Here we must convert all needed dynamic result values to List<String> type
      // so that tey can be accessed in a type-secure manner.
      li = [];
      for (int i = 0; i < fitResultSD["params"].length; i++) {
        li.add(fitResultSD["params"][i].toString());
      }
      fitResult[LMfit.PARAMS] = li;
      li = [];
      for (int i = 0; i < fitResultSD["parameterErrors"].length; i++) {
        li.add(fitResultSD["parameterErrors"][i].toString());
      }
      fitResult[LMfit.PARAMETER_ERRORS] = li;
      fitResult[LMfit.CHI2] = <String>[fitResultSD["chi2"].toString()];
      fitResult[LMfit.CHI2RED] = <String>[fitResultSD["chi2red"].toString()];
      fitResult[LMfit.ITERATIONS] = <String>[
        fitResultSD["iterations"].toString()
      ];
      fitResult[LMfit.STOP_REASON] = <String>[
        fitResultSD["stopReason"].toString()
      ];
      li = [];
      for (int i = 0; i < fitResultSD["initialParams"].length; i++) {
        li.add(fitResultSD["initialParams"][i].toString());
      }
      fitResult[LMfit.INITIAL_PARAMS] = li;
      li = [];
      li.add(fitResultSD["time"].toString());
      fitResult[LMfit.TIME] = li;
    } catch (e) {
      //print("LMfit: fitcurve 1000error=${e}");
      fitResult = {
        FIT_ERROR: ["LMfit: 1000 error=<br>" + "${e}"]
      };
    }
    cpl.complete(fitResult);
    return Future.value(fitResult);
  }

  /// Convenience method as an alternative for [lmfit] where x- and y values
  /// can be specified as Float64List instead of List<double>.
  Future<Map<String, List<String>>> lmfitF64(
      FitFunction fitFunction,
      Float64List xvalsF64,
      Float64List yvalsF64,
      List<double> initialPars,
      Map<String, List<String>> fitOptions) async {
    List<double> xvals = List.from(xvalsF64);
    List<double> yvals = List.from(yvalsF64);
    return lmfit(fitFunction, xvals, yvals, initialPars, fitOptions);
  }
}
