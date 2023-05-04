## Smart Arrays Compress

### What the package can do for you
The compression algorithms provided by this package don't have much to do with audio or video compression. Instead, their purpose is to reduce large arrays to a size suitable for fast interactive viewing on a screen by retaining significant aspects of the array data. For this purpose an array is fragmented into intervals (1D) or submatrices (2D). The minimum and maximum values in these regions constitue the compressed array. You would apply the algorithms to arrays with thousands, ten thousands or even millions of elements. The reduced size should, for example, be chosen to match display resolution if compression is applied for data viewing.

The package also provides a class that expands an array to a larger size by inserting extra points whose values are computed from their neighbours by linear interpolation of the array data.


### The major API functionalities
 
- class `CompressedArray1D`

This example will compress the large specified 1D array to a size of 200 points:

`CompressedArray1D c1d =
      CompressedArray1D.compress(array, 0, array.length - 1, false, 200);`

The result is available in `c1d.cArray`.  
      
- class `CompressedArray2D`:   
  
This example will compress the large specified 2D array to a size of 200 x 500 points:  

`CompressedArray2D c2d = CompressedArray2D();`

  `c2d.compress(matrix, 0, matrix.length - 1, 0, matrix[0].length - 1, 200,
      500, true);`
      
The result is available in `c2d.cvalsPos` and
`c2d.cvalsNeg`.  

- class `ArrayInterpolator`

Example: 

`List<double> list = [1.0,5.0,3.0,-10.0, -20.0,6.0,4.0,0.0];`

 `Float64List list64 = new Float64List.fromList(list);`
 
 `Float64List result = ArrayInterpolator.interpolateArray(list64, 4);`
 

Expands an array to a larger size.



### Related packages

[`smart_arrays_base`: Basic functions for 1D and 2D arrays]( https://pub.dartlang.org/packages/smart_arrays_base)

[`smart_arrays_numerics`: Numerics with 1D and 2D arrays]( https://pub.dartlang.org/packages/smart_arrays_numerics)

[`smart_arrays_compress`: Compress 1D and 2D arrays to a smaller size.]( https://pub.dartlang.org/packages/smart_arrays_compress)

[`smart_arrays_sample_data`: Computes 1D and 2D arrays containing sample data.]( https://pub.dartlang.org/packages/smart_arrays_sample_data)

[`smart_arrays_dbstore`: Store 1D and 2D arrays along with metadata on the local device.]( https://pub.dartlang.org/packages/smart_arrays_dbstore)

[`smart_arrays_peaks`: Detect peaks in 1D and 2D arrays.]( https://pub.dartlang.org/packages/smart_arrays_peaks)

[`smart_arrays_contour_finder`: Contours the three-dimensional surface represented by the values f(x,y) of a matrix.]( https://pub.dartlang.org/packages/smart_arrays_contour_finder)

[`smart_arrays_plot_polyline`: Plot 1D arrays as polyline along with axes and more.]( https://pub.dartlang.org/packages/smart_arrays_plot_polyline)

[`smart_arrays_lmfit`: Fits (x, y) data given as arrays to a specified model function using the  Levenberg-Marquardt algorithm.]( https://pub.dartlang.org/packages/smart_arrays_lmfit)

[`smart_lorentz_gauss`: Compute Lorentz-Gauss (pseudo-Voigt) line shapes.]( https://pub.dartlang.org/packages/smart_lorentz_gauss)

[`smart_signal_processing`: Fourier transform and more of arrays.]( https://pub.dartlang.org/packages/smart_signal_processing)

[`smart_dialogs`: Easy-to-use dialogs in Web applications]( https://pub.dartlang.org/packages/smart_dialogs)