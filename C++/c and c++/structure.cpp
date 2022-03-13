# include <iostream>
# include <cstring>
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
    char name[15];
    char department[25];
    char address[25];

}; 
   
int main()  
{
    struct Rectangle k; // declaration
    struct Rectangle r{10, 2};  // declaration and initialization

    r.length = 15;
    r.breadth = 3;

    std::cout << r.length << std::endl;
    std::cout << r.breadth << std::endl;
    std::cout << "The area of a rectangle is " 
              << r.length * r.breadth << std::endl;

    char string[15] =  'Elijah Owusu';
    Student s;
    strcpy(s.name, string);
    std:: cout << s.name << std::endl;
    

    return 0;
}

  