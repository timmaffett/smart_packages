// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';
import 'dart:async';
import 'dart:math' as math;

import 'package:pedantic/pedantic.dart';

import '../smart_dialogs.dart';

/// This class defines a modal or non-modal dialog for displaying text and/or
/// request input from a user. User input elements are consisting of multiple
/// rows with text labels, text input fields, check and radio buttons and
/// combo boxes.
/// The dialog appearance (style) is defined by the attributes of the class
// [DiaAttr].
class InputDialog extends BaseDialog {
  static final int COL1 = 0, COL2 = 1;
  static final String ALIGN_LEFT = "ALIGN_LEFT",
      READ_ONLY = "||++++||",
      ENABLE_TEXTINPUT_COMBO = "+||+",
      DISABLE_COMBO_SELECTION = "?||?";
  PopupMenu popup;
  TableElement diaTable = TableElement(); // contains the dialog
  // 0 = no input dialog is open, and no special actions pending (default)
  // 1 = input dialog is open
  // 2 = input dialog was closed, but terminating actions were not performed.
  static int inputDialogStatus = 0;
  final String RADIOGROUP1 = "radiogroup1";
//  Map<String, String> attr;
  bool redcross_left = false;
  List<ActButton> actButs = [];

  /// NOTE: In many cases it is not necessary to use the constructors.
  ///  It is easier to inoke the utilities Info.show(), Info.get(), Info,get2D(),
  ///  Info.confirm().
  /// Creates and shows an [InputDialog] consisting of a text header, followed
  /// by several rows. Each row consists of an options radio or check button,
  /// a text label, a text input field, and an optional combo box.
  /// At its bottom, the dialog has zero up to 3 action buttons (extending
  /// to >4 is easy). At the top left or right, a red cross is displayed and
  /// serves as an Abort button.
  ///  [buttontype] = one of [DiaAttr.RADIO, DiaAttr.CHECKBOX, null(=CHECKBOX)]
  ///    See [isChecked] argument for details.
  ///  [htmlTitleText] = the dialog header
  ///  [textLabels] = one text label per row belonging to the row's text input field
  ///  [comboInfo] = needed when a combox box is appended to a text input field.
  ///    null = no combox at all in the dialog, otherwise e.g. if 4 dialog rows:
  ///     [null, ["yes", "no", "skip"], null, null] would mean that rows 0,2,3
  ///     don't have combo boxes assigned, while row 1 gets a combo box with
  ///     3 members.
  ///  NOTE: if the first item of combo values contains (e.g. at the beginning)
  ///    InputDialog.ENABLE_TEXTINPUT_COMBO (e.g. the "yes" in the example), the
  ///    text input field belonging to the combo box display will stay editable,
  ///    otherwise it will be disabled.
  ///  NOTE: if the first item of combo values contains
  ///    InputDialog.DISABLE_COMBO_SELECTION, a selected combo item will NOT
  ///    be put into the textfield the combo belongs to.
  ///  [defaultInputTexts] = the initial contents of the text input fields.
  ///  [widths] = the widths of the text input fields in characters.
  ///     A width my be 0, then no input text field is shown for this row.
  ///  [isChecked] = the initial values of the radio buttons or checkboxes.
  ///    [isChecked] = null: No radio button or checkbox is drawn at all,
  ///    regardless of [buttontype]. If a list entry of  [isChecked]
  ///    is null, then no radio button or checkbox for this row is shown.
  ///    If a list entry of  [isChecked] is "true" or "false", a
  ///    radio button or checkbox (depending on [buttontype]) for this row is shown
  ///    and gets initialized with checked or unchecked, respectively.
  ///  [closeCallback] = called when an action button is pressed (may be null)
  ///  [alternateRowColor] = if true, every second dialog row will get a different color.
  ///  [buttonLabels] = the labels of the action buttons at the bottom of the
  ///    dialog. If null, 1 action button labelled with "OK" is shown.
  ///    If "" (empty String), no action button at all is shown.
  ///    [buttonLabels].length must be <= 3 at this time, extension is easy.
  InputDialog(
      String buttontype,
      String htmlTitleText,
      List<String> textLabels,
      List<List<String>> comboInfo,
      List<String> defaultInputTexts,
      List<int> widths,
      List<String> isChecked,
      BaseDialogCloseCallback closeCallback,
      bool alternateRowColor,
      List<String> buttonLabels)
      : super(closeCallback) {
    init(
        buttontype,
        htmlTitleText,
        textLabels,
        {COL1: comboInfo},
        {COL1: defaultInputTexts},
        widths,
        isChecked,
        alternateRowColor,
        buttonLabels);
  }

