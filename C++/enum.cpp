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
    blue,
    yellow,
    black,
    white, 
    orange
};

enum superCars {
    Ferrari = 450,
    Lamborghini = 500,
    Porsche = 600,
    Audi = 700,
    BMW = 800,
    Mercedes = 900,
    Tesla = 1000
};

int main()
{

    color ewoo = green;
    if (ewoo == green)
    {
        cout << "ewoo is green "<<"and its value is "<<ewoo << endl;
       
        int bitwiseValue = yellow | orange;
        cout << bitwiseValue << endl;
    }
    else
    {
        cout << "ewoo is not green" << endl;
    }

    superCars speed1 = Lamborghini;
    superCars speed2 = Ferrari;

    switch()
    {
        case speed1 == speed2:
            cout << "speed1 is equal to speed2" << endl;
            break;
        case speed1 > speed2:
            cout << "speed1 is greater than speed2" << endl;
            break;
        case speed1 < speed2:
            cout << "speed1 is less than speed2" << endl;
            break;
        default:
            cout << "speed1 is not equal to speed2" << endl;
            break;
    }


    return 0;
}