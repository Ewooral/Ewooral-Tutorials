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

    public static void testFindDnaString() {
        System.out.println(".......Find Genes......");

        String dna = "AATGCTAGGGTAATATGGT";
        System.out.println(findDnaString(dna));

        String[] arrOfStr = dna.split("G");
        System.out.println(arrOfStr[0]);

        String dna2 = "";
        System.out.println(findDnaString(dna2));

    }
}