  /// The twoD input dialog supports 2 columns of text input fields per rows,
  /// rather than just 1 column as it the case with InputDialog().
  /// This constructor comment only describes the arguments different from
  /// InputDialog()'s arguments.
  /// [comboInfoND] = like comboInfo, but values for 2 columns must be given.
  ///   Use the Map keys [InputDialog.COL1] and [InputDialog.COL2] for this.
  /// [defaultInputTextsND] = like [defaultInputTexts], but values for 2 columns must be given.
  //    Use the Map keys [InputDialog.COL1] and [InputDialog.COL2] for this.
  InputDialog.twoD(
      String buttontype,
      String htmlTitleText,
      List<String> defaultInputTexts,
      Map<int, List<List<String>>> comboInfoND,
      Map<int, List<String>> defaultInputTextsND,
      List<int> sizes,
      List<String> isChecked,
      BaseDialogCloseCallback closeCallback,
      bool alternateRowColor,
      List<String> buttonLabels)
      : super(closeCallback) {
    init(buttontype, htmlTitleText, defaultInputTexts, comboInfoND,
        defaultInputTextsND, sizes, isChecked, alternateRowColor, buttonLabels);
  }

  /// Creates a non-modal (non-blocking) dialog.
  /// See [InputDialog] for the arguments.
  InputDialog.noModal(
      String buttontype,
      String htmlTitleText,
      List<String> inputTextLabelInfo,
      List<List<String>> comboInfo,
      List<String> defaultInputTexts,
      List<int> sizes,
      List<String> isChecked,
      BaseDialogCloseCallback closeCallback,
      bool alternateRowColor,
      List<String> buttonLabels)
      : super.noModal(closeCallback) {
    init(
        buttontype,
        htmlTitleText,
        inputTextLabelInfo,
        {COL1: comboInfo},
        {COL1: defaultInputTexts},
        sizes,
        isChecked,
        alternateRowColor,
        buttonLabels);
  }

