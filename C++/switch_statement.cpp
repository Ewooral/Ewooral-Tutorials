#include <iostream>
using namespace std;

// FUNCTION DECLARATION
string getDayOfWeek(int dayNumber);

// MAIN FUNCTION
int main()
{
    string dayOfTheWeek;
    dayOfTheWeek = getDayOfWeek(5);
    cout << dayOfTheWeek << endl;
    return 0;
}

string getDayOfWeek(int dayNumber)
{
    string dayName;
    switch(dayNumber)
    {
        case 0: 
            dayName = "It is Sunday";
            break;
        case 1:
            dayName = "It is Monday";
            break;
        case 2:
            dayName = "It is Tuesday";
            break;
        case 3:
            dayName = "It is Wednesday";
            break;
        case 4:
            dayName = "It is Thursday";
            break;
        case 5:
            dayName = "It is Friday";
            break;
        case 6:
            dayName = "It is Saturday";
            break;
        default:
            dayName = "Invalid Day of the Week";
            break;
            
    }

    return dayName;
}