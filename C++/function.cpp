#include <iostream>
using namespace std;

void sayHi( string name)
{
  cout << "Hello, " << name << "!" << endl;
}

void greetEveryone() 
{
  string name;
  cout << " who do you wanna greet? ";
  getline(cin, name);
  cout << "Hello, Good Morning " << name << "!" << endl;


}



int main()
{
 sayHi("Elijah Owusu Ewooral Boahen");
 greetEveryone();
 return 0;
}