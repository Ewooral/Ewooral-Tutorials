package Problem_Solving;

import java.util.Arrays;
import java.util.List;

public class SumOfEvenAndOdd {
    /*
     * Write a function that takes an array of integers as an argument and returns a
     * value based on the sums of the even and odd numbers in the array. Let X = the
     * sum of the odd numbers in the array and let Y = the sum of the even numbers.
     * The function should return X – Y
     * 
     * The signature of the function is:
     * int f(int[ ] a)
     * 
     * Examples
     * if input array is return
     * {1} 1
     * {1, 2} -1
     * {1, 2, 3} 2
     * {1, 2, 3, 4} -2
     * {3, 3, 4, 4} -2
     * {3, 2, 3, 4} 0
     * {4, 1, 2, 3} -2
     * {1, 1} 2
     * {} 0
     * 
     * x = sum of odd
     * y = sum of even
     * return x - y
     * 
     */
    public static void main(String[] args) {
        List<Integer> ints = Arrays.asList(4, 1, 2, 3);

        System.out.println(sumOfEvenAndOdd(ints));
    }

    public static int y = 0;
    public static int x = 0;

    static int sumOfEvenAndOdd(List<Integer> nums) {

        for (int num : nums) {
            if (num % 2 != 0) {
                x += num;
            } else {
                y += num;
            }

        }
        return x - y;
    }
}
