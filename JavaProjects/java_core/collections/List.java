package collections;

import java.util.ArrayList;

public class List {
    public static void main(String[] args) {
        ArrayList<Integer> numbs = new ArrayList<Integer>();

        numbs.add(1);
        numbs.add(12);
        numbs.add(100);
        System.out.println(numbs);
        numbs.remove(0);
        System.out.println(numbs);
    }

}
