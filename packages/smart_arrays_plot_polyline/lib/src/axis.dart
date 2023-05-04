import 'dart:html';
import 'dart:svg';
import 'dart:math' as math;

import 'utils.dart';
import 'grid.dart';
import 'phys_units.dart';

/// The purpose of this class is to draw the axes supplementing the graphical
/// representation of 1D or 2D array data. A graphical representation of a 1D
/// array is provided by the class [Polyline] of this package.
/// For 1D arrays, a horizontal coordinate axis and a vertical intensity axis
/// is provided (constructors [Axis.coord] and [Axis.intens]. For 2D arrays,
/// a horizontal coordinate axis and a vertical second coordinate axis is
/// provided (both constructed with [Axis.coord].
/// The user can control many axis attributes.
/// Note: Drawing is performed using Svg, Scalable Vector Graphics.
/// Usage:
///   1) Construct an axis: axis = Axis.coord(args) or Axis.intens(args).
///   2) The axis was drawn into the SvgSvgElement [labelsContainer] using Svg.
///   3) Set the desired position of [labelsContainer] by setting its
///      "x" and "y" Svg attributes. For convenience, do it with SVG.setAttr().
///      x and y must be relative to the container in which [labelsContainer]
///      will be embedded (plotArea in next step 4).
///   4) Append [labelsContainer] to the desired SvgSvgElement type container
///      of your particluar page layout: plotArea.append(axis.labelsContainer)
class Axis {
  /// The axis is drawn into this container by the constructor. You will have
  /// to place it according to your desired app layout to make it visible in
  /// your app.
  SvgSvgElement labelsContainer;

  /// This is the coordinate grid which can be drawn optionally. The grid
  /// graph is contained in [xyGrid.gridContainer].  You will have to place it
  /// according to your desired app layout to make it visible.
  XYGrid xyGrid;

  /// Corresponds to the attribute EXTRA_SPACE_FOR_EDGE_LABELS_X.
  /// It is needed for the case where a coordinate value label is drawn exactly
  /// at the left or right of the x axis. The tick position is then 0 or
  /// axisWidth in labelsContainer coordinates. We will draw the text labels
  /// into the same container. Since the labels are centered around the ticks, half
  /// of such a label would lie outside the container an would be clipped.
  /// Using EXTRA_SPACE_FOR_EDGE_LABELS_X, we extend the container so as to make
  /// such a label fully visible.
  int extra_space_for_edge_labels_x;

  /// Accordingly for y axis.
  int extra_space_for_edge_labels_y;

  Map<AxA, String> _attributes; // id, attributes
  bool _isReversed = false; // true if axis point to the left or down
  double _coordShift; // indicated eversed axis
  PhysicalToScreen physToScreen; // "physical" axis coordinate to screen coord.

