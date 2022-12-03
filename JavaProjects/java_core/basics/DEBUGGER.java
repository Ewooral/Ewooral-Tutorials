package basics;

public class DEBUGGER {
    public static void main(String[] args) {

        System.out.println(is123Array(new int[] { 1, 2, 3, 3, 2, 1 }));
        System.out.println(is123Array(new int[] { 0, 1, 2, 3, 1, 2, 3 }));
        System.out.println(is123Array(new int[] { 1, 2, 3, 3, 2, 1, 1, 2, 3 }));
        System.out.println(is123Array(new int[] { 1, 2, 3 }));
        System.out.println(is123Array(new int[] {}));
    }

    static int is123Array(int[] a) {
        // If the length of the array is 0 or not a multiple of 3, then
        // you know it isn't a solution.
        if (a.length == 0 || a.length % 3 != 0) {
            return 0;
        }

        for (int i = 0; i < a.length; i += 3) {
            if (a[i] != 1 || a[i + 1] != 2 || a[i + 2] != 3) {
                return 0;
            }
        }

        return 1;
    }

}

/*
 * 1 Write a function named hasNValues which takes an array and an integer n as
 * arguments. It returns true if all the elements of the array are one of n
 * different values.
 * 
 * If you are writing in Java or C#, the function signature is
 * int hasNValues(int[ ] a, int n)
 * 
 * If you are writing in C or C++, the function signature is
 * int hasNValues(int a[ ], int n, int len) where len is the length of a
 * 
 * Note that an array argument is passed by reference so that any change you
 * make to the array in your function will be visible when the function returns.
 * Therefore, you must not modify the array in your function! In other words,
 * your function should have no side effects.
 * 
 * Examples
 * if a is if n is return
 * {1, 2, 2, 1} 2 1 (because there are 2 different element values, 1 and 2)
 * {1, 1, 1, 8, 1, 1, 1, 3, 3} 3 1 (because there are 3 different element
 * values, 1, 3, 8)
 * {1, 2, 3, 4, 5, 6, 7, 8 ,9, 10} 10 1 (because there are 10 different element
 * values)
 * {1, 2, 2, 1} 3 0 (because there are 2 different element values, not 3 as
 * required)
 * {1, 1, 1, 8, 1, 1, 1, 3, 3} 2 0 (because there are 3 different element
 * values, not 2 as required)
 * {1, 2, 3, 4, 5, 6, 7, 8 ,9, 10} 20 0 (because there are 10 different element
 * values, not 20 as required)
 * 
 * Hint: There are many ways to solve this problem. One way is to allocate an
 * array of n integers and add each unique element found in the array parameter
 * to it. If you add n elements to the array, return 1, otherwise return 0.
 * 
 * 
 * 
 * ..........................ANSWER............................................
 * public class HasNValues {
 * public static void main(String[] args) {
 * int[] arrayOfNumbers3 = { 1, 2, 2, 1 };
 * int num3 = 2;
 * 
 * int[] arrayOfNumbers2 = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
 * int num2 = 10;
 * 
 * int[] arrayOfNumbers1 = { 1, 1, 1, 8, 1, 1, 1, 3, 3 };
 * int num1 = 2;
 * 
 * int[] arrayOfNumbers = { 1, 2, 2, 1 };
 * int num = 3;
 * 
 * System.out.println(hasNValues(arrayOfNumbers, num));
 * System.out.println(hasNValues(arrayOfNumbers1, num1));
 * System.out.println(hasNValues(arrayOfNumbers2, num2));
 * System.out.println(hasNValues(arrayOfNumbers3, num3));
 * }
 * 
 * static int hasNValues(int[] a, int n) {
 * int len = a.length;
 * int total = 0;
 * if (n > len) {
 * return 0;
 * }
 * for (int i = 0; i < len; i++) {
 * int j;
 * for (j = 0; j < i; j++) {
 * if (a[i] == a[j])
 * break;
 * }
 * if (i == j) {
 * total++;
 * 
 * }
 * }
 * return total == n ? 1 : 0;
 * }
 * 
 * }
 * 
 * 
 * 
 * 
 * 
 * 2 A 123 array is an array that contains multiple repetitions of the values 1,
 * 2, 3 in that order. For example {1, 2, 3, 1, 2, 3, 1, 2, 3} is a 123 array
 * but {1, 2, 3, 1, 2} is not. Write a function named is123Array which returns 1
 * if its array argument is a 123 array, otherwise it returns 0.
 * 
 * If you are programming in Java or C#, the function prototype is int
 * is123Array(int[ ] a)
 * 
 * If you are programing in C or C++, the function prototype is int
 * is123Array(int a[ ], int len) where len is the number of elements in a
 * 
 * More examples:
 * if a is return reason
 * {1, 2, 3, 3, 2, 1} 0 elements a[3], a[4], a[5] are not 1, 2, 3
 * {0, 1, 2, 3, 1, 2, 3} 0 elements a[0], a[1], a[2] are not 1, 2, 3
 * {1, 2, 3, 3, 2, 1, 1, 2, 3} 0 elements a[3], a[4], a[5] are not 1, 2, 3
 * {1, 2, 3} 1  
 * {} 0 must contain at least one 1, 2, 3 triad
 * 
 * 
 * .................................ANSWERS..................................
 * public class Is123Array {
 * public static void main(String[] args) {
 * 
 * System.out.println(is123Array(new int[] { 1, 2, 3, 3, 2, 1 }));
 * System.out.println(is123Array(new int[] { 0, 1, 2, 3, 1, 2, 3 }));
 * System.out.println(is123Array(new int[] { 1, 2, 3, 3, 2, 1, 1, 2, 3 }));
 * System.out.println(is123Array(new int[] { 1, 2, 3 }));
 * System.out.println(is123Array(new int[] {}));
 * }
 * 
 * static int is123Array(int[] a) {
 * if (a.length == 0 || a.length % 3 != 0) {
 * return 0;
 * }
 * 
 * for (int i = 0; i < a.length; i += 3) {
 * if (a[i] != 1 || a[i + 1] != 2 || a[i + 2] != 3) {
 * return 0;
 * }
 * }
 * 
 * return 1;
 * }
 * 
 * }
 * 
 * 
 * 
 * 
 * 
 *  
 * 
 * 3. An onion array is an array that satisfies the following condition for all
 * values of j and k:
 * if j>=0 and k>=0 and j+k+1=length of array and j!=k then a[j]+a[k] <= 10
 * 
 * Write a function named isOnionArray that returns 1 if its array argument is
 * an onion array and returns 0 if it is not.
 * 
 * Your solution must not use a nested loop (i.e., a loop executed from inside
 * another loop). Furthermore, once you determine that the array is not an onion
 * array your function must return 0; no wasted loops cycles please!
 * 
 * If you are programming in Java or C#, the function signature is
 * int isOnionArray(int[ ] a)
 * 
 * If you are programming in C or C++, the function signature is
 * int isOnionArray(int a[ ], int len) where len is the number of elements in
 * the array a.
 * 
 * 
 * 
 * 
 * .............................ANSWERS................................
 * 
 * 
 * public class OnionArray {
 * public static void main(String[] args) {
 * 
 * System.out.println(isOnionArray(new int[] { 1, 2, 19, 4, 5 }));
 * System.out.println(isOnionArray(new int[] { 1, 2, 3, 4, 15 }));
 * System.out.println(isOnionArray(new int[] { 1, 3, 9, 8 }));
 * System.out.println(isOnionArray(new int[] { 2 }));
 * System.out.println(isOnionArray(new int[] {}));
 * System.out.println(isOnionArray(new int[] { -2, 5, 0, 5, 12 }));
 * }
 * 
 * static int isOnionArray(int[] a) {
 * int j = 0;
 * int k = 0;
 * int finalSol = 0;
 * int midIdx = 0;
 * int OddorEven = a.length % 2;
 * 
 * if (OddorEven == 0) {
 * midIdx = a.length / 2 - 1;
 * } else {
 * midIdx = a.length / 2;
 * }
 * 
 * if (a.length < 2)
 * return 1;
 * 
 * for (int i = 0; i <= midIdx; i++) {
 * j = i;
 * k = a.length - i - 1;
 * 
 * if (j >= 0 && k >= 0 && j + k + 1 == a.length && j != k) {
 * if (a[j] + a[k] <= 10) {
 * finalSol = 1;
 * } else
 * return 0;
 * }
 * }
 * return finalSol;
 * }
 * 
 * }
 * 
 * 
 */