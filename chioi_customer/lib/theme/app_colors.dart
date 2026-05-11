import 'package:flutter/material.dart';

class AppColors {
  // Primary
  static const primary = Color(0xFFA04100);
  static const onPrimary = Color(0xFFFFFFFF);
  static const primaryContainer = Color(0xFFFF7E36);
  static const onPrimaryContainer = Color(0xFF642600);
  static const primaryFixed = Color(0xFFFFDBCC);
  static const primaryFixedDim = Color(0xFFFFB693);
  static const onPrimaryFixed = Color(0xFF351000);
  static const onPrimaryFixedVariant = Color(0xFF7A3000);

  // Secondary
  static const secondary = Color(0xFFB3272E);
  static const onSecondary = Color(0xFFFFFFFF);
  static const secondaryContainer = Color(0xFFFC5D5D);
  static const onSecondaryContainer = Color(0xFF60000C);
  static const secondaryFixed = Color(0xFFFFDAD7);
  static const secondaryFixedDim = Color(0xFFFFB3AF);
  static const onSecondaryFixed = Color(0xFF410005);
  static const onSecondaryFixedVariant = Color(0xFF91081A);

  // Tertiary
  static const tertiary = Color(0xFF645D58);
  static const onTertiary = Color(0xFFFFFFFF);
  static const tertiaryContainer = Color(0xFFAAA19B);
  static const onTertiaryContainer = Color(0xFF3E3833);
  static const tertiaryFixed = Color(0xFFEBE1DA);
  static const tertiaryFixedDim = Color(0xFFCEC5BE);
  static const onTertiaryFixed = Color(0xFF1F1B17);
  static const onTertiaryFixedVariant = Color(0xFF4C4641);

  // Error
  static const error = Color(0xFFBA1A1A);
  static const onError = Color(0xFFFFFFFF);
  static const errorContainer = Color(0xFFFFDAD6);
  static const onErrorContainer = Color(0xFF93000A);

  // Surface
  static const surface = Color(0xFFFCF9F8);
  static const onSurface = Color(0xFF1B1C1C);
  static const surfaceVariant = Color(0xFFE4E2E1);
  static const onSurfaceVariant = Color(0xFF584238);
  static const surfaceDim = Color(0xFFDCD9D9);
  static const surfaceBright = Color(0xFFFCF9F8);
  static const surfaceTint = Color(0xFFA04100);
  static const surfaceContainer = Color(0xFFF0EDED);
  static const surfaceContainerLow = Color(0xFFF6F3F2);
  static const surfaceContainerHigh = Color(0xFFEAE7E7);
  static const surfaceContainerHighest = Color(0xFFE4E2E1);
  static const surfaceContainerLowest = Color(0xFFFFFFFF);

  // Background
  static const background = Color(0xFFFCF9F8);
  static const onBackground = Color(0xFF1B1C1C);

  // Outline
  static const outline = Color(0xFF8B7266);
  static const outlineVariant = Color(0xFFDFC0B3);

  // Inverse
  static const inverseSurface = Color(0xFF303030);
  static const inverseOnSurface = Color(0xFFF3F0F0);
  static const inversePrimary = Color(0xFFFFB693);

  // Gradient
  static const orangeGradient = LinearGradient(
    colors: [Color(0xFFFF7E36), Color(0xFFA04100)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  static const topGradient = LinearGradient(
    colors: [Color(0xFFFF7E36), Color(0xFFFCF9F8)],
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
  );

  // Shadows
  static List<BoxShadow> get softShadow => [
    BoxShadow(
      color: const Color(0xFFFF7E36).withValues(alpha: 0.08),
      blurRadius: 12,
      offset: const Offset(0, 4),
    ),
  ];
}
