public class primitiveVariables {

    public static void main(String[] args){
        byte b = 1;
        short sh = 1;
        int i = 1;
        long l = 1L;
        float f = 1.0f;
        double d = 1d;
        System.out.println("Byte:" + b);
        System.out.println("Short:" + sh);
        System.out.println("Integer:" + i);
        System.out.println("Float:" + f);
        System.out.println("Double:" + d);

        double doubleValue = 134.4d;
        Double doubleObj =  Double.valueOf(doubleValue); // instance of the Double helper class

        byte byteValue = doubleObj.byteValue(); 
        int intValue = doubleObj.intValue();
        float floatValue = doubleObj.floatValue();
        short shortValue = doubleObj.shortValue();
        long longValue = doubleObj.longValue();
        String stringValue = doubleObj.toString();

        System.out.println(byteValue);
        System.out.println(shortValue);
        System.out.println(stringValue);
        System.out.println(intValue);
        }
}
