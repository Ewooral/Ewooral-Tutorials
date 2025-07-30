# ...........................DART NOTES..................................

In Dart, the primary difference between ***static*** and instance variables lies in their association with the class and instances of the class, respectively.

### ................... Static Variables.......................
- **Association**: Static variables are associated with the class itself rather than any instance of the class.
- **Access**: They can be accessed using the class name without creating an instance of the class.
- **Memory**: Only one copy of a static variable exists, regardless of how many instances of the class are created.
- **Usage**: Useful for defining constants or shared data across all instances.

Example:
```dart
class MyClass {
  static int staticVariable = 10;

  static void staticMethod() {
    print('Static method called');
  }
}

void main() {
  print(MyClass.staticVariable); // Accessing static variable
  MyClass.staticMethod(); // Calling static method
}
```

### ........................Instance Variables.......................................
- **Association**: Instance variables are associated with an instance of the class.
- **Access**: They can only be accessed through an instance of the class.
- **Memory**: Each instance of the class has its own copy of the instance variables.
- **Usage**: Useful for storing data that is unique to each instance.

Example:
```dart
class MyClass {
  int instanceVariable = 10;

  void instanceMethod() {
    print('Instance method called');
  }
}

void main() {
  MyClass obj1 = MyClass();
  MyClass obj2 = MyClass();

  obj1.instanceVariable = 20;
  print(obj1.instanceVariable); // 20
  print(obj2.instanceVariable); // 10

  obj1.instanceMethod(); // Calling instance method
}
```

### Summary
- **Static Variables**: Shared across all instances, accessed via the class name.
- **Instance Variables**: Unique to each instance, accessed via the instance of the class.




In Dart, variables store references to objects rather than the actual objects themselves. This means that when you assign an object to a variable, the variable holds a reference (or pointer) to the memory location where the object is stored, not the object itself.

### Key Points:
1. **Reference Storage**: Variables hold references to objects, allowing multiple variables to refer to the same object.
2. **Assignment**: When you assign one variable to another, both variables refer to the same object.
3. **Mutability**: Changes made through one variable are reflected when accessed through another variable that references the same object.

### Example:
```dart
class Person {
  String name;
  Person(this.name);
}

void main() {
  Person person1 = Person('Alice');
  Person person2 = person1; // person2 references the same object as person1

  person2.name = 'Bob';
  print(person1.name); // Outputs: Bob
}
```
In this example, `person1` and `person2` both reference the same `Person` object. Changing the `name` property through `person2` also affects `person1` because they reference the same object.



### ..............................CONSTRUCTORS...................................

In Dart, a constructor is a special method that is used to create and initialize an object of a class. It is called when an instance of the class is created. Constructors can be used to set initial values for the object's properties.

### Key Points:
1. **Initialization**: Constructors initialize the object's properties.
2. **Naming**: Constructors have the same name as the class.
3. **Types**: Dart supports default constructors, named constructors, and factory constructors.

### Example:
```dart
class Person {
  String name;
  int age;

  // Default constructor
  Person(this.name, this.age);

  // Named constructor
  Person.withName(this.name) : age = 0;
}

void main() {
  Person p1 = Person('Alice', 30); // Using default constructor
  Person p2 = Person.withName('Bob'); // Using named constructor
}
```
In this example, `Person` has a default constructor that initializes `name` and `age`, and a named constructor `withName` that initializes `name` and sets `age` to 0.



### ................................LATE AND FINAL.....................................

In Dart, the `late` and `final` modifiers are used to control the initialization and immutability of class variables.

### `final` Modifier
- **Immutability**: A `final` variable can only be set once. After it is assigned a value, it cannot be changed.
- **Initialization**: It must be initialized either at the point of declaration or within the constructor.

Example:
```dart
class Person {
  final String name;
  final int age;

  Person(this.name, this.age); // Initialized via constructor
}

void main() {
  var person = Person('Alice', 30);
  // person.name = 'Bob'; // This will cause an error because 'name' is final
}
```

### `late` Modifier
- **Deferred Initialization**: A `late` variable allows for deferred initialization. It means the variable will be initialized when it is accessed for the first time.
- **Use Case**: Useful when the initial value of the variable is not known at the time of object creation or when the initialization is resource-intensive and should be delayed until necessary.

