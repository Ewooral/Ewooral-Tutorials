#include <iostream>
using namespace std;



// You can declare a function at the top of the main() function
// and tell it what to do at anywhere in the program.

void greetEveryone();
void sayHi(string name, int age);
double cube(double x);



int main()
{
 sayHi("Elijah Owusu Ewooral Boahen", 29);
 sayHi("Docker!", 30);
 greetEveryone();
 double Answer = cube(2.0);
 cout << Answer << endl;
 return 0;
}

void greetEveryone()
{
    string name;
    cout << "Who do you wanna greet? ";
    getline(cin, name);
    cout << "Hello, Good Morning " << name << "!" << endl;
}

void sayHi(string name, int age)
{
    cout << "Hello, " << name << "!"
         << " You are " << age << " years old." << endl;
}

// RETURNING VALUES OR INFORMATION FROM FUNCTIONS USING THE RETURN KEYWORDS

double cube(double x)
{
 double result = x * x * x;
  return result;   // the return function exits function execution. Anything after return won't execute.
}