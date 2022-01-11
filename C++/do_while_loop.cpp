#include <iostream>
using namespace std;

int main()
{
    // The do while loop executes the code before
    // the condition is checked.
    int index = 6;
    do
    {
        cout << index << endl;
        index++;
    }
    while (index <= 5);
   
    return 0;
}