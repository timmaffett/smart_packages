import 'dart:svg';
import 'dart:html';
import 'utils.dart';

/// This class represents a legend consisting of
/// - a text line at the top ("top title")
/// - optionally several more lines, each one preceded by a color rectangle.
///
/// Usage:
///   1) Construct an legend: legend = Legend(args) by including its position
///      "x" and "y", and the top title in the attributes argument.
///   2) The legend gets drawn into the SvgSvgElement [legendContainer] using Svg.
///   3) Set the desired position of [legendContainer] by setting its
///      "x" and "y" Svg attributes, and the top title. For convenience, do it with SVG.setAttr().
///      x and y must be relative to the container in which [labelsContainer]
///      will be embedded (plotArea in next step 4).
///   4) Append [labelsContainer] to the desired SvgSvgElement type container
///      of your particluar page layout: plotArea.append(axis.labelsContainer)
class Legend {
  String TOP_TITLE_ID = "TOP_TITLE_ID";
  Map<String, Map<LegA, String>> attrMap =
      Map<String, Map<LegA, String>>(); // id, attributes
  Map<String, TextElement> textElements =
      Map<String, TextElement>(); // id, text
//  Map<Aleg, String> textAttributes;
  Map<String, RectElement> textMarkers =
      Map<String, RectElement>(); // id, rectangle
  late int dy;
  int rectbordersize = 6;
  int colored_rect_width = 0; // small colored rect left of text
  int text_marker_xoffset = 6; // with respect to legend left edge
  final String LEGEND_ID = "legend";
  SvgSvgElement legendContainer = SvgSvgElement();
  RectElement? bgRectangle;
  int fontsize = 10; // pixels
  int nlines;
  late int curlineNo;
  String? topTitle; // always at top of the legend if present, no color rect.

  /// Constructs a Legend with optional [legendAttributes]. If null,
  /// LEGEND_DEFAULT_ATTRIBUTES will apply. If not null the specified attributes
  /// will override the respective default ones.
  ///  X and Y of these attributes may be specified absolutely, e.g. 1
  ///  0, 10px, .. or relatively to the legend container 5%, 60%, ... .
  ///  The legend svg container can be accessed via the attribute [legendContainer]
  ///  of this class.
  ///  [nlines] is 1 if only 1 legend line is to be added using setText().
  ///  If [nlines] > 1, each time a legend text is added its position will be
  ///  decremented by fontsize.
  ///  The initial position of the first legend text is nlines*fontsize.
  ///  If a toptitle is specified, set it at the top of the legend.
  ///  A toptitle is to be stored in legendAttributes[LegA.TOP_TITLE].
  ///  Subtitles (each subtitle on a separate line
  Legend(Map<LegA, String>? legendAttributes, this.nlines) {
    curlineNo = nlines;

    attrMap[LEGEND_ID] = Map.from(LEGEND_DEFAULT_ATTRIBUTES);

    if (legendAttributes != null && legendAttributes.isNotEmpty) {
      attrMap[LEGEND_ID]!.addAll(legendAttributes); // merge
    }

//    textAttributes = attrMap[LEGEND_ID]; // contained in same map

    legendContainer.setAttribute(SVG.X, attrMap[LEGEND_ID]![LegA.X] ?? '');
    legendContainer.setAttribute(SVG.Y, attrMap[LEGEND_ID]![LegA.Y] ?? '');

    colored_rect_width = int.parse(attrMap[LEGEND_ID]![LegA.COLORED_RECT_WIDTH] ?? '0');

    // if a toptitle is specified, set it at the top of the legend.
    // the position handling is done in setText()
    topTitle = attrMap[LEGEND_ID]![LegA.TOP_TITLE];
    if (topTitle != null && topTitle!.isNotEmpty) {
      initSetText(TOP_TITLE_ID, topTitle!, null);
    }
  }