  /// Creates a coordinate axis for data represented by an array.
  /// The axis consists of the following axis elements: axis ticks, axis labels,
  /// axis legend and grid lines. No straight line representing the axis itself
  /// is drawn. This is very simple and is left to the caller for flexibility reasons.
  ///
  /// [npoints] is array.length for a 1D array or for the horizontal axis of a 2D
  ///   array. It is array[0].length for the second (vertical) coordinate axis
  ///   of a 2D array.
  /// [ixFirst] and [ixLast]: Only axis elements inside in this array index range
  ///  will be drawn. In order to synchronize axis display with array data display,
  ///  e.g. with [Polyline] of this package, the same indices must be chosen
  ///  for data display AND for axis display. The same applies to [npoints].
  ///
  /// [physStart] is the "physical unit" of the first array element,
  ///  for example seconds or Hertz or whatever.
  ///
  /// [physWidth] is the width of the entire array in "physical" units.
  ///   The axis labels are displayed in physical units.
  ///
  /// [center] if false: a computed unit value corresponds exactly to
  ///   a data index (e.g. [ixFirst]). If true: corresponds to the mean valu
  ///   between to subsequent indices (e.g. [ixFirst], [ixFirst] + 1).
  ///   Either choice can be convenient, depending on the application.
  ///
  /// [calib] is an optional axis calibration factor. If not null, both [physStart]
  ///   and [physWidth] are multiplied with calib.
  ///
  /// [axisLength] The axis will get this length in pixels.
  ///
  /// [axisAreaWidth] The axis area will get this width
  ///   in pixels. It must be chosen so as to give enough room to draw the
  ///   tick marks, the axis text labels  and the axis legend text.
  ///
  /// [gridLength] The length in pixels of the grid lines. See
  ///   [axesAttributes][AxA.POSITION] on how to enable a grid.
  ///
  /// [legendText] The text drawn along the axis, for example the physical units.
  ///
  /// [physToScreen] Specify here a method that converts an axis coordinate to
  /// a screen coordinate. Note: In order to synchronize axis display with array
  /// data display, e.g. with [Polyline] of this package, this method must be
  /// the same used for array data display! This method depends on the your
  /// particular application layout in the browser page.
  ///
  /// [axesAttributes]: If null, [AXIS_DEFAULT_ATTRIBUTES] are used. Otherwise
  ///  you can define here colors, fonts and more. The attributes specified here
  ///  override the respective defaults. See [AxA] for all options.
  ///
  /// [touchCallbacks]: If not null, at least 2 functions must be specified in
  ///   the list. touchCallbacks[0] will be called on a touch start event,
  ///    touchCallbacks[1] will be called on a touch move event.
  ///
  /// NOTE 1: The axis will be drawn into the SVG container [labelsContainer] of
  ///  "this". You will have to add this container to your desired SVG container
  ///  for your desired  layout, and you must set the SVG "x" and "y" coordinates
  ///  of [labelsContainer] relative to its parent SVG container (SvgSvgElement).
  ///  If [axesAttributes][AxA.POSITION] contains "t": the drawing sequence into
  ///  labelsContainer is
  ///  legendText - labels - ticks. If [position] contains "b": the drawing
  ///   sequence into labelsContainer is ticks - labels - legendText.
  /// If [axesAttributes][AxA.POSITION] contains "x2": The coodinate axis is a drawn vertically,
  /// to be used as the 2nd coodinate axis for 2D plots.
  ///
  /// NOTE 2: The grid, if enabled, will be drawn into the SVG container.
  ///  [xyGrid.gridContainer]. You will have to add this container to your
  ///  desired SVG container for your desired layout, and you must set the SVG "x"
  ///  and "y" coordinates of [gridContainer] relative to its parent container
  ///  (SvgSvgElement).
  Axis.coord(
      int npoints,
      final double ixFirst,
      final double ixLast,
      double physStart,
      double physWidth,
      bool center,
      double calib,
      final int axisLength,
      final int axisAreaWidth,
      final int gridLength,
      PhysicalToScreen physToScreen,
      Map<AxA, String> axesAttributes,
      List<TouchCallback> touchCallbacks)
      : this(
            npoints,
            ixFirst,
            ixLast,
            physStart,
            physWidth,
            center,
            calib,
            null,
            //_coordShift,
            axisLength,
            axisAreaWidth,
            gridLength,
            physToScreen,
            axesAttributes,
            touchCallbacks);

