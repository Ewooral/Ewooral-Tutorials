import 'package:dio/dio.dart';
import 'package:dio_logging_interceptor/dio_logging_interceptor.dart';
import 'package:flutter/foundation.dart'; // Import this for kDebugMode

class AuthService {
  final Dio _dio = Dio(BaseOptions(baseUrl: 'https://bfam-backend-api.ewooral.com/api'));

  AuthService() {
    // Add the interceptor only in debug mode
    if (kDebugMode) {
      _dio.interceptors.add(
        DioLoggingInterceptor(
          level: Level.body, // Set logging level to body
          // compact: false,
        ),
      );
    }
  }

  Future<Map<String, dynamic>> login(String email, String password) async {
    try {
      final response = await _dio.post('/auth/login', data: {
        'email': email,
        'password': password,
      });

      return response.data;
    } on DioError catch (e) { // Corrected to DioError
      throw Exception(e.response?.data['detail'] ?? 'Login failed');
    }
  }

  Future<Map<String, dynamic>> register(String email, String password) async {
    try {
      final response = await _dio.post('/auth/register', data: {
        'email': email,
        'password': password,
      });

      return response.data;
    } on DioError catch (e) { // Corrected to DioError
      throw Exception(e.response?.data['detail'] ?? 'Registration failed');
    }
  }
}
