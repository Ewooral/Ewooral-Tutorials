#include <iostream>
// using namespace std;

int sumOfArray(int arr[], int n)
{
    int sum = 0;
    for (int i = 0; i < n; i++)
        sum += arr[i];
    return sum;
}
int main(){
    int Jesus;
    std::cout << Jesus << std::endl;
    int arr[] = {12, 3, 4, 15};
    int n = sizeof(arr) / sizeof(arr[0]);
    std::cout << "Sum of given array is " << sumOfArray(arr, n);
    return 0;
}
