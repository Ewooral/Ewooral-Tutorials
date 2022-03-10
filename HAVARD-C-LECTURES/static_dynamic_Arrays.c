# include <stdio.h>
# include <stdlib.h>

int main(){

printf("static and dynamic arrays \n");
// stored in the stack section of the memory
int A[5]; 
// stored in the stack section of the memory
int *P;
// stored at the heap section
 P = (int *)malloc(5 * sizeof(int));

printf("%d \n", P);

// delete an element in the heap section of the memory
free(P);
printf("%d", P);
}