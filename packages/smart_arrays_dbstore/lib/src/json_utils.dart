// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:convert';
import 'dart:typed_data';

/// This class provides utilities to decode various jsonified objects in a
/// type-secure way to avoid runtime type errors.
/// Reason: json.decode(..) returns "dynamic".
class UtilsJson {
  /// [jsn] to be encoded as List<String>
  static List<String> decodeLS(String jsn) {
    return json.decode(jsn).cast<String>();
  }

  /// [jsn] to be encoded as List<int>
  static List<int> decodeLI(String jsn) {
    return json.decode(jsn).cast<int>();
  }

  /// [jsn] to be encoded as List<double>
  static List<double> decodeLD(String jsn) {
    return json.decode(jsn).cast<double>();
  }

  /// [jsn] to be encoded as List<List<String>>
  static List<List<String>> decodeLLS(String jsn) {
    List res = json.decode(jsn);
    List<List<String>> lss = [];
    for (List ld in res) {
      List<String> ls = ld.cast<String>();
      lss.add(ls);
    }
    return lss;
  }

  /// [jsn] to be encoded as List<Map<String,String>>
  static List<Map<String, String>> decodeLMSS(String jsn) {
    List lst = json.decode(jsn);
    List<Map<String, String>> lmss = [];
    for (Map md in lst) {
      Map<String, String> mss = {};
      for (String key in md.keys) {
        mss[key] = md[key].toString(); // make sure runtimetype is OK
      }
      lmss.add(mss);
    }
    return lmss;
  }

  /// [jsn] to be encoded as List<Float64List>
  static List<Float64List> decodeLF64L(String jsn) {
    dynamic res = json.decode(jsn);

    List<Float64List> levels = List<Float64List>(res.length);
    for (int k = 0; k < res.length; k++) {
      if (res[k] == null) {
        levels[k] = null;
      } else {
        levels[k] = Float64List(res[k].length);
        for (int i = 0; i < levels[k].length; i++) {
          levels[k][i] = res[k][i];
        }
      }
    }
    return levels;
  }

  /// [jsn] to be encoded as Map<String, String>
  static Map<String, String> decodeMSS(String jsn) {
    return json.decode(jsn).cast<String, String>();
  }

  /// [jsn] to be encoded as Map<String, int>
  static Map<String, int> decodeMSI(String jsn) {
    return json.decode(jsn).cast<String, int>();
  }

  /// [jsn] to be encoded as Map<String, List<String>>
  static Map<String, List<String>> decodeMSLS(String jsn) {
    Map res = json.decode(jsn);
    Map<String, List<String>> resm = {};
    for (String key in res.keys) {
      List<String> ls = res[key].cast<String>();
      resm[key] = ls;
    }
    return resm;
  }

  /// [jsn] to be encoded as Map<int, List<String>>
//  static Map<int, List<String>> decodeMILS(String jsn) {
//    Map res = json.decode(jsn);
//    Map<int, List<String>> resm = {};
//    for (int key in res.keys) {
//      List<String> ls = res[key].cast<String>();
//      resm[key] = ls;
//    }
//    return resm;
//  }

  /// [jsn] to be encoded as  Map<String, Map<String, String>>
  static Map<String, Map<String, String>> decodeMSMSS(String jsn) {
    Map mdyn = json.decode(jsn);
    Map<String, Map<String, String>> resm = {};
    for (String keydyn in mdyn.keys) {
      Map mdyn2 = mdyn[keydyn];
      resm[keydyn] = mdyn2.cast<String, String>();
    }
    return resm;
  }

  /// [jsn] to be encoded as Map<String, Map<String, List<String>>>
  static Map<String, Map<String, List<String>>> decodeMSMSLS(String jsn) {
    Map<String, dynamic> m1 = json.decode(jsn);
    Map<String, Map<String, List<String>>> mres = {};
    for (String key1 in m1.keys) {
      Map<String, dynamic> m2 = m1[key1];
      Map<String, List<String>> m3 = {};
      for (String key2 in m2.keys) {
        List<dynamic> ld = m2[key2];
        List<String> ls = ld.cast<String>();
        m3[key2] = ls;
      }
      mres[key1] = m3;
    }
    return mres;
  }

  /// [jsn] to be encoded as Map<String, Map<String, List<Map<String, String>>>>
  ///     m1          m2          l1   m3
  static Map<String, Map<String, List<Map<String, String>>>> decodeMSMSLMSS(
      String jsn) {
    Map<String, dynamic> m1dyn = json.decode(jsn);
    Map<String, Map> m1 = m1dyn.cast<String, Map>();

    Map<String, Map<String, List<Map<String, String>>>> m1new = {};
    for (String key1 in m1.keys) {
      Map<String, dynamic> m2dyn = m1[key1];
      Map<String, List> m2 = m2dyn.cast<String, List>();
      Map<String, List<Map<String, String>>> m2new = {};
      for (String key2 in m2.keys) {
        List<dynamic> ld = m2[key2];
        List<Map> l1 = ld.cast<Map>();
        List<Map<String, String>> l1new = [];
        for (Map m3dyn in l1) {
          Map<String, String> m3 = m3dyn.cast<String, String>();
          l1new.add(m3);
        }
        m2new[key2] = l1new;
      }
      m1new[key1] = m2new;
    }
    return m1new;
  }

