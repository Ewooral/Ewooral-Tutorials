import java.util.Scanner;

/**
 * create a console that takes a user input 
 * translates strings to numeric value
 * performs an arithmetic operation and 
 * displays the result in the console
 */

public class SimpleCalculator {

    public static String operatorString;
    public static void main(String[] args) {
     try {
       try( Scanner scanner = new Scanner(System.in)){
           System.out.println("Enter two numbers: ");

           
                // inputs from user
                String input = scanner.nextLine();
                String input1 = scanner.nextLine();
           

                // System.out.println("Choose your choice of operator: +, *, -, / and % ");

                // user inputs converted to integer
                Integer intValue = Integer.valueOf(input);
                Integer intValue1 = Integer.valueOf(input1);

                // integer converted to double
                Double double1 = Double.valueOf(intValue);
                Double double2 = Double.valueOf(intValue1);

                boolean calculationComplete = false;
                while(!calculationComplete){
                    System.out.println("Choose your choice of operator below:\n [ +, *, -, / and % ] ");
                    operatorString = scanner.nextLine();

                    if (operatorString.equals("+")) {
                        System.out.println(intValue + " + " + intValue1 + " = " +
                                (intValue + intValue1));
                               calculationComplete = true;
                    }
                    if (operatorString.equals("*")) {
                        System.out.println(intValue + " * " + intValue1 + " = " +
                                (intValue * intValue1));
                                calculationComplete = true;
                    }
                    if (operatorString.equals("-")) {
                        System.out.println(intValue + " - " + intValue1 + " = " +
                                (intValue - intValue1));
                                calculationComplete = true;
                    }
                    if (operatorString.equals("/")) {
                        System.out.println(double1 + " / " + double2 + " = " +
                                (double1 / double2));
                                calculationComplete = true;
                    }
                    if (operatorString.equals("%")) {
                        System.out.println(double1 + " % " + double2 + " = " +
                                (double1 % double2));
                                calculationComplete = true;
                    }
                }

                
                

 
       
            
    }  
    } catch (Exception error) {
    // TODO: handle exception
    System.out.println("Error!!" + error);
}
          

    }
}
