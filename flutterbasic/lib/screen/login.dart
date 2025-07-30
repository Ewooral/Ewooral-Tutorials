import 'package:flutter/material.dart';

void onPressed() {}


class Login extends StatelessWidget {
  const Login({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(0),
          child: Column(
            children: [
              SizedBox(
                height: 100,
              ),
              SizedBox(
                width: MediaQuery.sizeOf(context).width,
                child: Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: Colors.blue[100],
                  ),
                  child: Column(
                    children: [
                      Text(
                        "Login",
                        style: TextStyle(
                            fontSize: 32, fontWeight: FontWeight.bold),
                      ),
                      Text("You must login into your\naccount to continue",
                          textAlign: TextAlign.center),
                    ],
                  ),
                ),
              ),

              SizedBox(
                height: 100,
              ),
              Row(
                children: [
                  Text(
                    "Email: ",
                    textAlign: TextAlign.end,
                  ),
                ],
              ),
              // Padding(
              //   padding: const EdgeInsets.all(1),
              //   child: Text("Email", textAlign: TextAlign.left),
              // ),
              TextField(
                decoration: InputDecoration(
                    labelText: "Kindly enter your email",
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8))),
              ),
              SizedBox(
                height: 32,
              ),
              Row(
                children: [
                  Text("Password: "),
                ],
              ),
              TextField(
                decoration: InputDecoration(
                    labelText: "Kindly enter your password",
                    border: OutlineInputBorder()),
              ),
              SizedBox(
                height: 9,
              ),
              // IconButton(onPressed: onPressed, icon: Icon(Icons.login),)
              SizedBox(
                width: MediaQuery.sizeOf(context).width,
                child: ElevatedButton(
                  onPressed: onPressed,
                  child: Text("login"),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