  /// Creates a vertical intensity axis. See the other constructors for
  /// a horizontal or vertical coordinate axis.
  /// [start], [end]: Only those axis ticks, text labels, and grid lines lying in
  ///   this y intensity range will be drawn.
  ///
  /// [refval] and [refvalNormalized]: allow for rescaling the axis
  ///   label values: Recomputes (rescales) the axis such that [refval] will
  ///   obtain the value [refvalNormalized]. Both refvals must not be zero!
  ///   Set any of the refvals to null if no rescaling should be applied.
  ///   Rescaling allows apps e.g. to ask a user for a special scaling per GUI.
  ///
  /// [coordShift] = first + last. This is the coordinate
  ///   transformation needed to reverse the axis direction. If
  ///   [axesAttributes][AxA.POSITION]
  ///   contains a '-' sign AND [coordShift] is not null, the axis get reversed
  ///   and the axis zero point get adjusted accordingly.
  ///
  /// [axisLength] the axis will get this length in pixels.
  ///
  /// [axisAreaWidth]: the axis area will get this width in pixels. There must
  ///   be enough room to draw the horizontal tick marks, the axis text labels
  ///   and the axis legend text.
  ///
  /// [gridLength] the length in pixels of the horizontal grid lines. See
  ///   [axesAttributes][AxA.POSITION] on how to enable a horizontal grid.
  ///
  /// [legendText] the text drawn along the axis, for example the physical units.
  ///
  /// [axesAttributes][AxA.POSITION] A String with possibly several characters.
  ///   1) If containing a "b", the tick marks, axis labels and the
  ///    legend are drawn left of the axis. Needed if you want to position the axis
  ///    left of the data area. If containing a "t", the tick marks, axis labels and the
  ///    legend are drawn right of the axis. Needed if you want to position the axis
  ///    right of the data area.
  ///   2) If containing a "g", horizontal grid lines at the y-positions of the
  ///    tick marks will be drawn, with a length of [gridLength] pixels.
  ///   3) If containing a "-" (minus sign), the axis direction is reversed.
  ///     The smallest axis values are then at the top, the biggest ones at
  ///     the bottom. You MUST specify [coordShift] for this case.
  ///   4) If containing a "x2", the axis serves as the 2nd coodinate axis of
  ///     a 2D plot (e.g. contour plot) and will be drawn vertically.
  ///     If containing a "y", it is also drawn verticallym but as the
  ///     intensity axis of a 1D (polyline) plot.
  ///
  /// [physToScreen] Specify here a method that converts an axis coordinate to
  ///   a screen coordinate. Note: In order to synchronize axis display with array
  ///   data display, e.g. with [Polyline] of this package, this method must be
  ///   the same used for array data display! This method depends on the your
  ///   particular application layout in the browser page.
  ///
  /// [axesAttributes] If null, [AXIS_DEFAULT_ATTRIBUTES] are used. Otherwise
  /// you can define here colors, fonts and more. The attributes specified here
  /// override the respective defaults. See [AxA] for all options.
  ///
  /// [touchCallbacks] If not null, at least 2 functions must be specified in
  ///   the list. touchCallbacks[0] will be called on a touch start event,
  ///    touchCallbacks[1] will be called on a touch move event.
  ///
  /// NOTE 1: The axis will be drawn into the SVG container [labelsContainer] of
  ///  this class using the parameters specified for the constructor. You will
  ///  have to add this container to your desired container for your desired
  ///  layout, and you must set the SVG "x" and "y" coordinates of [labelsContainer]
  ///  relative to its parent container.
  ///
  /// NOTE 2: The grid, if enabled, will be drawn into the SVG container
  ///  [xyGrid.gridContainer]. You will have to add this container to your
  ///  desired container for your desired layout, and you must set the SVG "x"
  ///  and "y" coordinates of [gridContainer] relative to its parent container.
  Axis.intens(
      final double start,
      final double end,
      double refval,
      double refvalNormalized,
      double coordShift,
      final int axisLength,
      final int axisAreaWidth,
      final int gridLength,
      PhysicalToScreen physToScreen,
      Map<AxA, String> axesAttributes,
      List<TouchCallback> touchCallbacks)
      : this(
            null,
            start,
            end,
            refval,
            refvalNormalized,
            null,
            null,
            coordShift,
            axisLength,
            axisAreaWidth,
            gridLength,
            physToScreen, () {
          axesAttributes[AxA.POSITION] += "y"; // convert axis to vertical
          return axesAttributes;
        }(), touchCallbacks);

