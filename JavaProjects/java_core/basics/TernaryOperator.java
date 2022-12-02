package basics;

public class TernaryOperator {
    public static void main(String[] args) {
        System.out.println(sayHello("CM"));
    }

    static String sayHello(String args) {
        String greet = args == "AM" ? "Good Morning"
                : args == "PM" ? "Good Evening"
                        : "Good Night";
        return greet;
    }
}
