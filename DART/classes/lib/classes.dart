/**
 * Using class members
 * Using constructors
 * Getting an object's type
 * Instance variables
 * Implicit interfaces
 * Class variables and methods
 *    - Static variables and methods
 * 
 * 
 * Dart is an object oriented language with classes and mixin-based
 * inheritance. 
 * Every object is an instance of a class and all classes except Null descend from Object.
 * 
 * Mixin-based inheritance means that although every class (except for the top class, Object?)
 * has exactly one superclass, a class body can be reused in multiple class hierarchies. 
 * 
 * Extension methods are a way to add functionality to a class without changing the class or creating a subclass
 * 
 * Class modifiers allow you to control how libraries can subtype a class.
 * 
 */

// Instance variables
class Point {
  double? x;
  double? y;
  double z = 0;
  dynamic gf = 23;
  int? _private;

  int? a;
  int b = 1;

  final int c = 2;
  final String w = "";

  late int d;
  late final int e;
  late final int f = 4;

  static int g = 6; 
  static late int h;
  static late int i = 8;
  static late final int j;

  static const int k = 10;

  late double? z1 = this.y;

  // CONSTRUCTOR
  Point(x, y, d){
   this.x = x;
   this.y = y;
   this.d = d;
  }

  void point_to_left() {
    x = this.x! - 1;
    print(x);
  }
}

class A extends Object {
  double i = 24;
  int x = 4;
  int y = 7;
  double? nullableInstance;
  late double nonNullableInstance;

  A({required this.i, required this.x, required this.y}) {
    nonNullableInstance = 30;
    //? this is the constructor body
  }
}

class B {
  int? b1;
  final int b2;
  int? c1;
  int? c2;
  final int d;

  B(int c1, int c2, int d, int b2)
      : this.d = d,
        this.b2 = b2 {
    this.c1 = c1;
    this.c2 = c2;
    // this.b2 = b2;
    // this.d = d; // this gives error because final variables can't be used as setters instead we can place them before the constructor body
  }

  @override
  String toString() => "c1: $c1, b1: $b1, c1: $c1, c2: $c2";
}

void randomFunction() {
  //! local variables
  var l = 4;
  var vs = 'exactly';
  var vl = [1, 2, 3];

  print('......var runtimeTypes....... \n');
  print(l.runtimeType);
  print(vs.runtimeType);
  print(vl.runtimeType);

  dynamic dl = 4;
  dynamic dx = 'exactly';
  dynamic dy = [1, 2, 3];

  print('.....dynamic runtimeTypes..... \n');
  print(dl.runtimeType);
  print(dx.runtimeType);
  print(dy.runtimeType);

  print('.......... \n');
  // cascade notation (..) is used to perform multiple operations on the same object
  var alfa = A(i: 10, x: 21, y: 70)
    ..nullableInstance = 40
    ..nonNullableInstance = 90;
  print(alfa.i);
  print(alfa.nonNullableInstance);
  print(alfa.nullableInstance);
}


class classRoom {
 int NumberOfStudents = 23;
 int NumberOfTeachers = 56;

 
}