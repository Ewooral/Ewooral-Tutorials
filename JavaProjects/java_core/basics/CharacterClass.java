
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
        testCode();

    }

    public static void digitTest(String test) {
        for (int k = 0; k < test.length(); k++) {
            char ch = test.charAt(k);
            if (Character.isDigit(ch)) {
                System.out.println(ch + " is a digit");
            }
            if (Character.isAlphabetic(ch)) {
                System.out.println(ch + " is an Alphabet!");
            }

        }
    }

    public static String encryptStr(String message, int key) {
        StringBuilder encrpyted = new StringBuilder(message.toUpperCase());
        String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String shiftedAlphabet = alphabet.substring(key) + alphabet.substring(0, key);
        for (int i = 0; i < encrpyted.length(); i++) {
            char currChar = encrpyted.charAt(i);
            int idx = alphabet.indexOf(currChar);
            if (idx != -1) {
                char newChar = shiftedAlphabet.charAt(idx);
                encrpyted.setCharAt(i, newChar);
            }
        }
        return encrpyted.toString();
    }

    public static void decryptStr(String encrypted) {

        for (int k = 0; k < 26; k++) {
            String s = encryptStr(encrypted, k);
            System.out.println(k + "\t" + s);
        }
    }

    public static void testCode() {
        String test = "Your Password is OWusu123@#-//";
        String test1 = "At noon be in the conference room with " +
                "your hat on for a surprise party. YELL LOUD!";
        digitTest(test);
        System.out.println("encrypted: " + encryptStr(test, 17));
        System.out.println("Original: " + test);

        System.out.println("encrypted: " + encryptStr(test1, 15));
        System.out.println("Original: " + test1);

        System.out.println("...DECRYPT...");
        decryptStr(encryptStr(test1, 15));

    }

}