  /// Creates and displays a dialog.
  /// See [InputDialog] and [InputDialog.twoD] for the arguments.
  init(
      String buttontype,
      String htmlTitleText,
      List<String> inputTextLabelInfo,
      Map<int, List<List<String>>> comboInfoND,
      Map<int, List<String>> defaultInputTextsND,
      List<int> sizes,
      List<String> isChecked,
      bool alternateRowColor,
      List<String> buttonLabels) {
    List<String> defaultInputTexts, defaultInputTexts2D;
    List<List<String>> comboInfo1D, comboInfo2D;

    Map<String, String> attr = DiaAttr.attr; // use shortcut
    bool hasDim1Combo = false;
    if (comboInfoND != null) {
      comboInfo1D = comboInfoND[COL1];
      comboInfo2D = comboInfoND[COL2];
      if (comboInfo1D != null) {
        for (List<String> temp in comboInfo1D) {
          if (temp != null) {
            hasDim1Combo = true; // needed later to build nice col. alignment
            break;
          }
        }
      }
    }

    int dim = 1;
    if (defaultInputTextsND != null) {
      defaultInputTexts = defaultInputTextsND[COL1];
      defaultInputTexts2D = defaultInputTextsND[COL2];
      if (defaultInputTexts2D != null) {
        dim = 2;
      }
    }

    if (DiaUtils.isSafariIOS()) {
      redcross_left = true; // delete icon left to conform to iOS
    }

    inputDialogStatus = 1;
    int NCOLS = 4; // check/radio button, text, input field, combo
    if (dim == 2) {
      NCOLS = 6; // input field, combo for 2D
    }

    bool showAbortIcon = true; // as of now, we always show an abort icon
    int delIconSize = int.parse(attr[DiaAttr.DIALOG_CROSS_FONTSIZE]);
    TableCellElement delCell;
    List<TableCellElement> fakeCells = List<TableCellElement>(NCOLS - 1);
    String alignCross = "right";
    if (redcross_left) {
      alignCross = "left";
    }
    if (showAbortIcon != null && showAbortIcon) {
      delCell = TableCellElement();
      // we need this for delCell to be rightmost
      for (int i = 0; i < NCOLS - 1; i++) {
        fakeCells[i] = TableCellElement();
      }
      delCell.style
        ..color = "red"
        ..fontSize = "${delIconSize}px"
        ..textAlign = alignCross
        ..cursor = "pointer";

      DiaUtils.appendHtml2(delCell, DiaUtils.UNICODE_DELETE_CROSS);
      delCell.onClick.listen((UIEvent e) {
        // close dialog if clicked into the del icon.
        Rectangle rect = delCell.getBoundingClientRect();
        Point tpoint = DiaUtils.getTouchPoint(e);
        Rectangle iconRect = Rectangle(
            rect.right - delIconSize, rect.top, delIconSize, delIconSize);
        if (redcross_left) {
          iconRect = rect;
        }

        if (iconRect.containsPoint(tpoint)) {
          if (dia != null) {
            close(UserInput(DiaAttr.DIA_ACT_ABORT, null, null));
            dia = null;
          }
          // TODO remove as soon as Chrome sizes the window back properly when keyboard closed
          if (DiaUtils.isTablet()) {
            window.scrollTo(0, 0);
            inputDialogStatus = 0;
          }
        }
      });
    }

    TableRowElement row;
    TableCellElement cell;
    int nrows = 0;
    List<InputElement> checkBoxes, tinputFields, tinputFields2D;

    void addEmptyTableRow() {
      row = TableRowElement();
      cell = TableCellElement();
      DiaUtils.appendHtml2(cell, '&nbsp;');
      cell.colSpan = NCOLS; // 1 empty row
      row.append(cell);

      diaTable.append(row);
    }

    /// Compile the results from the dialog's current fields:
    /// Keys: Buttons code. Values:
    /// [checkbox value, input text, checkbox value, inputtext, ...].
    /// The checkbox values can be "null" (no checkbox), "true", "false".
    /// For 2D:
    /// [ checkbox value, input text, input text2, checkbox value, input text, input text2,
    ///   checkbox value, ...].
    ///
    ///  Sample result format: [checkbox, F2 values, F1 values]
    //   The first half of the non-checkbox value list constitute the F2 values,
    //   The second half the F1 values.
    //    {0: [false, null, null],
    //    1: [true, Exponential, Gaussian],
    //    2: [null, 0.3, 0.3], 3: [null, 0.5, -1.0, 0.1, -1.0],
    //    4: [true, 2048, 256]}
    Map<int, List<String>> getResults() {
      Map<int, List<String>> results = Map<int, List<String>>();
      String cboxResult, inputResult, inputResult2D;
      List<String> resultLine;

      for (int i = 0; i < nrows; i++) {
        resultLine = <String>[];
        InputElement cbox = checkBoxes[i];
        cboxResult = "null";
        if (cbox != null) {
          cboxResult = "${cbox.checked}";
        }

        inputResult = "null";
        if (tinputFields[i] != null) {
          inputResult = tinputFields[i].value;
        }
        resultLine.add(cboxResult);
        resultLine.add(inputResult);

        if (dim == 2) {
          inputResult2D = "null";
          if (tinputFields2D[i] != null) {
            inputResult2D = tinputFields2D[i].value;
          }
          resultLine.add(inputResult2D);
        }

        results[i] = resultLine;
      }
      return results;
    }

    // called when button [i] was pressed, i=-1 mean red cross pressed (abort)
    void executeButton(int i, Event e) {
      e.preventDefault();
      if (i == -1) {
        if (dia != null) {
          close(UserInput(DiaAttr.DIA_ACT_ABORT, null, null));
        }
      } else {
        if (dia != null) {
          close(UserInput(DiaAttr.DIA_ACTIONS[i], getResults(), null));
        }
      }
      dia = null;

      // TODO remove as soon as Chrome sizes the window back properly when keyboard closed
      if (DiaUtils.isTablet()) {
        window.scrollTo(0, 0);
        inputDialogStatus = 0;
      }
    }

    // add delete icon
    row = TableRowElement();
    if (!redcross_left) {
      // we need this for delCell to be rightmost
      for (int i = 0; i < fakeCells.length; i++) {
        row.append(fakeCells[i]);
      }
    }
    row.append(delCell); // the actual cell
    diaTable.append(row);

    // Add table header for input dialog, this is the dialog text for confirm and info dialogs.
    int textfontSize = int.parse(attr[DiaAttr.DIALOG_TEXT_FONTSIZE]);
    int fontsize = textfontSize;
    row = TableRowElement();
    cell = TableCellElement();
    DiaUtils.appendHtml2(cell, htmlTitleText);
    String textalign = attr[DiaAttr.DIALOG_HEADER_TEXTALIGN];
    if (buttonLabels != null &&
        buttonLabels.isEmpty &&
        inputTextLabelInfo == null &&
        buttontype == ALIGN_LEFT) {
      // this causes a simple info dialog with a html text
      textalign = "left";
      fontsize = int.parse(attr[DiaAttr.DIALOG_HELP_TEXT_FONTSIZE]);
    } else {
      fontsize = int.parse(attr[DiaAttr.DIALOG_HEADER_FONTSIZE]);
    }
    cell.colSpan = NCOLS; // the htmlInfoText spans NCOLS columns
    cell.style
          ..textAlign = "$textalign"
          ..color = attr[DiaAttr.DIALOG_HEADER_COLOR]
          ..fontSize = "${fontsize}px"
          ..paddingTop = "10px" // leave some space to the delete icon
        ;
    if (DiaUtils.isPhone()) {
      cell.style.paddingTop = "6px";
    }

    if (inputTextLabelInfo != null) {
      cell.style.textDecoration = "underline";
    }

    row.append(cell);
    diaTable.append(row);

    addEmptyTableRow();

    if (inputTextLabelInfo != null) {
      nrows = inputTextLabelInfo.length;

      checkBoxes = List<InputElement>(nrows);
      tinputFields = List<InputElement>(nrows);
      if (dim == 2) {
        tinputFields2D = List<InputElement>(nrows);
      }

      for (int i = 0; i < nrows; i++) {
        row = TableRowElement();
        cell = TableCellElement();
        // type must be declared inside loop, otherwise iOS would make checkbox display errors
        InputElement cbox;
        if (isChecked != null &&
            isChecked[i] != null &&
            (isChecked[i] == DiaUtils.TRUE || isChecked[i] == DiaUtils.FALSE)) {
          //        if(buttontype == null)
          //          buttontype = DiaAttr.CHECKBOX;
          cbox = InputElement(type: buttontype);
          cbox.checked = DiaUtils.getBoolFromString(isChecked[i]);
          //        cbox.value = "checked"; // TODO ???
          cbox.style.fontSize = "${textfontSize}px";
          if (buttontype == DiaAttr.RADIO) {
            // force all radio buttons to belong to this radio group (currently no others)
            cbox.name = RADIOGROUP1;
          }
          cell.append(cbox);
        }
        checkBoxes[i] = cbox; // null allowed!

        row.append(cell);

        cell = TableCellElement();
//        appendHtml2(cell, inputTextLabelInfo[i][ITXT]);
        DiaUtils.appendHtml2(cell, inputTextLabelInfo[i]);
        cell.style
          ..textAlign = "left"
          ..color = attr[DiaAttr.DIALOG_TEXT_COLOR];

        if (i & 1 != 0 && alternateRowColor) {
          cell.style.color = attr[DiaAttr.DIALOG_TEXT_COLOR2];
        }

        row.append(cell);

        // Returns new text input field containing default [text]
        // May return null. The field is appended to the cbox further down
        TextInputElement appendTextInputField(String text) {
          TextInputElement textinputField;
          if (sizes[i] > 0) {
            bool readOnly = false;
            if (text != null && text.startsWith(READ_ONLY)) {
              readOnly = true;
              text = text.substring(READ_ONLY.length);
            }

            cell = TableCellElement();
            textinputField = TextInputElement();
            textinputField.value = text;
            textinputField.size = sizes[i];
            if (readOnly) {
              textinputField.readOnly = readOnly;
            }
//          textinputField.disabled
            textinputField.style
              ..fontSize = "${textfontSize - 1}px"
              ..background = attr[DiaAttr.DIALOG_INPUT_BG];

            cell.append(textinputField);
            textinputField.onMouseDown.listen((UIEvent e) {
              // auto-select radiobutton when it has a textfield and the user clicks into it
              if (checkBoxes[i] != null && checkBoxes[i].name == RADIOGROUP1) {
                checkBoxes[i].checked = true;
              }
            });

            textinputField.onKeyPress.listen((KeyboardEvent e) {
              // don't accept "Enter" in text field, has side effects
              if (e.keyCode == KeyCode.ENTER ||
                  e.keyCode == KeyCode.MAC_ENTER) {
                e.preventDefault();
                e.stopPropagation();
                if (DiaUtils.isTablet()) {
                  executeButton(0, e);
                }
              }
            });
          }
          row.append(cell);
          return textinputField;
        }

        tinputFields[i] = appendTextInputField(defaultInputTexts[i]);

        // appends combobox to previous text field
        void appendComboBox(
            List<List<String>> comboInfo, List<InputElement> textInFields) {
          // create combo box if required, in form of a button and a popup
          if (comboInfo != null &&
              comboInfo[i] != null &&
              comboInfo[i].isNotEmpty) {
            TableCellElement cell2 = TableCellElement();
            ButtonElement comboBut = ActButton().but;
            comboBut.appendText(DiaUtils.UNICODE_COMBO_BOX);
            comboBut.style
              ..padding = "none" //"0 0 0 0" // t r b l  //
              ..margin = "none"
              ..verticalAlign = "middle"
              ..textAlign = "left"
              ..display = "table-cell"
              ..fontSize = "${textfontSize - 6}px";

            bool disableTextInputCombo = true;
            String firstItem = comboInfo[i][0];

            // if this marker is present, the text input field belonging to the
            // combo box display will stay enabled, otherwise it will be disabled.
            if (firstItem.startsWith(ENABLE_TEXTINPUT_COMBO)) {
              disableTextInputCombo = false;
            }

            bool disableComboSelection = false;
            // if this marker is present, a selected combo item will NOT
            // be put into the textfield the combo belongs to.
            if (firstItem.contains(DISABLE_COMBO_SELECTION)) {
              disableComboSelection = true;
            }

            comboBut.addEventListener('click', (e) {
//              print("1000=clicked combo=$i");
              //open the combo box
              e.preventDefault();
              e.stopPropagation();

              // auto-select radiobutton when it has a textfield and the user clicks into it
              if (checkBoxes[i] != null && checkBoxes[i].name == RADIOGROUP1) {
                checkBoxes[i].checked = true;
              }

              List<String> combo_popup = [];

              for (int k = 0; k < comboInfo[i].length; k++) {
                String out = comboInfo[i][k];

                // remove in this sequence (must have been built this way if used)
                if (out.startsWith(ENABLE_TEXTINPUT_COMBO)) {
                  out = out.substring(ENABLE_TEXTINPUT_COMBO.length);
                }
                if (out.startsWith(DISABLE_COMBO_SELECTION)) {
                  out = out.substring(DISABLE_COMBO_SELECTION.length);
                }
                combo_popup.add("${out}${DiaUtils.SEP_STAN}${k}");
              }

              // toggles popup when clicking two times on the popup cell
              if (popup == null || !popup.isOpen()) {
                math.Point tpoint = DiaUtils.getTouchPoint(e);
                // leave some room to be able to click on popup icon to close it
                int x = tpoint.x + 12;
                int y = tpoint.y + 12;
                // make sure a big number of entries is visible and doesn't get clipped
                int nitems = comboInfo[i].length;
                bool preventDefault = true;
                final int N10 = 10,
                    N15 = 15,
                    WIDTH15 = 250,
                    HEIGHT15 = (diaContainer.clientHeight * 0.75).round();

                if (nitems > N10 && nitems <= N15) {
                  y = 0;
                }
                if (nitems > N15) {
                  y = 10;
                  preventDefault = false; // enable scrolling on touch devices
                }
                popup = PopupMenu(diaTable, "", combo_popup, null, null,
                    ((UserInput results) {
                  String actionCode = results.buttonCode;
                  // these arguments make sure that [processActions] takes the
                  // action from [sidebarItem.theAction]
                  if (actionCode != null && actionCode.isNotEmpty) {
                    // remove possible marker
                    String pattern = comboInfo[i][int.parse(actionCode)];
                    if (pattern.startsWith(ENABLE_TEXTINPUT_COMBO)) {
                      pattern =
                          pattern.substring(ENABLE_TEXTINPUT_COMBO.length);
                    }

                    if (!disableComboSelection) {
                      textInFields[i].value = pattern;
                    }
                    // make sure this item is now selected
                    if (checkBoxes[i] != null) {
                      checkBoxes[i].checked = true;
                    }
                  }
                }), x, y, preventDefault);

                if (nitems > N15) {
                  popup.dia.style
//            ..overflowX = "scroll"
                    ..overflowY = "scroll"
                    ..width = "${WIDTH15}px"
                    ..height = "${HEIGHT15}px";
                }
              } else {
                popup.close(null); // toggle off when on
              }
            }); // combo event listener

            if (disableTextInputCombo && textInFields[i] != null) {
              textInFields[i].disabled = true;
            }
//            print("1001=appended $i=${comboInfo[i]}");
            cell2.append(comboBut);
            row.append(cell2);
//            print("${cell2. clientWidth} ${cell2.clientHeight}");
          } else if (dim == 2 &&
              hasDim1Combo &&
              defaultInputTexts2D != null &&
              defaultInputTexts2D[i] != null) {
            // must append a fake button to align the F1 columns
            TableCellElement cell2 = TableCellElement();
            ButtonElement comboBut = ActButton().but;
            comboBut.appendText(DiaUtils.UNICODE_COMBO_BOX);
            comboBut.style
              ..background = "white" // irrelevant because opacity is 0
              ..padding = "none" //"0 0 0 0" // t r b l  //
              ..margin = "none"
              ..verticalAlign = "middle"
              ..textAlign = "left"
              ..display = "table-cell"
              ..fontSize = "${textfontSize - 6}px"
              ..cursor = "auto"
              ..opacity = "0.0"; // makes button invisible

            // no action when clicked!
            comboBut.addEventListener('click', (e) {
              e.preventDefault();
              e.stopPropagation();
            });

            cell2.append(comboBut);
            row.append(cell2);
          }
        } // appendComboBox()

        appendComboBox(comboInfo1D, tinputFields);

        if (dim == 2) {
          tinputFields2D[i] = appendTextInputField(defaultInputTexts2D[i]);
          appendComboBox(comboInfo2D, tinputFields2D);
        }

//        print("1002=appended row=$i with ncells=${row.cells.length}");
//        if(row.cells.length > 4){
//          print("1003=cell 3=${row.cells[3].runtimeType}");
//        }
        diaTable.append(row);
      } // for i ... nrows
      // leave some space to next item (OK button)
      diaTable.style.paddingBottom = "10px";
    } // if(inputTextlabelInfo != null)

    if (buttonLabels == null) {
      buttonLabels = [DiaAttr.DIA_BUT_OK];
    }
    actButs = List(buttonLabels.length);

    int buttonFontsize = int.parse(attr[DiaAttr.DIALOG_BUTTON_FONTSIZE]);
    for (int i = 0; i < buttonLabels.length; i++) {
      ActButton actbut = ActButton();
      actbut.but.appendText(buttonLabels[i]);
      actbut.but.style..fontSize = "${buttonFontsize}px";
      actbut.but.addEventListener('click', (e) {
        executeButton(i, e);
      });
      actButs[i] = actbut;
    }

    document.onKeyDown.listen((KeyboardEvent e) {
      // escape key acts like pressing red cross
      if (e.keyCode == KeyCode.ESC) {
        executeButton(-1, e);
      }
    });

    inputDialogStatus = 1;

    // A form element is needed such that the width adjustment below will work:
    // The correct clientWidth of the table is computed internally when doing this.
    // Appending the table directly to the dialog will not result in the correct size.
    FormElement form = FormElement();
    form.append(diaTable);

    for (int i = 0; i < actButs.length; i++) {
      if (buttonLabels[i] != null) {
        form.append(actButs[i].but);
      }
    }
    dia.append(form);

    // now adjust width of dialog to the table width. Must come at the very end,
    // because the form now has its correct width.

    if (diaContainer == null) {
      return; // non-modal dialogs
    }

    // center the dialog vertically
    int marginTop = diaContainer.clientHeight ~/ 2 - dia.clientHeight ~/ 2;
    if (marginTop < 0) {
      marginTop = 0;
    }
    //and shift a little up for optical reasons
    marginTop -= (marginTop * 0.2).round();
    if (DiaUtils.isTablet() && inputTextLabelInfo != null) {
      // make sure input dialog is always top to minimize coverage by soft keyboard
      marginTop = 5;
    }

    // make popup as wide as the table it contains
    int width = diaTable.clientWidth;
    if (actButs.isNotEmpty &&
        actButs[0] != null &&
        diaTable.clientWidth < actButs[0].but.clientWidth) {
      width = buttonLabels[0].length *
          (DiaUtils.removePx(dia.style.fontSize)).round();
    }

    dia.style
          ..width = "${width}px" // make popup as wide as the table it contains
          ..marginTop = "${marginTop}px" // This centers the dialog vertically
        ;
  } // init()

//------------ static methods -----------------

