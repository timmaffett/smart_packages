import 'dart:svg';
import 'dart:typed_data';
import 'dart:math' as math;

import 'package:smart_arrays_base/smart_arrays_base.dart';
import 'package:smart_arrays_compress/smart_arrays_compress.dart';

import 'utils.dart';
import 'marker_lines.dart';

/// The purpose of this class is to draw (plot) the values of a 1D array as a curve.
/// Drawing is performed using SVG, Scalable Vector Graphics. The drawn curve
/// is a SVG "polyline".
/// The user can control many polyline attributes.
/// Usage:
///   1) Construct an polyline: pl = Polyline(args).
///   2) Result: The polyline was drawn into the SvgSvgElement [polylineContainer].
///   3) Append [polylineContainer] to the desired SvgSvgElement type container
///      (e.g. named dataArea) of your particluar page layout:
///      dataArea.append(pl.polylineContainer)
/// NOTE 1: The array values are plotted "equidistant" (= linear x scaling)
/// NOTE 2: A computer screen or a screen windows has a limited amount of pixels,
/// e.g. around 200, 1000, 2000, 4000 in horizontal (or vertical) direction,
/// depending on the device. This class allows one to plot large arrays effciently.
/// Array sizes with 10000, 100000 or even a million points can be handled.
/// Internally, a suitable compression algorithm is used, see pub package
///    https://pub.dev/packages/smart_arrays_compress.
/// NOTE 3: The [polylineContainer] of several Polylines may be appended to the
///  same dataArea (see above). The result will be a "polyline multi view" to
///  visualize several arrays at the same time.
class Polyline {
  late Map<PyA, String> attr; // id, attributes
  late CompressedArray1D cpd;
  PolylineElement? polyline; // the drawn function
  List<GeometryElement> pointShapes = [];
  TextElement? polylineMarker;
  late int insetx, insety, insety2;
  int dataAreaWidth,
      dataAreaHeight;
  late int effectivePolylineWidth,
      effectivePolylineHeight;
  double? refYmax; // maximum y value will become refYmax
  int? ixFirst, ixLast; // first and last index on screen
  int xsFirst=0,
      xsLast=0; // first and last screen x of polyline relative to dataArea
  late int ysLast; // last screen y of polyline relative to dataArea
  late int ysMin, ysMax; // smallest and biggest y screen value of polyline
  double yysMin=0, yysMax=0; // the physical y values corresponding to ysMin, ysMax
  late int xshift, yshift1, yshift2; // additional offset in pixels
  late double xscale;
  late double yscale;
  Float64List array; // x values for which the constructor was called
  late Float64List xValues;
  RectElement? selectionIcon; // a graphics rectangle to mark this polyline
  bool _isSelected = false;
  bool get isSelected => _isSelected;
  int? xselectionIcon;
  int? yselectionIcon;
  late bool clipDataAtYBoundary;

  late int strokeWidth;
  late SvgSvgElement polylineContainer;
  // a rectangular region around this polyline drawn by the user to zoom in
  YZoomRegion? zoomRegion;

  // This is the viewport defining the x and y ranges currently displayed by this [polyline]
  late double xmin, xmax;
  late double ymin, ymax;
  // constants for linear tranformation from physical to screen coordinates in ys = -a*y + b
  double? a, b;
  bool useWebgl = false;

