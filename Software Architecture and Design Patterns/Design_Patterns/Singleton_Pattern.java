package Design_Patterns;

public class Singleton_Pattern {

}

class Body {

}

class Mouth {
    private static Mouth uniqueInstanceOfMouth = null;

    private Mouth() {

    }

    public static Mouth getInstancMouth() {
        if (uniqueInstanceOfMouth == null) {
            uniqueInstanceOfMouth = new Mouth();
        }
    }
}
