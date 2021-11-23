import 'dart:io';

main() {
  print('hello, world');
  var firstname = 'elijah';                                                                                                                                                                                                                                               
  String lastname = 'boahen';
  print(firstname + ' ' + lastname);
  bool cow = true;
  var length = 23;
  var breadth = 2;
  var height = 4;
  var sum = length + breadth + height;
  print(sum);
  stdout.writeln('key in a number');
  var num = stdin.readLineSync();
  print('The number you entered is $num, $cow');
}