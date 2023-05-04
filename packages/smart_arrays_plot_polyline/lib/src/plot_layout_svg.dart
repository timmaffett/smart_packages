import 'dart:html';
import 'dart:svg';
import 'dart:math' as math;

import 'package:smart_arrays_plot_polyline/smart_arrays_plot_polyline.dart';

import 'utils.dart';

/// Computes a plot layout for drawing with SVG, but also for 2D html:
/// Sets up the graphics containers and their relative coordinates and sizes.
/// The layout will be contained in a div element. Several plots can be
/// embedded in the layout e.g. using [SimplePlot.mult] of this package.
class PlotLayoutSVG {
  /// Layout attributes
  Map<LayA, String> attr;

  /// [plotDiv] will contain the graphics, it's size must be as wished by
  /// the user.
  DivElement plotDiv;
  math.Rectangle<int> dataInsets;

  /// List of [left, top, width, height] in plotDiv fractions (0...1)
  /// [plotSizes.length] = number of plots
  List<List<double>> plotSizes;

  /// All graphics is drawn using SVG Scalable Vector Graphics. [plotArea] is
  /// added to [plotDiv] and contains the entire plot. [dataArea] is added
  /// to [plotArea] and contains the polylines and the legend. The axes are
  /// drawn outside the [dataArea] but within the [plotArea].
  List<SvgSvgElement> plotAreas, dataAreas;

  /// For 2D plots
  List<CanvasElement> contourCanvases;

  /// A frame around the 'dataArea'.
  List<RectElement> dataAreaBorders, plotAreaBorders;

  /// The coordinates with respect to their container
  List<math.Rectangle<int>> plotAreaRects,
      dataAreaRects,
      xaxisRects,
      yaxisRects;

  /// Creates a plot layout to be contained in [plotDiv].
  /// For additional 2D html drawings [contourCanvas] is created if [withCanvas]
  /// is true.
  /// This constructor is used to embed a single plot by [SimplePlot]
  /// of this package.
  PlotLayoutSVG(DivElement plotDiv, bool withCanvas)
      : this.mult(
            plotDiv,
            withCanvas,
            [
              [0.0, 0.0, 1.0, 1.0]
            ],
            null);

