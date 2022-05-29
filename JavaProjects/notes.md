# There are two major classes of variables or data types in Java.
  
  ## Primitive types ( Numbers, Characters, boolean values ) 
    They are stored in the fastest available memory for quick access
    data types names are all in lowercase
       - Note that a string is a complex object, not a primitive

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
         double      Double 
    
    Each helper class is a member of a java package called **Java.lang**
    ``` Java
    double doubleValue = 134.4d;
    Double doubleObj = new Double(doubleValue); // instance of the Double helper class

    byte byteValue = doubleObj.byteValue(); 
    int intValue = doubleObj.intValue();
    float floatValue = doubleObj.floatValue();
    short shortValue = doubleObj.shortValue();
    long longValue = doubleObj.longValue();
    String stringValue = doubleObj.toString();

    ```

    primitive numeric variables default to 0.

    ```Java 
    int myInt;
    System.out.println(myInt); // returns 0

    ```

  ### Sometimes, there are inconsistencies in adding double values. For example
  ```Java 
  public static void main(String[] args){
      double value = 0.012;
      double pSum = value * value * value;
      System.out.println(pSum); // returns 0.036000000000000004
  }  
  ```

 **BigDecimals** is used to solve this inconsistency problem
  
  
  ### OPERATORS

  ### Incrementing and decrementing

  ```java
  int intValue = 10;

  intValue ++;
  intValue --;

  intValue += 1;
  intValue -= 1;
  intValue /= 1;
  intValue %= 1;
  intValue *= 1;

  ```
  ### Postfix vs. Prefix incrementing
  ```java
   // Postfix
    intValue ++
    intValue = 0

  // Prefix
    -- intValue 
  ```
### Logical Operators
* && => And
* || => Or
* ?: => Ternary(short-hand for if-then)

```java
  String s = condition ? trueValue : falseValue;
```


## Objects ()
    An object is an intance of a class
    Nonprimitive variables are references to objects
    Objects can have multiple references

    if you declare a variable without the static keyword, it means
    that it is an instance variable. An instance variable is not a member of a class but rather a member of an instance of a class.

    A String in Java is a complex Object. it is an instance of the String class
    (java.lang.String)    

    E.g. String string1 = new String("Hello");

    Strings can be declared in the ff ways
```java
    String string1 = new String("Hello");
    String string2 = "Hello"
```
    NB!!
*    A String is an array of characters in a particular object.
*    A String Object is immutable.
*    Resetting the value of a String creates a new object

          E.g. String cat = "Mosalah";
          cat = "Peter";