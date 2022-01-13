// Pointers in c++ are memory addresses.
#include <iostream>
using namespace std;


int main()
{
    int figure = 2;
    int anotherFigure = 4;
    string letter = " ABCDEFGHIJKLMNOPQRSTUVWXYZabc";

    // creating a pointer variable
    int *pointerFigure = &figure;
    int *pointerAnotherFigure = &anotherFigure;
    string *pointerLetter = &letter;

    cout << "............Pointers............" << endl;
    // printing the value of the pointer
    cout << "The value of the pointer is: " << pointerFigure << endl;
    cout << "The value of the pointer is: " << pointerAnotherFigure << endl;
    cout << "The value of the pointer is: " << pointerLetter << "\n"
         << endl;

    cout << "............The values of a dereferenced pointer............" << endl;
    // dereferencing the pointer
    cout << "The value of the pointer is: " << *pointerFigure << endl;
    cout << "The value of the pointer is: " << *pointerAnotherFigure << endl;
    cout << "The value of the pointer is: " << *pointerLetter << endl;


    return 0;
}



/*
............Pointers............
The value of the pointer is: 0x46dcdffc00
The value of the pointer is: 0x46dcdffbfc
The value of the pointer is: 0x46dcdffbd0

............The values of a dereferenced pointer............
The value of the pointer is: 2
The value of the pointer is: 4
The value of the pointer is:  ABCDEFGHIJKLMNOPQRSTUVWXYZabc
*/

/*
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

*/
