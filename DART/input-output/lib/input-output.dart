import 'dart:io';

num input_and_output() {
  stdout.writeln('key in a number');
  var num = stdin.readLineSync();
  int new_num = int.parse(num!);
  print('The number you entered is $num');
  return new_num;
}