  /// Draws (plots) [array] into [polylineContainer]. The latter must be appended
  /// to your desired SvgSvgElement container ("data area") to make the plot visible.
  /// [ixFirst] - first index of [array] that gets plotted. If null, 0 is assumed.
  /// [ixLast] - last index of [array] that gets plotted. If null, the array's
  ///   maximum index is assumed.
  /// [dataAreaWidth] - the width of the polyline's data area in pixels.
  /// [dataAreaHeight] - the height of the polyline's data area in pixels.
  /// [zoomRegion] - If null, the array will be plotted such that
  ///   it fits entirely into the data area, but inset from the borders of
  ///   this area by the attributes POLYLINE_INSETX and POLYLINE_INSETY.
  ///   If not null:
  ///   [zoomRegion] defines the y (intensity) viewport of [array].
  ///   A typical use is zooming into a plot, e.g. if the GUI provides a tool
  ///   to draw a rectangle around a desired section of a polyline plot already
  ///   displayed on the screen. From this rectangle (in screen coordinates)
  ///   an app would derive the respective intensity (y) range
  ///   with respect to the displayed polyline, and compute a new Polyline
  ///   by feeding the y region into the constructor to obtains to "zoom" in.
  /// [ymin], [ymax] - If null, the intensity (y) scale of the plot is computed
  ///  such that the maximum intensity between [ixFirst] and [ixLast] gets displayed
  ///  at the top of the data area, and the minimum intensity at the bottom
  ///  (= "automatic y scaling").
  ///  If not null: Defines which 2 intensity values should be used to be
  ///   displayed at the top and bottom of the data area.
  ///   A typical use is "interactive shifting a zoomed-in polyline along x
  ///   while retaining its y scaling":
  ///   For this case compute a new Polyline with [ymin] and [ymax] set to the
  ///   respective values of the polyline displaying the previous x viewport
  ///   as soon as viewport changes.
  /// [uAttr]: User-defined polyline attributes.
  ///  If null, [POLYLINE_DEFAULT_ATTRIBUTES] are used. Otherwise
  ///  you can change here colors, scaling and layout parameters, and more
  ///  drawing features.
  ///  The attributes specified here will override their respective defaults.
  ///  [attr] will become the combined map of effective attributes.
  ///  See [PyA] for all options.
  ///  NOTE 1: In addition to the polyline a list of points in form of circles
  ///    or other shapes will be drawn if attr[PyA.POINT_LIST] is not
  ///    null.
  ///  NOTE 2: In addition to the polyline a text will be drawn at the end of the
  ///    polyline if attr[PyA.MARKER_TEXT] is not null or empty.
  ///  NOTE 3: In addition to the polyline an icon ("selection icon") will be
  ///   drawn at the end of the polyline if attr[PyA.DRAW_SELECTION_ICON] is
  ///   "true". The icon size is attr[PyA.SELECTION_ICON_WIDTH].
  ///   attr[PyA.SELECTION_ICON_OUTSIDE] = "true" ensures that the icon remains
  ///   inside the data area.
  ///  NOTE 4: You can display a polyline rotated, e.g. by 90 degrees, by
  ///   specifying a rotation and or translation operator in attr[PyA.ROTATE],
  ///   e.g "rotate(-90) translate(${-axisLength/2}, ${someOffset})".
  ///   The syntax must conform to SVG.
  ///  NOTE 5: The maximum y value can be set to the optional reference value
  ///   [refYmax]. All respective y values are scaled accordingly. This feature
  ///   can be used to display several polylines in a plot area
  ///   which are scaled with respect to each store_quota, with a desired one
  ///   to be the reference. If refYmax is not used while displaying several
  ///   polylines at the same time in the same area, each respective graph
  ///   would would be scaled and displayed such that its ymax will be visible
  ///   inside the area at y = 0 + insety to fit into dataAreaHeight-insety.
  Polyline(
      this.array,
      this.ixFirst,
      this.ixLast,
      this.dataAreaWidth,
      this.dataAreaHeight,
      this.zoomRegion,
      double? ymin,
      double? ymax,
      Map<PyA, String>? uAttr) {
    attr = Map.from(POLYLINE_DEFAULT_ATTRIBUTES); // init. attributes
    if (uAttr != null) {
      attr.addAll(uAttr); // merge with defaults
    }

    // you can override the constructor arguments using these attributes which are not existing (null) per default.
    // this is for example used for multiple data display when a data set should be displayed with the same expansion
    // as the previously loaded one.
    if (attr[PyA.OVERRIDE_IXFIRST] != null) {
      ixFirst = int.parse(attr[PyA.OVERRIDE_IXFIRST] ?? '0');
      attr.remove(PyA.OVERRIDE_IXFIRST); // this was a once-only action!
    }
    if (attr[PyA.OVERRIDE_IXLAST] != null) {
      ixLast = int.parse(attr[PyA.OVERRIDE_IXLAST] ?? '0');
      attr.remove(PyA.OVERRIDE_IXLAST);
    }
    assertIndexes();

    clipDataAtYBoundary = Utils.parseBool(attr[PyA.DRAW_OUTSIDE_Y_VIEWPORT] ?? '0');

    insetx = int.parse(attr[PyA.INSETX] ?? '0');
    insety = int.parse(attr[PyA.INSETY] ?? '0');
    insety2 = insety; // TODO for now, define own attr.

    // compress here and NOT in genPolyline() because e.g. in vertical scaling genPolyline() gets
    // called often!

    // the argument null means xmin/xmax will be indexes, no physical x units
//    cpd = compress(null, yValues, ixFirst, ixLast, int.parse(attributes[PyA.COMPRESSION_LENGTH]));
//    xmin = getMin(cpd.xValues)[0]; xmax = getMax(cpd.xValues)[0];

    cpd = CompressedArray1D.compress(
        array, ixFirst, ixLast, false, int.parse(attr[PyA.COMPRESSION_LENGTH] ?? '0'));
//    print("polyline.dart 1010=${yValues}");
//    print("polyline.dart 1015=${cpd.cArray} $ixFirst $ixLast");

    xValues = Float64List(cpd.uIndices.length);
    for (int i = 0; i < cpd.uIndices.length; i++) {
      xValues[i] = cpd.uIndices[i].toDouble();
    }
    xmin = Array1D.getMin(xValues)[0];
    xmax = Array1D.getMax(xValues)[0];

//    xmin = getMin(cpd.uIndices)[0]; xmax = getMax(cpd.xValues)[0];

    if (ymin == null) {
      this.ymin = Array1D.getMin(cpd.cArray)[0];
    } else {
      this.ymin = ymin;
    }

    if (ymax == null) {
      this.ymax = Array1D.getMax(cpd.cArray)[0];
    } else {
      this.ymax = ymax;
    }

    polylineContainer = SvgSvgElement();
    genPolyline();
  }

