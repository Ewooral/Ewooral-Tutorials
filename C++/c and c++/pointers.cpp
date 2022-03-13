# include <iostream>

int main(){

int a = 10; 
int *p; // pointer
int q;

int s = new int[12]; 

p = &a; // stores the memory address of variable "a"

std::cout <<"Memeory address of variable 'a' is: " << p << std::endl;
std::cout <<"Variable value: " << *p << std::endl;  // dereferencing
std::cout <<"Variable 's' value: " << s << std::endl;  

    return 0;
}  