  /// Displays a dialog with a [htmlTitleText] and with several rows of optional
  /// check buttons, radio buttons, text entry fields, combo boxes.
  /// The name "get" indicates that [UserInput] into the above GUI elements is
  /// returned.
  ///  [buttontype] - one of [DiaAttr.RADIO], [DiaAttr.CHECKBOX], null(=CHECKBOX)]
  ///    See [isChecked] argument for further details.
  ///
  ///  [htmlTitleText] - the dialog header text.
  ///
  ///  [textLabels] - the size of this array defines the number of lines displayed
  ///    by the dialog. Each line displays the respective text entry of this array.
  ///    Behind the text of each line a text entry field gets displayed with
  ///    default values filled in. The defaults must be specfied by the
  ///    argument [defaultInputTexts], which must have the same array length as
  ///    [textLabels]. The width of each text entry field will be defined by the
  ///    respective entry in the [widths] argument array, which also must have
  ///    the same array length as [textLabels]. A width my be 0, then no text
  ///    entry field is shown for this row.
  ///
  ///  [comboInfo] - Each text entry field (see above) may be followed by a
  ///    combo box GUI element, each having several entries.
  ///    Example:
  ///    Assume a dialog has 4 rows. The 2nd row should have a combo box
  ///    containing the 3 items ["yes", "no", "skip"]. Then [comboInfo] must
  ///    be equals to [null, ["yes", "no", "skip"], null, null].
  ///    If no combo box at all should appear in the dialog, if suffices to
  ///    set this argument to null.
  ///
  ///  NOTE 1: if the first item of combo values contains
  ///    [InputDialog.ENABLE_TEXTINPUT_COMBO], then the
  ///    text entry field belonging to the combo box display will stay editable,
  ///    otherwise it will be disabled.
  ///    Example: "InputDialog.ENABLE_TEXTINPUT_COMBOyes" instead of "yes".
  ///
  ///  NOTE 2: if the first item of combo values contains
  ///    InputDialog.DISABLE_COMBO_SELECTION, a selected combo item will NOT
  ///    be put into the textfield the combo belongs to.
  ///
  ///  [isChecked] - Any of the text labels specfied by the argument [textLabels]
  ///    may be preceded by a checkbox or a radio button, as defined by the
  ///    argument [buttontype]. [isChecked] defines the initial check state of
  ///    a radio button or checkbox by setting its entry to "true" or "false".
  ///    If an entry is set to null, no check or radio button will be displayed
  ///    just for this row. [isChecked] must have the same length as [textLabels],
  ///    or it may be set to null. In this case no check or radio button at all
  ///    will be  displayed in the dialog.
  ///
  ///  [alternateRowColor] - if true, every second dialog row will get a different color.
  ///
  ///  [buttonLabels] - at the bottom of the dialog up to 3 action buttons may
  ///   be displayed, e.g. OK, Cancel, or anything else. The length of this array
  ///   defines the number of buttons, the array values define the button texts.
  ///   This argument may be null. In this case, just one button is displayed
  ///   with the button text "OK".
  static Future<UserInput> show(
      String buttontype,
      String htmlTitleText,
      List<String> inputTextLabelInfo,
      List<List<String>> comboInfo,
      List<String> defaultInputTexts,
      List<int> sizes,
      List<String> isChecked,
      bool alternateRowColor,
      List<String> buttonLabels) async {
    Completer<UserInput> cpl = Completer();
    void closeCallback(UserInput results) {
      cpl.complete(results);
    }

    InputDialog(
        buttontype,
        htmlTitleText,
        inputTextLabelInfo,
        comboInfo,
        defaultInputTexts,
        sizes,
        isChecked,
        closeCallback,
        alternateRowColor,
        buttonLabels);

    return cpl.future;
  }

