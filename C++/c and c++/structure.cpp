# include <iostream>
/*
 STRUCTURE

 A collection of related data members of similar and
 disimilar types, under one name

 It is used for defining user defined data types

 The size of a structure is the total amount of memory consumed by all its members


*/
struct Rectangle    // definition
{
    int length;
    int breadth;
};

struct Student 
{
    int roll;
    char name[25];
    char department[25];
    char address[50];

}; 
 
int main()  
{
    struct Rectangle k; // declaration
    struct Rectangle r{10, 2};  // declaration and initialization

    r.length = 15;
    r.breadth = 3;


    struct Student S; // declaration
    S.roll = 10;  // initialization
    S.name = "Elijah Owusu";
    S.department = "Computer Science";
    S.address = "Ashaiman COP";

   
   
    std::cout << r.length  << S.name << std::endl;
    std::cout << r.breadth << std::endl;
    std::cout << "The area of a rectangle is " 
              << r.length * r.breadth << std::endl;
}

  