  // make some index checks and adjust if indices are out of range
  void assertIndexes() {
    if (ixFirst == null) {
      ixFirst = 0;
    }
    if (ixLast == null) {
      ixLast = array.length - 1;
    }

    if (ixLast! <= ixFirst!) {
      ixLast = ixFirst! + 1;
    }

    if (ixFirst! < 0 || ixFirst! > array.length - 1) {
      ixFirst = 0;
    }

    if (ixLast! > array.length - 1 || ixLast! < 0) {
      ixLast = array.length - 1;
    }
  }

  /// Generatey the svg polyline element from the xypairs
  void genPolyline() {
    if (attr[PyA.REFYMAX] == null || attr[PyA.REFYMAX] == "null") {
      refYmax = null; // local y scaling
    } else {
      // y scaling such that ymax will become this value:
      refYmax = double.parse(attr[PyA.REFYMAX] ?? '0');
    }

    if (refYmax != null && ymax.abs() > 0.0001) {
      // the result will be that this polyline gets scaled rel. to refYmax
      double normFactor = 1.0;
      normFactor = refYmax! / ymax;
      ymin = normFactor * ymin;
      ymax = normFactor * ymax;
    }

    StringBuffer points = StringBuffer(); // xs ys pairs

    xshift = int.parse(attr[PyA.XSHIFT] ?? '0');
    yshift1 = int.parse(attr[PyA.YSHIFT1] ?? '0');
    yshift2 = int.parse(attr[PyA.YSHIFT2] ?? '0');
    xscale = double.parse(attr[PyA.XSCALE] ?? '0');
    yscale = double.parse(attr[PyA.YSCALE] ?? '0');
    if (attr[PyA.YSCALE2] != null) {
      // apply 2nd yscale factor if present
      yscale *= double.parse(attr[PyA.YSCALE2] ?? '0');
    }
//    print("3=$yscale");
    // considering the inset of the polyline within the data area
    effectivePolylineWidth = dataAreaWidth - 2 * insetx;
    effectivePolylineHeight = dataAreaHeight - insety - insety2;

    double x, y; // user coordinates
//    double xscreen, yscreen; // screen coordinates relative to dataArea origin
    int xs=0, ys=0; // rounded screen coordinates relative to dataArea origin

    int npnts = xValues.length; //cpd.xValues.length;
    ysMin = 1000 * 1000;
    ysMax = 0;

    for (int i = 0; i < npnts; i++) {
      x = xValues[i] * xscale; //cpd.xValues[i]*xscale;
      y = cpd.cArray[i];

      // convert physical to screen relative to dataArea origin
      xs = xphysToXscreen(x).round();
      ys = yphysToYscreen(y).round();

      if (!clipDataAtYBoundary) {
        // This will indicate where data disappear from the viewport in y direction,
        // instead of just clipping
        if (ys < 0) {
          ys = 2;
        } else if (ys > effectivePolylineHeight) {
          ys = effectivePolylineHeight - 1;
        }
      }

      if (i == npnts - 1) {
        points.write("$xs $ys");
      } else {
        points.write("$xs $ys,");
      }

      if (i == 0) {
        xsFirst = xs;
      }

      if (i == npnts - 1) {
        xsLast = xs;
      }

      if (ys > ysMax) {
        ysMax = ys;
        yysMin = y; // !
      }

      if (ys < ysMin) {
        ysMin = ys;
        yysMax = y; // !
      }
    } // for(int i=0; i<npnts; i++)

    if (polyline != null) {
      polyline!.remove();
    }
    polyline = PolylineElement(); // to be added to a container
    setSelected(isSelected);

    polyline!
      ..setAttribute(SVG.STROKE, attr[PyA.STROKE] ?? 'black')
      ..setAttribute(SVG.FILL, "none")
//    ..setAttribute(FONT_SIZE, attributes[PyA.STROKE]) // ??
      ..setAttribute("points", points.toString());

    if (attr[PyA.ROTATE] != null) {
      polyline!.setAttribute(SVG.TRANSFORM, attr[PyA.ROTATE] ?? '0');
    }

    polylineContainer.append(polyline!);

    ysLast = ys;
    //(yphysToXscreen(cpd.yValues[0]) + ys)~/2); //yphysToXscreen(0.0));
    if (attr[PyA.DRAW_SELECTION_ICON] == Utils.TRUE) {
      addSelectionIcon(xs, ys);
    }
    addPointShapes();
    addMarkerText(xs, ys);

//    changeListeners.forEach((Function f) => f(this)); // tell registered listeners that this polyline was updated.
  }

