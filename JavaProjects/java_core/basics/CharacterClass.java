
public class CharacterClass {
    public static void main(String[] args) {
        char c1 = '1';
        char c2 = '2';
        char c3 = '3';

        char dollarSign = '\u0024';

        char a1 = 'a';
        char a2 = 'b';
        char a3 = 'c';

        System.out.println("Char 1: " + c1);
        System.out.println("Char 2: " + c2);
        System.out.println("Char 3: " + c3);

        // $
        System.out.println("Currency: " + dollarSign);

        /**
         * A
         * B
         * C
         * 
         */
        System.out.println(Character.toUpperCase(a1));
        System.out.println(Character.toUpperCase(a2));
        System.out.println(Character.toUpperCase(a3));
        System.out.println(".................");

        // ABC
        System.out.print(Character.toUpperCase(a1));
        System.out.print(Character.toUpperCase(a2));
        System.out.println(Character.toUpperCase(a3));

    }

}
