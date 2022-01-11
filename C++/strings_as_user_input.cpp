#include <iostream>
using namespace std;
int main()
{
    // int age;
    string name;
    
    // cout << "Enter your age: ";
    cout << "Enter your name: ";

    // cin >> age;
    getline(cin, name); // getline(variable, max length of the string))

    // if we want to enter a string as an input then we use
    //  getline(cin, name)
    // cout << "You are " << age << " years old. " ;

    cout << "Hello " << name << "." << endl; 
    return 0;
}