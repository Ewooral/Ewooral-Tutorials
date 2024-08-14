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
Yes, I was feeling a bit under the weather, but I'm fine now. I'll be around tomorrow, God willing. Thanks for checking in.
 * Class modifiers allow you to control how libraries can subtype a class.
 * 
 */

// Instance variables
class Point {
  double? x;
  double? y;
  double z = 0;

  int? _private;

  int? a;
  int b = 1;
  
  final int c = 2;

  late int d;
  late final int e;
  late final int f = 4;

  static int g = 6;
  static late int h;
  static late int i = 8;
  static late final int j;

  static const int k = 10;

  late double? z1 = this.y;
  Point(this.x, this.y);

  void point_to_left() {
    x = this.x! - 1;
    print(x);
  }
}

class A extends Object{

  }
