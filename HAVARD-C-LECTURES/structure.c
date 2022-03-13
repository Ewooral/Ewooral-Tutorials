# include <stdio.h>
# include <stdlib.h>
# include <string.h>

struct Rectangle // definition
{
    int length;
    int breadth;
    char name[256];
};

int add(int a, int b);

int main(){
    struct Rectangle r; // declaration
    // struct Rectangle r{10, 2}; // declaration and initialization

    r.length = 15;
    r.breadth = 3;
    printf("%d", add(3, 4));
    printf("\n");
    printf("%d", r.length );
} 

int add(int a, int b){
    int c;
    c = a + b;
    return c; 
}