  /// Converts physical x coordinate to screen x coordinate, which is returned
  /// relative to the data area.
  /// NOTE: This method assumes x coordinates increasing vom left to right.
  /// Therefore for nmr we always feed in indexes!
  /// MUST have the type of PhysicalToScreen.
  double xphysToXscreen(double x) {
    // Formeln: Siehe Karo-Heft mit Blatt Datum 9. 12. 13
    double xscreen;
    if ((xmax - xmin).abs() < 0.000001) {
      xscreen = x;
//      print("x=$x $xmin");
    } else {
      xscreen = (x - xmin) * effectivePolylineWidth / (xmax - xmin) +
          insetx +
          xshift; // screen coord. relative to data area
    }
    return xscreen;
  }

  /**
   * Convert screen x coordinate [xscreen] which is given relative to the data area, to physical x coordinate.
   */
//  double xScreenToXphys(int xscreen) // Not used so far
//  {
//    double x = (xscreen - insetx - xshift)*(xmax - xmin)/effectivePolylineWidth + xmin;
//    return x;
//  }

  /// Converts screen y coordinate [yscreen] which is given relative to the
  /// data area, to physical y coordinate.
  /// This conversion is the inverse operation of [yphysToXscreen(double y)]
  /// and is valid for this polyline by using the constants a and b computed
  /// by [yphysToXscreen].
  /// If this method is called prior to calling [yphysToXscreen] the constants
  /// a and b and not available yet, null is returned.
  double? yScreenToYphys(int yscreen) {
    if (a == null || b == null) {
      return null;
    }

    // the following checks are important for y axis labelling!
    if (a!.abs() < 1.0e-10 && yscreen <= 0) {
      return ymax / yscale;
    }

    if (a!.abs() < 1.0e-10 && yscreen >= dataAreaHeight) {
      return -ymax / yscale;
    }

    double y = -(yscreen - b!) / a!;
    return y;
  }

  /// Converts physical y coordinate to screen y coordinate, which is returned
  /// relative to the data area.
  /// Formula: see .odt document in specpad source tree in the folder "manuals".
  /// have the type of PhysicalToScreen.
  double yphysToYscreen(double y) {
    double yscreen;
    int he = effectivePolylineHeight;

    if (zoomRegion != null) {
      double a2, b2;
      if ((zoomRegion!.ybottom - zoomRegion!.ytop).abs() < 0.000001) {
        a2 = 1.0; // TODO right?
        b2 = -he / 2;
//        yscale = 1.0; // ori
      } else {
        a2 = -he / (zoomRegion!.ybottom - zoomRegion!.ytop);
        b2 = insety + a2 * zoomRegion!.ytop; // ori
      }
      yscale = 1.0;
      yshift1 = 0;
      attr[PyA.YSHIFT1] = "0";
      attr[PyA.YSCALE] = "1.0";
//      double yzero = double.parse(attributes[PyA.YPOSITION_ZERO]);
//      yzero = yzero - b2/effectivePolylineHeight;
//      attributes[PyA.YPOSITION_ZERO] = "${yzero}";
//      yscreen = -a2*y*yscale + b2; //ori

//      b2=yzero*effectivePolylineHeight+insety;
      yscreen = -a2 * y + b2;

//      int hr = zoomRegion.ysbottom - zoomRegion.ystop;
//      a = (hr/he) * a2;
//      b = (hr/he)*(b2 - insety) + zoomRegion.ystop;
      a = a2;
      b = b2; // ori
//      a = a2*yscale; b = b2;
    } else {
      // screen position of polyline value 0 point in % of effective view height: 0.5 means centered.
      double ysLeft = double.parse(attr[PyA.YPOSITION_ZERO] ?? '0'); // orig
      double yix1 = double.parse(attr[PyA.YIX1] ?? '0');
      double ys1, ys2, yix2;

      // yscale is the accumulated user interactive mouse wheel scaling factor
      // the next line ensures that "a", which is proportional to (c1-c2), does not change sign.
      // Otherwise, after turning the mouse wheel too much, the spectrum would change sign and
      // would be drawn upside down.
      double c1 = ysLeft; // e.g.0.9 for spectra, 0.5 for fids
      // c2 = 0 means ymax will be displayed at "insety":
      double c2 = POLYLINE_INITIAL_YSCALE - yscale;
      // ensure ys will not become 0 or even change sign when yscale too large:
      if (c2 > c1) {
        c2 = c1 - 0.01;
      }
      ys1 = c1 * he + insety; // screen pos. of leftmost point in region
      ys2 = c2 * he + insety; // screen pos. of ymax in region

      // This code defines that PyA.YPOSITION_ZERO is the rel. y position
      // of the point y=0 of the data. One could also set yix1 = yValues[0] or
      // yix1 = yValues[ixFirst] or ... (see PyA.YIX1)
      // to define another point to take on PyA.YPOSITION_ZERO.
      // The current solution works best for spectra, fids.
      if (ymin < 0 && ymax < 0) {
        // spectra with only negative values need special treatment for correct
        // display: must invert all y values before computing screen coord.
        y = -y;
        double temp = -ymax;
        ymax = -ymin;
        ymin = temp;
        yix1 = 0.0; // phys. y of ys1 (could be different for diff. y offset)
        yix2 = ymax; // phys. y of ys2
      } else {
        // "normal" spectra with mixed positive and negative y values
        yix1 = 0.0; // phys. y of ys1
        yix2 = ymax; // phys. y of ys2
      }

      if ((yix2 - yix1).abs() < 0.000001 && y * yscale.abs() < 0.000001) {
        // y == ymax, treat singular case for y = 0
        a = 0.0; // TODO
      } else if ((yix2 - yix1).abs() < 0.000001) {
        // y == ymax, treat remaining singular case for y != 0
        a = 0.0; // TODO
      } else {
        a = -(ys2 - ys1) / (yix2 - yix1);
      }

      b = ys1 + a! * yix1 + yshift1 + yshift2;
      yscreen = -a! * y + b!;
    }

    try {
      yscreen.round(); // test, except, if failed
      return yscreen;
    } catch (e) {
      // e.g. when zooming a data set containing only zeroes
      return dataAreaHeight / 2;
    }
  }

