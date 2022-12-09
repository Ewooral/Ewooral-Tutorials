package Problem_Solving;

public class Str_FindDna {

    public static void main(String[] args) {

        testFindDnaString();
    }

    public static String findDnaString(String dna) {
        // start codon is 'ATG'
        // stop codon is 'TAA'
        String result = "";
        int startIdx = dna.indexOf("ATG");
        if (startIdx == -1) {
            return "";
        }
        int stopIdx = dna.indexOf("TAA", startIdx + 3);
        if (stopIdx == -1) {
            return "";
        }
        result = dna.substring(startIdx, stopIdx + 3);
        return result;
    }

    public static String findDNA(String s) {
        // String[] str = s.split("c");
        String ch = "";

        int i = 0;
        int j = 0;

        String sub2 = s.substring(s.length() - 2, s.length());
        String sub3 = s.substring(s.length() - 3, s.length());
        System.out.println(sub3);
        while (i < s.length()) {
            String sub = s.substring(i, j + 2);
            System.out.println(sub.equals(sub2));
            if (sub.equals(sub2)) {
                ch += sub2;
                break;
            }

            System.out.println(sub);
            i += 2;
            j += 2;
        }
        return ch;
    }

    public static void testFindDnaString() {
        System.out.println(".......Find Genes......");

        String dna = "AATGCTAGGGTAATATGGT";
        System.out.println(findDnaString(dna));

        String[] arrOfStr = dna.split("G");
        System.out.println(arrOfStr[0]);

        String dna2 = "";
        System.out.println(findDnaString(dna2));

        String s = "abcefgicjklmncopqrsctuvwcxyz";
        System.out.println(findDNA(s));

    }
}
