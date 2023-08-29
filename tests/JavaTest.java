public class JavaTest {
    public static void main(String[] args) {
        System.out.println("Hello");
        int[] arr = { 2, 1, 4, 5, 2, 2, 4 };
        int[] arr1 = { 4, 1, 2, 2, 2, 3, 2, 2 };
        int[] arr2 = { 4, 1, 2, 2, 2, 3, 2, 2 };
        moveToEnd(arr, 2);
        System.out.println("...........");
        moveToEnd(arr1, 2);
        System.out.println("............");
        System.out.println(LinearSearch(arr2, 3));
    }

    public JavaTest(String a, int b) {

    }

    static void moveToEnd(int[] arr, int target) {
        // [2, 1, 4, 5, 2, 2, 4]
        int i = 0;
        int j = arr.length - 1;
        while (i < j) {
            while (i < j && arr[j] == target) {
                j -= 1;
            }
            if (arr[i] == target) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            i += 1;
        }
    }

    static int LinearSearch(int[] ar, int value) {
        for (int i = 0; i < ar.length; i++) {
            if (ar[i] == value) {
                return i;
            }
        }
        return -1;
    }

}
