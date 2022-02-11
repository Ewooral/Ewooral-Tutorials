# There are two major classes of variables or data types in Java.
  * Primitive types ( Numbers, Characters, boolean values ) 
    They are stored in the fastest available memory for quick access
    data types names are all in lowercase
    Note that a string is a complex object, not a primitive

    ``` java 
    int myVar = 5;
    int = data type 
    myVar = identifier

    ```
        DATA TYPE |   BITS  | MINIMUM | MAXIMUM |
        byte           8         -128       127
        short          16        -32,768    32,767
        int            32        -2B +      2B +
        long           64        -9.2E+18   9.22337E+18
        float          32 
        double         64

    All primitive data types have helper classes that support conversion and formatting tools
        
         DATA TYPE | HELPER CLASS 
         byte        Byte
         short       Short
         int         Integer
         long        Long
         float       Float
         Double      Double
    
    Each helper class is a member of a java package called **Java.lang**
    ``` Java
    double doubleValue = 134.4d;
    Double doubleObj = new Double(doubleValue); // instance of the Double helper class

        
  
  
  * Objects ()