  /// This polyline displays a range from a data array.
  /// [x] must be given in pixels relative to dataArea's origin.
  /// Then this function returns a relative index with respect to
  /// cpd.uIndices[0] ranging from
  /// cpd.uIndices[0] to cpd.uIndices[cpd.uIndices.length-1]
  double getRelativeIndexFromScreenX(int x) {
    int xFirst; // first index in the display region of the uncompressed array
    int xLast; // last index in the display region of the uncompressed array
    int npointsInDisplayRegion;
    double relX;

    if (cpd.uIndices.isEmpty) {
      // catch cases with corrupt data
      return 0.0;
    }

    xFirst = cpd.uIndices[
        0]; // first index in the display region of the uncompressed array
    xLast = cpd.uIndices[cpd.uIndices.length -
        1]; // last index in the display region of the uncompressed array
    npointsInDisplayRegion = xLast - xFirst + 1;

    relX = (x - insetx - xshift) *
        (npointsInDisplayRegion - 1) /
        effectivePolylineWidth;
    if (relX < 0) {
      relX = 0.0;
    }
    if (relX > npointsInDisplayRegion - 1) {
      relX = npointsInDisplayRegion - 1.0;
    }

    return relX; // orig
  }

  /// This polyline displays a given range of a data array.
  /// [x] must be given in pixels relative to dataArea's origin.
  /// Then this function returns an absolute index between 0 and
  /// npointsInDisplayRegion (of the original uncompressed array).
  double getAbsoluteIndexFromScreenX(int x) {
    double relIx;
    double absIx;

    relIx = getRelativeIndexFromScreenX(x);
    absIx = relIx + cpd.uIndices[0];

    return absIx;
  }

