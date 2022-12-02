package basics;

public class VariableTypes1 {
    static int m = 100;// static variable 

    static void method() {
        int num = 90; // local variable
        System.out.println("Please Print num: " + num);
    }

    public static void main(String[] args) {
        int data = 50; // instance variable
        System.out.println("Please print Data" + data);
        System.out.println(m);
        method();
    }
}
