import 'dart:convert';
import 'dart:html';

import 'package:smart_arrays_contour_finder/smart_arrays_contour_finder.dart';

/// The purpose of this class is to provide a simple renderer capable of
/// drawing the contours of a function z=f(x,y).
/// However, this renderer is more general and not only suited for drawing
/// contours, but any kind of lines into a 2D htlm canvas element.
class SimpleContourRenderer implements ContourRenderer {
  late CanvasRenderingContext2D c2d;
  CanvasElement contourCanvas;
  int? last_x1, last_y1, last_x2, last_y2;
  // size and location of drawing area:
  int dataAreaWidth, dataAreaHeight, dataAreaX, dataAreaY;
  late Map<CtourA, String> attr;

  /// Creates a renderer which will draw into [contourCanvas].
  /// The data area size and position covered by the drawing is given by
  /// [dataAreaWidth], [dataAreaHeight], [dataAreaX], [dataAreaY].
  /// [contourAttr]
  SimpleContourRenderer(
      this.contourCanvas,
      this.dataAreaWidth,
      this.dataAreaHeight,
      this.dataAreaX,
      this.dataAreaY,
      Map<CtourA, String>? contourAttr) {
    attr = CONTOUR_DEFAULT_ATTRIBUTES;
    if (contourAttr != null) {
      attr.addAll(contourAttr);
    }
    contourCanvas.style
      ..position = "absolute"
      ..backgroundColor = "transparent";
    c2d = contourCanvas.getContext("2d")! as CanvasRenderingContext2D;
  }

  int xToScreen(double x) {
    if (attr[CtourA.ROTATE] == "true") {
      return (x * dataAreaWidth).round() + dataAreaX;
    } else {
      return (x * dataAreaWidth).round() + dataAreaX;
    }
  }

  int yToScreen(double y) {
    if (attr[CtourA.ROTATE] == "true") {
      return ((1 - y) * dataAreaHeight).round() + dataAreaY;
    } else {
      return ((1 - y) * dataAreaHeight).round() + dataAreaY;
    }
  }

  /// Implements the ContourRenderer: draws the specified contour line
  /// belonging to [contourLevel] into the graphics 2D context. [contourLevel]
  /// is needed to color the line: Here we give a different color to positive
  /// and negative levels.
  void drawContourLine(double startX, double startY, double endX, double endY,
      double contourLevel, int levelNumber) {
    int x1, x2, y1, y2;


//DEBUG//print('drawContourLine  startX=$startX startY=$startY endX=$endX  endY=$endY');

    if (attr[CtourA.ROTATE] == "true") {
      // Some apps need to rotate the contour by -90 deg. around the data area center
      // to obtain the typical contour representation. This code shows how to do that.
      // The rows will be drawn from the botton to the top, i.e. the biggest row
      // number will be drawn at the top of the data area.
      // This code also applies the data area origin, and accounts for the data area
      // width/height ratio.
      x1 = xToScreen(startY);
      x2 = xToScreen(endY);
      y1 = yToScreen(1 - startX);
      y2 = yToScreen(1 - endX);
    } else {
      x1 = xToScreen(startX);
      x2 = xToScreen(endX);
      y1 = yToScreen(1 - startY);
      y2 = yToScreen(1 - endY);
    }

//DEBUG//print('attr[CtourA.ROTATE]=${attr[CtourA.ROTATE]}  x1=$x1 y1=$y1 x2=$x2  y2=$y2');


//    int x1 = (startY * dataAreaWidth).round() + dataAreaX;
//    int x2 = (endY * dataAreaWidth).round() + dataAreaX;
//    int y1 = ((1 - startX) * dataAreaHeight).round() + dataAreaY;
//    int y2 = ((1 - endX) * dataAreaHeight).round() + dataAreaY;

    // skip lines that don't change the plot.
    // This speeds up drawing as long as we don't use compressed data.
    if (x1 == x2 && y1 == y2) {
      return;
    }

    if (last_x1 != null) {
      // would overlap last line
      if ((last_x1 == x1 && last_x2 == x2) &&
          (last_y1 == y1 && last_y2 == y2)) {
        return;
      }
    }

    last_x1 = x1;
    last_x2 = x2;
    last_y1 = y1;
    last_y2 = y2;

    // Draw directly into canvas
    c2d.beginPath();
    c2d.moveTo(x1, y1);
    c2d.lineTo(x2, y2);

    c2d.strokeStyle = attr[CtourA.LEVEL_COLOR_POS];
    if (attr[CtourA.USE_LEVEL_COLORS_POS_NEG] == null ||
        attr[CtourA.USE_LEVEL_COLORS_POS_NEG] == "true") {
      if (contourLevel < 0) {
        c2d.strokeStyle = attr[CtourA.LEVEL_COLOR_NEG];
      }
    } else {
      if (attr[CtourA.LEVEL_COLORS] != null) {
        var colors = jsonDecode(attr[CtourA.LEVEL_COLORS]?? 'black');
        if (colors is List && levelNumber < colors.length) {
          c2d.strokeStyle = colors[levelNumber];
        }
      }
    }

    c2d.lineWidth = 1;
    c2d.stroke();
  }

  /// Contour attribute defaults
  final Map<CtourA, String> CONTOUR_DEFAULT_ATTRIBUTES = {
    CtourA.LEVEL_COLOR_POS: "rgb(0, 0, 255)", // this format needed for wegbgl!
    CtourA.LEVEL_COLOR_NEG: "rgb(255, 0, 255)", //"magenta",
    CtourA.ROTATE: "true"
  };
}

/// Contour attribute definitions
enum CtourA {
  LEVEL_COLORS, // jsonfied List
  LEVEL_COLOR_POS,
  LEVEL_COLOR_NEG,
  ROTATE, // rotates drawn lines by 90 degrees
  USE_LEVEL_COLORS_POS_NEG // "true" (or null), "false"
}
