// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';
import 'dart:async';
import 'dart:math' as math;

import '../smart_dialogs.dart';

/// This class provides a popup menu with executable menu items.
/// A popup is realized as a non-modal [BaseDialog].
/// The popup appearance (style) is defined by the attributes of the class
/// [DiaAttr].
class PopupMenu extends BaseDialog {
  static final String POPUP_SPAN_GREYOUT = "<span style='color:lightgrey'>",
      POPUP_SPAN_END = "</span>";

  TableElement diaTable = TableElement(); // contains the dialog
  String lastTouchedActionCode;
  List<math.Point<int>> lastTouchPoints;

  /// Shows a popup menu above the [parent] element (e.g. a div) with:
  ///  [id] The popup may optionally get an id (should be unique if the popup
  ///    is to be identified with it).
  ///  [htmlItemTexts] The menu items texts. The format is:
  ///     "textDiaUtils.SEP_STANaction code". If action code = "TITLE", then
  ///    this is not an action, but is displayed as a popup title.
  ///    If text starts with POPUP_SPAN_GREYOUT, the menu item is displayed,
  ///    but greyed out. If the user clicks on it, no action is performed.
  ///  [buttontypes] If null, no special item style is applied to any menu item.
  ///    If not null, the list must have the same length as [htmlItemTexts].
  ///    If a list entry is null, no special style is applied to the respective
  ///    menu item. If a list entry is [DiaAttr.CHECKBOX], a checkbox element is
  ///    displayed in front of the item text.
  ///    NOTE: Currently the checked box is provided only to display a status,
  ///    not react on a checkbox state change. See below.
  ///  [isChecked] Must be null, or have the same length as [buttontypes]. The
  ///    list members may take on the value null or [DiaUtils.FALSE] or
  ///    [DiaUtils.TRUE]. This defines whether the respective check button
  ///    of [buttontypes] is show as "unchecked" or "checked".
  ///  [popupCallback] will be called when an popup item is clicked,
  ///  [x], [y] are the top left corner coordinates of the popup.
  ///  [preventDefault] if false: finger-scrolling the items is enabled for
  ///    touch screens.
  PopupMenu(
      Element parent,
      String id,
      List<String> htmlItemTexts,
      List<String> buttontypes,
      List<String> isChecked,
      BaseDialogCloseCallback popupCallback,
      int x,
      int y,
      bool preventDefault)
      : super.noModal(popupCallback) {
    final int NCOLS = 2; // adjust if necessary!
    int nitems = htmlItemTexts.length;

    dia.id = id;

    // Make sure the popup is always displayed above everything else by giving it a big z-index.
    // Especially over the jsme structure display div.

    setPopupStyle(dia, null);
    Map<String, String> attr = DiaAttr.attr; // use shortcut
    // nodify standad style:
    parent.append(dia);

    diaTable.style
      ..borderCollapse = "collapse"
      ..marginTop = "6px"
      ..marginBottom = "0px";

    dia
      ..append(diaTable)
      ..onTouchMove.listen((e) {
        // Needed on iPad: Otherwise moving the finger over the dialog would move
        // the whole browser content up.
        // This feature is very good if a text entry field are present,
        // to be able to enter text if covered by the keyboard. In our popup
        // case that's not necessary, but rather
        // disturbing.
        if (preventDefault) e.preventDefault();
//        lastTouchedActionCode = null;
//        lastTouchPoints = getTouchPoints(e);
      });

//    TableRowElement row;
    TableCellElement cell;

    List<TableRowElement> rows = List<TableRowElement>();

    void addEmptyTableRow() {
      rows.add(TableRowElement());

      cell = TableCellElement();
      DiaUtils.appendHtml2(cell, '&nbsp;');
      cell.colSpan = NCOLS; // 1 empty row
      rows.last.append(cell);

      diaTable.append(rows.last);
    }

    // add table header
    // decode: "displayed text||action code"
    String displayedText = htmlItemTexts[0].split(DiaUtils.SEP_STAN)[0];
    String actionCode = htmlItemTexts[0].split(DiaUtils.SEP_STAN)[1];
    int itemstart = 0;
    if (actionCode == "TITLE") {
      rows.add(TableRowElement());
      cell = TableCellElement();
      DiaUtils.appendHtml2(cell, displayedText);
      cell.colSpan = NCOLS; // the htmlInfoText spans NCOLS columns
      cell.style
        ..textAlign = "center"
        ..color = attr[DiaAttr.DIALOG_HEADER_COLOR]
        ..fontSize = "${attr[DiaAttr.DIALOG_HEADER_FONTSIZE]}px";
      rows.last.append(cell);
      diaTable.append(rows.last);
      addEmptyTableRow();
      itemstart = 1;
    }

    for (int i = itemstart; i < nitems; i++) {
      // NOTE: for any one reason, the type TableRowElement must be specified inside the loop,
      // otherwsie
      rows.add(TableRowElement());
      TableRowElement row = rows.last;
      row.style.color = attr[DiaAttr.DIALOG_TEXT_COLOR]; // initial setting

      row.onMouseEnter.listen((MouseEvent event) {
        row.style
          ..backgroundColor = attr[DiaAttr.POPUP_SELECTION_COLOR]
          ..color = "white";
      });

      row.onMouseLeave.listen((MouseEvent event) {
        row.style
          ..backgroundColor = attr[DiaAttr.POPUP_BACKGROUND]
          ..color = attr[DiaAttr.DIALOG_TEXT_COLOR];
      });

      // format is: "displayed text||action code"
      String displayedText = htmlItemTexts[i].split(DiaUtils.SEP_STAN)[0];
      String actionCode = htmlItemTexts[i].split(DiaUtils.SEP_STAN)[1];

      // the first column may contain checkbox or more
      TableCellElement cell = TableCellElement();
      cell.id = actionCode;
      if (buttontypes != null && isChecked != null) {
        if (buttontypes[i] == DiaAttr.CHECKBOX &&
            isChecked[i] != null &&
            (isChecked[i] == DiaUtils.TRUE || isChecked[i] == DiaUtils.FALSE)) {
          InputElement cbox = InputElement(type: DiaAttr.CHECKBOX);
          cbox.checked = DiaUtils.getBoolFromString(isChecked[i]);
          //        cbox.value = "checked"; // TODO ???
          cbox.style.fontSize = "${attr[DiaAttr.DIALOG_POPUP_FONTSIZE2]}px";
          cell.append(cbox);
        }
        // else should not occur
      } else {
        // first column remains empty for now
        cell.appendText("");
        cell.style
          ..textAlign = "left"
          ..cursor = "pointer"
          ..padding = "7px"
          ..margin = ".5em 1em";
      }

      void execute(String curaction) {
        // only a non-greyed item will be executed!
        if (dia != null && !displayedText.contains(POPUP_SPAN_GREYOUT)) {
          close(UserInput(curaction, null, null));
          dia = null;
        }
      }

      void handleTouchStart(TouchEvent e) {
        lastTouchPoints = DiaUtils.getTouchPoints(e);
      }

      void handleTouchEnd(TouchEvent e) {
        Element eventCell = e.target;
        String curaction = eventCell.id;
        TouchList tl = e.changedTouches;
        if (tl == null || tl.isEmpty) return;
        int lastx = lastTouchPoints[0].x;
        int lasty = lastTouchPoints[0].y;
//        InfoDialog("touchend=${eventCell.style.width} ${eventCell.style.height} $lastx $lasty ${tl.first.page.x} ${tl.first.page.y}", null);
        if ((lastx - tl.first.page.x).abs() > 30 ||
            (lasty - tl.first.page.y).abs() > 20) {
          return;
        }
        execute(curaction);
      }

      if (!DiaUtils.hasMouse()) {
        cell.onTouchStart.listen((TouchEvent e) {
          handleTouchStart(e);
        });

        cell.onTouchEnd.listen((TouchEvent e) {
          // Note: e.preventDefault() for sidebar div handled in SpecPad.
          handleTouchEnd(e);
        });
      } else {
        // this would execute when clicking the first column
        cell.onClick.listen((MouseEvent e) {
//        print("popup clicked row $i");
          Element eventCell = e.target;
          String curaction = eventCell.id;
          execute(curaction);
        });
      }
      row.append(cell);

      // these are the action descriptions
      cell = TableCellElement();
      cell.id = actionCode;
      DiaUtils.appendHtml2(cell, displayedText);
      cell.style
        ..textAlign = "left"
        ..cursor = "pointer"
        ..paddingBottom = attr[DiaAttr
            .DIALOG_POPUP_TEXT_CELL_PADDING] // this and next define the final cell height
        ..paddingTop = attr[DiaAttr.DIALOG_POPUP_TEXT_CELL_PADDING]
//      ..margin = ".5em 1em"
        ..fontSize = "${attr[DiaAttr.DIALOG_POPUP_FONTSIZE2]}px";

      DiaUtils.appendHtml2(cell, "<br>");
      if (!DiaUtils.hasMouse()) {
        cell.onTouchStart.listen((TouchEvent e) {
          handleTouchStart(e);
        });

        cell.onTouchEnd.listen((TouchEvent e) {
          // Note: e.preventDefault() for sidebar div handled in SpecPad.
          handleTouchEnd(e);
        });
      } else {
        cell.onClick.listen((MouseEvent e) {
          Element eventCell = e.target;
          String curaction = eventCell.id;
          execute(curaction);
        });
      }

      row.append(cell);

      diaTable.append(row);
//      diaTable.append(createSep(row.style.width));
    } // for

    dia.style
          ..backgroundColor = attr[DiaAttr.POPUP_BACKGROUND]
          ..background = attr[DiaAttr.POPUP_BACKGROUND]
          ..position = "fixed"
          ..left = "${x}px"
          ..top = "${y}px"
          ..marginLeft = "0px"
          ..marginTop = "0px"
          ..paddingTop = "0px"
          ..paddingLeft = "0px"
          ..width = "${diaTable.clientWidth + 6}px" // like table, +6
          ..opacity = "1"
          ..zIndex = "10000000" // must be above everything
        ;
  }

