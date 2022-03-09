#include <iostream>

// DECLARATIONAL FUNCTIONS
long addNumber(long first, long second); 
int multiply(int huge, int small);
int GetData();

    // MAIN FUNCTION
    int main()
{

    int firstNum{100};
    int secondNum{39};
    

    int sum = firstNum + secondNum;

    std::cout << "sum: " << sum << std::endl;

    GetData();

    std:: cout << "Hello, world" << std:: endl;
    std::cout << addNumber(3 ^ 3, 10 ^ 4) << std::endl;
    std:: cout << "The Product of two numbers is: "<< multiply(40, 20) << std::endl;

   


    std:: cerr << "Something happened! " << std::endl;
    std:: clog << "Log message: Please try again. " << std::endl;



    return 0; 
}

/*This is how to write c++ comments */
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

int multiply(int huge, int small){
    int product = huge * small;

    return product;
}

// GETTING DATA INPUT FROM A USER 
int GetData(){

    // GRABBING DATA WITH NO SPACES
    // int age;
    // std:: string name;
    // std::cout << "Please type your name: " << std:: endl;
    // std::cin >> name;
    // std::cout<<"Please type your age: " << std::endl;
    // std::cin >> age;
    // std::cout << "Your name is: " << name <<" and you are "<< age <<" years old!" << std::endl;

    // GRABBING DATA WITH SPACES                             
    std:: string vehicleData;
    int numberplate;
    std::cout << "Please type your vehicle information: " << std::endl;
    std::getline(std::cin, vehicleData);


    std::cout << "Please type your number-plate: " << std::endl;
    std::cin >> numberplate;

    std::cout << "Your vehicle's data are: " << vehicleData << 
    " and your vehicle's number plate is: " << numberplate << std::endl;

    return 0;

}