  /// Reverses selection state
  void toggleSelected() {
    if (isSelected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  }

  /// Sets selection state, changes stroke of polyline and filling of
  /// selectionRect.
  void setSelected(bool select) {
    String stroke = attr[PyA.STROKE] ?? 'black', fill;
    if (select) {
      strokeWidth = int.parse(attr[PyA.STROKE_WIDTH_HILITE] ?? '0');
      fill = attr[PyA.STROKE] ?? 'black';
    } else {
      strokeWidth = int.parse(attr[PyA.STROKE_WIDTH] ?? '0');
      fill = "none";
    }
    _isSelected = select;

    // changing an attribute will, in svg, directly be effective
    polyline!.setAttribute(SVG.STROKE_WIDTH, "$strokeWidth");

    if (selectionIcon != null) {
      SVG.setAttr(selectionIcon!, {SVG.STROKE: "$stroke", SVG.FILL: "$fill"});
    }
  }

  /// Adds a selection rectangle at [xs, ys] of polylineContainer
  /// If [xs] is null, the last rectangle is redrawn if there was one.
  void addSelectionIcon(int? xs, int? ys) {
    if (selectionIcon != null) {
      selectionIcon!.remove(); // already there
    }

    if (xs == null) {
      if (xselectionIcon != null && yselectionIcon != null) // redraw last
      {
        xs = xselectionIcon!;
        ys = yselectionIcon!;
      } else {
        if (xsLast != null && ysLast != null) {
          xs = xsLast;
          ys = ysLast;
        } else {
          return; // no valid coordinates
        }
      }
    }

    int width = int.parse(attr[PyA.SELECTION_ICON_WIDTH] ?? '0'), height = width;

    // PyA.SELECTION_ICON_OUTSIDE is false e.g. for integrals
    if (attr[PyA.SELECTION_ICON_OUTSIDE] == Utils.TRUE &&
        xs! > dataAreaWidth - insetx ~/ 2) {
      xs = dataAreaWidth -
          width; // make sure icon remains visible inside data area
    }

    xselectionIcon = xs! + 2;

    yselectionIcon = ys! - height ~/ 2;
    String stroke = attr[PyA.STROKE]  ?? 'black', fill = "white";
    if (isSelected) {
      fill = attr[PyA.STROKE] ?? '1';
    }

    selectionIcon = RectElement();
    SVG.setAttr(selectionIcon!, {
      "x": "$xselectionIcon",
      "y": "$yselectionIcon",
      "width": "$width",
      "height": "$height",
      SVG.STROKE: "$stroke",
      SVG.FILL: "$fill"
    });

    polylineContainer.append(selectionIcon!);
  }

  /// Removes the selection icon if there
  void removeSelectionIcon() {
    if (selectionIcon != null) selectionIcon!.remove(); // already there
    selectionIcon = null;
  }

  /// Returns the specs of the selectionRect.
  math.Rectangle? getSelectionRectangleMath() {
    if (selectionIcon == null) {
      return null;
    }
    return math.Rectangle(
        int.parse(selectionIcon!.attributes[SVG.X] ?? '0'),
        int.parse(selectionIcon!.attributes[SVG.Y] ?? '0'),
        int.parse(selectionIcon!.attributes[SVG.WIDTH] ?? '0'),
        int.parse(selectionIcon!.attributes[SVG.HEIGHT] ?? '0'));
  }

  /// Adds a list of points to [polylineContainer]. The list must be
  /// given in POLYLINE_POINT_LIST (list of strings): shape,x1,y1,x2,y2,...
  /// in the polyline coordinates units.
  /// [shape] defines how the points are drawn, e.g. as a circle.
  /// SQUARE_EMPTY, CIRCLE_EMPTY, ...
  void addPointShapes() {
    // remove existing point shapes
    if (pointShapes != null && pointShapes.isNotEmpty) {
      for (GeometryElement shape in pointShapes) {
        shape.remove();
      }
      pointShapes.clear();
    }

    String markerAttr = attr[PyA.POINT_LIST] ?? '';
    if (markerAttr == null || markerAttr.isEmpty) return;

    List<String> xyvals = JsonUtils.decodeLS(markerAttr);
    String shape = xyvals.first;
    if (xyvals.length < 4) {
      return;
    }

    for (int i = 2; i < xyvals.length; i += 2) {
      double x = double.parse(xyvals[i]);
      double y = double.parse(xyvals[i + 1]);
      int mxs = xphysToXscreen(x).round();
      int mys = yphysToYscreen(y).round();
      GeometryElement pointShape = createPointShape(mxs, mys, shape);
      pointShapes.add(pointShape);
      polylineContainer.append(pointShape);
    }
    attr[PyA.MARKER_TEXT] = xyvals[1];
  }

  /// Adds a text to the polyline in the polyline's color
  /// from attr[PyA.MARKER_TEXT], if present, at the screen position
  /// [xs], [ys]. If the text is appended right of the polyline it requires that
  /// the user extended polyAttr[PyA.INSETX] by the length of the text in pixels.
  void addMarkerText(int xs, int ys) {
    if (polylineMarker != null) polylineMarker!.remove();
    if (attr[PyA.MARKER_TEXT] == null || attr[PyA.MARKER_TEXT]!.isEmpty) return;
    polylineMarker = TextElement();
    polylineMarker!.text = attr[PyA.MARKER_TEXT];
    int fontsize = int.parse(attr[PyA.MARKER_FONTSIZE] ?? '0');
    SVG.setAttr(polylineMarker!, {
      "x": "${xs + 8}",
      "y": "${ys + fontsize ~/ 4}",
      SVG.FONT_SIZE: "${fontsize}",
      SVG.FILL: attr[PyA.STROKE] ?? 'black',
      SVG.STROKE: "none",
    });
    polylineContainer.append(polylineMarker!);
  }

  /// Creates a point shape for the screen position
  /// [mxs, mys] with the geometric form [shape].
  GeometryElement createPointShape(int mxs, int mys, String shape) {
    GeometryElement pointShape;
    String stroke = attr[PyA.POINT_LIST_STROKE] ?? 'black', fill = "white";
    if (stroke == null) {
      stroke = attr[PyA.STROKE] ?? 'black'; // use polyline stroke
    }
    if (shape == POLYLINE_POINT_SHAPE_SQUARE_EMPTY) {
      int width = 8, height = width;
      pointShape = RectElement();
      SVG.setAttr(pointShape, {
        "x": "${mxs + width / ~2}", // center the square
        "y": "${mys + height / ~2}",
        "width": "$width",
        "height": "$height",
        SVG.STROKE: "$stroke",
        SVG.FILL: "$fill"
      });
    } else  { //if (shape == POLYLINE_POINT_SHAPE_CIRCLE_EMPTY) {
      int radius = 6;
      pointShape = CircleElement();
      SVG.setAttr(pointShape, {
        "cx": "${mxs}",
        "cy": "${mys}",
        "r": "$radius",
        SVG.STROKE: "$stroke",
        SVG.FILL: "$fill"
      });
    }
    return pointShape;
  }

//  void addChangeListener(Function changeListener)
//  {
//    removeChangeListener(changeListener); // if already there
//    changeListeners.add(changeListener);
//  }
//
//  void removeChangeListener(Function changeListener)
//  {
//    if(changeListeners.contains(changeListener))
//      changeListeners.remove(changeListener);
//  }

//  void addVerticalLine(String lineId, int dataIX, int yStart, int yLength)
//  {
//    removeVerticalLine(lineId);
//
//    Polyline dpy = p.dataPolylines[pid];
//    double xphys = p.xyData[p.xyidOfPolyIds[pid]].getX(ipivot);
//    int x = dpy.xphysToXscreen(xphys);
//
//    LineElement liney = LineElement(); // line parallel to y axis
//    setAttr(liney, {
//      "x1": "$x", "y1": "$yStart", "x2": "$x", "y2": "${yStart + yLength}",
//      STROKE: attributes[SpecPad.PIVOT_STROKE], STROKE_WIDTH: attributes[SpecPad.PIVOT_STROKE_WIDTH]
//    });
//
//    verticalLines[lineId] = liney;
//    polylineContainer.append(liney);
//  }
//
//  void removeVerticalLine(String lineId)
//  {
//    if(verticalLines.containsKey(lineId))
//    {
//      verticalLines[lineId].remove();
//      verticalLines.remove(lineId);
//    }
//  }

  /// Removes this polyline from dataArea if not webgl.
  void remove() {
    if (!useWebgl) {
      polylineContainer.remove();
    }
  }

  /// Draws vertical lines above this polyline.
  /// [markerIndices] - the x positions of the lines (indices in the [dpy]'s array.
  /// [markerLabels] - text labels drawn together with lines. If not null, the
  ///   length of this array must be the same as that of [markerIndices].
  /// [markerAttrList] - marker attributes. If null, [MARKER_DEFAULT_ATTRIBUTES]
  ///   are used. Otherwise, the length of this array must be the same as that of
  ///   [markerIndices].
  void drawMarkers(List<double> markerIndices, List<String> markerLabels,
      List<Map<MarA, String>>? markerAttrList) {
    MarkerLines(this)
        .drawPolylineMarkers(markerIndices, markerLabels, markerAttrList);
  }
} // Polyline

/// An intensity (y) region defined by a selection rectangle
class YZoomRegion {
  late double ytop, ybottom; // corresponding physical coordinates

