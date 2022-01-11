#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    int index[8] = {1, 2, 3, 5, 12};
        index[5] = 80;
        index[6] = 300;
        index[7] = 111;
    for( int i = 0; i <= 7; i++)
    {
        cout << index[i] << endl;
    }
    cout << "..............." << endl;
    cout << pow(4, 2);
    return 0;
} 