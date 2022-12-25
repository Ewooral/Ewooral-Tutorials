
public class RaisedToPower {
    public static void main(String[] args) {
        System.out.println(Math.pow(2, -7));
        System.out.println(powOf(2, -7));
    }

    public static int powOf(int base, int pow) {
        int res = 1;
        for (int expo = pow; expo != 0; expo--) {
            res *= base;
        }
        return res > 0 ? res : 4;
    }
}