  YZoomRegion(this.ytop, this.ybottom);

  YZoomRegion.from(YZoomRegion zoomRegion) {
    ytop = zoomRegion.ytop;
    ybottom = zoomRegion.ybottom;
  }
}

/// Polyline attributes
final double POLYLINE_INITIAL_YSCALE = 1.0;

/// points shapes
final String POLYLINE_POINT_SHAPE_SQUARE_EMPTY =
        "POLYLINE_POINT_SHAPE_SQUARE_EMPTY",
    POLYLINE_POINT_SHAPE_CIRCLE_EMPTY = "POLYLINE_POINT_SHAPE_CIRCLE_EMPTY";

/// Default attributes for a Polyline.
final Map<PyA, String> POLYLINE_DEFAULT_ATTRIBUTES = {
  // use only from copies!
  //PyA.AXES_SPECS: '["gb", "ygb"]', // to be used by axis drawing functions
  //PyA.AXES_LEGENDTEXTS: '[]', //  to be used by axis drawing functions
  PyA.COMPRESSION_LENGTH:
      "1024", // <=0 means no data compression, null means 1024, otherwise the compression length.
  PyA.DRAW_OUTSIDE_Y_VIEWPORT: Utils
      .TRUE, // check whether y exceeds boundaries and draw maximum or mimimum
  PyA.DRAW_SELECTION_ICON: Utils.FALSE,
  PyA.INSETX: "16", // px from dataArea, left and right
  PyA.INSETY: "12", // px from dataArea, top and bottom
  PyA.MARKER_FONTSIZE: "16",
  PyA.REFYMAX: "null",
  PyA.SELECTION_ICON_WIDTH: "16",
  PyA.SELECTION_ICON_OUTSIDE: Utils.FALSE,
  PyA.SHOW_LEGEND: Utils.TRUE,
  PyA.STROKE: "blue",
  PyA.STROKE_WIDTH: "1",
  PyA.STROKE_WIDTH_HILITE: "2",
  PyA.XSCALE: "1.0", // scales polyline xvalues by factor (around 0))
  PyA.XSHIFT: "0", // shifts polyline right (negative) or left in px
  PyA.YIX1: "0.0",
  PyA.YSCALE:
      "${POLYLINE_INITIAL_YSCALE}", // scales polyline y values up (negative) or down by factor (around 0),
  PyA.YSHIFT1: "0", // shift by this number of pixels
  PyA.YSHIFT2: "0", // additional shift by this number of pixels
  PyA.YPOSITION_ZERO:
      "0.9", // in percent of y height, 0.5 means centered in the data area (position of yphys=0)
  PyA.YPOSITION_ZERO_RESET: "0.9"
};

/// Polyline attribute names definitions. See also [POLYLINE_DEFAULT_ATTRIBUTES].
/// The attribute values are Strings (possibly a String resulting from json
/// encoded Map or List).
/// You may pass any of these attributes to a Polyline constructor. The respective
/// defaults attributes will be overridden.
enum PyA {
  AXES_SPECS,
  AXES_LEGENDTEXTS,
  COMPRESSION_LENGTH, // null=1024, > 0 compress [array] to this size
  DRAW_OUTSIDE_Y_VIEWPORT, // if "true" and y outside bounds: draw y=bound
  DRAW_SELECTION_ICON, // if "true" draw selection icon right of polyline
//  FONT_SIZE,
  INSETX, // polyine drawn with this inset in px from dataArea, left and right
  INSETY, // polyine drawn with this inset in px from dataArea, top and bottom
  MARKER_TEXT, // optional additional text at end of polyline, see [addMarkerText]
  MARKER_FONTSIZE, // font of MARKER_TEXT
  LEGENDTEXT, // can be used to save a legend text within the attributes
  LEGENDTEXT_2, // can be used to save a 2nd legend text within the attributes
  POINT_LIST, // jsonified optional list of points to be drawn,see [addPointShapes]
  POINT_LIST_STROKE, // color of POINT_LIST
  REFYMAX, // vertical (y) scale if not null, for drawing multiple polylines
  ROTATE, // e.g. "rotate(-90) translate(${-axisLength/2}, ${legendTextOffset})"
  SELECTION_ICON_WIDTH, // size of icon drawn at end of polyline
  SELECTION_ICON_OUTSIDE, // "true" to force this icon to remain inside dataarea
  SHOW_LEGEND, // can be used to store "true/false" whether to show a legend
  STROKE, // polyline color in SVG format
  STROKE_WIDTH, // width of polyline in px
  STROKE_WIDTH_HILITE, // another polyline with used to hilite (mark) it
  XSCALE, // expands/shrinks polyline in x direction by this factor
  XSHIFT, // shifts polyline right (negative) or left in px
  YIX1,
  YSCALE, // factor to scale polyline y values up (negative) or down (around 0)
  YSCALE2, // an optional 2nd y scaling if not null
  YSHIFT1, // shifts polyline up/down by this number of pixels
  YSHIFT2, // an optional 2nd y shift
  YPOSITION_ZERO, // y position of polyline point with value 0 in % of effective
  // view height: 0.5 means centered. Note: If the array to be displayed
  // containes e.g. only big positive values, [YPOSITION_ZERO] must be set to
  // a value bigger than 1 to get the polyline in the visible view range.
  // For array with only negative values it is recommended to display the
  // negated array.
  YPOSITION_ZERO_RESET, // reset (saved) value for [YPOSITION_ZERO]
  OVERRIDE_IXFIRST, // if not null: overrides constructor argument [ixFirst]
  OVERRIDE_IXLAST // if not null: overrides constructor argument [ixFirst]
}
