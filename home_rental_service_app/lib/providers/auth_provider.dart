import 'package:flutter/material.dart';
import 'package:home_rental_service_app/services/auth_service.dart';

class AuthProvider with ChangeNotifier {
  final AuthService _authService = AuthService();

  String? _token;
  String? get token => _token;

  bool get isAuthenticated => _token != null;

  Future<void> login(String email, String password) async {
    final data = await _authService.login(email, password);
    _token = data['access_token'];
    notifyListeners();
  }

  Future<void> register(String email, String password) async {
    final data = await _authService.register(email, password);
    _token = data['access_token'];
    notifyListeners();
  }

  void logout() {
    _token = null;
    notifyListeners();
  }
}
