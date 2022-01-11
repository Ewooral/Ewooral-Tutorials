#include <iostream>
using namespace std;

// Initialize the Guess Game function.
int guessAValue();

int main()
{
    cout << guessAValue();
    return 0;
}

// This is the Guess Game function
int guessAValue()
{
    int secretNum = 7;
    int guess;
    int guessCount = 0;
    int guessLimit = 3;
    bool outOfGuesses = false;

    while (secretNum != guess && !outOfGuesses)
    {
        if (guessCount < guessLimit)
        {
            cout << "Guess a Number: ";
            cin >> guess;
            guessCount++;
        }
        else
        {
            outOfGuesses = true;
        }
    }
    if (outOfGuesses)
    {
        cout << "You are out of Guesses.";
    }
    else
    {
        cout << "You guessed right!\n"
             << "Your guess is " <<endl;
    }

    return guess;
}