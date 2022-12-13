package Problem_Solving;

public class Str_EncryptAndDecrypt {
    public static final String ENCRYPT = "At noon be in the conference room with " +
            "your hat on for a surprise party. YELL LOUD!";

    public static void main(String[] args) {
        testCode();
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
        String toUpper = ENCRYPT.toUpperCase();
        for (int k = 0; k < 26; k++) {
            String s = encryptStr(encrypted, k);
            if (s.equals(toUpper)) {
                System.out.println(s);
                break;
            }

        }

    }

    public static void testCode() {
        String test = "Your Password is OWusu123@#-//";
        String test1 = "At noon be in the conference room with " +
                "your hat on for a surprise party. YELL LOUD!";

        System.out.println("encrypted: " + encryptStr(test, 17));
        System.out.println("Original: " + test);

        System.out.println("...ENCRYPT...");
        System.out.println(encryptStr(test1, 15));

        System.out.println("...DECRYPT...");
        decryptStr(encryptStr(test1, 15));

    }

}