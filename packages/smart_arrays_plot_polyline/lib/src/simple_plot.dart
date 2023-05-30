import 'dart:convert';
import 'dart:html';
import 'dart:typed_data';

import '../smart_arrays_plot_polyline.dart';

/// This class allows you to display one or several arrays as
/// polylines (curves) inside the browser, along with coordinate axes and a
/// a coordinate grid, an some title text.
/// It is recommended to use this class if a plot needs to be generated with a few
/// lines of code, rather than exploitimg the full capabilities of the classes
/// [Polyline], [Axis], [Legend] for more complex layouts.
class SimplePlot {
  PlotLayoutSVG pl;
  int plotnum;

  /// The axes
  late Axis xaxis, yaxis;

  /// The arrays to be plotted
  List<Float64List> arrays;

  late List<Polyline?> polylines;
  Legend? legend;
  List<Map<PyA, String>?>? plotAttr;
  Map<LegA, String>? legendAttr;
  Map<AxA, String>? xaxisAttr, yaxisAttr;

  final List<String> POLY_COLORS = [
    "blue",
    "red",
    "magenta",
    "green",
    "orange",
    "cyan",
    "lightgreen",
    "crimson",
    "darkred",
    "darkgreen"
  ];

  List<String>? poly_colors;

  SimplePlot(
      List<Float64List> arrays,
      DivElement plotDiv,
      List<Map<PyA, String>> plotAttr,
      Map<AxA, String>? xaxisAttr,
      Map<AxA, String>? yaxisAttr,
      Map<LegA, String>? legendAttr,
      List<String>? poly_colors)
      : this.mult(arrays, plotAttr, xaxisAttr, yaxisAttr, legendAttr,
            poly_colors, PlotLayoutSVG(plotDiv, false), 0);

  /// Plots [arrays] as polylines (curves), along with coordinate axes,
  /// a coordinate grid and legend text.
  /// [plotDiv] - the html DivElement that will contain the plot.
  /// [plotAttr] - plot attributes controlling the appearance and layout of the
  ///   polylines. If [null], internal defaults are used.
  /// [xaxisAttr] - x axis attributes controlling the appearance and layout of the
  ///   x (horizontal) coordinate axis. If [null], internal defaults are used.
  /// [yaxisAttr] - y axis attributes controlling the appearance and layout of the
  ///   y (vertical) coordinate axis. If [null], internal defaults are used.
  /// [legendAttr] - attributes controlling the appearance and layout of the
  ///   text legend. If [null], internal defaults are used.
  /// [poly_colors] - these are the color in which [arrays] get displayed. This
  ///   list may be bigger than the list a [arrays], but not smaller.
  ///   If [null], internal default colors are used.
  ///  [pl] - the containers where the graphics is to be drawn
  /// See the example provided with this package how simple is it is to generate
  /// the plot.
  /// NOTE 1: Displaying more than a single array only makes sense if the value
  ///   ranges in the different arrays are commensurable, otherwise a simultaneous
  ///   plot is not meaningful.
  /// NOTE 2: The sizes of the arrays may be different. The width of the plot
  ///   is computed from [plotDiv].
  SimplePlot.mult(this.arrays, this.plotAttr, this.xaxisAttr, this.yaxisAttr,
      this.legendAttr, this.poly_colors, this.pl, this.plotnum) {
    createPolylines();

    // Compute x and y axis for the first polyline
    createAxes(polylines[0]!);

    legend = createLegend(legendAttr, poly_colors);

    // append  polylines to the "data area" of the layout
    for (int i = 0; i < arrays.length; i++) {
      pl.dataAreas[plotnum]!.append(polylines[i]!.polylineContainer);
    }

    if (legendAttr != null) {
      // append  the legend to the "data area" of the layout
      pl.dataAreas[plotnum]!.append(legend!.legendContainer);
    }

    // append x axis, y axis and axes grid to the "plot area"  of the layout
    pl.plotAreas[plotnum]!.append(xaxis.labelsContainer);
    pl.plotAreas[plotnum]!.append(yaxis.labelsContainer);
    pl.plotAreas[plotnum]!.append(xaxis.xyGrid.gridContainer);
    pl.plotAreas[plotnum]!.append(yaxis.xyGrid.gridContainer);
  }

