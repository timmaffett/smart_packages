import 'dart:typed_data';
import 'dart:math' as math;

/// This class provides method for complex-valued arrays:
/// Phasing (rotation in the complex plane), power and magnitude calculation.
class Phase {

  /// Applies in-place phasing (rotation in the complex plane) to the complex-
  /// valued array whith the real part [reals] and the imaginary part [imags].
  /// according to the following equations:
  ///   reals[i] := reals[i]*cos(phi[i]) -  imags[i]*sin(phi[i])
  ///   imags[i] := imags[i]*cos(phi[i]) +  reals[i]*sin(phi[i])
  /// with
  ///   phi[i] := a0 + (i/(reals.length-1))*a1, i=0...reals.length-1
  ///
  /// a0 and a1 are the "zeroeth and first order phasing angles" in degrees.
  ///
  /// [inverse] = true ==> reverse phasing (sine terms will change sign
  ///  according to an inverse rotation in the complex plane)
  void phase(Float64List reals, Float64List? imags, double a0, double a1,
      bool inverse) {
    if (imags == null || (imags.length != reals.length)) {
      throw """real and imaginary spectrum have unequal sizes: 
     ${reals.length} + ' / ' + ${imags?.length}""";
    }

    double real, imag, realnew, imagnew;
    int size1 = reals.length - 1;
    double a0rad = a0 * math.pi / 180,
        a1rad = a1 * math.pi / 180;
    double sinPhi, cosPhi;
    double phi;
    for (int i = 0; i <= size1; i++) {
      real = reals[i];
      imag = imags[i];
      phi = a0rad + (i * a1rad) / size1;

      cosPhi = math.cos(phi);
      sinPhi = math.sin(phi);
      if (inverse) {
        realnew = real * cosPhi - imag * sinPhi;
        imagnew = imag * cosPhi + real * sinPhi;
      } else {
        realnew = real * cosPhi + imag * sinPhi;
        imagnew = imag * cosPhi - real * sinPhi;
      }

      reals[i] = realnew;
      imags[i] = imagnew;
    }
  }

  /// Applies in-place magnitude or power calculation to the complex-
  /// valued array whith the real part [reals] and the imaginary part [imags].
  /// according to the following equations:
  ///  reals[i] := reals[i]**2 + imags[i]**2 if [sqrt] is false ("power")
  ///  reals[i] := sqrt(reals[i]**2 + imags[i]**2) if [sqrt] is true ("magnitude")
  ///
  /// [imags] remains unchanged!
  void magnitude(Float64List reals, Float64List? imags, bool sqrt) {
    if (imags == null || (imags.length != reals.length)) {
      throw """real and imaginary spectrum have unequal sizes: 
     ${reals.length} + ' / ' + ${imags?.length}""";
    }

    double real, imag, realnew;
    int size1 = reals.length - 1;
    for (int i = 0; i <= size1; i++) {
      real = reals[i];
      imag = imags[i];
      realnew = real * real + imag * imag;
      if (sqrt) realnew = math.sqrt(realnew);

      reals[i] = realnew;
    }
  }
} // Phase