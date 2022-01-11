
# include <iostream>
using namespace std;

int main()
{
    bool isMale = true;
    bool isFemale = false;
    bool isTall = true;

    if(isMale && isTall)
    {
      cout << "You are a Tall Male" << endl;
    }

    if(isFemale || isTall)
    {
        cout << "You are a Tall Female";
    }
    else
    {
        cout << " You are not a Tall Female";
    }


    return 0;
}