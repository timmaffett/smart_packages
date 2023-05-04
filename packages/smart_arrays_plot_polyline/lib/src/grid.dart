import 'dart:svg';

import 'utils.dart';
import 'axis.dart';

/// Draws a grid in form of horizontal or vertical lines, or both.
/// The grid is particularly useful when employed in conjunction with the
/// [Axis] class to form a coordinate grid positioned at the tick marks of an axis.
/// Usage:
///   1) Construct a grid: xyGrid = XYGrid(args)
///   2) Result: The grid was drawn into the SvgSvgElement [gridContainer] using Svg.
///   3) Set the desired position of [gridContainer] by setting its
///      "x" and "y" Svg attributes. For convenience, do it with SVG.setAttr().
///      x and y must be relative to the container in which [gridContainer]
///      will be embedded (plotArea in next step 4).
///   4) Append [gridContainer] to the desired SvgSvgElement type container
///      of your particluar page layout: plotArea.append(xyGrid.gridContainer)
class XYGrid {
  /// The axis is drawn into this container by the constructor. You will have
  /// to place it according to your desired app layout to make it visible in
  /// your app.
  SvgSvgElement gridContainer;

  Map<AxA, String> attributes;
  int xLength, yLength;
  List<int> xValues, yValues;

  /// Constructs a grid consisting of lines of length [xLength] and [yLength],
  /// in pixels, parallel to x and y, respectively.
  /// [xValues] and [yValues] define the x and y positions of the grid lines in
  /// pixels relative to their container [gridContainer].
  /// [xValues.length] and [yValues.length] define the number of
  /// grid lines parallel to y and x, respectively. If [xValues] is null or
  /// empty no lines parallel to y will be drawn.
  /// If [yValues] is null or empty no lines parallel to x will be drawn.
  /// [gridAttr]: If null, [GRID_DEFAULT_ATTRIBUTES] are used. Otherwise
  ///  you can define here colors, dashes and more. The attributes specified here
  ///  override the respective defaults.
  XYGrid(this.xValues, this.yValues, this.xLength, this.yLength,
      Map<AxA, String> gridAttr) {
    attributes = Map.from(GRID_DEFAULT_ATTRIBUTES); // init. attributes
    if (gridAttr != null) {
      // possibly changed attributes as wished by caller
      attributes.addAll(gridAttr);
    }
    buildActiveGrid(); // arbitrary initial pos.
  }

  /// Draws the grid into a temporary container, and when done,
  /// replaces [gridContainer] (possibly already containing a grid) by the
  /// new temporary container containing the new grid.
  void buildActiveGrid() {
    LineElement linex, liney;
    SvgSvgElement anXYGrid = SvgSvgElement();
    if (xValues != null) {
      for (int i = 0; i < xValues.length; i++) {
        if (xValues != null && xValues.isNotEmpty) {
          liney = LineElement(); // line parallel to y axis
          SVG.setAttr(liney, {
            SVG.X1: "${xValues[i]}",
            SVG.Y1: "0",
            SVG.X2: "${xValues[i]}",
            SVG.Y2: "${yLength}",
            SVG.STROKE: attributes[AxA.XYGRID_STROKE],
            SVG.STROKE_WIDTH: attributes[AxA.XYGRID_STROKE_WIDTH],
            SVG.STROKE_OPACITY: attributes[AxA.XYGRID_STROKE_OPACITY],
            SVG.STROKE_DASHARRY: attributes[AxA.XYGRID_STROKE_DASH],
          });
          anXYGrid.append(liney);
        }
      }
    }

    if (yValues != null) {
      for (int i = 0; i < yValues.length; i++) {
        if (yValues != null && yValues.isNotEmpty) {
          linex = LineElement(); // line parallel to x axis
          SVG.setAttr(linex, {
            SVG.X1: "0",
            SVG.Y1: "${yValues[i]}",
            SVG.X2: "${xLength}",
            SVG.Y2: "${yValues[i]}",
            SVG.STROKE: attributes[AxA.XYGRID_STROKE],
            SVG.STROKE_WIDTH: attributes[AxA.XYGRID_STROKE_WIDTH],
            SVG.STROKE_OPACITY: attributes[AxA.XYGRID_STROKE_OPACITY],
            SVG.STROKE_DASHARRY: attributes[AxA.XYGRID_STROKE_DASH],
          });

          anXYGrid.append(linex);
        }
      }
    }

    gridContainer = anXYGrid;
  }

  static final Map<AxA, String> GRID_DEFAULT_ATTRIBUTES = {
    AxA.XYGRID_STROKE: "#A9A9A9",
    AxA.XYGRID_STROKE_WIDTH: "1.0",
    AxA.XYGRID_STROKE_OPACITY: "0.3",
    AxA.XYGRID_STROKE_DASH: "0,0"
  };
}
