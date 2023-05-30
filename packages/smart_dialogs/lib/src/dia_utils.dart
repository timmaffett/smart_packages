// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';

/// This class provides some simple utility functions for the dialog package.
class DiaUtils {
  /// Some unicodes
  static final String UNICODE_DELETE_CROSS = "\u2715",
      UNICODE_COMBO_BOX = "\u25bc";

  /// A frequently used separator and String booleans
  static final String SEP_STAN = "||", TRUE = "true", FALSE = "false";

  /// Returns true if [s] = TRUE, otherwise false (even for s=null).
  static bool getBoolFromString(String s) {
    if (s == TRUE) return true;
    return false;
  }

  /// Append [htmlText] to [el].
  /// Currently we trust all html tags inside [htmlText].
  /// TODO: Instead of using "trusted" for each element, use a NodeTreeSanitizer
  ///   with a NodeValidator which for example allows each element, but only
  ///   certain attributes in the text, e.g. <span>.
  static void appendHtml2(Element el, String htmlText) {
    el.appendHtml(htmlText, treeSanitizer: NodeTreeSanitizer.trusted);
  }

  /// Returns the rounded integer value
  /// assuming [cssAttr] is given in pixels, "10", or "10.5px",
  static double removePx(String cssAttr) {
    if (cssAttr == null || cssAttr.isEmpty) return 28.0;
    return double.parse(cssAttr.replaceFirst("px", ""));
  }

  /// Returns true if we are on a tablet (based on the browser's user agent).
  /// User agent has been found to be the following:
  /// 1) User agent chrome on ipad:
  ///    Mozilla/5.0 (iPad; CPU OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko)
  ///    CriOS/43.0.2357.61 Mobile/12H143 Safari/600.1.4
  /// 2) User agent safari on ipad:
  ///    Mozilla/5.0 (iPad; CPU OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko)
  ///    Version/8.0 Mobile/12H143 Safari/600.1.4
  /// 3) User agent chrome on galaxy:
  ///    Mozilla/5.0 (Linux; Android 4.4.2; SM-P600 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko)
  ///    Chrome/43.0.2357.93 Safari/537.36
  /// 4) User agent chrome on Dell D830 Windows 7:
  ///    Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko)
  ///    Chrome/43.0.2357.132 Safari/537.36
  ///
  /// Must possibly be refined to detect all kinds of tablets.
  static bool isTablet() {
    String info = window.navigator.userAgent;
    bool isTablet = false;
    if (info.toLowerCase().contains("android") ||
        info.toLowerCase().contains("ipad") ||
        info.toLowerCase().contains("iphone")) {
      isTablet = true;
    } else if (info.toLowerCase().contains("touch")) {
      // TODO this hopefully detects MS Surface, however also Desktop touch screen!
      isTablet = true;
    }
    return isTablet;
  }

  /// Returns true if Android OS is active.
//bool isAndroidOS() {
//  bool is_android = false;
//  if (window.navigator.userAgent.toLowerCase().contains("android"))
//    is_android = true;
//  return is_android;
//}

  /// Returns true if device is an iPhone. A phone is also a tablet,
  /// but if a tablet is a phone additionally, layout specifics will apply.
  static bool isPhone() {
    bool phone = false;
    if (window.navigator.userAgent.toLowerCase().contains("iphone") &&
        window.navigator.vendor.contains("Apple Computer")) phone = true;
//  return true; // For testing iphone on PC. TODO remove
    return phone;
  }

  /// Returns true iOS Safari is active.
  static bool isSafariIOS() {
    bool isIOS = false;
    if ((window.navigator.userAgent.toLowerCase().contains("ipad") ||
            window.navigator.userAgent.toLowerCase().contains("iphone")) &&
        window.navigator.vendor.contains("Apple Computer")) isIOS = true;

    return isIOS;
  }

