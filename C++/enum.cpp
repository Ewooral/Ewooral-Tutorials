#include <iostream>
using namespace std;
/*In C++ programming, enum or enumeration is a data type 
consisting of named values like elements, members, etc., 
that represent integral constants. It provides a way to 
define and group integral constants. It also makes the code
 easy to maintain and less complex. In this tutorial, you will
learn about C++ enum in detail.*/
enum color
{
    red,
    green,
    blue
};

int main()
{

    color ewoo = red;
    if (ewoo == green)
    {
        cout << "ewoo is green "<<"and its value is "<<ewoo << endl;
    }
    else
    {
        cout << "ewoo is not green" << endl;
    }


    return 0;
}