  /// This method is similar to [get], with the following difference: it displays
  /// not a single, but two columns with texts, text entry fields etc.
  /// So, the meaning of the arguments is the same as for [get], except for the
  /// following which reflect the 2D features:
  /// [comboInfoND] - acts like [comboInfo] in [get], but values for the two
  /// columns must be given. Use the Map keys [InputDialog.COL1] and
  /// [InputDialog.COL2] for this.
  /// [defaultInputTextsND] = like [defaultInputTexts] in[get], but values for the two
  /// columns must be given. Use the Map keys [InputDialog.COL1] and
  /// [InputDialog.COL2] for this.
  /// Please refer to the example [showAdvancedInputDialog2D] in the file
  /// [examples.dart] of this package.
  static Future<UserInput> show2D(
      String buttontype,
      String htmlTitleText,
      List<String> inputTextLabelInfo,
      Map<int, List<List<String>>> comboInfoND,
      Map<int, List<String>> defaultInputTextsND,
      List<int> sizes,
      List<String> isChecked,
      bool alternateRowColor,
      List<String> buttonLabels) async {
    Completer<UserInput> cpl = Completer();
    void closeCallback(UserInput results) {
      cpl.complete(results);
    }

    InputDialog.twoD(
        buttontype,
        htmlTitleText,
        inputTextLabelInfo,
        comboInfoND,
        defaultInputTextsND,
        sizes,
        isChecked,
        closeCallback,
        alternateRowColor,
        buttonLabels);

    return cpl.future;
  }
} // InputDialog

