package basics;

public class Class {

    public static void main(String[] args) {
        // instance of the class
        Names myName = new Names();
        myName.cry();

        System.out.println(myName.familyName);

    }

    String name = "elijah";

}

class Names {
    String familyName = "Boahen";

    void cry() {
        System.out.println("I am crying!");
    }
}