  /// Creates a plot layout consisting of several sub-layout. the entire layout
  /// will be embedded in [plotDiv].
  /// For additional 2D html drawings [contourCanvas] is created if [withCanvas]
  /// is true.
  /// [plotSizes] defines the positions an sizes of each sub-layout in units
  /// of [plotDiv]. Example for 3 sub-layouts:
  ///   [ [0.0, 0.0, 0.5, 0.5],
  ///    [0.5, 0.0, 0.5, 0.5],
  ///    [0.1, 0.5, 0.7, 0.5] ]
  /// This constructor can be used e.g. to embed a several plots using
  /// [SimplePlot.mult] of this package.
  /// If [layoutAttr] is null, [LAYOUT_DEFAULT_ATTRIBUTES] are used. Otherwise
  /// the attributes contained in [layoutAttr] will override the respective
  /// default attributes.
  PlotLayoutSVG.mult(this.plotDiv, bool withCanvas, this.plotSizes,
      Map<LayA, String> layoutAttr) {
    if (layoutAttr == null) {
      attr = Map.from(LAYOUT_DEFAULT_ATTRIBUTES);
    } else {
      attr.addAll(LAYOUT_DEFAULT_ATTRIBUTES);
    }
    // Reserve space in pixels for the axes labels and a border around everthing.
    int xaxAreaHeight = int.parse(attr[LayA.X_AXIS_AREA_HEIGHT]),
        yaxAreaWidth = int.parse(attr[LayA.Y_AXIS_AREA_WIDTH]),
        borderAreaSize = int.parse(attr[LayA.BORDER_AREA_SIZE]),
        frameSize = int.parse(attr[LayA.FRAME_SIZE]);

    int nplots = plotSizes.length;
    dataAreas = List(nplots);
    plotAreas = List(nplots);
    dataAreaBorders = List(nplots);
    plotAreaBorders = List(nplots);
    plotAreaRects = List(nplots);
    dataAreaRects = List(nplots);
    xaxisRects = List(nplots);
    yaxisRects = List(nplots);
    contourCanvases = List(nplots);

    dataInsets = math.Rectangle<int>(borderAreaSize, borderAreaSize, 0, 0);
    SvgSvgElement plotAreasCont = SvgSvgElement();
    SVG.setAttr(plotAreasCont, {
      SVG.WIDTH: "${plotDiv.clientWidth - 2}",
      SVG.HEIGHT: "${plotDiv.clientHeight - 2}",
    });

//    print("div=w=${plotDiv.clientWidth}, h=${plotDiv.clientHeight}");
    for (int i = 0; i < nplots; i++) {
      int plotareaLeft = (plotDiv.clientWidth * plotSizes[i][0]).round();
      int plotareaTop = (plotDiv.clientHeight * plotSizes[i][1]).round();

      int plotareaWidth = (plotDiv.clientWidth * plotSizes[i][2] -
              2 -
              2 * borderAreaSize -
              2 * frameSize)
          .round();

      int plotareaHeight = (plotDiv.clientHeight * plotSizes[i][3] -
              2 -
              2 * borderAreaSize -
              2 * frameSize)
          .round();

      // will contain an entire plot
      plotAreaRects[i] = math.Rectangle<int>(
          plotareaLeft, plotareaTop, plotareaWidth, plotareaHeight);
//      print("i=$i, plotarea=${plotAreaRects[i]}");

      // all coordinates in the following rectangles are are relative to plotRect

      // will contain the polylines and the legend
      dataAreaRects[i] = math.Rectangle<int>(
          yaxAreaWidth,
          dataInsets.top,
          plotAreaRects[i].width - yaxAreaWidth - dataInsets.left,
          plotAreaRects[i].height - xaxAreaHeight);

//      print("i=$i, dataarea=${dataAreaRects[i]}");

      // will contain the x axis tic marks and text labels
      xaxisRects[i] = math.Rectangle<int>(
          dataAreaRects[i].left,
          dataAreaRects[i].top + dataAreaRects[i].height,
          dataAreaRects[i].width,
          xaxAreaHeight);

      // will contain the y axis tic marks and text labels
      yaxisRects[i] = math.Rectangle<int>(dataAreaRects[i].left - yaxAreaWidth,
          dataAreaRects[i].top, yaxAreaWidth, dataAreaRects[i].height);

      // will contain all axes and the data area (polylines and legend)
      plotAreas[i] = SvgSvgElement();
      SVG.setAttr(plotAreas[i], {
        SVG.X: "${plotAreaRects[i].left}",
        SVG.Y: "${plotAreaRects[i].top}",
        SVG.WIDTH: "${plotAreaRects[i].width}",
        SVG.HEIGHT: "${plotAreaRects[i].height}",
      });

      // a border around the plot area
      plotAreaBorders[i] = RectElement();
      int bw = int.parse(attr[LayA.PLOT_AREA_BORDER_WIDTH]);
      SVG.setAttr(plotAreaBorders[i], {
        SVG.X: "${plotAreaRects[i].left + bw}",
        SVG.Y: "${plotAreaRects[i].top + bw}",
        SVG.WIDTH: "${plotAreaRects[i].width - 2 * bw}",
        SVG.HEIGHT: "${plotAreaRects[i].height - 2 * bw}",
        SVG.FILL: "none",
        SVG.STROKE: attr[LayA.PLOT_AREA_BORDER_COLOR],
        SVG.STROKE_WIDTH: attr[LayA.PLOT_AREA_BORDER_WIDTH]
      });

      // will contain polylines and legend
      dataAreas[i] = SvgSvgElement();
      SVG.setAttr(dataAreas[i], {
        SVG.X: "${dataAreaRects[i].left}",
        SVG.Y: "${dataAreaRects[i].top}",
        SVG.WIDTH: "${dataAreaRects[i].width}",
        SVG.HEIGHT: "${dataAreaRects[i].height}",
      });

      // a border around the data area
      dataAreaBorders[i] = RectElement();
      SVG.setAttr(dataAreaBorders[i], {
        SVG.X: "${dataAreaRects[i].left}",
        SVG.Y: "${dataAreaRects[i].top}",
        SVG.WIDTH: "${dataAreaRects[i].width}",
        SVG.HEIGHT: "${dataAreaRects[i].height}",
        SVG.FILL: "none",
        SVG.STROKE: attr[LayA.DATA_AREA_BORDER_COLOR],
        SVG.STROKE_WIDTH: attr[LayA.DATA_AREA_BORDER_WIDTH]
      });

      if (withCanvas) {
        // Put the first contour in its own canvas. More canvases needed for more contours!
        contourCanvases[i] = CanvasElement(
            width: plotAreaRects[i].width, height: plotAreaRects[i].height);
        contourCanvases[i].style
          ..left = "0px" // could be omitted, 0 is default
          ..top = "0px"
          ..position = "absolute"
          ..backgroundColor = "transparent"
          // pointerEvents = none means: The canvas will not catch mouse or touch events. Instead, the
          // events pass through to the parent, which is plotDiv. There, all events are catched and treated.
          // NOTE: pointerEvents is still experimental, test on all devices!
          // If not working, event leisteners must be directly attached to the canvas and be delegated to the
          // central treatment from there, which is a little more laborious!
          ..pointerEvents = "none";
      }

      // now stack the plot containers.
      // needed to position 2d canvas and its contents properly:
      plotDiv.style.position = "relative";
      plotAreas[i].append(dataAreas[i]);
      plotAreas[i].append(dataAreaBorders[i]); // draw above dataArea
      // add canvas before plotArea, so plotArea will be above it
      if (contourCanvases[i] != null) {
        plotAreasCont.append(contourCanvases[i]);
      }
      plotAreasCont.append(plotAreas[i]);
      if (bw > 0) {
        plotAreasCont.append(plotAreaBorders[i]);
      }
    }
    plotDiv.append(plotAreasCont); // append entire layout to div
  }