  /// Constructs an axis. See [Axis.coord] and [Axis.intens] for a description of
  /// the arguments. Use these named constructors rather than this one.
  Axis(
      int npoints,
      final double start,
      final double end,
      double physStart,
      double physWidth,
      bool center,
      double calib,
      this._coordShift,
      final int axisLength,
      final int axisWidth,
      final int gridLength,
      this.physToScreen,
      Map<AxA, String> axesAttributes,
      List<TouchCallback> touchCallbacks) {
    String legendText = axesAttributes[AxA.LEGENDTEXT];
    String position = axesAttributes[AxA.POSITION];
    if (position.contains('-')) _isReversed = true;

    bool isXaxis = true;
    bool isXaxisF1 = false;
    if (position.contains("y")) {
      isXaxis = false; // vertical intensity axis
    }

    if (position.contains("x2")) {
      isXaxis = false;
      isXaxisF1 = true; // vertical x2 coordinate axis
    }

    // make sure not null to avoid crash if, for y axis, [_isReversed] is
    // true, but the user left [_coordShift] with null.
    if (_coordShift == null) _coordShift = 0.0;

    // Just a helper
    double physFromIndex(double index) {
      return PhysUnits.physFromIndex(
          index, physStart, physWidth, npoints, _isReversed, center, calib);
    }

    // Just a helper
    double physToIndex(double phys) {
      return PhysUnits.physToIndex(
          phys, physStart, physWidth, npoints, _isReversed, center, calib);
    }

    _attributes = Map.from(AXIS_DEFAULT_ATTRIBUTES); // init. attributes
    if (axesAttributes != null) {
      // possibly changed attributes as wished by caller
      _attributes.addAll(axesAttributes);
    }

    // find number of desired x labels from attribute NUMBER_AXIS_LABELS
    // depending on axis width
    Map<String, String> numLabelsX =
        JsonUtils.decodeMSS(_attributes[AxA.NLABELS_X]);
    Map<String, String> numLabelsY =
        JsonUtils.decodeMSS(_attributes[AxA.NLABELS_Y]);

    int numberLabels = 6;
    Map<String, String> numLabels = numLabelsX;
    if (!isXaxis) numLabels = numLabelsY;

    numLabels.forEach((length, nlabs) {
      if (axisLength > int.parse(length)) {
        numberLabels = int.parse(nlabs);
        return;
      }
    });

    double first = start, last = end;

    // This applies when coordShift is specified, and reverse is specified externally
    if (_coordShift != null && _isReversed) // reverse axis
    {
      first = _coordShift - start;
      last = _coordShift - end;
//      _isReversed = true;
    }

    List<String> displayedXValues;

    // prepare layout: legend - labels - ticks or ticks - labels - legend, depending on position
    // relative to labelsContainer
    int fontsize = int.parse(_attributes[AxA.FONT_SIZE]);

    int ticksFrom, ticksTo, labelPos, legendPos;
    String axis_text_color;
    if (isXaxis) {
      if (_isReversed) {
        _coordShift = start + end;
        first = _coordShift - start;
        last = _coordShift - end;
      }

      displayedXValues = genLabels(physFromIndex(first), physFromIndex(last),
          tightStyle: false, nticks: numberLabels, scale: null);

//      displayedXValues = genLabels(DSPhys.indexToPhysX(ydata, first),
//          DSPhys.indexToPhysX(ydata, last),
//          tightStyle: false, nticks: numberLabels, scale: null);

      if (displayedXValues.length > 2) {
        // if genLabels() delivered values which are outside "first" and "last"
        // try again with an increased "numberLabels" input.
        // This mimic could be repeated, if such cases would occur in practice.
        double firstx = double.parse(displayedXValues.first);
        double lastx = double.parse(displayedXValues.last);
        if (firstx < first || lastx > last) {
          numberLabels++;
          displayedXValues = genLabels(
              physFromIndex(first), physFromIndex(last),
              tightStyle: false, nticks: numberLabels, scale: null);
        }
      }

      // check again whether the sum of all labels would exceed the axis length, and reduce
      // the number of labels significantly. This occurs especially when the coordinate numbers are large.
      double itemp = displayedXValues.length *
          displayedXValues[displayedXValues.length ~/ 2].length *
          fontsize *
          0.6;
      if (itemp.round() > axisLength) {
        numberLabels = (0.8 * numberLabels).round();
        displayedXValues = genLabels(physFromIndex(first), physFromIndex(last),
            tightStyle: false, nticks: numberLabels, scale: null);
      }

      // bottom axis
      ticksFrom = 0;
      ticksTo = int.parse(_attributes[AxA.TICK_LENGTH]);
      labelPos = ticksTo + fontsize + 4;
      legendPos = labelPos + int.parse(_attributes[AxA.LEGENDTEXT_OFFSET_X]);
      if (position.contains("t")) // top axis
      {
        ticksFrom = axisWidth;
        ticksTo = axisWidth - int.parse(_attributes[AxA.TICK_LENGTH]);
        labelPos = ticksTo - 4; // distance between ticks and labels
        legendPos = labelPos -
            int.parse(_attributes[AxA
                .LEGENDTEXT_OFFSET_X]); //  Note that text y is at the text baseline,
      }
      axis_text_color = _attributes[AxA.TEXT_COLOR_X];
    } else {
      // treat y axis or F1 axis
      if (isXaxisF1) {
        if (_isReversed) {
          _coordShift = start + end;
          first = _coordShift - start;
          last = _coordShift - end;
        }
        displayedXValues = genLabels(physFromIndex(first), physFromIndex(last),
            tightStyle: false, nticks: numberLabels, scale: null);
      } else {
        try {
          double maxval = physStart;
          double normalizedMaxval = physWidth;
          displayedXValues = genLabels(
              PhysUnits.normalize(first, maxval, normalizedMaxval),
              PhysUnits.normalize(last, maxval, normalizedMaxval),
              tightStyle: false,
              nticks: numberLabels,
              scale: null);
        } catch (e) {
          // this occurs e.g. if the entire spectrum is 0.0.
          displayedXValues = ["0.0"];
        }
      }

      // left axis
      ticksFrom = axisWidth;
      ticksTo = axisWidth - int.parse(_attributes[AxA.TICK_LENGTH]);
      labelPos =
          ticksTo - int.parse(_attributes[AxA.LABELS_OFFSET_Y]); //fontsize - 4;
      legendPos =
          labelPos - int.parse(_attributes[AxA.LEGENDTEXT_LEFT_OFFSET_Y]);
      if (position.contains("t")) {
        // right axis
        ticksFrom = 0;
        ticksTo = int.parse(_attributes[AxA.TICK_LENGTH]);
        // distance between ticks and labels:
        labelPos = ticksTo + int.parse(_attributes[AxA.LABELS_OFFSET_Y]);
        //  Note that text y is at the text baseline:
        legendPos =
            labelPos + int.parse(_attributes[AxA.LEGENDTEXT_RIGHT_OFFSET_Y]);
      }
      axis_text_color = _attributes[AxA.TEXT_COLOR_Y];
    } // end yaxis

    // draw the labels at the right position in the labelsContainer and draw tick marks
    List<int> labelPositions = [];
    double physVal;
    labelsContainer = SvgSvgElement(); // now position the labels here
    TextElement te;
    LineElement line;
    int posScreen, linePos, x, y;
    String textAnchor = "middle", baselineShift = "0";
    extra_space_for_edge_labels_x =
        int.parse(_attributes[AxA.EXTRA_SPACE_FOR_EDGE_LABELS_X]);
    extra_space_for_edge_labels_y =
        int.parse(_attributes[AxA.EXTRA_SPACE_FOR_EDGE_LABELS_Y]);

    for (int i = 0; i < displayedXValues.length; i++) {
      physVal = double.parse(
          displayedXValues[i]); // physical position of an axis label

      if (isXaxis || isXaxisF1) {
        posScreen = getScreenPos(physToIndex(physVal));
      } else {
        double maxval = physStart;
        double normalizedMaxval = physWidth;
        // because polyline has unnormalized values:
        posScreen = getScreenPos(
            PhysUnits.undoNormalize(physVal, maxval, normalizedMaxval));
      }

      // must come BEFORE range check to keep the list length of
      // labelPositions consistent:
//      labelPositions.add(posScreen);

      // don't display labels lying outside dataArea
      if (posScreen < 0) continue;
      if (posScreen > axisLength) continue;
      labelPositions.add(posScreen);

      te = TextElement();

      if (displayedXValues[i].length > 4 && physVal.abs() > 99999) {
        // display too large numbers in exponential form: 4.00e+8
        // with this may digits after point:
        displayedXValues[i] = physVal.toStringAsExponential(2);
        // remove "e" to save space: 4.00+8
        displayedXValues[i] = displayedXValues[i].replaceAll("e", "");
      }

      te.text = displayedXValues[i];

      if (isXaxis) {
        x = posScreen + extra_space_for_edge_labels_x;
        y = labelPos;
      } else {
        x = labelPos;
        y = posScreen + extra_space_for_edge_labels_y;
        textAnchor = "end";
        if (position.contains("t")) {
          textAnchor = "start"; // right axis
        }
        // this will center the label text vertically with respect to labelPos
        baselineShift = "-33%";
      }

      SVG.setAttr(te, {
        SVG.X: "$x", // start position of text w/r xaxis area
        SVG.Y: "$y", // relative to bottom of data area
        SVG.FILL: axis_text_color,
        SVG.STROKE: "none",
        SVG.FONT_SIZE: _attributes[AxA.FONT_SIZE],
        SVG.TEXT_ANCHOR: "$textAnchor",
        SVG.BASELINE_SHIFT: "$baselineShift",
        SVG.CURSOR: "default" // don't auto-change to text entry cursor shape
      });
      labelsContainer.append(te);

      // draw tick marks if wanted, tick length 0 means no ticks
      if (_attributes.containsKey(AxA.TICK_LENGTH) &&
          int.parse(_attributes[AxA.TICK_LENGTH]) > 0) {
        line = LineElement(); // line parallel to y axis
        if (isXaxis) {
          linePos = posScreen + extra_space_for_edge_labels_x;
        } else {
          linePos = posScreen + extra_space_for_edge_labels_y;
        }

        if (isXaxis) {
          SVG.setAttr(line, {
            SVG.X1: "$linePos",
            SVG.Y1: "$ticksFrom",
            SVG.X2: "$linePos",
            SVG.Y2: "$ticksTo",
          });
        } else {
          SVG.setAttr(line, {
            SVG.X1: "$ticksFrom",
            SVG.Y1: "$linePos",
            SVG.X2: "$ticksTo",
            SVG.Y2: "${linePos}",
          });
        }

        // set common attributes
        SVG.setAttr(line, {
          SVG.STROKE: _attributes[AxA.STROKE],
          SVG.STROKE_WIDTH: _attributes[AxA.STROKE_WIDTH]
        });
        labelsContainer.append(line);
      }

//      // draw x grid if wanted
//      if (position.contains("g") && gridLength != null && gridLength > 0) {
//        // axesAttributes may contain the grid attributes. If not, XYGrid will use its defaults.
//        if (isXaxis) {
//          xyGrid =
//              XYGrid(labelPositions, null, null, gridLength, axesAttributes);
//        } else {
//          xyGrid =
//              XYGrid(null, labelPositions, gridLength, null, axesAttributes);
//        }
//      }
    } // for(int i= 0; i<displayedXValues.length; i++)

    // draw x grid if wanted
    if (position.contains("g") && gridLength != null && gridLength > 0) {
      // axesAttributes may contain the grid attributes. If not, XYGrid will use its defaults.
      if (isXaxis) {
        xyGrid =
            XYGrid(labelPositions, null, null, gridLength, axesAttributes);
      } else {
        xyGrid =
            XYGrid(null, labelPositions, gridLength, null, axesAttributes);
      }
    }

    // add axis legend text (e.g. the axis unit) at the bottom of the axis labels and center the text
    if (legendText != null && legendText.trim().isNotEmpty) {
      te = TextElement();
      te.text = legendText;

      if (isXaxis) {
        SVG.setAttr(te, {
          SVG.X: "${axisLength / 2 + extra_space_for_edge_labels_x}",
          // center text in xaxis area
          SVG.Y: "$legendPos",
          // offset from xaxis labels
          SVG.FILL: axis_text_color,
          SVG.STROKE: "none",
          SVG.FONT_SIZE: _attributes[AxA.FONT_SIZE],
          SVG.TEXT_ANCHOR: "middle",
          SVG.CURSOR: "default"
          // don't auto-change to text entry cursor shape
        });
      } else {
        // Set up the coordinate tranformation to achieve a text rotation around 90 or -90 where the
        // text is centered relative to the y axis, and offset from the y axis labels.
        // It consists of the actual rotation followed by a translation considering that the
        // rotation origin is at (0,0) of the container, and the text anchor being set to "middle".
        // default legend text direction is from bottom to top
        int legendTextOffset = int.parse(_attributes[
            AxA.LEGENDTEXT_LEFT_OFFSET_Y]); // relative to yaxis labels
        String rotate =
            "rotate(-90) translate(${-axisLength / 2}, ${legendTextOffset})";

        if (_attributes[AxA.YLEGENDTEXT_DIRECTION] == "tb") {
          // top to bottom
          rotate =
              "rotate(90) translate(${axisLength / 2}, ${-legendTextOffset})";
          // right y axis
          if (position.contains("t")) {
//            rotate = "rotate(90) translate(${axisLength/2}, ${-axisWidth + legendTextOffset})";
            rotate =
                "rotate(90) translate(${axisLength / 2}, ${-axisWidth + (axisWidth * 0.22).round()})";
          }
        }

        SVG.setAttr(te, {
          SVG.X: "0",
          SVG.Y: "0",
          // (x,y) = (0,0) is the 90 degree rotation origin
          SVG.FILL: axis_text_color,
          SVG.STROKE: "none",
          SVG.FONT_SIZE: _attributes[AxA.FONT_SIZE],
          SVG.TEXT_ANCHOR: "middle",
          // changing this would change the transformation formula above
          SVG.TRANSFORM: rotate,
          // rotates around text origin, more complicated than "writing-mode: tb"
          SVG.CURSOR: "default"
          // don't auto-change to text entry cursor shape
        });
      }

      // on touch devices make sure that touches on the text don't get lost
      te.onTouchStart.listen((UIEvent e) {
        e.preventDefault();
        if (touchCallbacks != null && touchCallbacks.isNotEmpty) {
          touchCallbacks[0](e);
        }
      });

      te.onTouchMove.listen((UIEvent e) {
        e.preventDefault();
        if (touchCallbacks != null && touchCallbacks.length >= 2) {
          touchCallbacks[1](e);
        }
      });

      labelsContainer.append(te);
    }
  }

