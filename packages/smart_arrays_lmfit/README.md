## Smart Arrays LM (Levenberg-Marquart) Fit


### What the package can do for you
The purpose of this package is to fit "experimental data" to a "fit function" representing a model for the experimental data. These must be specified as an array of x values and an an array of the respective y values.

This curve fitter is using the Levenberg-Marquardt algorithm. The Dart implementation here was derived from https://github.com/reptillicus/jsfit.

### Example
- The provided example can be directly executed via https://smart.specpad.bplaced.net/smart_arrays_lmfit/example.html.

- Or, download a package and execute the file `example/example.html` in your browser.


### The major API functionalities

- Class `LMfit`:
  Usage:
  1) call constructor
  2) call fit() or lmfit() ( = async version of fit())



### Related packages

[`smart_arrays_base`: Basic functions for 1D and 2D arrays]( https://pub.dartlang.org/packages/smart_arrays_base)

[`smart_arrays_numerics`: Numerics with 1D and 2D arrays]( https://pub.dartlang.org/packages/smart_arrays_numerics)

[`smart_arrays_compress`: Compress 1D and 2D arrays to a smaller size.]( https://pub.dartlang.org/packages/smart_arrays_compress)

[`smart_arrays_dbstore`: Store 1D and 2D arrays along with metadata on the local device.]( https://pub.dartlang.org/packages/smart_arrays_dbstore)

[`smart_arrays_plot_polyline`: Plot 1D arrays as polyline along with axes and more.]( https://pub.dartlang.org/packages/smart_arrays_plot_polyline)

[`smart_arrays_peaks`: Detect peaks in 1D and 2D arrays.]( https://pub.dartlang.org/packages/smart_arrays_peaks)

[`smart_arrays_contour_finder`: Contours the three-dimensional surface represented by the values f(x,y) of a matrix.]( https://pub.dartlang.org/packages/smart_arrays_contour_finder)

[`smart_lorentz-gauss`: Compute Lorentz-Gauss (pseudo-Voigt) line shapes.]( https://pub.dartlang.org/packages/smart_lorentz-gauss)

[`smart_signal_processing`: Fourier transform and more.]( https://pub.dartlang.org/packages/smart_signal_processing)

[`smart_dialogs`: Easy-to-use dialogs in Web applications]( https://pub.dartlang.org/packages/smart_dialogs)