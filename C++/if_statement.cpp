
# include <iostream>
using namespace std;

int main()
{
    bool isMale = false;
    bool isFemale = false;
    bool isTall = false;

    if(isMale && isTall)
    {
      cout << "You are a Tall Male" << endl;
    }

    if(isFemale && isTall)
    {
        cout << "You are a Tall Female";
    }
    else if(isMale && !isTall)
    {
         cout << " You are a Male but Short";
    }
    else if (isFemale && !isTall)
    {
        cout << " You are a Female but Short";
    }
    else
    {
        cout << " You are not a Female or a Male and you are short";
    }


    return 0;
}