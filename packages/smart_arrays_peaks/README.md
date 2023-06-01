## Smart Arrays Peaks


### What the package can do for you
This package provides functions that detect peaks (maximum values) in one- or two-dimensional arrays. Peak detection (peak search, peak picking) does not simply mean finding maximum values. Data originating from measurements are often subject to noise, i.e. random small variations of the measured values. The provided algorithms therefore allow you to specify a noise value to exclude noise effects from peak search. 

### Example
- The provided example can be directly executed via https://timmaffett.github.io/smart_packages/smart_arrays_peaks/example.html.
- Or, download and unpack the package, then execute the file `example/example.html` in your browser.

### The major API functionalities
 
- class `PeakPicker1D`

This example will pick the positive and negative peaks in the entire `array` using the noise discriminator 2.0. The result contains the array indices of the found peaks.

`List<int> peakIndices = PeakPicker1D.detectPeaks(
       array, 0, array.length, 2.0, 0.0, PeakPicker1D.PICK_POSNEG, 0);`

      
- class `PeakPicker2D`:   
  
This example will pick the negative peaks in the entire `array2D` using the noise discriminator 2.0. The result contains the array indices (row/column pairs) of the found peaks.

`List<List<int>> peakIndices = PeakPicker2D.detectPeaks(
       array2D, 0, array2D.length,0,array2D[0].lebngth, 2.0, 0.00, PeakPicker1D.PICK_NEG, 0);`
      


### Related packages

[`smart_arrays_base`: Basic functions for 1D and 2D arrays]( https://pub.dartlang.org/packages/smart_arrays_base)

[`smart_arrays_numerics`: Numerics with 1D and 2D arrays]( https://pub.dartlang.org/packages/smart_arrays_numerics)

[`smart_arrays_compress`: Compress 1D and 2D arrays to a smaller size.]( https://pub.dartlang.org/packages/smart_arrays_compress)

[`smart_arrays_sample_data`: Computes 1D and 2D arrays containing sample data.]( https://pub.dartlang.org/packages/smart_arrays_sample_data)

[`smart_arrays_dbstore`: Store 1D and 2D arrays along with metadata on the local device.]( https://pub.dartlang.org/packages/smart_arrays_dbstore)

[`smart_arrays_plot_polyline`: Plot 1D arrays as polyline along with axes and more.]( https://pub.dartlang.org/packages/smart_arrays_plot_polyline)

[`smart_arrays_contour_finder`: Contours the three-dimensional surface represented by the values f(x,y) of a matrix.]( https://pub.dartlang.org/packages/smart_arrays_contour_finder)

[`smart_arrays_lmfit`: Fits (x, y) data given as arrays to a specified model function using the  Levenberg-Marquardt algorithm.]( https://pub.dartlang.org/packages/smart_arrays_lmfit)

[`smart_lorentz-gauss`: Compute Lorentz-Gauss (pseudo-Voigt) line shapes.]( https://pub.dartlang.org/packages/smart_lorentz_gauss)

[`smart_signal_processing`: Fourier transform and more.]( https://pub.dartlang.org/packages/smart_signal_processing)

[`smart_dialogs`: Easy-to-use dialogs in Web applications]( https://pub.dartlang.org/packages/smart_dialogs)