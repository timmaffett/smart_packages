// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';

import '../smart_dialogs.dart';

/// This class defines a number of attributes which are used as
/// defaults for the appearance or style of a dialog.
/// Use [setAttr] to modify attributes.
class DiaAttr {
  static final int ZINDEX_POPUP = 1000 * 1000 * 100,
      ZINDEX_DIALOG = 1000 * 1000 * 90,
      ZINDEX_ICONPANEL = 1000 * 1000 * 80;

  static Map<String, String?>? _attr;

  /// The currently active dialog attributes defining the dialog style
  static Map<String, String?> get attr {
      if(_attr==null) initAttrFromDefaults();
      return _attr!;
  }

  /// dialog action names
  static final String DIA_ACT_OK = "DIA_ACT_OK",
      DIA_ACT_BUT1 = DIA_ACT_OK,
      DIA_ACT_CANCEL = "DIA_ACT_CANCEL",
      DIA_ACT_BUT2 = DIA_ACT_CANCEL,
      DIA_ACT_ABORT = "DIA_ACT_ABORT",
      DIA_ACT_BUT3 = "DIA_ACT_BUT3",
      DIA_ACT_ATOMS = "Atoms",
      DIA_ACT_REGION = "Region";

  /// some useful dialog button names
  static final String DIA_BUT_OK = "OK",
      DIA_BUT_CANCEL = "Cancel",
      DIA_BUT_OPT = "Options",
      DIA_BUT_YES = "Yes",
      DIA_BUT_NO = "No";

  /// Currently up to 3 action buttons are supported for a dialog in
  /// addition to the Red Cross (=Abort). Easy to extend.
  static final List<String> DIA_ACTIONS = [
    DIA_ACT_BUT1,
    DIA_ACT_BUT2,
    DIA_ACT_BUT3
  ];

  static final String RADIO = "radio", CHECKBOX = "checkbox";

  /// The attribute names
  static final String DIALOG_TEXT_FONTSIZE = "DIALOG_TEXT_FONTSIZE",
      DIALOG_HELP_TEXT_FONTSIZE = "DIALOG_HELP_TEXT_FONTSIZE",
      DIALOG_HEADER_FONTSIZE = "DIALOG_HEADER_FONTSIZE",
      DIALOG_HEADER_TEXTALIGN = "DIALOG_HEADER_TEXTALIGN",
      DIALOG_BUTTON_FONTSIZE = "DIALOG_BUTTON_FONTSIZE",
      DIALOG_TEXT_COLOR = "DIALOG_TEXT_COLOR",
      DIALOG_TEXT_COLOR2 = "DIALOG_TEXT_COLOR2",
      DIALOG_INPUT_BG = "DIALOG_INPUT_BG",
      DIALOG_BORDER_COLOR = "DIALOG_BORDER_COLOR",
      DIALOG_TOPBAR_COLOR = "DIALOG_TOPBAR_COLOR",
      DIALOG_HEADER_COLOR = "DIALOG_HEADER_COLOR",
      DIALOG_WIN_OPACITY = "DIALOG_WIN_OPACITY",
      DIALOG_POPUP_FONTSIZE1 = "DIALOG_POPUP_FONTSIZE1",
      DIALOG_POPUP_FONTSIZE2 = "DIALOG_POPUP_FONTSIZE2",
      DIALOG_POPUP_TEXT_CELL_PADDING = "DIALOG_POPUP_TEXT_CELL_PADDING",
      DIALOG_CROSS_FONTSIZE = "DIALOG_CROSS_FONTSIZE",
      DIALOG_BACKGROUND = "DIALOG_BACKGROUND",
      DIALOG_BOX_SHADOW = "DIALOG_BOX_SHADOW",
      DIALOG_BORDER_RADIUS = "DIALOG_BORDER_RADIUS",
      OPTIONS_BUTTON_FONTSIZE = "OPTIONS_BUTTON_FONTSIZE",
      POPUP_BACKGROUND = "POPUP_BACKGROUND",
      POPUP_SELECTION_COLOR = "POPUP_SELECTION_COLOR",
      ICONPANEL_BACKGROUND = "ICONPANEL_BACKGROUND";

