// Two dimensioanl arrays and
// nested for loops
// Two dimensional array is an array where
// every element in the array is an array
#include <iostream>
using namespace std;

int main()
{
    int numberGrid[5][3] =
        {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9},
            {4, 5, 6},
            {7, 8, 12}
        };

        for(int i = 0; i < 5; i++)
        {
            for(int j =0; j < 3; j++)
            {
                cout << numberGrid[i][j] << " ";
            }
            cout << endl; 
        }

    return 0;
}
