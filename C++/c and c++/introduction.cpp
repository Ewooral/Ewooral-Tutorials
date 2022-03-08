#include <iostream>

// DECLARATIONS
long addNumber(long first, long second); 

// MAIN FUNCTION 
int main()
{
    std:: cout << "Hello, world" << std:: endl;
    std::cout << addNumber(3 ^ 3, 10 ^ 4) << std::endl;
    
   

    return 0;
}

/*This is how to write c++ comments*/
// Another way of writing a one line comment.

// ERRORS AND WARNINGS IN C++

/*There are three types of warnings
1. Compile Time Errors
2. Runtime Errors
3. Warnings

*/

// runtime error
// 7/0;
 

// FUNCTION 
long addNumber(long first, long second){
 long sum = first + second; 
 return sum;
}