//##############################################################################

/// A modal dialog to confirm a decision. This is just an [InputDialog] without
/// text input fields, but one or more action buttons.
class ConfirmDialog extends InputDialog {
  /// Creates and shows a modal dialog with:
  ///  [htmlTitleText] = the dialog header
  ///  [buttonLabels] = the labels of the action buttons at the bottom of the
  ///  [closeCallback] = called when an action button is pressed (may be null)
  ConfirmDialog(String htmlTitleText, List<String> buttonLabels,
      BaseDialogCloseCallback closeCallback)
      : super(null, htmlTitleText, null, null, null, null, null, closeCallback,
            false, buttonLabels);

  /// Creates and shows a non-modal (non-blocking) dialog.
  /// See [ConfirmDialog] for the arguments.
  ConfirmDialog.noModal(String htmlTitleText, List<String> buttonLabels,
      BaseDialogCloseCallback closeCallback)
      : super.noModal(null, htmlTitleText, null, null, null, null, null,
            closeCallback, false, buttonLabels);

  //--------- static methods -------------

  /// Shows a modal [ConfirmDialog]. See  [ConfirmDialog] for a description of the
  /// arguments. While [ConfirmDialog] needs a close callback, this async method
  /// returns the user input (which consists of the pressed button since
  /// other user input can't be entered in a [ConfirmDialog].
  static Future<UserInput> show(
    String htmlTitleText,
    List<String> buttonLabels,
  ) async {
    return InputDialog.show(
        null, htmlTitleText, null, null, null, null, null, false, buttonLabels);
  }
} // ConfirmDialog

