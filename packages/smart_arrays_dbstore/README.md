## Smart Arrays Database Store 


### What the package can do for you
- This package was designed for Web applications which need to store data on the local device (PC, tablet, phone) over a longer time period, e.g. to view or process the data by a Web app during multiple sessions.
- The package is capable of saving one- and two-dimensional arrays of double values and String-valued maps in databases, optionally along with metadata containing additional information about the actual array data.
- Arrays with their metadata are considered as "datasets" of type `DSet`. A `DSet` can be created from arrays and metadata using this package.
- Each dataset `DSet` is stored in its own database of type `IndexedDB` under the browser. The user must define its name (similar as one would do it under a file system) for later retrieval.
- Many datasets, even of big size (e.g. array sizes of several megabytes) may be stored. The exact limits per origin are browser dependent. Browsers derive their limits from the available storage using their own algorithms.
- The package was tested using the following browsers: Chrome under Windows, Linux, Android, iOS. Safari under iOS.
- Datset sets will remain stored until

  - they are explicitely deleted by using respective API functions provided by this package.
  - the user deleted the browser data via respective functions of the operating system or from the browser's advanced settings menu.
  - the browser itself decided to delete data. This may happen if storage on the local machine is running tight ("storage pressure"). However: Some browsers (e.g. Chrome) support "persistent" data. This package provides a function 'DSetDB.persistent' requesting data to make the storage persistent ("durable") if supported. You must check with your browser whether and under which conditions persistence is granted. For Chrome you may e.g. check the site `https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa`. 

- This packages utilizes `IndexedDB` databases managed by the browser. Their technical storage method and storage location on a device is browser dependent, and also depends on the origin from which the Web app is served. For Chrome, you can list the databases by entering `chrome://indexeddb-internals` into the browser's address field.


### The major API functionalities

- Class `DSet` to create a datset from arrays and its metadata:

- Class `DSkey` to create a datset key (dataset identifier) under which a dataset will be stored.

- Class `DSetStore`, a handler to store datasets on the device, to load stored datasets, to delete, copy, rename datasets, to obtain a list (directory) of stored datasets, to save information common to all datasets in a global store, to classify datasets into `projects`.

- Class `DSetDB` to initially create a `DSetStore` required to apply the functionalities above.

- Basic usage to store a datset:
  - create a dataset of type `DSet` from your array and metadata (constructor `DSet`).
  - create a `DSkey` identifier for your data in the store (method `DSKey.create`)
  - create a `DSetStore` storage handler (method `DSetDB.createDSetStore`).
  - invoke `DSetStore.dsSave` to store the data
  
- Basic usage to load a stored datset:
  - create a `DSkey` identifier for the data you want to load from the store (method `DSKey.create`)
  - create a `DSetStore` storage handler (method `DSetDB.createDSetStore`).
  - invoke `DSetStore.dsLoad` to load stored data
 
- Basic usage to find out which datasets are available in the store:
  - create a `DSetStore` storage handler (method `DSetDB.createDSetStore`).
  - invoke `DSetStore.projectsGet` to get a list of all projects. 
  - For each project, invoke `DSetStore.dskeysWithProject` to get a list of the dataset keys of the dataset stored under this project. You will use then such a key to load the data. Or you can build a GUI displaying the projects with their datasets.

Please check the provided example for details.



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