Example:
```dart
class Person {
  late String name;
  late int age;

  void setName(String newName) {
    name = newName; // Initialized when setName is called
  }

  void setAge(int newAge) {
    age = newAge; // Initialized when setAge is called
  }
}

void main() {
  var person = Person();
  person.setName('Alice');
  person.setAge(30);
  print(person.name); // Outputs: Alice
  print(person.age); // Outputs: 30
}
```

### Summary
- **`final`**: Use when the variable should be immutable after its initial assignment.
- **`late`**: Use when the variable's initialization should be deferred until it is first accessed.


### .............................NULLABLE OR NON-NULLABLE......................................

In Dart, variables can be either nullable or non-nullable, depending on whether they can hold a `null` value.

### Non-Nullable Variables
- **Definition**: By default, variables in Dart are non-nullable, meaning they cannot hold a `null` value.
- **Declaration**: You declare a non-nullable variable without a question mark (`?`) after the type.

Example:
```dart
class Person {
  String name; // Non-nullable variable
  int age; // Non-nullable variable

  Person(this.name, this.age);
}

void main() {
  var person = Person('Alice', 30);
  // person.name = null; // This will cause an error because 'name' is non-nullable
}
```

### Nullable Variables
- **Definition**: Nullable variables can hold a `null` value.
- **Declaration**: You declare a nullable variable by adding a question mark (`?`) after the type.

Example:
```dart
class Person {
  String? name; // Nullable variable
  int? age; // Nullable variable

  Person(this.name, this.age);
}

void main() {
  var person = Person(null, null); // Allowed because 'name' and 'age' are nullable
  print(person.name); // Outputs: null
  print(person.age); // Outputs: null
}
```

### Summary
- **Non-Nullable Variables**: Cannot hold `null` values. Declared without a `?`.
- **Nullable Variables**: Can hold `null` values. Declared with a `?`.

Using the provided code as a reference, you can declare variables as either nullable or non-nullable based on whether they should be allowed to hold `null` values.


### .............................DYNAMIC TYPE............................

In Dart, the `dynamic` type is used when you want a variable to be able to hold values of any type. It provides flexibility but sacrifices type safety, as the type of the variable is determined at runtime rather than at compile time.

### Key Points:
1. **Type Flexibility**: A `dynamic` variable can hold values of any type, and its type can change during execution.
2. **Type Safety**: Using `dynamic` bypasses compile-time type checking, which can lead to runtime errors if the variable is used inappropriately.
3. **Use Cases**: Useful in scenarios where the type of the variable is not known at compile time or when interfacing with APIs that return different types.

### Example:
```dart
void main() {
  dynamic variable = 'Hello'; // Initially a String
  print(variable); // Outputs: Hello

  variable = 42; // Now an int
  print(variable); // Outputs: 42

  variable = true; // Now a bool
  print(variable); // Outputs: true
}
```

### When to Use `dynamic`:
- When you need maximum flexibility and the type of the variable can change.
- When dealing with APIs or data sources that return different types.
- When writing generic code that can handle multiple types.

### Caution:
- Overusing `dynamic` can lead to less readable and maintainable code.
- It can introduce runtime errors that would otherwise be caught at compile time with static types.

In general, prefer using specific types or `Object` when possible, and reserve `dynamic` for cases where type flexibility is essential.



### .......................CASCADE NOTATION.......................
The selected text in Dart uses the cascade notation `..` to perform multiple operations on the same object. Here's a breakdown of the code:

```dart
var alfa = A(i: 10)..nullableInstance = 40;
```

### Explanation
1. **Object Creation**: `A(i: 10)`
2. **Cascade Notation**: The cascade operator allows you to perform multiple operations on the same object without repeating the object reference.
3. **Property Assignment**:

### Equivalent Code Without Cascade Notation
The above code is equivalent to:
```dart
var alfa = A(i: 10);
alfa.nullableInstance = 40;
```

### Summary
- `var alfa = A(i: 10)`.
- `..nullableInstance = 40` sets the `nullableInstance`

This makes the code more concise and readable when performing multiple operations on the same object.