  /// Returns the screen position of [physcoord] for this axis relative to the
  /// data area. Accounts for reversed axis and for axis calibrationFactor.
  int getScreenPos(double physcoord) {
    double physval = physcoord;
    if (_isReversed) {
      // coordinate transformation needed to reverse the axis direction
      physval = _coordShift - physval;
    }
    // convert physical to screen coordinates (must use orig. values!)
    int posScreen = physToScreen(physval).round();
    return posScreen;
  }

  //----------- static methods -----------

  /// Finds a "nice" number (1, 2, 5, or power-or-ten multiple thereof)
  /// approximately equal to x. Rounds the number if [round = true],
  /// takes ceiling if [round = false].
  static double nicenum(double x, bool round) {
    if (x.abs() < 0.000001) return 0.000001;

    double log10x = math.log(x) / math.ln10;
    int expv = log10x.floor(); // exponent of x

    double f = x / math.pow(10.0, expv); // fractional part of x

    double nf; // nice, rounded fraction
    if (round) {
      if (f < 1.5) {
        nf = 1.0;
      } else if (f < 3.0) {
        nf = 2.0;
      } else if (f < 7.0) {
        nf = 5.0;
      } else {
        nf = 10.0;
      }
    } else {
      if (f <= 1.0) {
        nf = 1.0;
      } else if (f <= 2.0) {
        nf = 2.0;
      } else if (f <= 5.0) {
        nf = 5.0;
      } else {
        nf = 10.0;
      }
    }
    return nf * math.pow(10.0, expv);
  }

