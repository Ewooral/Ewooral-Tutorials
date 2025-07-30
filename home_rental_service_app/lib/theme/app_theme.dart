import 'package:flutter/material.dart';
import 'color_scheme.dart';

class AppColors {
  static const Color emeraldGreen = Color(0xFF10B981); // Primary
  static const Color teal = Color(0xFF14B8A6);         // Secondary / Features
  static const Color orange = Color(0xFFF97316);       // Accent / Warnings
  static const Color navy = Color(0xFF1E293B);         // Dark Base

  static const Color lightBackground = Colors.white;
  static const Color darkBackground = navy;

  static const Color lightText = navy;
  static const Color darkText = Color(0xFFF8FAFC);     // Off-white
}

ThemeData lightTheme = ThemeData(
  colorScheme: lightColorScheme,
  useMaterial3: true,
  scaffoldBackgroundColor: lightColorScheme.surface,
  appBarTheme: AppBarTheme(
    backgroundColor: lightColorScheme.surface,
    foregroundColor: lightColorScheme.onSurface,
    elevation: 0,
  ),
  textTheme: TextTheme(
    bodyLarge: TextStyle(color: lightColorScheme.onSurface),
    bodyMedium: TextStyle(color: lightColorScheme.onSurface),
  ),
);

ThemeData darkTheme = ThemeData(
  colorScheme: darkColorScheme,
  useMaterial3: true,
  scaffoldBackgroundColor: darkColorScheme.surface,
  appBarTheme: AppBarTheme(
    backgroundColor: darkColorScheme.surface,
    foregroundColor: darkColorScheme.onSurface,
    elevation: 0,
  ),
  textTheme: TextTheme(
    bodyLarge: TextStyle(color: darkColorScheme.onSurface),
    bodyMedium: TextStyle(color: darkColorScheme.onSurface),
  ),
);
