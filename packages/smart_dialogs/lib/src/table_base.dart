// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';

import '../smart_dialogs.dart';

/// Called when a button is clicked that is contained in a table cell.
typedef TableButtonClickListener(ButtonElement button);

/// This class represents a table for displaying row/column data.
/// A table cell may contain html text, a clickable button or a text entry
/// field.
class BasicTable {
  /// An input cell without initial value
  static final String EMPTY_INPUT_CELL = "EMPTY_INPUT_CELL";

  /// A text area without initial value
  static final String EMPTY_TEXT_AREA = "EMPTY_TEXT_AREA";

  /// A button with text contents and action code, e.g. "BUTTON||Apply||dothis"
  static final String BUTTON = "BUTTON";

  late TableElement table; // contains the dialog
  List<List<String>> tableData; // what the table will display
  late Map<String, String> attr;

  /// Creates the html TableElement [table] from [tableData] with
  /// [tableData].length rows and [tableData][0].length columns
  /// (i.e. the same number of cols for all rows).
  /// Rows 1 until [tableData].length - 1 are used for table display.
  /// Row 1 is displayed in a special style to serve as a table header.
  /// Row 0 is a special row which is not displayed, but may contain data
  /// provide by the user for any purpose.
  /// [buttonClickListener] is called if a table cell contains a button element
  /// and the button is clicked.  by default, A table cell i,k will display
  /// its text contents. In addition, the following cases are supported.
  ///  1) contents = BUTTON||html text||id --> this will display a
  ///     button with html text. The id is assigned to the button element.
  ///  2) contents = EMPTY_INPUT_CELL --> this will display a single-line text field.
  ///  3) contents = EMPTY_TEXT_AREA --> this will display a text area.
  BasicTable(this.tableData, TableButtonClickListener? buttonClickListener) {
    table = TableElement();

    TableAttr.initAttrFromDefaults();
    attr = TableAttr.attr; // shortcut
    TableAttr.setTableStyle(table);

    // build the table from tableData
    TableRowElement row;
    TableCellElement cell;
    int nrows = tableData.length; // row 0 is the table header
    int ncols = tableData[0].length; // all rows with the same # cols (=cells)
    // Since cell [0,0] is the table's title info:
    for (int i = 1; i < nrows; i++) {
      row = TableRowElement();
      table.append(row);
      row.style..padding = "5px"; // 0px 0px 5px" // t r b l

      if (i == 1) {
        TableAttr.setRowStyleHeader(row);
      }

      // even rows will have different background color
      if (i & 1 == 0 && i != 0) {
        row.style..backgroundColor = attr[TableAttr.TABLE_HIGHLIGHT_COLOR];
      }

      for (int k = 1; k < ncols; k++) // first element reserved as id
      {
        cell = TableCellElement();
        row.append(cell);

        if (i == 1) {
          TableAttr.setCellStyle(cell, "center");
        } else {
          TableAttr.setCellStyle(cell, "left");
        }

        if (k > 1) {
          // make a separating border between columns
          cell.style
            ..borderLeft = attr[TableAttr.TABLE_INNER_CELL_LEFT_BORDER_COLOR]! +
                " 1px solid";
        }

        if (i > 1 && k == 1) {
          cell.id = "${tableData[i][0]}";
          // col 0 of tabledata serves is attribute name
        }

        if (tableData[i][k] == EMPTY_INPUT_CELL) {
          TextInputElement input = TextInputElement();
          input.value = "";
          cell.append(input);
        } else if (tableData[i][k] == EMPTY_TEXT_AREA) {
          TextAreaElement ta = TextAreaElement();
          ta.value = "";
          ta.rows = 4; // could be parametrized
          cell.append(ta);
        } else if (tableData[i][k].startsWith(BUTTON)) {
          List<String> butinfo = tableData[i][k].split("||");

          ButtonElement but = ButtonElement();
          DiaUtils.appendHtml2(but, butinfo[1]);
          but.id = butinfo[2]; // id serves as button action code
//          print("table_base.dart=${but.text} ${but.id}");
          but.onClick.listen((Event event) {
            buttonClickListener?.call(but); // call back with clicked button
          });

          cell.append(but);
        } else {
          DiaUtils.appendHtml2(cell, tableData[i][k]);
        }
      } // for(int k=1;
    } // for(int i=1;
  }

  /// Returns the html TableElement created by the constructor.
  TableElement get getTable => table;
}
