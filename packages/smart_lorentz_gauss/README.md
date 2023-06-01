## Smart Lorentz Gauss


### What the package can do for you
This package provides functionalities to compute an n-dimensional mixed Lorentz-Gauss line shape, also called an n-dimensional Pseudo-Voigt function. Typically such functions occur in spectroscopic data originating from electro-magnetic radiation. The function can for example be used for fitting or deconvolution of such data, or for simulating (computing) spectra, i.e. as a superposition of several shapes with different parameters.

### Example
- The provided example can be directly executed via https://timmaffett.github.io/smart_packages/smart_lorentz_gauss/example.html. The result will be displayed in the browser.

- Or, download the package and execute the file `example/example.html` in your browser.


### The major API functionalities
 
- class `LorentzGauss`
1) The following example constructs a LorentzGauss shape with the given amplitude, center, width, and Gaussian fraction.
  
   `LorentzGauss lg = new LorentzGauss.fromPars(amplitude, [center], [width], [0.2]);`
   
2) The following example computes the value of the above shape value at position x.

   `double val = lg.getValueAt(x]);`
   
3) The following example computes an array of size NPOINTS containing a pure Lorentzian with amplitude 100. The maximum will be at index NPOINTS/4, and line width 20 points at half maximum height.

   `Float64List lor = LorentzGauss.array1D(NPOINTS,  100.0,  NPOINTS~/4,  20, 0.0, null);`   
   
4) The methods `array1D` and `array2D` return an array or a matrix containing a 1D or 2D Lorentz-Gauss function, respectively.

5) The class `Spectrum2D` computes a sum of 2D Lorentz-Gauss functions, a '2D spectrum' of such functions.
      

### Related packages

[`smart_arrays_base`: Basic functions for 1D and 2D arrays]( https://pub.dartlang.org/packages/smart_arrays_base)

[`smart_arrays_numerics`: Numerics with 1D and 2D arrays]( https://pub.dartlang.org/packages/smart_arrays_numerics)

[`smart_arrays_compress`: Compress 1D and 2D arrays to a smaller size.]( https://pub.dartlang.org/packages/smart_arrays_compress)

[`smart_arrays_sample_data`: Computes 1D and 2D arrays containing sample data.]( https://pub.dartlang.org/packages/smart_arrays_sample_data)

[`smart_arrays_dbstore`: Store 1D and 2D arrays along with metadata on the local device.]( https://pub.dartlang.org/packages/smart_arrays_dbstore)

[`smart_arrays_plot_polyline`: Plot 1D arrays as polyline along with axes and more.]( https://pub.dartlang.org/packages/smart_arrays_plot_polyline)

[`smart_arrays_peaks`: Detect peaks in 1D and 2D arrays.]( https://pub.dartlang.org/packages/smart_arrays_peaks)

[`smart_arrays_contour_finder`: Contours the three-dimensional surface represented by the values f(x,y) of a matrix.]( https://pub.dartlang.org/packages/smart_arrays_contour_finder)

[`smart_arrays_lmfit`: Fits (x, y) data given as arrays to a specified model function using the  Levenberg-Marquardt algorithm.]( https://pub.dartlang.org/packages/smart_arrays_lmfit)

[`smart_signal_processing`: Fourier transform and more.]( https://pub.dartlang.org/packages/smart_signal_processing)

[`smart_dialogs`: Easy-to-use dialogs in Web applications]( https://pub.dartlang.org/packages/smart_dialogs)