  /// Replaces the legend text with [id] by the new [text] and draws the text
  /// marker rectangle in front of the text. [stroke] defines the color of the
  /// text marker rectangle.If [stroke] is null, no rectangle will be drawn.
  void initSetText(String id, String text, String? stroke) {
    final newTextElementForId = TextElement();
    textElements[id] = newTextElementForId;
    newTextElementForId.text = text;
    fontsize = int.parse(attrMap[LEGEND_ID]![LegA.FONT_SIZE] ?? '10');
//    fontsize = int.parse(textElements[id]
//        .attributes[POLYLINE_LEGEND_FONT_SIZE]); // this is used elsewhere!
    newTextElementForId.setAttribute(SVG.FONT_SIZE, "${fontsize}");
    newTextElementForId
        .setAttribute(SVG.FILL, attrMap[LEGEND_ID]![LegA.TEXT_COLOR] ?? 'black');
//    textAttributes[SVG.FONT_SIZE] = "${fontsize}";
//    setAttr(textElements[id], textAttributes);
    // add a small extra space to the font size
//    int deltay = fontsize +
//        int.parse(textElements[id].attributes[Aleg.POLYLINE_LEGEND_LINESEP]);
    int deltay = fontsize + int.parse(attrMap[LEGEND_ID]![LegA.LINESEP] ?? '0');

    dy = curlineNo * deltay;

    int xoffs = text_marker_xoffset * 2;
    if (stroke != null) {
      xoffs += colored_rect_width;
    }
    if (topTitle != null) {
      dy += 2 * deltay; // for all texts except toptitle
    }

    if (id == TOP_TITLE_ID) {
      dy = deltay; // for toptitle only
      xoffs = text_marker_xoffset * 2 - colored_rect_width ~/ 2;
//      xoffs = text_marker_xoffset * 2;
//      if (stroke != null) {
//        xoffs -= colored_rect_width ~/ 2;
//      }
    }

    curlineNo--;

    legendContainer.append(textElements[id]!);

    newTextElementForId
        .setAttribute(SVG.X, "${xoffs}"); // x position of text begin
    newTextElementForId
        .setAttribute(SVG.Y, "$dy"); // y position of text (baseline)

    // color indicator for legend text: drawn left of the text, but not
    // for the top title.
    if (id != TOP_TITLE_ID && stroke != null) {
      RectElement r = genTextMarkerRectangle_(id, stroke, dy - deltay);
      textMarkers[id] = r;
      legendContainer.append(r);
    }
  }

  /// Replaces the legend text with [id] by the new [text].
  /// [stroke] defines the color of the text marker rectangle.
  /// If [stroke] is null, no rectangle will be drawn.
  /// If there is no legend text to replace, the legend text will be set
  /// initally from [text].
  void setText(String id, String text, String? stroke) {
//    if(text == null)
//    {
//      if(bgRectangle != null)
//        bgRectangle.remove(); // remove the one from the last draw
//      return;
//    }

    if (textElements.containsKey(id)) {
      TextElement te = textElements[id]!;
      te.text = text;
      te.replaceWith(te);
    } else {
      initSetText(id, text, stroke);
    }

    // BG rectangle must be drawn each time the text changes, because it's width
    // must be adapted to the text width. It will be added on top of the text
    // (and the text color marker rectangles)
    // Therefore the rectangle's opacity (BG_OPACITY) must be < 1.0, otherwise
    // the text will remain hidden.
    addBGRectangle_(dy);
  }

  /// Replaces the legend text and associated text marker rectangle of [id].
  void removeText(String id) {
    if (textElements.containsKey(id)) {
      textElements[id]!.remove(); // text element from legendArea
      textElements.remove(id);
    }

    if (textMarkers.containsKey(id)) {
      textMarkers[id]!.remove(); // rect from legendArea
      textMarkers.remove(id);
    }
    curlineNo = nlines; // reset y position
  }

