import java.util.*;

public class OOP {

    // member variables or fields or instance variables
    private int dollar;
    private int cedi;
    ArrayList<String> food = new ArrayList<String>();

    // constructor with parameters
    // method overloading
    // having two constructors with different functionalities
    public OOP(int d, int c) {
        this.cedi = c;
        this.dollar = d;
    }

    // constructor with no parameters
    public OOP() {

    }

    private int dollarToCedi(int dollars) {
        return this.cedi * dollars;
    }

    public int cediToDollar(int cedis) {
        return this.dollar / cedis + this.dollarToCedi(cedis);
    }

    // this is like the built in __str__ method in python.
    // it converts the object to string
    public String toString() {
        return String.valueOf(this.food);
    }

    // getter
    public int getDollar() {
        return this.dollar;
    }

    // setter
    public void setDollar(int DOLLAR) {
        this.dollar = DOLLAR;
    }

    // getter
    public ArrayList<String> getFood() {
        return this.food;
    }

    // setter
    public void setFood(String Food) {
        this.food.add(Food);
    }

}

class Tester {
    public static void main(String[] args) {
        // instance of the class
        OOP oop = new OOP(100, 800);

        System.out.println(oop.cediToDollar(23));
        System.out.println("Dollar is: " + oop.getDollar());
        oop.setDollar(250);
        oop.setFood("Fufu");
        oop.setFood("Rice ");
        oop.setFood("Fish");
        oop.setFood("Water-Melon");
        oop.setFood("Agushie");

        System.out.println("Dollar is: " + oop.getDollar());
        System.out.println("Food: " + oop.getFood());

        System.out.println("..................");
        ArrayList<String> newFood = oop.getFood();

        newFood.remove(1);
        System.out.println(newFood);
        Iterator<String> i = newFood.iterator();

        while (i.hasNext()) {

            System.out.println(i.next());

        }

    }
}