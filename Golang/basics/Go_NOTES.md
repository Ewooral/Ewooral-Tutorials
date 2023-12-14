# ...........................VARIABLES.......................
Variables are containers for storing data values.
variables are often referred to as placeholders or containers for storing data values.

When you declare a variable, you reserve some space in memory to hold a value. 
This value can change or vary throughout your program, hence the term "variable".

The variable has a name, which you can use to refer to the stored value in your code. 
This is why variables can be thought of as placeholders - they hold a place for a value in your code.



### Declaring a variable in go

* syntax: 
    - var keyword, 
    - name of variable,
    - type of variable

```go
var a int = 10
```

### Below are formatters in go

	- %d is used to format integers
	- %s is used to format strings
	- %f is used to format floating point numbers
	- %t is used to format booleans
	- %v is used to format any value
	- %T is used to format variables type
	- %p is used to format pointers
	- %b is used to format base 2 numbers


###  Run a go program
cd to where main.go is in your project directory

     go run main.go


### Define a variable without expression and see the default value for them

	```go
    
    var variable4 int
	var variable5 string
	var variable6 float64
	var variable7 bool
	var variable8 *int

	fmt.Printf("Variable 4: %d\n", variable4)
	fmt.Printf("Variable 5: %s\n", variable5)
	fmt.Printf("Variable 6: %f\n", variable6)
	fmt.Printf("Variable 7: %t\n", variable7)
	fmt.Printf("Variable 8: %d\n", variable8)
    ```

Note: If you declare a variable without initialization, the variable will be initialized to 0.

```go


```

## Integers
integers can be `8, 16, 32, or 64 bits`, and the number of bits determines the size and range of the values that the integer type can hold:

`int8 and uint8`: These are 8-bit integers. 
int8 ranges from -128 to 127, and uint8 ranges from 0 to 255.

`int16 and uint16`: These are 16-bit integers. int16 ranges from -32768 to 32767, and uint16 ranges from 0 to 65535.

`int32 and uint32`: These are 32-bit integers. int32 ranges from -2147483648 to 2147483647, and uint32 ranges from 0 to 4294967295.

`int64 and uint64`: These are 64-bit integers. int64 ranges from -9223372036854775808 to 9223372036854775807, and uint64 ranges from 0 to 18446744073709551615.
The int and uint types are also available. They are either 32 or 64 bits, depending on the platform.

The choice between these types depends on the needs of your program. If you're storing a small number, an 8 or 16-bit integer might be appropriate. If you're storing a very large number, you might need a 64-bit integer. If you're not sure, int is a good default choice.


## SHORTHAND VARIABLE DECLARATION

In Go, shorthand variable declaration is a feature that allows you to declare and initialize a variable in a single line using the := operator. This is also known as short variable declaration.

Here's an example:

```go
var1 := 100
	var2 := "Hello"
	var3 := 67.89
	var4 := false

	fmt.Printf("......Shorthand variable declaration: \n")
	fmt.Printf("var1: %d\n", var1)
	fmt.Printf("Type of var1: %T\n", var1)

	fmt.Printf("var2: %s\n", var2)
	fmt.Printf("Type of var2: %T\n", var2)

	fmt.Printf("var3: %f\n", var3)
	fmt.Printf("Type of var3: %T\n", var3)

	fmt.Printf("var4: %t\n", var4)
	fmt.Printf("Type of var4: %T\n", var4)

```