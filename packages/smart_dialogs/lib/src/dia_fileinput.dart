// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';
import '../smart_dialogs.dart';

/// Called with the user [selectedFiles]
typedef void FileSelectionCallback(List<File>? selectedFiles);

/// This class provides a dialog containing a system button from which the
/// system's file selection dialog can be opened.
class FileSelectionDialog extends BaseDialog {
  /// Creates a modal dialog providing a button to open the system's file
  /// selection dialog.
  /// [htmlInfoText] will be displayed as a header text.
  /// [fileSelectionCallback] will be called with the list of user-selected
  /// html File objects. The list will be null if the user cancelled the
  /// dialog without having selected a file.
  FileSelectionDialog(
    String htmlInfoText,
    FileSelectionCallback fileSelectionCallback,
  ) : super(null) {
    Map<String, String?> attr = DiaAttr.attr; // use shortcut

    TableElement table = TableElement();
    table.style
          ..padding = "0px"
          ..margin = "0px"
          ..width = "100%" // makes the table width as wide as its container
//    ..height = "100% "// don't specify, then it gets computed according to its actual height and is not spread over the container.
          ..borderCollapse =
              "collapse" // table cells directly adjacent, no empty border
        ;

    TableRowElement row1 = TableRowElement();
    TableRowElement row2 = TableRowElement();
    TableRowElement row3 = TableRowElement();
    table.append(row1);
    table.append(row2);
    table.append(row3);

    TableCellElement delCell = TableCellElement();
    TableCellElement textCell = TableCellElement();
    TableCellElement buttonCell = TableCellElement();

    row1.append(delCell);
    row2.append(textCell);
    row3.append(buttonCell);

    dia.append(table);

    int delIconSize = int.parse(attr[DiaAttr.DIALOG_CROSS_FONTSIZE]!);
    delCell.style
      ..color = "red"
      ..fontSize = "${delIconSize}px"
      ..textAlign = "right"
      ..cursor = "pointer";
    DiaUtils.appendHtml2(delCell, DiaUtils.UNICODE_DELETE_CROSS);
    delCell.onClick.listen((UIEvent e) {
        close(UserInput(
            DiaAttr.DIA_ACT_ABORT, null, null)); // just close the dialog
        fileSelectionCallback(null); // signal no system file dialog shown
    });

    int fontsizeTxT = int.parse(attr[DiaAttr.DIALOG_HELP_TEXT_FONTSIZE]!);
    textCell.style
      ..paddingTop = "12px" // leave some space to the delete icon
      ..paddingBottom = "16px"
      ..fontSize = "$fontsizeTxT";

    DiaUtils.appendHtml2(textCell, htmlInfoText);
    dia.style.color = "${attr[DiaAttr.DIALOG_TEXT_COLOR]}";

    InputElement inputBut = InputElement(type: "file");
    inputBut.multiple = true;
    inputBut.style..fontSize = "${attr[DiaAttr.DIALOG_BUTTON_FONTSIZE]}px";

    // selectedFiles will get the files selected by the user.
    // [dia] will be closed via the onClick function immediately, even before the
    // file browser dialog is closed by the user.
    inputBut.onChange.listen((Event e) {
      close(UserInput(
          DiaAttr.DIA_ACT_ABORT, null, null)); // just close the dialog
      fileSelectionCallback(inputBut.files); // return user selection to caller
    });

    // html document requires input elements to be inside a form element:
    FormElement form = FormElement();
    form.append(inputBut);
    buttonCell.append(form);

    // center the dialog vertically
    int marginTop = ((diaContainer?.clientHeight ?? 0) ~/ 2) - dia.clientHeight ~/ 2;
    marginTop -= (marginTop * 0.2).round(); //shift up for optical reasons
    if (DiaUtils.isTablet()) {
      marginTop = 0; // dialog at top to minimize coverage by soft keyboard
    }

    dia.style
          ..width =
              "${inputBut.clientWidth + 30}px" // make popup as wide as the its contents
          ..marginTop = "${marginTop}px" // This centers the dialog vertically
        ;

    document.onKeyDown.listen((KeyboardEvent e) {
      if (e.keyCode == KeyCode.ESC) {
        close(UserInput(
            DiaAttr.DIA_ACT_ABORT, null, null)); // just close the dialog
      }
    });
  } // FileSelectionDialog()
} // FileSelectionDialog
