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
    cout << ptrNumber << endl;
    cout << ptrGpa << endl;
    cout << ptrName << endl;

    // dereferencing a pointer is going to the memory address of 
    //the variable and using the value stored there
    // Eg. *ptrNumber; // 19
    // You can also dereference a pointer Eg. *&ptrGpa; // 3.5
    cout << *&*ptrNumber << endl;

    cout << &number << endl; // 0xb4b61ff788
    // prints the memory address of number
    // & is the address operator
    cout << &gpa << endl; // 0xb4b61ff780

    return 0;
}