//##############################################################################

/// A modal dialog to display information. No buttons except for a Red Cross to
/// close the dialog are provided.
class InfoDialog extends InputDialog {
  /// Creates and shows a modal dialog with [htmlInfoText].
  /// If [closeCallback] is not null it will be called with the user input
  /// button code [DiaAttr.DIA_ACT_ABORT].
  /// Aligns [htmlInfoText] centered in the cell.
  InfoDialog(String htmlInfoText, BaseDialogCloseCallback closeCallback)
      : super(null, htmlInfoText, null, null, null, null, null, closeCallback,
            false, []);

  /// Like [InfoDialog], but aligns text messages inside dialog left rather
  /// than centering them.
  InfoDialog.alignLeft(
      String htmlInfoText, BaseDialogCloseCallback closeCallback)
      : super(InputDialog.ALIGN_LEFT, htmlInfoText, null, null, null, null,
            null, closeCallback, false, []);

  /// Like [InfoDialog], but the dialog is non-modal (non-blocking).
  InfoDialog.noModal(String htmlInfoText, BaseDialogCloseCallback closeCallback)
      : super.noModal(null, htmlInfoText, null, null, null, null, null,
            closeCallback, false, []);

  /// Like [InfoDialog.alignLeft], but the dialog is non-modal (non-blocking).
  InfoDialog.noModalAlignLeft(
      String htmlInfoText, BaseDialogCloseCallback closeCallback)
      : super.noModal(InputDialog.ALIGN_LEFT, htmlInfoText, null, null, null,
            null, null, closeCallback, false, []);

  //-------------- static methods --------------------------

  /// Shows a modal [InfoDialog] with centered [htmlInfoText].
  /// While [InfoDialog] needs a close callback, this async method
  /// returns the user input (button code [DiaAttr.DIA_ACT_ABORT] when
  /// the red cross is pressed).
  static Future<UserInput> show(String htmlInfoText) async {
    Completer<UserInput> cpl = Completer();
    void closeCallback(UserInput results) {
      cpl.complete(results);
    }

    InfoDialog(htmlInfoText, closeCallback);
    return cpl.future;
  }
} // InfoDialog

//##############################################################################

/// This class provides shortcuts to easily display some dialogs
class Info {
  /// Shows a modal [InfoDialog] with centered [htmlInfoText].
  /// While [InfoDialog] needs a close callback, this async method
  /// returns the user input (button code [DiaAttr.DIA_ACT_ABORT] when
  /// the red cross is pressed).
  static Future<UserInput> show(String htmlInfoText) async {
    return InfoDialog.show(htmlInfoText);
  }

  /// Shows a modal [InfoDialog] with centered [htmlInfoText].
  /// Like [show], but "unawaited", i.e. doesn't return anything, and does
  /// not wait until the red cross is pressed.
  static void showGo(String htmlInfoText) async {
    unawaited(Info.show(htmlInfoText));
  }