  /// Default attributes for a layout
  static final Map<LayA, String> LAYOUT_DEFAULT_ATTRIBUTES = {
    // use only from copies!
    LayA.X_AXIS_AREA_HEIGHT: "70",
    LayA.Y_AXIS_AREA_WIDTH: "80",
    LayA.BORDER_AREA_SIZE: "15",
    LayA.FRAME_SIZE: "0",
    LayA.DATA_AREA_BORDER_COLOR: "darkgreen",
    LayA.DATA_AREA_BORDER_WIDTH: "1",
    LayA.PLOT_AREA_BORDER_COLOR: "darkgreen",
    LayA.PLOT_AREA_BORDER_WIDTH: "0"
  };
}

/// Layout attribute names definitions. See also [LAYOUT_DEFAULT_ATTRIBUTES].
/// The attribute values are Strings.
/// You may pass any of these attributes to a layout constructor. The respective
/// defaults attributes will be overridden.
enum LayA {
  X_AXIS_AREA_HEIGHT, // vertical space for x axis and its legend text in px
  Y_AXIS_AREA_WIDTH, // horizontal space for y axis and its legend text in px
  BORDER_AREA_SIZE, // space around a plot (each side) to draw a border in px
  FRAME_SIZE, // space around a entire multi-plot in px
  DATA_AREA_BORDER_COLOR, // color of border around data area
  DATA_AREA_BORDER_WIDTH, // thickness of border around data area in px
  PLOT_AREA_BORDER_COLOR, // color of border around plot area
  PLOT_AREA_BORDER_WIDTH, // thickness of border around plot area in px (0=no)
}
