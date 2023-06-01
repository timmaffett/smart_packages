import 'dart:svg';

import '../smart_arrays_plot_polyline.dart';

/// This class provides methods to draw vertical lines above a [Polyline],
/// optionally along with a text. This can be used to mark desired points
/// of a [Polyline] and provide information about this point, e.g. its
/// index, its physical x value, its y value or more.
class MarkerLines {
  Polyline dpy;

  /// Creates [MarkerLines] for the polyline [dpy].
  MarkerLines(this.dpy);

  /// Draws vertical lines above the polyline [dpy].
  /// [markerIndices] - the x positions of the lines (indices in the [dpy]'s array.
  /// [markerLabels] - text labels drawn together with lines. If not null, the
  ///   length of this array must be the same as that of [markerIndices].
  /// [markerAttrList] - marker attributes. If null, [MARKER_DEFAULT_ATTRIBUTES]
  ///   are used. Otherwise, the length of this array must be the same as that of
  ///   [markerIndices].
  void drawPolylineMarkers(List<double> markerIndices,
      List<String>? markerLabels, List<Map<MarA, String>>? markerAttrList) {
    final ticksContainer = SvgSvgElement();
    final labelsContainer = SvgSvgElement();

    int lastLabpos = 0; // remember last drawn label position
    Map<MarA, String>? markerAttr;
    int nticks = markerIndices.length;
    if (markerLabels != null && markerLabels.length != nticks) {
      throw ("markerIndices and markerLabels must have same length!");
    }
    for (int i = 0; i < nticks; i++) {
      double yphys = dpy.array[markerIndices[i].round()];
      if (markerAttrList != null && markerAttrList.length == nticks) {
        markerAttr = markerAttrList[i];
      }
      drawMarker(ticksContainer, labelsContainer, markerIndices[i],
          markerLabels?[i] ?? '', yphys, lastLabpos, markerAttr);
    }

    dpy.polylineContainer..append(ticksContainer)..append(labelsContainer);
  }

  /// Draws a vertical marker line together with a marker text.
  /// [markerTicks] - drawing will be performed into this container.
  /// [peakIx] - the marker x position will be at this index of the polyline's array.
  /// [peakLabel] - the text drawn above the marker line.
  /// [yphys] - the polyines array's intensity at [peakIx], used to compute
  ///   the y position of the marker line.
  /// [lastLabpos] - the [peakLabel] is only drawn if it's position is
  ///   significantly away from [lastLabpos] (by fontsize). Important when
  ///   several markers are drawn close to each other.
  /// [markerAttr] - any attributes defined in [MarA]. Attributes from
  ///   [MARKER_DEFAULT_ATTRIBUTES] will be used if null or only a subset of
  ///   the [MarA] attributes are specified.
  /// Returns the x position of this [peakLabel], used to be fed into the
  ///   next call of this method as [lastLabpos].
  int drawMarker(
      SvgSvgElement markerTicks,
      SvgSvgElement markerLabels,
      double peakIx,
      String peakLabel,
      double yphys,
      int lastLabpos,
      Map<MarA, String>? markerAttr) {
    if (markerAttr == null) {
      markerAttr = Map.from(MARKER_DEFAULT_ATTRIBUTES);
    } else {
      Map<MarA, String> attr = Map.from(MARKER_DEFAULT_ATTRIBUTES);
      attr.addAll(markerAttr); // merge with defaults
      markerAttr = attr;
    }

    int xpos = dpy.xphysToXscreen(peakIx).round();

    // draw marker line
    int ypos = dpy.yphysToYscreen(yphys).round();

    int yposStart = ypos - 10;
    int yposEnd = yposStart - 30;
    String tickColor;
    if (yphys < 0) {
      ypos = dpy.yphysToYscreen(0.0).round();
      yposStart = ypos - 10;
      yposEnd = yposStart - 30;
      tickColor = markerAttr[MarA.PEAKLAB_MARKER_STROKE_NEG]!;
    } else {
      tickColor = markerAttr[MarA.PEAKLAB_MARKER_STROKE_POS]!;
    }

    LineElement liney = LineElement(); // line parallel to y axis
    SVG.setAttr(liney, {
      SVG.X1: "$xpos",
      SVG.Y1: "$yposStart",
      SVG.X2: "$xpos",
      SVG.Y2: "${yposEnd}",
      SVG.STROKE: tickColor,
      SVG.STROKE_WIDTH: "1"
    });

    markerTicks.append(liney); // append to ticks container

    // draw peak label
    int fontsize = int.parse(markerAttr[MarA.PEAKLAB_FONT_SIZE]!);
    int labposx = xpos - fontsize ~/ 3; // - fontsize*peakLabel.length;
    if (labposx > lastLabpos + fontsize) {
      TextElement teLab = TextElement();
      teLab.text = peakLabel;

      int labposy = yposEnd - fontsize * peakLabel.length ~/ 2;
      SVG.setAttr(teLab, {
        SVG.X: "${labposx}px", // center text in xaxis area
        SVG.Y: "${labposy}px", // offset from xaxis labels
        SVG.FILL: markerAttr[MarA.PEAKLAB_CHARS_FILL]!,
        SVG.STROKE: "none",
        SVG.FONT_SIZE: "${fontsize}px",
        "transform": "rotate(90, ${labposx}, ${labposy})",
        "cursor": "default" // don't auto-change to text entry cursor shape
      });
      markerLabels.append(teLab); // append to labels container
      return labposx;
    }
    return lastLabpos;
  }

  /// Default attributes for legend
  static final Map<MarA, String> MARKER_DEFAULT_ATTRIBUTES = {
    // use only from copies!
    MarA.PEAKLAB_FONT_SIZE: "12", // pixels
    MarA.PEAKLAB_CHARS_AFTER_DECPOINTS: "4",
    MarA.PEAKLAB_MARKER_STROKE_POS: "red",
    MarA.PEAKLAB_MARKER_STROKE_NEG: "DarkCyan",
    MarA.PEAKLAB_CHARS_FILL: "DarkRed"
  };
}

/// Legend attribute names definitions. See also [LEGEND_DEFAULT_ATTRIBUTES].
/// The attribute values are Strings.
/// You may pass any of these attributes to a legend constructor. The respective
/// defaults attributes will be overridden.
enum MarA {
  PEAKLAB_FONT_SIZE,
  PEAKLAB_CHARS_AFTER_DECPOINTS,
  PEAKLAB_CHARS_FILL,
  PEAKLAB_MARKER_STROKE_POS, // legend container background color
  PEAKLAB_MARKER_STROKE_NEG, // legend container background coloring opacity: <1.0 required
}