  ///  Generates nice axis labels for a graph and return them as a list of Strings.
  ///  From https://github.com/alexreisner/smart_chart/blob/master/lib/smart_chart/vendor/nice_numbers.rb
  ///
  /// Takes graph [left], [right] (data range from min to max), and an options map:
  ///
  /// [nticks] - number of ticks (target, won't be hit exactly)
  /// [scale] - number of digits to the right of the decimal point in
  ///   labels; null to have the algorithm choose the best value (=default)
  /// [tightStyle] - (default=true), tight means min and max
  ///   labels are min and max data values, loose means min label is less than
  ///   min data value and max label is greater than max data value
  ///
  /// This is an implementation of Paul Heckbert's "Nice Numbers for Graph Labels"
  /// algorithm, as described in the Graphics Gems book:
  /// http://books.google.com/books?id=fvA7zLEFWZgC&pg=PA61&lpg=PA61#v=onepage
  ///
  /// See also http://www.justintalbot.com/research/axis-labeling/
  /// for an improved algorithm which considers font sizes etc.
  static List<String> genLabels(double left, double right,
      {bool tightStyle = true, int nticks = 5, int scale}) {
    double min = left, max = right;
    if (left > right) // also works for this case
    {
      min = right;
      max = left;
    }

    // find min, max, and interval
    double range = nicenum(max - min, false);
    double d = nicenum(range / (nticks - 1), true); //  tick mark spacing
    double graphmin = (min / d).floor() * d; // graph range min
    double graphmax = (max / d).ceil() * d; //  graph range max

    // define # of fractional digits to show
    int nfrac = scale;
    if (nfrac == null) {
      double log10d = math.log(d) / math.ln10;
      nfrac = math.max(-log10d.floor(), 0);
    }

    // generate label positions
    List<String> marks = [];
    for (double x = graphmin; x < graphmax + 0.5 * d; x += d) {
      marks.add("${x.toStringAsFixed(nfrac)}");
    }

    // tighten up ends if necessary
    if (tightStyle) {
      marks[0] = min.toStringAsFixed(nfrac);
      marks[marks.length - 1] = max.toStringAsFixed(nfrac);
    }

//  if(left > right)
//  {
//    marks = List.from(marks.reversed);
//  }

    return marks;
  }

