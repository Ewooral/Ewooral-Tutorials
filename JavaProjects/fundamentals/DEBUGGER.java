/*  
An array with an odd number of elements is said to be centered if 
all elements (except the middle one) are strictly greater than the value
of the middle element. Note that only arrays with an odd number of elements
have a middle element. 

Write a function that accepts an integer array and
returns 1 if it is a centered array, otherwise it returns 0.

Examples:
if the input array is	return
{1, 2, 3, 4, 5}	0 (the middle element 3 is not strictly less than all other elements)
{3, 2, 1, 4, 5}	1 (the middle element 1 is strictly less than all other elements)
{3, 2, 1, 4, 1}	0 (the middle element 1 is not strictly less than all other elements)
{1, 2, 3, 4}	0 (no middle element)
{}	0 (no middle element)
{10}	1 (the middle element 10 is strictly less than all other elements)

*/

public class DEBUGGER {
    public static void main(String[] args) {
        System.out.println("..........................");
        System.out.println("This is a debugger!!");
        int numbers[] = { 1, 2, 3, 4 };
        String animals[] = { "sheep", "goat", "meat" };
        System.out.println(middleElemen(numbers, animals));
    }

    private static int middleElemen(int[] arr, String[] anim) {
        System.out.println(arr.getClass().getSimpleName());
        System.out.println(anim.getClass().getSimpleName());
        System.out.println(arr.length);

        return 2;
    }
}
