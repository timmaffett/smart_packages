## Smart Dialogs for Web Apps


### What the package can do for you
- You want to show an alert message?
- You want to let something confirm?
- You want to show a dialog with several action buttons to offer a choice?
- You want to request input from a user, e.g. via text entry fields, combo boxes, radio or check buttons?
- You want to have all this with a consistent default style?
- You want to configure the style yourself?
- You want to open the operating system's file selection dialog?
- You want to display a panel containing clickable icons to start actions?
- You want to show popup menus with clickable menu items?
- You want to show a fine table displaying table data for your users?
- You want to show such a table, but also with interactive input elements (buttons, text entry fields)?
- And you want to program this with a few lines of code, compatible with Chrome(Windows/Linux/Android), Safari (Mac/IOS), and MS Edge, without importing extra packages, just based on standard Dart packages, especially on 'Dart.html'.?
- You are looking for simple code examples to start with?

Then your are exactly right here. The focus of this package is the ease-of-use of the provided functionalities.

### Display the examples
- Click here to view the examples:
 [smart_dialog examples](https://smart.specpad.bplaced.net/smart_dialogs/example.html)
 
 - Or, download and unpack the package, then execute the file `example/example.html` in your browser.

#### Dialogs
For convenience and ease-of-use, employ the following asynchronous functions (see API for details).

- `Info.show(..)` or `Info.showGo(..)`- display a message.
- `Info.confirm(..)` - confirm a message (optionally with multiple confirm buttons).
- `Info.get(..)` - display a dialog an return the user's input from the text entry fields, combo boxes, radio or check buttons.
- `Info.get2D(..)` - similar to `Info.get()`, however the displayed dialog provides two columns of text entry fields, combo boxes, etc..

These methods display a dialog and return a `Future` of type `UserInput`, containing everything the user entered into the dialog, including which buttons were pressed.

For additional flexibility, dialogs can be opened by using their respective constructors. Modal (blocking) and non-modal dialogs are supported. Constructors require a callback function invoked when a button is pressed.

A special dialog provides access to the operating system's file selection dialog:
- `FileSelectionDialog(..)` (the constructor)

#### Table, Icon Panel, Popup Menu
This package provides the following GUI elements in addition to dialogs :

- `BasicTable` - display table data, and provide access to the data a user entered into the optional interactive elements of the table. A table must be embedded into a parent html element for display, e.g. into a dialog (demonstrated by the examples of this package), a user provided div, etc.
- `IconPanel` - a rectangular grid of icons acting as buttons with assigned action functions,
- `PopupMenu` - a popup menu with a list of menu items, acting as buttons with assigned action functions.

#### Style configuration
The classes `DiaAttr` and `TableAttr` contain style attribute names and their defaults for various screen sizes (PC, Tablet, Phone) and attribute setter methods for Dialogs and Tables, respectively. See also the example source files where style changes are demonstrated. 


### Related packages

[`smart_arrays_base`: Basic functions for 1D and 2D arrays]( https://pub.dartlang.org/packages/smart_arrays_base)

[`smart_arrays_numerics`: Numerics with 1D and 2D arrays]( https://pub.dartlang.org/packages/smart_arrays_numerics)

[`smart_arrays_compress`: Compress 1D and 2D arrays to a smaller size.]( https://pub.dartlang.org/packages/smart_arrays_compress)

[`smart_arrays_sample_data`: Computes 1D and 2D arrays containing sample data.]( https://pub.dartlang.org/packages/smart_arrays_sample_data)

[`smart_arrays_dbstore`: Store 1D and 2D arrays along with metadata on the local device.]( https://pub.dartlang.org/packages/smart_arrays_dbstore)

[`smart_arrays_peaks`: Detect peaks in 1D and 2D arrays.]( https://pub.dartlang.org/packages/smart_arrays_peaks)

[`smart_arrays_contour_finder`: Contours the three-dimensional surface represented by the values f(x,y) of a matrix.]( https://pub.dartlang.org/packages/smart_arrays_contour_finder)

[`smart_arrays_plot_polyline`: Plots 1D arrays as polyline along with axes and more.]( https://pub.dartlang.org/packages/smart_arrays_plot_polyline)

[`smart_arrays_lmfit`: Fits (x, y) data given as arrays to a specified model function using the  Levenberg-Marquardt algorithm.]( https://pub.dartlang.org/packages/smart_arrays_lmfit)

[`smart_lorentz_gauss`: Compute Lorentz-Gauss (pseudo-Voigt) line shapes.]( https://pub.dartlang.org/packages/smart_lorentz_gauss)

[`smart_signal_processing`: Fourier transform and more of arrays.]( https://pub.dartlang.org/packages/smart_signal_processing)

[`smart_dialogs`: Easy-to-use dialogs in Web applications]( https://pub.dartlang.org/packages/smart_dialogs)




