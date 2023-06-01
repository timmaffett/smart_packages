// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';

import '../smart_dialogs.dart';

/// Called when a dialog is closed. [userInput] must contain the button pressed,
/// the input the user entered, etc., see [UserInput].
typedef void BaseDialogCloseCallback(UserInput userInput);

/// A dialog base class for modal (=blocking) and non-modal dialogs.
/// The dialog is a container for its contents and is realized a DivElement [dia].
/// The div is directly appended to the document body for a non-modal dialog.
/// For modal dialogs the div is appended to a "glass pane" covering the application
/// [diaContainer] which is appended to the document body. The glass pane
/// will not let pass events through if "modal".
/// The dialog appearance (style) is defined by the attributes of the class
/// [DiaAttr].
/// The following dialogs are derive from [BaseDialog]:
/// [InputDialog], [FileSelectionDialog], [IconPanel], [PopupMenu].
class BaseDialog {
  // the "glass" pane covering the application to make the dialog modal:
  late DivElement dia; // the actual dialog
  DivElement? diaContainer; // contains [dia] only if dialog is modal
//  String closeReturnValue;
  BaseDialogCloseCallback? closeCallback;
  late bool isModal; // true if the this dialog is modal
  bool isopen = false; // true if dialog is open

  /// Creates and shows a modal dialog with a [closeCallback] invoked when the
  /// dialogs close. The callback may be null.
  BaseDialog(this.closeCallback) {
    isModal = true;
    createShowDia();
  }

  /// Creates and shows a non-modal dialog with a [closeCallback] invoked when
  /// the dialogs close. The callback may be null.
  BaseDialog.noModal(this.closeCallback) {
    isModal = false;
    createShowDia();
  }

  /// Performs the dialog creation and display logic.
  void createShowDia() {
    dia = DivElement(); // create the dialog box

    DiaAttr.setDialogStyle2(dia); // initialize the style with defaults

    // make some style attributes dependent on the modality and append
    // the dialog box the document body
    if (isModal) {
      diaContainer = DivElement();
      diaContainer!.style
        ..position = "absolute" // so as to cover app-div completely
        ..top = "0"
        ..left = "0"
        ..bottom = "0"
        ..right = "0"
        ..width = "100%"
        ..height = "100%"
//       ..border = "3px solid red" // "width style color"
        ..margin = "-50"
        ..padding = "0"
        ..userSelect = "none" // user cannot select contents
        ..zIndex = "${DiaAttr.ZINDEX_DIALOG}"
        ..overflowY = "auto"; // scrollbar if too many item cells in dialog

      document.body!.append(diaContainer!);

      dia.style
//      ..width = "${18}em" // width MUST be set by callers, must NOT be set here!
        ..color = DiaAttr.attr[DiaAttr.DIALOG_TEXT_COLOR];

      diaContainer!.append(dia);
    } else {
      dia.style
            ..position = "absolute" // rel. to entire application (body)
            ..top = "0" // def. abs. position, usually overidden, e.g. PopupMenu
            ..left = "0"
            ..width = "300px" // def. width, usually overidden, e.g. PopupMenu
          ;
      document.body!.append(dia);
    }

    // define the "stacking" of dialogs
    dia.style.zIndex = "${DiaAttr.ZINDEX_DIALOG + 1}";
    isopen = true;
  }

  /// Closes the dialog.
  /// [userInput] is passed on to
  /// [closeCallback] if a non-null callback is defined.
  /// if [userInput] is null, a non-null one is generated,
  /// with an empty String a button code.
  void close(UserInput? userInput) {
    isopen = false;
//    closeReturnValue = userInput.buttonCode;
    dia.remove();
    if (isModal && diaContainer!=null) {
      diaContainer!.remove();
    }
    if (closeCallback != null) {
      if (userInput == null) {
        userInput = UserInput("", null, this);
      }
      closeCallback!(userInput);
    }
  }

  /// Returns true if the dialog is open.
  bool isOpen() {
    return isopen;
  }
} // BaseDialog

/// This class defines a user's input into a dialog: The action button pressed,
/// and the parameters requested by the dialog (contents of text entry fields,
/// combo box selections, radio or check button states).
/// Example 1D: (the first entry null or true or false is the checkbox state).
/// {0: [false, null],
///    1: [true, Exponential],
///    2: [null, 0.3], 3: [null, 0.5, -1.0], (variable length!)
///    4: [true, 2048]}
/// Example 2D:
/// {0: [false, null, null],
///    1: [true, Exponential, Gaussian],
///    2: [null, 0.3, 0.3], 3: [null, 0.5, -1.0, 0.1, -1.0],
///    4: [true, 2048, 256]}
class UserInput {
  static final int IX_CBUT = 0; // index of checkbox state
  String _buttonCode;
  Map<int, List<String?>>? fields;
  BaseDialog? dia;

  /// Creates a [UserInput] from:
  /// [_buttonCode] of the pressed dialog button,
  /// [fields] the user input ordered per input line of the dialog.
  ///   The Map keys count the dialog lines, starting at 0.
  ///   The Map values provide the user input for each line:
  ///   List item 0: The radio/check button state: null=no such button,
  ///     "true" or "false" if checked or not checked.
  ///   List items 1,2,.. : (variable length): represent the values of
  ///     a text entry fields, auto-splitted if comma separated.
  ///     Or the selected value if no text field, but a combo box.
  /// [dia] the dialog which delivered the input
  UserInput(this._buttonCode, this.fields, this.dia);

  /// Returns the list of user-entered values for [line] >= 0.
  /// Example 1D: [true, Exponential] (line with button and a combo box)
  /// Example 1D: [null, 0.5, -1.0] (line with np button and a text field
  ///   containing 2 comma-separated values)
  /// Example 2D: [true,  0.5, -1.0
  ///
  /// , 0.1, 3.0] (line with a button and
  ///   two text fields, each containing "0.5, -1.0" and "0.1, 3.0".
  List<String?>? getUserInput(int line) {
    return fields?[line]?.sublist(1);
  }

  /// Returns "true" or "false" or "null" (as a String!) if the check button
  /// or radio button of [line] >= 0 is
  /// checked, not checked, or not existing.
  String? getCheckedState(int line) {
    return fields?[line]?[IX_CBUT];
  }

  String get buttonCode {
    return _buttonCode;
  }
} // UserInput
