// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';
import 'dart:math' as math;

import '../smart_dialogs.dart';

/// Called when an icon is clicked
typedef void IconCallback(UIEvent e);

/// Returns a list of the callbacks of all panel icons.
typedef List<IconCallback> GetIconCallbacks();

/// A panel containing clickable icons ordered as a matrix with respective
/// callback functions. An icon panel is realized as a non-modal [BaseDialog].
/// The icon panel appearance (style) is defined by the attributes of the class
/// [DiaAttr].
class IconPanel extends BaseDialog {
  static final String POPUP_SPAN_GREYOUT = "<span style='color:lightgrey'>";

  TableElement diaTable = TableElement();
  String lastTouchedActionCode='';
  List<math.Point<int>> _lastTouchPoints=[];
  late String _iconStyle;

  /// Creates and displays a panel with icons. Each icon may have a callback
  /// function executed when the icon is clicked.
  /// [parent] - the panel is added to this element.
  /// [id] - the panel can be identified with this id if unique.
  /// [iconPath] - where the icons are stored reletive to specpad.
  /// [iconNames] - list of the icons to be displayed.
  /// [getIconCallbacks] - a function returning a list of callback functions to
  ///    be executed when clicking on an icon. Order and length of the list must
  ///    correspond to [iconNames]. A list entry may be null.
  /// [closeCallback] - called when the panel gets closed.
  /// [x], [y] - position of the panel relative to specpad.
  /// [panelWidth] - panel will get this width. Height is automatic.
  /// [iconSize] - size of the icons in pixels, e.g. 24.
  /// [ncols] - panel will get this many icon columns.
  /// [preventDefault] - if false, finger-scrolling the items is enabled for touch.
  IconPanel(
      Element parent,
      String id,
      String iconPath,
      List<String> iconNames,
      GetIconCallbacks getIconCallbacks,
      BaseDialogCloseCallback closeCallback,
      int x,
      int y,
      int panelWidth,
      int iconSize,
      int ncols,
      bool preventDefault)
      : super.noModal(closeCallback) {
    int nitems = iconNames.length;
    _iconStyle = """
    alt="" align="top"
      border="none" height="${iconSize - 4}" width="${iconSize - 4}"
    """;

//    baseDia = BaseDialog.noModal(closeCallback);
    dia.id = id;

    // Make sure the popup is always displayed above everything else by giving it a big z-index.
    // Especially over the jsme structure display div.

    setStyle(dia, null);
    Map<String, String?> attr = DiaAttr.attr; // use shortcut
    // nodify standad style:
    parent.append(dia);

    diaTable.style
      ..cursor = "pointer"
      ..backgroundColor = attr[DiaAttr.ICONPANEL_BACKGROUND]
      ..background = attr[DiaAttr.ICONPANEL_BACKGROUND]
//      ..borderCollapse = "collapse"
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
      });

    int nrows = nitems ~/ ncols;
    if (nitems.remainder(ncols) > 0) nrows++;
    List<TableRowElement> rows = [];//OBSOLETE//List<TableRowElement>(nrows);

    // add table header
    // decode: "iconName||action code"
    int iconcount = 0;
    int iconPadding = 5;
    String iconName;
    IconCallback iconCallback;
    TableCellElement cell;
    for (int i = 0; i < nrows; i++) {
      // NOTE: for any one reason, the type TableRowElement must be specified inside the loop,
      // otherwsie
      rows[i] = TableRowElement();
      TableRowElement row = rows[i];
      row.style
        ..color = attr[DiaAttr.DIALOG_TEXT_COLOR] // initial setting
        ..cursor = "pointer"
        ..backgroundColor = attr[DiaAttr.ICONPANEL_BACKGROUND];

      void handleTouchStart(TouchEvent e) {
        _lastTouchPoints = DiaUtils.getTouchPoints(e);
      }

      void executIconFunction(UIEvent e) {
        TableCellElement eventCell;
        if (e.target is ImageElement) {
          ImageElement icon = e.target! as ImageElement; // event fired by icon
          eventCell = icon.parent! as TableCellElement;
        } else if (e.target is TableCellElement) {
          eventCell = e.target as TableCellElement; // event fired by cell
        } else {
          return;
        }

        int touchedIconNo = int.parse(eventCell.id);
        // get callbacks here because the panel may stay open while the dataset
        // and its dimension changes.
        List<IconCallback> iconCallbacks = getIconCallbacks();
        assert(iconNames.length == iconCallbacks.length);
        iconCallback = iconCallbacks[touchedIconNo];
        if (iconCallback != null) iconCallback(e);
      }

      void handleTouchEnd(TouchEvent e) {
        if(e.changedTouches==null) return;
        TouchList tl = e.changedTouches!;
        if (tl == null || tl.isEmpty) return;
        int lastx = _lastTouchPoints[0].x;
        int lasty = _lastTouchPoints[0].y;
        if ((lastx - tl.first.page.x).abs() > 30 ||
            (lasty - tl.first.page.y).abs() > 20) {
          return;
        }
        executIconFunction(e);
      }

      // these are the icons in the current row
      List<TableCellElement> iconCells = []; //OBOSLETE//List<TableCellElement>(ncols);
      for (int k = 0; k < ncols; k++) {
        // format is: "icon name||action code"
        iconName = iconNames[iconcount];

        iconCells[k] = TableCellElement();
        cell = iconCells[k];
        cell.id = "$iconcount"; // will indentify iconCallback
        DiaUtils.appendHtml2(
            cell, """<img src="${iconPath}/${iconName}" $_iconStyle>""");
        cell.style
              ..cursor = "pointer"
              ..backgroundColor = attr[DiaAttr.ICONPANEL_BACKGROUND]
//          ..margin = ".5em 1em"
              ..padding = "${iconPadding}px" // 0px 0px 5px" // t r b l
            ;

        cell.onMouseEnter.listen((MouseEvent event) {
          iconCells[k].style
            ..backgroundColor = attr[DiaAttr.POPUP_SELECTION_COLOR];
        });

        cell.onMouseLeave.listen((MouseEvent event) {
          iconCells[k].style
            ..backgroundColor = attr[DiaAttr.ICONPANEL_BACKGROUND];
        });

        if (!DiaUtils.hasMouse()) {
          cell.onTouchStart.listen((TouchEvent e) {
            handleTouchStart(e);
          });

          cell.onTouchEnd.listen((TouchEvent e) {
            handleTouchEnd(e);
          });
        } else {
          cell.onClick.listen((MouseEvent e) {
            executIconFunction(e);
          });
        }

        row.append(cell);

        diaTable.append(row);
        if (iconcount >= iconNames.length - 1) break; // all done
        iconcount++;
      } // for k
    } // for i

    dia.style
      ..position = "fixed"
      ..left = "${x}px"
      ..top = "${y}px"
      ..marginLeft = "0px"
      ..marginTop = "0px"
      ..paddingTop = "0px"
      ..paddingLeft = "0px"
      ..width = "${panelWidth}px"
      ..opacity = "1";
  }

  /// Returns the id of this panel.
  String getId() {
    if (dia == null) return '';
    return dia.id;
  }

  /// Sets some styles for this icon panel.
  void setStyle(Element dia, int? width) {
    dia.style
      ..backgroundColor = DiaAttr.attr[DiaAttr.ICONPANEL_BACKGROUND]
      ..background = DiaAttr.attr[DiaAttr.ICONPANEL_BACKGROUND]
      ..textAlign = "center"
      ..padding = "0.3em"
      ..margin = "1em auto"
      ..border = "0"
      ..borderTop = "1px solid ${DiaAttr.attr[DiaAttr.DIALOG_TOPBAR_COLOR]}"
      ..borderRadius = "8px"
      ..boxShadow = "0 6px 10px rgba(0, 0, 0, 0.4)"
      ..fontSize = "${DiaAttr.attr[DiaAttr.DIALOG_POPUP_FONTSIZE2]}px"
      ..lineHeight = "110%"
      ..zIndex = "${DiaAttr.ZINDEX_ICONPANEL}";
  }
}
