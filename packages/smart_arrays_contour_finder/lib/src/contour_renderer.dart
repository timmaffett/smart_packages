// Copyright (c) 2019, Dr. Bruno Guigas. All rights reserved. Use of this source
// code is governed by a BSD-style license that can be found in the LICENSE file.

/// Users of [ContourFinder] must provide an implementation of this class.
abstract class ContourRenderer {
  /// This method gets called by [ContourFinder.findContour] each time a contour
  /// line was found. Its purpose is to draw the detected contour line, which
  /// is a piece of an entire contour. Drawing can e.g. be performed using the
  /// respective methods of [CanvasRenderingContext2D] to draw into a [CanvasElement].
  /// Or you may use webgl. In that case this method would just fill a buffer
  /// with the provided coordinates.
  /// This method receives the start and end coordinates of the contour line to
  /// be drawn:
  ///  [startX], [startY], [endX], [endY] (numbers between 0 and 1).
  /// Assume you want to draw the contours of a matrix with ncols columns and
  /// nrows rows. Then the start/end coordinates below and a matrix element
  /// (i,j) are related by j / (ncols - 1), i / (nrows - 1) to give normalized
  /// coordinates between 0 and 1.
  /// [contourLevel] is the value of the current level to be drawn,
  /// [levelNumber] is the number of this level in the list specified to
  ///   contour finder.
  void drawContourLine(double startX, double startY, double endX, double endY,
      double contourLevel, int levelNumber);
}