  /// Get Apple OS version (major and minor).
  /// try to find something like "CPU OS 9_0 or CPU OS 9_0_1", which is typical for iOS (also OS X ??)
  /// Return e.g. [9, 0] or [9, 0, 1. This was tested on iPad for iOS 9.0.1.
  /// Return null if no proper format found.
//List<int> getVersionApple() {
//  int index = window.navigator.userAgent.indexOf("CPU OS ");
////  InfoDialog.noModal(window.navigator.userAgent, null);
//  if (index == -1) return null;
//  index += "CPU OS ".length;
//
//  String versionString = window.navigator.userAgent
//      .substring(index, index + 10); // get "9_0" from "9_0 XXXXX..."
//  index = versionString.indexOf(" ");
////  InfoDialog.noModal("2=${versionString} ${index}", null);
//  if (index == -1) return null;
//
//  versionString = versionString.substring(0, index); // now we have "9_0".
//  index = versionString.indexOf("_"); // split in major/minor
////  InfoDialog.noModal("3=${versionString} ${index}", null);
//  if (index == -1) return null;
//
//  List<String> temp = versionString.split("_");
////  InfoDialog.noModal("4=${temp}", null);
//  if (temp.length == 2) // 9_0
//  {
//    return [int.parse(temp[0]), int.parse(temp[1])]; // [9,0]
//  } else if (temp.length == 3) // 9_0_1
//  {
//    return [
//      int.parse(temp[0]),
//      int.parse(temp[1]),
//      int.parse(temp[2])
//    ]; // [9,0,1]
//  }
//  return null;
//}

  /// Get Chrome version, works for Window, Android, .. (so far major).
  /// try to find something like "Chrome/48.0.2564.195.567".
  /// Return e.g. [48, 0] or [48, 0, 2564].
  /// Return null if no proper format found.
//List<int> getVersionChrome() {
//  int index = window.navigator.userAgent.indexOf("Chrome/");
////  InfoDialog.noModal(window.navigator.userAgent, null);
//  if (index == -1) return null;
//  index += "Chrome/".length;
//
//  String versionString = window.navigator.userAgent
//      .substring(index, index + 12); // get "9_0" from "9_0 XXXXX..."
//  index = versionString.indexOf(".");
////  InfoDialog.noModal("2=${versionString} ${index}", null);
//  if (index == -1) return null;
//
//  List<String> temp = versionString.split(".");
////  InfoDialog.noModal("4=${temp}", null);
//  if (temp.length == 2) // 48.0
//  {
//    return [int.parse(temp[0]), int.parse(temp[1])]; // [9,0]
//  } else if (temp.length > 2) // 48.0.9257.5
//  {
//    return [
//      int.parse(temp[0]),
//      int.parse(temp[1]),
//      int.parse(temp[2])
//    ]; // [9,0,1]
//  }
//  return null;
//}

  /// Returns true if SpecPad is operated via mouse rather than finger.
  /// Currently identical to isTablet().
  ///  TODO: Event if tablet: mouse could be present, detect that.
  static bool hasMouse() {
    return !isTablet();
  }

  ///*
// * Supported in Chrome, the following code works in Javascript.
// * How to do it in dart? There is class Navigator without vibrate.
// */
//void vibrate(int millisecs)
//{
//  var navigator = window.navigator;
//
//  navigator.vibrate(1000);
//  // enable vibration support
//  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
//
//  if (navigator.vibrate) {
//   // vibration API supported
//  }
//}

  /// Gets the [x,y] position in pixels from mouse or touch event [e].
  /// If several fingers touched, the first touch point is returned.
  /// [x,y] is relative to the page.
  static Point<int> getTouchPoint(UIEvent e) {
    int x, y;
    if (e is MouseEvent) {
      x = (e.page.x).toInt();
      y = (e.page.y).toInt();
    } else if (e is TouchEvent && e.touches!=null && e.touches!.isNotEmpty) {
      x = (e.touches![0].page.x).toInt();
      y = (e.touches![0].page.y).toInt();
    } else {
      x = 0;
      y = 0;
    }
    return Point(x, y);
  }

  /// Gets the [x,y] positions in pixels from a touch event [e].
  /// If several fingers touched, the returned list is > 1.
  /// The returned [x,y] list is relative to the page.
  /// Return null if [e] is not touch event or the number of touches is 0.
  static List<Point<int>> getTouchPoints(UIEvent e) {
    int x, y;
    List<Point<int>?> tpoints;
    if (e is MouseEvent) {
      x = e.page.x.floor();
      y = e.page.y.floor();
      tpoints = [Point(x, y)];
    } else if (!(e is TouchEvent)) {
      tpoints = [Point(0, 0)];
    } else {
      TouchEvent et = e;
      if (et.touches == null || et.touches!.isEmpty) return [];

      tpoints = List<Point<int>?>.filled(et.touches!.length, null);
      for (int i = 0; i < tpoints.length; i++) {
        x = et.touches![i].page.x.floor();
        y = et.touches![i].page.y.floor();
        tpoints[i] = Point(x, y);
      }
    }
    return tpoints as List<Point<int>>;
  }
} // DiaUtils
