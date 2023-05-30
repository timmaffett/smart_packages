// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.
import 'dart:html';

import '../smart_dialogs.dart';

/// This class defines of attributes which are used as
/// defaults for the appearance or style of a [BasicTable].
/// Use [setAttr] to modify attributes.
class TableAttr {
  /// The currently active table attributes defining the dialog style,
  /// initialized with defaults, which is expected by some apps!
  static Map<String, String> attr = Map.from(ATTR_DEFAULTS);

  /// The attribute names
  static final String TABLE_BACKGROUND_COLOR = "TABLE_BACKGROUND_COLOR",
      TABLE_TEXT_COLOR = "TABLE_TEXT_COLOR",
      TABLE_HEADER_FONTSIZE = "TABLE_HEADER_FONTSIZE",
      TABLE_BUTTON_FONTSIZE = "TABLE_BUTTON_FONTSIZE",
      TABLE_OUTER_BORDER = "TABLE_OUTER_BORDER",
      TABLE_BORDER_RADIUS = "TABLE_BORDER_RADIUS",
      TABLE_HIGHLIGHT_COLOR = "TABLE_HIGHLIGHT_COLOR",
      TABLE_HEADER_BACKGROUND_COLOR = "TABLE_HEADER_BACKGROUND_COLOR",
      TABLE_HEADER_TEXT_COLOR = "TABLE_HEADER_TEXT_COLOR",
      TABLE_HEADER_TEXT_ALIGN = "TABLE_HEADER_TEXT_ALIGN",
      TABLE_INNER_CELL_LEFT_BORDER_COLOR = "TABLE_INNER_CELL_LEFT_BORDER_COLOR",
      TABLE_BSPAN_COLOR = "TABLE_BSPAN_COLOR",
      TABLE_BSPAN_UNDERSCORE = "TABLE_BSPAN_UNDERSCORE";

  /// Default attributes for desktop screen
  static final Map<String, String> ATTR_DEFAULTS = {
    TABLE_BACKGROUND_COLOR: "#FFF",
    TABLE_TEXT_COLOR: "#024457",
    TABLE_HEADER_FONTSIZE: "16",
    TABLE_BUTTON_FONTSIZE: "14",
    TABLE_OUTER_BORDER: "rgb(52,120,188) 1px solid",
    TABLE_BORDER_RADIUS: "0px", // 0: for iPad + galaxy to display outer border
    TABLE_HIGHLIGHT_COLOR: "rgb(230,236,238)",
    TABLE_HEADER_BACKGROUND_COLOR: "rgb(52,120,188)",
    TABLE_HEADER_TEXT_COLOR: "#FFF",
    TABLE_HEADER_TEXT_ALIGN: "left",
    TABLE_INNER_CELL_LEFT_BORDER_COLOR: "white",
    // used for info block before table starts:
    TABLE_BSPAN_COLOR: '<span style="color:rgb(52,120,188)">',
    TABLE_BSPAN_UNDERSCORE: '<span style="text-decoration: underline">'
  };

  /// Initializes the dialog attributes depending on the used device from
  /// the respective defaults.
  static void initAttrFromDefaults() {
    attr = Map.from(ATTR_DEFAULTS);
  }

  /// Sets the table attributes specified in [myAttr]. Overrides
  /// the respective current values (e.g. the defaults).
  /// Example:
  /// setAttr({TABLE_HIGHLIGHT_COLOR: "red",TABLE_BUTTON_FONTSIZE: "20"});
  static void setAttr(Map<String, String> myAttr) {
    if (attr == null) initAttrFromDefaults();
    if (myAttr == null) return;
    for (String attrName in myAttr.keys) {
      attr[attrName] = myAttr[attrName]!;
    }
  }

  /// Sets some table styles for [table].
  static void setTableStyle(TableElement table) {
    if (attr == null) {
      initAttrFromDefaults();
    }

    table.style
          ..margin = "1em 0" // t r b l
//    ..width = "100%"
          ..overflow = "hidden"
          ..backgroundColor = attr[TABLE_BACKGROUND_COLOR]
          ..background = attr[TABLE_BACKGROUND_COLOR]
          ..color = attr[TABLE_TEXT_COLOR]
          ..borderRadius = attr[TABLE_BORDER_RADIUS]!
          ..border = attr[TABLE_OUTER_BORDER]
          ..borderSpacing = "0" // space between cells and border around table
        // Note: without collapse (versus "separate"), the table cell border of 2
        // adjacent cell are drawn separately, which
        // lead optically to the effect that double borders appear.
        // The default value of borderCollapse is browser dependent.
        // We commented that out here because we don't draw borders
        // around individual cells
//    ..borderCollapse = "collapse"
        ;
  }

  /// Defines the style of a table [row] used as a table header
  static void setRowStyleHeader(TableRowElement row) {
    if (attr == null) {
      initAttrFromDefaults();
    }
    row.style
      ..backgroundColor = attr[TABLE_HEADER_BACKGROUND_COLOR]
      ..color = attr[TABLE_HEADER_TEXT_COLOR]
      ..padding = "7px"
      ..textAlign = attr[TABLE_HEADER_TEXT_ALIGN]
      ..margin = ".5em 1em";
  }

  /// Defines the style of standard cells in a row
  static void setCellStyle(TableCellElement cell, String textAlign) {
    cell.style
      ..textAlign = textAlign
      ..margin = ".5em 1em"
      ..padding = "5px" // 0px 0px 5px" // t r b l
      ..wordWrap = "break-word"
      ..maxWidth = "15em";
  }
} // TableAttr