  /// Adds a rectangle to the legend container legendArea with covers the same
  /// space as the current legendArea size.
  /// This will make the legend area visible to the user.
  /// [deltay] defines the current rectangle height (to which rectbordersize is added).
  /// The following attributes from the legend attributes will apply: BG_OPACITY, BG_COLOR.
  void addBGRectangle_(int deltay) {
    if (bgRectangle != null) {
      bgRectangle!.remove(); // remove the one from the last draw
    }

    bgRectangle = RectElement();
    int rectX = 0; // rel.to legendArea, rectY, rectWidth, rectHeight;
    int rectY = 0; // rel.to legendArea, rectY, rectWidth, rectHeight;
//    int rectWidth = legendArea.getBBox().width.round();

    // at the very first call rendering is not complete, so use arbitrary value
    // This could be made better: TODO number of text chars times "font-size"
    int rectWidth = int.parse(attrMap[LEGEND_ID]![LegA.BG_WIDTH] ?? '0');
    if (rectWidth == 0) return;
    int rectHeight = int.parse(attrMap[LEGEND_ID]![LegA.BG_HEIGTH] ?? '0');

    bgRectangle!.attributes[SVG.X] = "$rectX";
    bgRectangle!.attributes[SVG.Y] = "$rectY";
    bgRectangle!.attributes[SVG.WIDTH] = "$rectWidth";
    bgRectangle!.attributes[SVG.HEIGHT] = "$rectHeight";
    bgRectangle!.attributes[SVG.FILL] = attrMap[LEGEND_ID]![LegA.BG_COLOR] ?? '';
    bgRectangle!.attributes[SVG.FILL_OPACITY] =
        attrMap[LEGEND_ID]![LegA.BG_OPACITY] ?? '';

    legendContainer.append(bgRectangle!);
  }

  /// Adds a text marker rectangle to the left of the text with [id], with the fill
  /// color defined by [stroke]. The rectangle is added to legendArea,
  /// [deltay] defines the rectangles y coordinate offset from legendArea's origin.
  RectElement genTextMarkerRectangle_(String id, String stroke, int deltay) {
    RectElement r = RectElement();

    int rectHeight = int.parse(attrMap[LEGEND_ID]![LegA.COLORED_RECT_HEIGHT] ?? '0');
    int rectWidth = colored_rect_width;

    int rectX =
        rectbordersize; // rel.to legendArea, rectY, rectWidth, rectHeight;

    int f = int.parse(attrMap[LEGEND_ID]![LegA.FONT_SIZE] ?? '10');
    int rectY = deltay + f ~/ 2;

    r.attributes[SVG.X] = "$rectX";
    r.attributes[SVG.Y] = "${rectY}";
    r.attributes[SVG.WIDTH] = "$rectWidth";
    r.attributes[SVG.HEIGHT] = "$rectHeight";
    r.attributes[SVG.FILL] = stroke;
    return r;
  }

  /// Sets the Svg attributes for [e] from a [attr].
  static void setAttr(Element el, Map<LegA, String> attr) {
    attr.forEach((LegA key, String value) {
      String skey = value.toString().split(".").last;
      el.setAttribute(skey, value);
    });
  }

  /// Default attributes for legend
  static final Map<LegA, String> LEGEND_DEFAULT_ATTRIBUTES = {
    // use only from copies!
    LegA.BG_COLOR: "lightgrey",
    LegA.BG_OPACITY: "0.2",
    LegA.BG_WIDTH: "0",
    LegA.BG_HEIGTH: "100",
    LegA.COLORED_RECT_WIDTH: "20",
    LegA.COLORED_RECT_HEIGHT: "12",
    LegA.FONT_SIZE: "16",
    LegA.LINESEP: "4",
    LegA.X: "12",
    LegA.Y: "12",
    LegA.TEXT_COLOR: "black",
    LegA.TOP_TITLE: ""
  };
}

/// Legend attribute names definitions. See also [LEGEND_DEFAULT_ATTRIBUTES].
/// The attribute values are Strings.
/// You may pass any of these attributes to a legend constructor. The respective
/// defaults attributes will be overridden.
enum LegA {
  BG_COLOR, // legend container background color
  BG_OPACITY, // legend container background coloring opacity: <1.0 required
  BG_WIDTH, // legend container background coloring width: 0=no background visible
  BG_HEIGTH, // legend container background coloring height
  COLORED_RECT_WIDTH, // width of rectangle in front of legend text line in px
  COLORED_RECT_HEIGHT, // height of rectangle in front of legend text line in px
  FONT_SIZE, // fonts size of legend text in px
  LINESEP, // legends with multiple lines: line extra separation in pixels
  X, // x pos. of [legendArea] in its container in px  (or in percent: 10%, ..)
  Y, // y pos. of [legendArea] in its container
  TEXT_COLOR, // color of legend text
  TOP_TITLE, // text of top line of legend (has no colored rectangle in front)
  SUB_TITLES // one line per subtitle, including colored rectangle
  // Note: [SUB_TITLES] is null or a jsonified List<String>
}
