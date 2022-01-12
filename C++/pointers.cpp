// Pointers in c++ are memory addresses.
#include <iostream>
using namespace std;

int main()
{
    int number = 5;
    double gpa = 3.5;
    string name = "Elijah";

    // creating a pointer variable and storing a pointer to the address of the variable
    int *ptrNumber = &number;
    double *ptrGpa = &gpa;
    string *ptrName = &name;
    cout << ptrNumber << ptrGpa << ptrName << endl;

    cout << &number << endl; // 0xb4b61ff788
    // prints the memory address of number
    // & is the address operator
    cout << &gpa << endl; // 0xb4b61ff780

    return 0;
}