  /// TESTS, uncomment when needed
/*
  static void test_decodeALL() {
    test_decodeLS();
    test_decodeLI();
    test_decodeLD();
    test_decodeLLS();
    test_decodeLMSS();
    test_decodeLF64L();
    test_decodeMSI();
    test_decodeMSLS();
    test_decodeMSS();
    test_decodeMSMSS();
    test_decodeMSMSLS();
    test_decodeMSMSLMSS();
  }

  static void test_decodeLS() {
    List<String> ls = ["1", "2", "3", "4", "5"];
    String jsn = json.encode(ls);
    List<String> decoded = decodeLS(jsn);
    print("json_utils: test_decodeLS=$decoded");
  }

  static void test_decodeLI() {
    List<int> msls = [1, 2, 3, 4, 5, 6, 7];

    String jsn = json.encode(msls);
    List<int> decoded = decodeLI(jsn);
    print("json_utils: test_decodeLI=$decoded");
  }

  static void test_decodeLD() {
    List<double> msls = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7];
    String jsn = json.encode(msls);
    List<double> decoded = decodeLD(jsn);
    print("json_utils: test_decodeLD=$decoded");
  }

  static void test_decodeLLS() {
    List<List<String>> lls = [
      ["1"],
      ["2a", "2b"],
      ["3a", "3b", "3c"]
    ];
    String jsn = json.encode(lls);
    List<List<String>> decoded = decodeLLS(jsn);
    print("json_utils: test_decodeLLS=$decoded");
  }

  static void test_decodeLF64L() {
    List<Float64List> msls = [
      Float64List.fromList([1.1]),
      Float64List.fromList([2.1, 2.2]),
      Float64List.fromList([3.1, 3.2, 3.3]),
      Float64List.fromList([4.1, 4.2, 4.3, 4.4])
    ];

    String jsn = json.encode(msls);
    List<Float64List> decoded = decodeLF64L(jsn);
    print("json_utils: test_decodeLF64L=$decoded");
  }

  static void test_decodeMSS() {
    Map<String, String> msls = {"1": "1", "2": "2", "3": "3"};

    String jsn = json.encode(msls);
    Map<String, String> decoded = decodeMSS(jsn);
    print("json_utils: test_decodeMSS=$decoded");
  }

  static void test_decodeLMSS() {
    List<Map<String, String>> msls = [
      {"1": "1a"},
      {"2": "2a"},
      {"3": "3a"}
    ];

    String jsn = json.encode(msls);
    List<Map<String, String>> decoded = decodeLMSS(jsn);
    print("json_utils: test_decodeLMSS=$decoded");
  }

  static void test_decodeMSI() {
    Map<String, int> msls = {"1": 1, "2": 2, "3": 3};

    String jsn = json.encode(msls);
    Map<String, int> decoded = decodeMSI(jsn);
    print("json_utils: test_decodeMSI=$decoded");
  }

  static void test_decodeMSLS() {
    Map<String, List<String>> msls = {
      "1": ["1a", "1b", "1c"],
      "2": ["2a", "2b", "2c"],
      "3": ["3a", "3b", "3c"]
    };

    String jsn = json.encode(msls);
    Map<String, List<String>> decoded = decodeMSLS(jsn);
    print("json_utils: test_decodeMSLS=$decoded");
  }

  static void test_decodeMSMSS() {
    Map<String, Map<String, String>> msls = {
      "1": {"1a": "1aa", "1b": "1bb", "1c": "1cc"},
      "2": {"2a": "2aa", "2b": "2bb", "2c": "2cc"},
      "3": {"3a": "3aa", "3b": "3bb", "3c": "3cc"}
    };

    String jsn = json.encode(msls);
    Map<String, Map<String, String>> decoded = decodeMSMSS(jsn);
    print("json_utils: test_decodeMSMSS=$decoded");
  }

  static void test_decodeMSMSLS() {
    Map<String, Map<String, List<String>>> msls = {
      "1": {
        "1a": ["1aa", "1bb"]
      },
      "2": {
        "2a": ["2aa", "2bb", "2cc"],
        "2ax": ["2aax", "2bbx", "2ccx"]
      },
      "3": {
        "3a": ["3aa", "3bb", "3cc", "3dd"],
        "3ay": ["3aay", "3bby", "3ccy", "3ddy"],
        "3az": ["3aaz", "3bbz", "3ccz", "3ddz"]
      }
    };

    String jsn = json.encode(msls);
    Map<String, Map<String, List<String>>> decoded = decodeMSMSLS(jsn);
    print("json_utils: test_decodeMSMSLS=$decoded");
  }

  static void test_decodeMSMSLMSS() {
    Map<String, Map<String, List<Map<String, String>>>> msls = {
      "1": {
        "1a": [
          {"1aa": "1aaa"},
          {"1bb": "1bbb"},
        ],"1ax": [
          {"1aax": "1aaax"},
          {"1bbx": "1bbbx"},
        ]
      },
      "2": {
        "2a": [
          {"2aa": "2aaa"},
          {"2bb": "2bbb"},
          {"2cc": "2ccc"}
        ],"2ay": [
          {"2aay": "2aaa"},
          {"2bby": "2bbb"},
          {"2ccy": "2ccc"}
        ]
      },
      "3": {
        "3a": [
          {"3aa": "3aaa"},
          {"3bb": "3bbb"},
          {"3cc": "3ccc"},
          {"3dd": "3ddd"}
        ],"3az": [
          {"3aaz": "3aaaz"},
          {"3bbz": "3bbbz"},
          {"3ccz": "3cccz"},
          {"3ddz": "3dddz"}
        ]
      }
    };

    String jsn = json.encode(msls);
    Map<String, Map<String, List<Map<String, String>>>> decoded =
        decodeMSMSLMSS(jsn);
    print("json_utils: test_decodeMSMSLMSS=$decoded");
  }

*/
  /// END of TESTS

}
