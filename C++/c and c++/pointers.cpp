# include <iostream>

int main(){

int a = 10; 
int *p; // pointer
int q;

p = &a; // stores the memory address of variable "a"
q = a; // store s the value 10 assigned to variable "a"

std::cout << p << std::endl;
std::cout << q << std::endl;

    return 0;
}