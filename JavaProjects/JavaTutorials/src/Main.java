package JavaTutorials.src;

public class Main {
    public static void main(String[] args) {
        final int nums = 400; // this variable cannot be changed

        // Prefix and Postfix operators
        int someValue = 10;
        System.out.println(someValue++);
        System.out.println(someValue);

        System.out.println();
        int anotherValue = 10;
        System.out.println(++anotherValue);
        System.out.println(anotherValue);

        // compound assignment
        System.out.println();
        int myValue = 50;
        myValue -= 5;
        System.out.println(myValue);

        // operator precedence
        /*
        * postfix (x++, x--), prefix (++x, --x), multiplicative ( *, /, %), additive ( +,- )
        * */

        // Type Conversion
        //implicit conversion
        int intValue = 50;
        long longValue = intValue;
        System.out.println(longValue);

        System.out.println();
        // Explicit conversion using cast operator, ()
        long longValueTwo = 30;
        int intValueTwo = (int) longValueTwo;
        System.out.println(intValueTwo);




        System.out.println("Hello world!" + nums);

    }
}