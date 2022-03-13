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
    std:: breadth;
};
 
int main()
{
    struct Rectangle k; // declaration
    struct Rectangle r{10, 5};  // declaration and initialization

    r.length = 15;
    r.breadth = "Hey"

    std::cout << r.length << std::endl;
    std::cout << r.breadth << std::endl;
    std::cout << "The area of a rectangle is " << r.area * r.width << std::endl;
}