  /// Default attributes for axes and grid.
  static final Map<AxA, String> AXIS_DEFAULT_ATTRIBUTES = {
    AxA.FONT_SIZE: "18",
    AxA.EXTRA_SPACE_FOR_EDGE_LABELS_X: "50",
    AxA.EXTRA_SPACE_FOR_EDGE_LABELS_Y: "10",
    AxA.LABELS_OFFSET_Y: "2",
    AxA.LEGENDTEXT: "",
    AxA.LEGENDTEXT_OFFSET_X: "20",
    AxA.LEGENDTEXT_LEFT_OFFSET_Y: "30",
    AxA.LEGENDTEXT_RIGHT_OFFSET_Y: "30",
    AxA.NLABELS_X:
        '{"100":"2", "200":"4", "300":"8", "400":"10", "500":"10", "600":"10", "700":"10"}',
    AxA.NLABELS_Y:
        '{"100":"7", "200":"7", "300":"12", "400":"12", "500":"12", "600":"12", "700":"12"}',
    AxA.POSITION: "bg",
    AxA.STROKE: "black",
    AxA.STROKE_WIDTH: "1",
    AxA.TEXT_COLOR_X: "black",
    AxA.TEXT_COLOR_Y: "black",
    AxA.TICK_LENGTH: "6",
    AxA.YLEGENDTEXT_DIRECTION: "bt",
    AxA.XYGRID_STROKE: "#A9A9A9",
    AxA.XYGRID_STROKE_WIDTH: "1.0",
    AxA.XYGRID_STROKE_OPACITY: "0.3",
    AxA.XYGRID_STROKE_DASH: "0,0"
  };
} // [Axis]

