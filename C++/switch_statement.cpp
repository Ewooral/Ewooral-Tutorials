#include <iostream>
using namespace std;

// FUNCTION DECLARATION
string getDayOfWeek(int dayNumber);

// MAIN FUNCTION
int main()
{
    cout << getDayOfWeek(5);
    return 0;
}

string getDayOfWeek(int dayNumber)
{
    string dayName;
    switch(dayNumber)
    {
        case 0: 
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid Day of the Week";
            break;
            
    }

    return dayName;
}