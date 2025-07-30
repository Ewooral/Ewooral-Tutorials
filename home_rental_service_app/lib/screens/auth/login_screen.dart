import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:provider/provider.dart';
import 'package:home_rental_service_app/providers/auth_provider.dart';
import 'package:home_rental_service_app/providers/theme_provider.dart';
import '../../widgets/custom_app_bar.dart'; 

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _formKey = GlobalKey<FormState>();
  String _email = '';
  String _password = '';
  bool _isLoading = false;
  String? _error;
  bool _rememberMe = false; 

  void _submit() async {
    if (!_formKey.currentState!.validate()) return;
    _formKey.currentState!.save();

    setState(() {
      _isLoading = true;
      _error = null;
    });

    try {
      await Provider.of<AuthProvider>(context, listen: false)
          .login(_email, _password);
      // Navigate to home screen or dashboard
    } catch (e) {
      setState(() => _error = e.toString());
    } finally {
      setState(() => _isLoading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
     final themeProvider = Provider.of<ThemeProvider>(context); // Access ThemeProvider

    return Scaffold(
      appBar: CustomAppBar(
        title: 'Login', // Set the title for the AppBar
        actions: [ // Add actions for the AppBar
           IconButton(
            icon: Icon( // Use the correct icon for theme switching
              themeProvider.themeMode == ThemeMode.dark ? Icons.wb_sunny : Icons.nightlight_round,
            ),
            onPressed: () {
              themeProvider.toggleTheme(); // Call the toggle theme method
            },
          ),
        ],
      ), // Add the custom AppBar back
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(24.0), // Increased padding
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start, // Align content to the start
            children: [
              // SVG Image
              Center(
                child: SvgPicture.asset(
                  'assets/vectors/Sign-in.svg', // Path to your SVG file
                  height: 200, // Adjust height as needed
                ),
              ),
              const SizedBox(height: 40), // Space after image

              // Title
              Text(
                'Login',
                style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 8), // Space after title

              // Subtitle
              Text(
                'Please Sign in to continue.',
                style: Theme.of(context).textTheme.titleMedium?.copyWith(
                  color: Colors.grey[600],
                ),
              ),
              const SizedBox(height: 40), // Space after subtitle

              Form(
                key: _formKey,
                child: Column(
                  children: [
                    if (_error != null)
                      Text(
                        _error!,
                        style: TextStyle(color: Theme.of(context).colorScheme.error),
                      ),
                    // Email Field
                    TextFormField(
                      decoration: InputDecoration(
                        labelText: 'email', // Changed label to Username per image
                        prefixIcon: Icon(Icons.person_outline), // Added icon per image
                        border: OutlineInputBorder( // Added border for consistent look
                          borderRadius: BorderRadius.circular(30.0),
                          borderSide: BorderSide.none,
                        ),
                        filled: true,
                        fillColor: Colors.grey[200],
                      ),
                      onSaved: (val) => _email = val!,
                      validator: (val) =>
                          val == null || !val.contains('@') ? 'Invalid email' : null,
                    ),
                    const SizedBox(height: 20), // Space between fields

                    // Password Field
                    TextFormField(
                      decoration: InputDecoration(
                        labelText: 'Password',
                        prefixIcon: Icon(Icons.lock_outline), // Added icon per image
                         suffixIcon: Icon(Icons.visibility_off_outlined), // Added icon per image
                        border: OutlineInputBorder( // Added border for consistent look
                          borderRadius: BorderRadius.circular(30.0),
                          borderSide: BorderSide.none,
                        ),
                         filled: true,
                        fillColor: Colors.grey[200],
                      ),
                      obscureText: true,
                      onSaved: (val) => _password = val!,
                      validator: (val) =>
                          val == null || val.length < 6 ? 'Min 6 chars' : null,
                    ),

                    const SizedBox(height: 20), // Space after password field

                    // Remember me and Forgot Password (Placeholder for now)
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          children: [
                             Switch( // Changed to Switch per image
                              value: _rememberMe,
                              onChanged: (bool value) {
                                setState(() {
                                  _rememberMe = value;
                                });
                              },
                            ),
                             Text('Remember me next time'),
                          ],
                        ),
                       // Placeholder for Forgot Password if needed later
                      ],
                    ),

                    const SizedBox(height: 30), // Space before button

                    // Login Button
                    _isLoading
                        ? const CircularProgressIndicator()
                        : ElevatedButton(
                            onPressed: _submit,
                             style: ElevatedButton.styleFrom(
                              padding: const EdgeInsets.symmetric(vertical: 15.0), // Adjust padding
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(30.0), // Rounded corners
                              ),
                               minimumSize: Size(double.infinity, 50), // Make button full width
                            ),
                            child: const Text('Sign In'), // Changed text to Sign In per image
                          ),

                    const SizedBox(height: 20), // Space after button

                    // Don't have an account? Sign Up
                    TextButton(
                      onPressed: () {
                        Navigator.pushNamed(context, '/register');
                      },
                      child: RichText(
                        text: TextSpan(
                          text: "Don't have an account? ",
                          style: const TextStyle(color: Colors.black54, fontSize: 16), // Adjust style
                          children: <TextSpan>[
                            TextSpan(
                              text: 'Sign Up',
                              style: TextStyle(color: Theme.of(context).primaryColor, fontWeight: FontWeight.bold,  fontSize: 16), // Adjust style
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
