// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';

/// Defines an "action button" such as OK, Cancel, Yes, No, etc that can be
/// used in dialogs to start an action.
/// The button is actually a html.ButtonElement.
/// Use [setAttr] to modify attributes.
class ActButton {
  /// The button active attribute values
  static Map<String, String> but_attr;

  /// The attribute definitions
  static final String BUT_BACKGROUND = "BUT_BACKGROUND",
      BUT_BORDER = "BUT_BORDER",
      BUT_BORDER_BOTTOM = "BUT_BORDER_BOTTOM",
      BUT_BORDER_RADIUS = "BUT_BORDER_RADIUS",
      BUT_COLOR = "BUT_COLOR",
      BUT_CURSOR_AUTO = "BUT_CURSOR_AUTO",
      BUT_CURSOR_POINTER = "BUT_CURSOR_POINTER",
      BUT_DISPLAY = "BUT_DISPLAY",
      BUT_FONT_SIZE = "BUT_FONT_SIZE",
      BUT_FONT_SMOOTHING = "BUT_FONT_SMOOTHING",
      BUT_FONT_WEIGHT = "BUT_FONT_WEIGHT",
      BUT_MARGIN = "BUT_MARGIN",
      BUT_OPACITY_LEAVE = "BUT_OPACITY_LEAVE",
      BUT_OPACITY_OVER = "BUT_OPACITY_OVER",
      BUT_PADDING = "BUT_PADDING",
      BUT_TEXT_ALIGN = "BUT_TEXT_ALIGN";

  /// The button default attribute values
  static final Map<String, String> ATTR_BUTTONS = {
    BUT_BACKGROUND: "#71A0D0",
    BUT_BORDER: "none",
    BUT_BORDER_BOTTOM: "1px solid rgb(52,120,188)",
    BUT_BORDER_RADIUS: "3px",
    BUT_COLOR: "white",
    BUT_CURSOR_AUTO: "auto",
    BUT_CURSOR_POINTER: "pointer",
    BUT_DISPLAY: "inline-block",
    BUT_FONT_SIZE: "0.9rem",
    BUT_FONT_SMOOTHING: "antialiased",
    BUT_FONT_WEIGHT: "bold",
    BUT_MARGIN: "0 0.25rem",
    BUT_OPACITY_LEAVE: "0.8",
    BUT_OPACITY_OVER: "1.0",
    BUT_PADDING: "0.4rem 0.8em",
    BUT_TEXT_ALIGN: "center"
  };

  /// The action button
  ButtonElement but;

  /// Creates the button
  ActButton() {
    if (but_attr == null) initAttrFromDefaults();
    but = ButtonElement();
    setButtonStyle();
  }

  /// Initializes the button attributes fromthe respective defaults.
  static void initAttrFromDefaults() {
    but_attr = Map.from(ATTR_BUTTONS);
  }

  /// Sets the button attributes specified in [myAttr]. Overrides
  /// the respective current values (e.g. the defaults).
  /// Example:
  /// setAttr({BUT_COLOR: "red",BUT_FONT_SIZE: "20px"});
  static void setAttr(Map<String, String> myAttr) {
    if (but_attr == null) initAttrFromDefaults();
    if (myAttr == null) return;
    for (String attrName in myAttr.keys) {
      but_attr[attrName] = myAttr[attrName];
    }
  }

  /// Sets the button attributes from [but_attr]
  void setButtonStyle() {
    but.style
      ..display = but_attr[BUT_DISPLAY]
      ..borderRadius = but_attr[BUT_BORDER_RADIUS]
      ..border = but_attr[BUT_BORDER]
      ..fontSize = but_attr[BUT_FONT_SIZE]
      ..padding = but_attr[BUT_PADDING]
      ..background =
          but_attr[BUT_BACKGROUND] // must be identical to SVG_BUTTON_COLOR
      ..color = but_attr[BUT_COLOR]
      ..borderBottom = but_attr[BUT_BORDER_BOTTOM]
      ..fontSmoothing = but_attr[BUT_FONT_SMOOTHING]
      //..-webkit-font-smoothing=
      ..fontWeight = but_attr[BUT_FONT_WEIGHT]
      ..margin = but_attr[BUT_MARGIN]
      ..textAlign = but_attr[BUT_TEXT_ALIGN]
      ..opacity = but_attr[BUT_OPACITY_LEAVE];

    but.onMouseOver.listen((e) {
      but.style
        ..opacity = but_attr[BUT_OPACITY_OVER]
        ..cursor = but_attr[BUT_CURSOR_POINTER];
    });

    but.onMouseLeave.listen((e) {
      but.style
        ..opacity = but_attr[BUT_OPACITY_LEAVE]
        ..cursor = but_attr[BUT_CURSOR_AUTO];
    });

    // focus acquired
    but.onFocus.listen((e) {
      but.style
        ..opacity = but_attr[BUT_OPACITY_OVER]
        ..cursor = but_attr[BUT_CURSOR_POINTER];
    });

    // focus lost
    but.onBlur.listen((e) {
      but.style
        ..opacity = but_attr[BUT_OPACITY_LEAVE]
        ..cursor = but_attr[BUT_CURSOR_AUTO];
    });
  }
}