  String getId() {
    if (dia == null) return null;
    return dia.id;
  }

  void setPopupStyle(Element dia, int width) {
    dia.style
//    ..background = "linear-gradient(to bottom, #EEEEEE, white)"
          ..backgroundColor = DiaAttr.attr[DiaAttr.POPUP_BACKGROUND]
//    ..background = attr[DiaAttr.POPUP_BACKGROUND]
//  ..color = "$dialog_text_color"
          ..textAlign = "center"
          ..padding =
              "0.3em" // ths will make some room to click into to close the popup (alos needed to make round corners visible)
          ..margin = "1em auto"
          ..border = "0" //"1px solid rgba(0, 100, 0, 0.3);"//"0"
          ..borderTop = "1px solid ${DiaAttr.attr[DiaAttr.DIALOG_TOPBAR_COLOR]}"
          ..borderRadius = "8px"
          ..boxShadow =
              "0 6px 10px rgba(0, 0, 0, 0.4)" //"0 6px 12px $dialog_border_color" // 0 3px 7px rgba(0, 0, 0, 0.3);
          ..fontSize = "${DiaAttr.attr[DiaAttr.DIALOG_POPUP_FONTSIZE2]}px"
          ..lineHeight = "110%"
          ..opacity = DiaAttr.attr[DiaAttr.DIALOG_WIN_OPACITY]
          ..zIndex = "${DiaAttr.ZINDEX_POPUP}"
//  ..filter = "alpha(opacity=60)";
        ;
  }

  //------------- static methods ------------------------------------

  /// Shows an [PopupMenu]. See  [PopupMenu] for a description of the
  /// arguments. While [PopupMenu] needs a close callback, this async method
  /// returns the user input.
  static Future<UserInput> show(
      Element parent,
      String id,
      List<String> htmlItemTexts,
      List<String> buttontypes,
      List<String> isChecked,
      int x,
      int y,
      bool preventDefault) async {
    Completer<UserInput> cpl = Completer();
    void popupCallback(UserInput results) {
      cpl.complete(results);
    }

    PopupMenu(parent, id, htmlItemTexts, buttontypes, isChecked, popupCallback,
        x, y, preventDefault);

    return cpl.future;
  }
} // PopupMenu
