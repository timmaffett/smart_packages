import 'dart:html';
import 'dart:convert';

/// Some utilities used in this package
class Utils {
  /// Used a separator string
  static final String SEP_STAN = "||";

  /// string bools
  static final TRUE = "true", FALSE = "false";

  /// Returns true if [s] = TRUE, otherwise false (even for s=null).
  static bool getBoolFromString(String s) {
    if (s == "true") return true;
    return false;
  }

  /// Other function name for getBoolFromString()
  static bool parseBool(String s) {
    return getBoolFromString(s);
  }

  /// Returns an enum type from its String representation [value].
  /// [values] must be the list of enum types defined by [T].
  /// It is legal that [value] be specfied with or without [T]:
  /// <T>.value or value are both legal.
  /// Example:
  /// enum Fruit { apple, banana }, i.e. T = Fruit.
  ///   Fruit.apple.toString() will result in "Fruit.apple".
  ///   Fruit.banana.toString() will result in "Fruit.banana".
  /// In order to reconstruct the enum type Fruit.banana from its String
  /// representation "Fruit.banana", or just from "banana", do the following:
  ///   Fruit banana_fruit = enumFromString<Fruit>(Fruit.values, "Fruit.banana");
  ///  or just
  ///   Fruit banana_fruit = enumFromString<Fruit>(Fruit.values, "banana");
  static T? enumFromString<T>(Iterable<T?> values, String value) {
    String val = value;
    if (!value.contains(".")) {
      String enumType = values.first.toString().split(".").first;
      val = "$enumType.$value";
    }
    return values.firstWhere((type) => type.toString() == val,
        orElse: () => null);
  }
} // [Utils]

/// JSON utils: json.decode(..) returns "dynamic".
/// These utility functions convert "dynamic" to a wanted type.
class JsonUtils {
  /// [jsn] to be encoded as List<String>
  static List<String> decodeLS(String jsn) {
    return json.decode(jsn).cast<String>();
  }

  /// [jsn] to be encoded as Map<String, String>
  static Map<String, String> decodeMSS(String jsn) {
    return json.decode(jsn).cast<String, String>();
  }
} // [JsonUtils]

/// Utilities for Svg, Scalable Vector Graphics.
class SVG {
  /// Frequently used SVG attribute names, to be used with [setAttr].
  static final String BASELINE_SHIFT = "baseline-shift",
      CURSOR = "cursor",
      FONT_SIZE = "font-size",
      FILL = "fill",
      FILL_OPACITY = "fill-opacity",
      X = "x",
      Y = "y",
      X1 = "x1",
      Y1 = "y1",
      X2 = "x2",
      Y2 = "y2",
      HEIGHT = "height",
      STROKE = "stroke",
      STROKE_DASHARRY = "stroke-dasharray",
      STROKE_OPACITY = "stroke-opacity",
      STROKE_WIDTH = "stroke-width",
      TEXT_ANCHOR = "text-anchor",
      TRANSFORM = "transform",
      WIDTH = "width";

  /// Sets the attributes for an Element from a Map.
  /// Example: setAttr(plotArea, {SVG.X: "20", SVG.Y: "40"});
  static void setAttr(Element el, Map<String, String> attr) {
    attr.forEach((key, value) => el.setAttribute(key, value));
  }
}