/// Axis attribute names definitions. See also [AXIS_DEFAULT_ATTRIBUTES].
/// The attribute values are Strings (possibly a String resulting from json
/// encoded Map or List).
/// You may pass any of these attributes to an axis constructor. The respective
/// defaults attributes will be overridden.
/// [POSITION] A String with possibly several characters.
///   1) If containing a "b", the tick marks, axis labels and the
///    legend are drawn below the axis. Needed if you want to position
///    the axis at the bottom of the data area. If containing a "t", the tick
///    marks, axis labels and the legend are above the axis. Needed if you want
///    to position the axis at the top of the data area.
///   2) If containing a "g", grid lines at the positions of the
///    tick marks will be drawn, with a length of [gridLength] pixels.
///   3) If containing a "-" (minus sign), the axis direction is reversed:
///     Biggest to smallest values, rather tan smallest to biggest.
///   4) If containing a "y", the axis direction is vertical, otherwise horizontal.
///     This can be used to create the second coordinate axis for a 2D array
///     which is, for example, displayed as a contour plot:
///     a) first create a horizontal axis
///     b) then create a vertical axis, where the parameter [npoints]
///       must be the array length in the second dimension.
enum AxA {
  EXTRA_SPACE_FOR_EDGE_LABELS_X, // see comment at the begin of [Axis]
  EXTRA_SPACE_FOR_EDGE_LABELS_Y, // see comment at the begin of [Axis]
  FONT_SIZE, // font size in px of axis labels and legend
  LABELS_OFFSET_Y, // distance between y axis tics and axis labels in pixels
  LEGENDTEXT, // the text displayed along the axis
  LEGENDTEXT_OFFSET_X, // distance: axis legend to x axis labels
  LEGENDTEXT_LEFT_OFFSET_Y, // if y axis tics pointing left: legend position
  LEGENDTEXT_RIGHT_OFFSET_Y, // if y axis tics pointing right: leg. pos.
  NLABELS_X, // {x axis length in px: max number of labels in axis, ...} (json)
  NLABELS_Y, // {y axis length in px: max number of labels in axis, ...} (json)
  PHYS_X_START, // physical x axis value of point 0 in the desired x axis units
  PHYS_X_WIDTH, // physical x axis width in the desired x axis units
  POSITION, // axis position see comment above for details
  STROKE, // axis tics and labels color, e.g. "red" or "#A9A9A9"
  STROKE_WIDTH, // thickness of tics in pixels
  TEXT_COLOR_X, // x axis labels and legend color
  TEXT_COLOR_Y, // y axis labels and legend color
  TICK_LENGTH, // axis tic length, 0 means don't display ticks
  YLEGENDTEXT_DIRECTION, // "bt" = bottom to top, tb = top to bottom
  XYGRID_STROKE, // grid color "#A9A9A9" or "orange"
  XYGRID_STROKE_WIDTH, // width of grid
  XYGRID_STROKE_OPACITY, // 1.0 = max intensity of grid color, 0.0 = invisible
  XYGRID_STROKE_DASH // grid dash length: 0.0 not dashed, 10.0 with resp. dashes
}

/// Converts a "physical" axis coordinate to a screen coordinate
typedef double PhysicalToScreen(double physicalCoordinate);

/// Called for touch events on an axis elements
typedef dynamic TouchCallback(UIEvent e);