  /// Creates a polyline for each element of [arrays]
  void createPolylines() {
    polylines = List<Polyline?>.filled(arrays.length,null);
    if (poly_colors == null) {
      poly_colors = POLY_COLORS;
    }
    final double YPOS0 = 0.8;

    for (int i = 0; i < arrays.length; i++) {
      if (i == 0 && (plotAttr == null || plotAttr!.length != arrays.length)) {
        plotAttr = List<Map<PyA, String>?>.filled(arrays.length,null);
      }

      if (plotAttr![i] == null) {
        plotAttr![i] = Map.from(POLYLINE_DEFAULT_ATTRIBUTES);
        plotAttr![i]![PyA.YPOSITION_ZERO] = "$YPOS0";
        plotAttr![i]![PyA.STROKE] = poly_colors![i];
      } else {
        if (plotAttr![i]![PyA.YPOSITION_ZERO] == null) {
          plotAttr![i]![PyA.YPOSITION_ZERO] = "$YPOS0";
        }
        if (plotAttr![i]![PyA.STROKE] == null) {
          plotAttr![i]![PyA.STROKE] = poly_colors![i];
        }
        Map<PyA, String> attr = Map.from(POLYLINE_DEFAULT_ATTRIBUTES);
        attr.addAll(plotAttr![i]!); // merge with defaults
        plotAttr![i] = attr;
      }

      if (i > 0) {
        plotAttr![i]![PyA.REFYMAX] = "${polylines[0]!.ymax}";
      }

      polylines[i] = Polyline(
          arrays[i],
          0,
          arrays[i].length - 1,
          pl.dataAreaRects[plotnum]!.width,
          pl.dataAreaRects[plotnum]!.height,
          null,
          null,
          null,
          plotAttr![i]);
    }
  } // [createPolylines]