  static final String DIA_BUTTON_BG_COLOR = "DIA_BUTTON_BG_COLOR",
      DIA_BUTTON_TEXT_COLOR = "DIA_BUTTON_TEXT_COLOR",
      DIA_BUTTON_BG_COLOR_DEF = "#71A0D0",
      DIA_BUTTON_TEXT_COLOR_DEF = "white",
      DIA_BUTTON_RADIUS = "5"; // round corner

  static final String DIA_TEX_COL = "#2C3944",
      DEF_POPUP_SELECTION_COLOR = "rgb(139,177,211)",
      TITLEBAR_BACKGROUND = "rgb(52,120,188)";

  /// Default attributes for desktop screen
  static final Map<String, String> ATTR_DIALOGS_DESKTOP = {
    DIALOG_TEXT_FONTSIZE: "16",
    DIALOG_HELP_TEXT_FONTSIZE: "14",
    DIALOG_HEADER_FONTSIZE: "16",
    DIALOG_HEADER_TEXTALIGN: "center",
    DIALOG_BUTTON_FONTSIZE: "14",
    DIALOG_POPUP_FONTSIZE1: "18",
    DIALOG_POPUP_FONTSIZE2: "14",
    DIALOG_POPUP_TEXT_CELL_PADDING: "6px",
    DIALOG_TEXT_COLOR: DIA_TEX_COL,
    DIALOG_TEXT_COLOR2: "DarkCyan",
    DIALOG_INPUT_BG: "WhiteSmoke",
    DIALOG_BORDER_COLOR: "rgb(62, 70, 75)",
    DIALOG_HEADER_COLOR: DIA_TEX_COL, // currently = DIALOG_TEXT_COLOR
    DIALOG_WIN_OPACITY: "0.95",
    DIALOG_CROSS_FONTSIZE: "24",
    DIALOG_BACKGROUND: "linear-gradient(to bottom, #EEEEEE, white)",
    DIALOG_BOX_SHADOW: "0 6px 10px rgba(0, 0, 0, 0.4)",
    DIALOG_BORDER_RADIUS: "8",
    OPTIONS_BUTTON_FONTSIZE: "12",
    POPUP_BACKGROUND: "#F8F8F8",
    POPUP_SELECTION_COLOR: DEF_POPUP_SELECTION_COLOR,
    ICONPANEL_BACKGROUND: DIA_BUTTON_BG_COLOR_DEF
  };

  /// Default attributes for tablet screen
  static final Map<String, String> ATTR_DIALOGS_TABLET = {
    DIALOG_TEXT_FONTSIZE: "18",
    DIALOG_HELP_TEXT_FONTSIZE: "16",
    DIALOG_HEADER_FONTSIZE: "20",
    DIALOG_HEADER_TEXTALIGN: "center",
    DIALOG_BUTTON_FONTSIZE: "18",
    DIALOG_POPUP_FONTSIZE1: "20",
    DIALOG_POPUP_FONTSIZE2: "18",
    DIALOG_POPUP_TEXT_CELL_PADDING: "10px",
    DIALOG_TEXT_COLOR: DIA_TEX_COL,
    DIALOG_TEXT_COLOR2: "DarkCyan",
    DIALOG_INPUT_BG: "WhiteSmoke",
    DIALOG_BORDER_COLOR: "rgba(0,0,0,0.8)",
    DIALOG_TOPBAR_COLOR: "WhiteSmoke",
    DIALOG_HEADER_COLOR: DIA_TEX_COL, // currently = DIALOG_TEXT_COLOR
    DIALOG_WIN_OPACITY: "0.95",
    DIALOG_CROSS_FONTSIZE: "28",
    DIALOG_BACKGROUND: "linear-gradient(to bottom, #EEEEEE, white)",
    DIALOG_BOX_SHADOW: "0 6px 10px rgba(0, 0, 0, 0.4)",
    DIALOG_BORDER_RADIUS: "8",
    OPTIONS_BUTTON_FONTSIZE: "16",
    POPUP_BACKGROUND: "#F8F8F8",
    POPUP_SELECTION_COLOR: DEF_POPUP_SELECTION_COLOR,
    ICONPANEL_BACKGROUND: DIA_BUTTON_BG_COLOR_DEF
  };

