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
        System.out.println("Long:" + l);

        double doubleValue = 114.4d;
        Double doubleObj =  Double.valueOf(doubleValue); // instance of the Double helper class

        byte byteValue = doubleObj.byteValue(); 
        int intValue = doubleObj.intValue();
        float floatValue = doubleObj.floatValue();
        short shortValue = doubleObj.shortValue();
        long longValue = doubleObj.longValue();
        String stringValue = doubleObj.toString();

        if(doubleValue < Byte.MAX_VALUE){
            System.out.println("byte value:" + byteValue++);
        }

        System.out.println("byte value:" + byteValue);
        System.out.println("short value:" + shortValue);
        System.out.println("string value:" + stringValue);
        System.out.println("integer value:" + intValue);
        }
}