  /// Displays a dialog with a [htmlTitleText] and with several rows of optional
  /// check buttons, radio buttons, text entry fields, combo boxes.
  /// The name "get" indicates that [UserInput] into the above GUI elements is
  /// returned.
  ///  [buttontype] - one of [DiaAttr.RADIO], [DiaAttr.CHECKBOX], null(=CHECKBOX)]
  ///    See [isChecked] argument for further details.
  ///
  ///  [htmlTitleText] - the dialog header text.
  ///
  ///  [textLabels] - the size of this array defines the number of lines displayed
  ///    by the dialog. Each line displays the respective text entry of this array.
  ///    Behind the text of each line a text entry field gets displayed with
  ///    default values filled in. The defaults must be specfied by the
  ///    argument [defaultInputTexts], which must have the same array length as
  ///    [textLabels]. The width of each text entry field will be defined by the
  ///    respective entry in the [widths] argument array, which also must have
  ///    the same array length as [textLabels]. A width my be 0, then no text
  ///    entry field is shown for this row.
  ///
  ///  [comboInfo] - Each text entry field (see above) may be followed by a
  ///    combo box GUI element, each having several entries.
  ///    Example:
  ///    Assume a dialog has 4 rows. The 2nd row should have a combo box
  ///    containing the 3 items ["yes", "no", "skip"]. Then [comboInfo] must
  ///    be equals to [null, ["yes", "no", "skip"], null, null].
  ///    If no combo box at all should appear in the dialog, if suffices to
  ///    set this argument to null.
  ///
  ///  NOTE 1: if the first item of combo values contains
  ///    [InputDialog.ENABLE_TEXTINPUT_COMBO], then the
  ///    text entry field belonging to the combo box display will stay editable,
  ///    otherwise it will be disabled.
  ///    Example: "InputDialog.ENABLE_TEXTINPUT_COMBOyes" instead of "yes".
  ///
  ///  NOTE 2: if the first item of combo values contains
  ///    InputDialog.DISABLE_COMBO_SELECTION, a selected combo item will NOT
  ///    be put into the textfield the combo belongs to.
  ///
  ///  [isChecked] - Any of the text labels specfied by the argument [textLabels]
  ///    may be preceded by a checkbox or a radio button, as defined by the
  ///    argument [buttontype]. [isChecked] defines the initial check state of
  ///    a radio button or checkbox by setting its entry to "true" or "false".
  ///    If an entry is set to null, no check or radio button will be displayed
  ///    just for this row. [isChecked] must have the same length as [textLabels],
  ///    or it may be set to null. In this case no check or radio button at all
  ///    will be  displayed in the dialog.
  ///
  ///  [alternateRowColor] - if true, every second dialog row will get a different color.
  ///
  ///  [buttonLabels] - at the bottom of the dialog up to 3 action buttons may
  ///   be displayed, e.g. OK, Cancel, or anything else. The length of this array
  ///   defines the number of buttons, the array values define the button texts.
  ///   This argument may be null. In this case, just one button is displayed
  ///   with the button text "OK".
  static Future<UserInput> get(
      String buttontype,
      String htmlTitleText,
      List<String> textLabels,
      List<List<String>> comboInfo,
      List<String> defaultInputTexts,
      List<int> widths,
      List<String> isChecked,
      bool alternateRowColor,
      List<String> buttonLabels) async {
    return InputDialog.show(buttontype, htmlTitleText, textLabels, comboInfo,
        defaultInputTexts, widths, isChecked, alternateRowColor, buttonLabels);
  }

  /// This method is similar to [get], with the following difference: it displays
  /// not a single, but two columns with texts, text entry fields etc.
  /// So, the meaning of the arguments is the same as for [get], except for the
  /// following which reflect the 2D features:
  /// [comboInfoND] - acts like [comboInfo] in [get], but values for the two
  /// columns must be given. Use the Map keys [InputDialog.COL1] and
  /// [InputDialog.COL2] for this.
  /// [defaultInputTextsND] = like [defaultInputTexts] in[get], but values for the two
  /// columns must be given. Use the Map keys [InputDialog.COL1] and
  /// [InputDialog.COL2] for this.
  /// Please refer to the example [showAdvancedInputDialog2D] in the file
  /// [examples.dart] of this package.
  static Future<UserInput> get2D(
      String buttontype,
      String htmlTitleText,
      List<String> textLabels,
      Map<int, List<List<String>>> comboInfoND,
      Map<int, List<String>> defaultInputTextsND,
      List<int> widths,
      List<String> isChecked,
      bool alternateRowColor,
      List<String> buttonLabels) async {
    return InputDialog.show2D(
        buttontype,
        htmlTitleText,
        textLabels,
        comboInfoND,
        defaultInputTextsND,
        widths,
        isChecked,
        alternateRowColor,
        buttonLabels);
  }

  /// Shows a modal [ConfirmDialog]. See  [ConfirmDialog] for a description of the
  /// arguments. While [ConfirmDialog] needs a close callback, this async method
  /// returns the user input (which consists of the pressed button since
  /// other user input can't be entered in a [ConfirmDialog].
  static Future<UserInput> confirm(
    String htmlInfoText,
    List<String> buttonLabels,
  ) async {
    return ConfirmDialog.show(htmlInfoText, buttonLabels);
  }
} // Info
