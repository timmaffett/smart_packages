## Smart Signal Processing


### What the package can do for you
This package provides frequently used functions for signal processing:
- Computes mean values, variance, standard deviation.
- Applies windowing (apodization functions) with exponential or Gaussian shapes to an array
- Applies the Fast Fourier Transform to an array.
- Calculates the power or magnitude of a complex-valued array.
- Phase-shifts (rotates in the complex plane) a complex-valued array.

### Example
- The provided example can be directly executed via https://smart.specpad.bplaced.net/smart_signal_processing/example.html.

- Or, download the package and execute the file `example/example.html` in your browser.


### The major API functionalities
 
- classes `Sigma`, `BaseLine`, `WinFunc`,`FFT`, `Phase`.



Examples: 

- Multiplication with an exponential:

  `WinFunc.expMult(array, decayFactor, false, "0");`
 
- Compute Fourier Transform:

  `FFT.transform(reals, imags);`

- Compute magnitude:

  `Phase.magnitude(reals, imags, true)`
  
- Compute variance in a region:  
  `Sigma.variance(array, ixstart, ixend)`
 


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

[`smart_lorentz-gauss`: Compute Lorentz-Gauss (pseudo-Voigt) line shapes.]( https://pub.dartlang.org/packages/smart_lorentz_gauss)

[`smart_dialogs`: Easy-to-use dialogs in Web applications]( https://pub.dartlang.org/packages/smart_dialogs)
