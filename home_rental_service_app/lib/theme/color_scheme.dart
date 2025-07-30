import 'package:flutter/material.dart';
import 'app_theme.dart';

// Define custom color schemes based on AppColors

final ColorScheme lightColorScheme = ColorScheme.fromSeed(
  seedColor: AppColors.emeraldGreen,
  brightness: Brightness.light,
  primary: AppColors.emeraldGreen,
  onPrimary: AppColors.lightBackground, // White text on emerald green
  secondary: AppColors.teal,
  onSecondary: AppColors.lightBackground, // White text on teal
  error: AppColors.orange,
  onError: AppColors.lightBackground, // White text on orange
  background: AppColors.lightBackground,
  onBackground: AppColors.lightText, // Navy text on white background
  surface: AppColors.lightBackground,
  onSurface: AppColors.lightText, // Navy text on white surface
);

final ColorScheme darkColorScheme = ColorScheme.fromSeed(
  seedColor: AppColors.emeraldGreen,
  brightness: Brightness.dark,
  primary: AppColors.emeraldGreen,
  onPrimary: AppColors.darkText, // Off-white text on emerald green
  secondary: AppColors.teal,
  onSecondary: AppColors.darkText, // Off-white text on teal
  error: AppColors.orange,
  onError: AppColors.darkText, // Off-white text on orange
  background: AppColors.darkBackground,
  onBackground: AppColors.darkText, // Off-white text on navy background
  surface: AppColors.darkBackground,
  onSurface: AppColors.darkText, // Off-white text on navy surface
);
