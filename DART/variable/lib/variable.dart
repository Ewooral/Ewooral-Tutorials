var x = 1;
var y = 2;
var firstname = 'elijah';
String lastname = 'boahen';

const PLANET_EARTH = 'earth';
final PI = 3.14;

bool cow = true;
var length = 23;
var breadth = 2;
var height = 4;
var sum = length + breadth + height;

String fullname() {
  return ('The full name is $firstname $lastname');
}

String variables() {
  return ('The sum of the length, breadth and height is $sum' +
      'The first name is $firstname' +
      'The last name is $lastname' +
      'The value of x is $x' +
      'The value of y is $y' +
      'The value of cow is $cow');
}

Object pattern_variable_declaration() {
  var (d, [e, f, g]) = ('str', [1, 2, 3]);
  return {d, e, f, g};
}