  /// Create an x and  a y axis for [polyline].
  ///
  void createAxes(Polyline polyline) {
    if (xaxisAttr == null) {
      xaxisAttr = Map.from(Axis.AXIS_DEFAULT_ATTRIBUTES);
      xaxisAttr![AxA.LEGENDTEXT] = "Point number";
    } else {
      Map<AxA, String> attr = Map.from(Axis.AXIS_DEFAULT_ATTRIBUTES);
      attr.addAll(xaxisAttr!); // merge with defaults
      xaxisAttr = attr;
    }

    if (yaxisAttr == null) {
      yaxisAttr = Map.from(Axis.AXIS_DEFAULT_ATTRIBUTES);
      yaxisAttr![AxA.LEGENDTEXT] = "Function value";
    } else {
      Map<AxA, String> attr = Map.from(Axis.AXIS_DEFAULT_ATTRIBUTES);
      attr.addAll(yaxisAttr!); // merge with defaults
      yaxisAttr = attr;
    }

    // physical units: use point index as defaults
    double physStart = 0;
    double physWidth = (polyline.array.length - 1).toDouble();
    if (xaxisAttr![AxA.PHYS_X_START] != null &&
        xaxisAttr![AxA.PHYS_X_START]!.isNotEmpty &&
        xaxisAttr![AxA.PHYS_X_WIDTH] != null &&
        xaxisAttr![AxA.PHYS_X_WIDTH]!.isNotEmpty) {
      physStart = double.parse(xaxisAttr![AxA.PHYS_X_START] ?? '0');
      physWidth = double.parse(xaxisAttr![AxA.PHYS_X_WIDTH] ?? '0');
    }

    // compute x axis
    xaxis = Axis.coord(
        polyline.array.length, // # points in the polyline's data array
        polyline.xValues.first, // display the array from this index
        polyline.xValues.last, // until this index
        physStart,
        physWidth,
        true, // mode for converting point index to physical unit
        null, // no extra calibration factor of axis labels
        pl.dataAreaRects[plotnum]!.width, // axis length in pixels
        pl.xaxisRects[plotnum]!
            .height, // height of axis area (reserves space for the labels)
        pl.dataAreaRects[plotnum]!
            .height, // grid line length, needed if 'grid' chosen
        polyline.xphysToXscreen, // method converting physical to screen coord.
        xaxisAttr!,
        null // no mouse or touch interaction in this example
        );

    // set the x axis container positions as computed by [computeLayout].
    SVG.setAttr(xaxis.labelsContainer, {
      SVG.X:
          "${pl.xaxisRects[plotnum]!.left - xaxis.extra_space_for_edge_labels_x}",
      SVG.Y: "${pl.xaxisRects[plotnum]!.top}"
    });

    // set the x axis grid container positions as computed by [computeLayout].
    SVG.setAttr(xaxis.xyGrid.gridContainer, {
      SVG.X: "${pl.dataAreaRects[plotnum]!.left}",
      SVG.Y: "${pl.dataAreaRects[plotnum]!.top}"
    });

    // compute y axis (intensity axis)
    double? firstY = polyline.yScreenToYphys(0);
    double? lastY = polyline.yScreenToYphys(pl.dataAreaRects[plotnum]!.height);
    if (firstY == null) firstY = polyline.ymin;
    if (lastY == null) lastY = polyline.ymax;
    yaxis = Axis.intens(
        firstY / polyline.yscale, // axis range, account for [PyA.YSCALE]
        lastY / polyline.yscale,
        null, // no rescaling of y axis
        null, // like above, no rescaling of y axis
        null, // would only relevant for reversed axis
        pl.dataAreaRects[plotnum]!.height, // axis length in pixels
        pl.yaxisRects[plotnum]!
            .width, // height of axis area (reserves space for the labels)
        pl.dataAreaRects[plotnum]!
            .width, // grid line length, needed if 'grid' chosen
        polyline.yphysToYscreen, // method converting physical to screen coord.
        yaxisAttr!,
        null // no mouse or touch interaction in this example
        );

    // set the y axis container positions as computed by [computeLayout].
    SVG.setAttr(yaxis.labelsContainer, {
      SVG.X: "${pl.yaxisRects[plotnum]!.left}",
      SVG.Y:
          "${pl.yaxisRects[plotnum]!.top - yaxis.extra_space_for_edge_labels_y}"
    });

    // set the y axis grid container positions as computed by [computeLayout].
    SVG.setAttr(yaxis.xyGrid.gridContainer, {
      SVG.X: "${pl.dataAreaRects[plotnum]!.left}",
      SVG.Y: "${pl.dataAreaRects[plotnum]!.top}"
    });
  }

  /// Creates a legend from [legendAttr].
  /// [poly_colors], if not null, draws colored subtitle rectangles if there
  /// are subtitles specified in [legendAttr].
  static Legend? createLegend(
      Map<LegA, String>? legendAttr, List<String>? poly_colors) {
    Map<LegA, String> attr = Map.from(Legend.LEGEND_DEFAULT_ATTRIBUTES);
    if (legendAttr != null) {
      attr.addAll(legendAttr); // merge with defaults
      legendAttr = attr;
    } else {
      legendAttr = attr;
    }

    if (legendAttr[LegA.TOP_TITLE] == null) {
      return null;
    }

    int nsubtitles = 0;
    List<String>? subtitles;
    // setup the subtitle lines, use same color as for polylines
    if (legendAttr[LegA.SUB_TITLES] != null) {
      subtitles = json.decode(legendAttr[LegA.SUB_TITLES]!).cast<String>();
      nsubtitles = subtitles!.length;
    }

    Legend legend = Legend(legendAttr, nsubtitles); // create the legend

    // draw subtitles only if nsubtitles > 0:
    // - cut color list to the number needed
    // - note that setText draws from bottom up
    List<String>? colors;
    if (poly_colors != null) {
      colors = List.from(poly_colors.sublist(0, nsubtitles));
    }
    for (int i = nsubtitles - 1; i >= 0; i--) {
      if (colors == null) {
        legend.setText("${i + 1}", subtitles![i], null); // no colored rect drawn
      } else {
        legend.setText("${i + 1}", subtitles![i], colors[i]);
      }
    }
    return legend;
  }
}
