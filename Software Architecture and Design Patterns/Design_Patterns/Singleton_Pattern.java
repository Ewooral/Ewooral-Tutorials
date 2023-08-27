package Design_Patterns;

public class Singleton_Pattern {
    public static void main(String[] args) {
        Mouth newMouth = Mouth.getInstancMouth();
        System.out.println(newMouth.getMouthColor());
    }
}

class Mouth {
    private static Mouth uniqueInstanceOfMouth = null;

    private Mouth() {

    }

    public static Mouth getInstancMouth() {
        if (uniqueInstanceOfMouth == null) {
            uniqueInstanceOfMouth = new Mouth();
            System.out.println("Created!");
            return uniqueInstanceOfMouth;
        } else {
            return uniqueInstanceOfMouth;
        }

    }

    public String getMouthColor() {
        return "Tan or Dark";
    }
}
