// STRINGS
String letters_that_have_no_i_and_e_in_them = "bcdfghjklmnpqrstvwxyz";
String name = "Elijah Boahen";

// NUMBERS
num x = 1;
num y = 2;
num length = 23;
int breadth = 2;
int height = 4;

num sums = () {
  return length + breadth + height;
}();

// BOOLEAN
bool can_see = true;
bool is_tall = bool.fromEnvironment(name);

// DOUBLE
double length_d = double.parse("23");
double breadth_d = 2.0;
double height_d = 4.0;
double sum = length_d + breadth_d + height_d;

// CONVERT NUMBERS INTO STRINGS AND VICE VERSA
String num_to_string = y.toString();
num str_to_num = int.parse("23");

// RECORDS
/**
 * Records are an anonymous, immutable, aggregate type. Like other collection types, 
 * they let you bundle multiple objects into a single object. Unlike other collection types, 
 * records are fixed-sized, heterogeneous, and typed.
 * Records are real values; you can store them in variables, nest them, pass them to and from functions, 
 * and store them in data structures such as lists, maps, and sets.
 
 * Record syntax
 * Records expressions are comma-delimited lists of named or positional fields, enclosed in parentheses:
 * var record = ('first', a: 2, b: true, 'last');

 */
var record = (
  name: "Elijah Boahen",
  age: 23,
  is_tall: true,
  can_see: true,
  length: 23,
  breadth: 2,
  height: 4,
  sum: 23 + 2 + 4,
  'This is a string',
  false,
  5.32
);

(int, int) swap((int, int) record) {
  var (a, b) = record;
  return (b, a);
}

// COLLECTIONS - LISTS
List<int> list = [1, 2, 3, 4, 5];
List<int> list2 = [6, 7, 8, 9, 10];
List<String> list3 = ['Elijah', 'Boahen', 'is', 'a', 'developer'];
var list4 = [false, true, 3.5, 'Elijah', 23];
var list5 = List<int>.empty(growable: true);

// empty list
List<int> add_list(int a, int b) {
  // list5.add(a);
  // list5.add(b);
  list5.addAll([a, b]);
  return list5;
}

// COLLECTIONS - SETS
Set<int> set = {1, 2, 3, 4, 5};
Set<int> set2 = {6, 7, 8, 9, 10};
Set<String> set3 = {'Elijah', 'Boahen', 'is', 'a', 'developer'};
var set4 = {false, true, 3.5, 'Elijah', 23};

// empty set
var set5 = <int>{};
Set<int> add_set(int a, int b) {
  set5.add(a);
  set5.add(b);
  return set5;
}

// COLLECTIONS - MAPS
Map<String, int> map = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5};

Map<String, int> map2 = {
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10
};

Map<String, String> map3 = {
  'Elijah': 'Boahen',
  'is': 'a',
  'developer': 'and',
  'a': 'student'
};

var map4 = {
  'is_tall': true,
  'can_see': true,
  'decimal': 3.5,
  'string': 'Elijah',
  'list': [1, 2, 3, 4, 5],
  'tuple': (1, 2),
  23: 'age'
};

// empty map
var map5 = Map<String, int>();
Map<String, int> add_map(String key, int value) {
  map5[key] = value;
  return map5;
}

// OPERATORS
// Spread operator(...) and null-aware spread operator(...?) in list, map and set literals
var list6 = [1, 2, ...list, 6, 7, 8, ...set4];

// if the expression to the right of the spread operator might be null, you can use a
// null-aware spread operator (...?):
var list7 = [1, 2, ...?list, 6, 7, 8, ...?set4];

// Control-flow operators
// collection if

bool god_will_come_again = false;
var list8 = [1, 2, if (god_will_come_again) 3, 4, 5];
var login = 'Managerings';
var list9 = [
  'Home',
  'Furniture',
  'Plants',
  if (login case 'Manager') 'Inventory'
];

var list10 = ['#0', for (var i in list) '#$i'];