  /// Default attributes for phone screen
  static final Map<String, String> ATTR_DIALOGS_PHONE = {
    DIALOG_TEXT_FONTSIZE: "12",
    DIALOG_HELP_TEXT_FONTSIZE: "14",
    DIALOG_HEADER_FONTSIZE: "12",
    DIALOG_HEADER_TEXTALIGN: "center",
    DIALOG_BUTTON_FONTSIZE: "10",
    DIALOG_POPUP_FONTSIZE1: "14",
    DIALOG_POPUP_FONTSIZE2: "12",
    DIALOG_POPUP_TEXT_CELL_PADDING: "4px",
    DIALOG_TEXT_COLOR: DIA_TEX_COL,
    DIALOG_TEXT_COLOR2: "DarkCyan",
    DIALOG_INPUT_BG: "WhiteSmoke",
    DIALOG_BORDER_COLOR: "rgba(0,0,0,0.8)",
    DIALOG_TOPBAR_COLOR: "WhiteSmoke",
    DIALOG_HEADER_COLOR: DIA_TEX_COL, // currently = DIALOG_TEXT_COLOR
    DIALOG_WIN_OPACITY: "0.95",
    DIALOG_CROSS_FONTSIZE: "16",
    DIALOG_BACKGROUND: "linear-gradient(to bottom, #EEEEEE, white)",
    DIALOG_BOX_SHADOW: "0 6px 10px rgba(0, 0, 0, 0.4)",
    DIALOG_BORDER_RADIUS: "8",
    OPTIONS_BUTTON_FONTSIZE: "12",
    POPUP_BACKGROUND: "#F8F8F8",
    POPUP_SELECTION_COLOR: DEF_POPUP_SELECTION_COLOR,
    ICONPANEL_BACKGROUND: DIA_BUTTON_BG_COLOR_DEF
  };

  /// Initializes the dialog attributes depending on the used device from
  /// the respective defaults.
  static void initAttrFromDefaults() {
    _attr = Map.from(DiaAttr.ATTR_DIALOGS_DESKTOP);
    if (DiaUtils.isPhone()) {
      _attr = Map.from(DiaAttr.ATTR_DIALOGS_PHONE);
    } else if (DiaUtils.isTablet()) {
      _attr = Map.from(DiaAttr.ATTR_DIALOGS_TABLET);
    }
  }

  /// Sets the dialog attributes specified in [myAttr]. Overrides
  /// the respective current values (e.g. the defaults).
  /// Example:
  /// setAttr({DIALOG_HEADER_TEXTALIGN: "left",DIALOG_HEADER_FONTSIZE: "20"});
  static void setAttr(Map<String, String>? myAttr) {
    if (myAttr == null) return;
    for (String attrName in myAttr.keys) {
      attr[attrName] = myAttr[attrName]!;
    }
  }

  /// Sets some dialog styles for [dia].
  static void setDialogStyle(Element dia) {
    dia.style
      ..background = attr![DIALOG_BACKGROUND]
      ..padding = "12px 16px 12px 16px"
      ..margin = "1em auto" // will center dialog along x
      ..border = "0" //"1px solid rgba(0, 100, 0, 0.3);"//"0"
      ..borderTop = "1px solid ${attr[DIALOG_TOPBAR_COLOR]}"
      ..borderRadius = "${attr[DIALOG_BORDER_RADIUS]}px"
      ..boxShadow = attr[DIALOG_BOX_SHADOW]!
      ..fontSize = "${attr[DIALOG_TEXT_FONTSIZE]}px"
      ..lineHeight = "100%"
      ..opacity = attr[DIALOG_WIN_OPACITY]!;
  }

  /// Sets some other dialog styles for [dia]
  static void setDialogStyle2(Element dia) {
    if (_attr == null) {
      initAttrFromDefaults();
    }
    dia.style
      ..background = attr[DIALOG_BACKGROUND]
      ..textAlign = "center" // centers e.g. OK button
      ..padding = "1.0em"
      ..paddingTop = "0.5em" // override previous top
      ..margin = "1em auto"
      ..border = "0" //"1px solid rgba(0, 100, 0, 0.3);"//"0"
      ..borderTop = "1px solid ${attr[DIALOG_TOPBAR_COLOR]}"
      ..borderRadius = "${attr[DIALOG_BORDER_RADIUS]}px"
      ..boxShadow = attr[DIALOG_BOX_SHADOW]!
      ..fontSize = "${attr[DIALOG_TEXT_FONTSIZE]}px"
      ..lineHeight = "100%"
      ..opacity = attr[DIALOG_WIN_OPACITY]!;
  }
} // DiaAttr
