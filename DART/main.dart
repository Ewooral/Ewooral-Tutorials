import 'variable/lib/variable.dart' as variable_func;
import 'types/lib/types.dart' as types_func;
import 'input-output/lib/input-output.dart' as input_output_func;

main() {
  print('......VARIABLE........');
  print('export variable from another file ${variable_func.x}');
  print('the string function that' +
      'returns the value of the variables' +
      ' is ${variable_func.variables()}');
  print('const value ${variable_func.PLANET_EARTH}');
  print('final value ${variable_func.PI}');

  print('......TYPES........');
  print(types_func.str_to_num);
  print(types_func.num_to_string);
  print(types_func.letters_that_have_no_i_and_e_in_them);
  print(types_func.name);
  print(types_func.x);
  print(types_func.sums);
  print(types_func.can_see);
  print(types_func.is_tall);

  print('......INPUT-OUTPUT........');
  // print(input_output_func.input_and_output());

  print('......RECORD........');
  print(types_func.record);
  print(types_func.swap((2, 4)));

  print('......COLLECTION........');
  print('The list of integers 1: ${types_func.list}');
  print('The list of strings 3: ${types_func.list3}');
  print('The list of objects 4: ${types_func.list4}');
  types_func.add_list(34, 4);
  types_func.add_list(2, 9);
  print('The list of objects 5: ${types_func.list5}');
  assert(types_func.list.length == 5); // true
  // dart --enable-asserts main.dart

  print('The set of integers: ${types_func.set}');
  print('The set of strings: ${types_func.set3}');
  print('The set of objects: ${types_func.set4}');
  print('The set of objects: ${types_func.set5}');
  types_func.add_set(2, 9);
  types_func.add_set(10, 1);
  print('The set of objects: ${types_func.set5}');

  print('The map of strings to integers: ${types_func.map}');
  print('The map of strings to strings: ${types_func.map3}');
  print('The map of strings to integers: ${types_func.map2}');
  print('The map of object to object: ${types_func.map4}');
  types_func.add_map('software engineer', 5000);
  types_func.add_map('administrator', 4800);
  print('The map of string to integer: ${types_func.map5}');
  print(
      'how much do software engineers earn: ${types_func.map5['software engineer']}');

  print('......CONTROL-FLOW OPERATORS........');
  print('The spread operator: ${types_func.list6}');
  print('The null-aware spread operator: ${types_func.list7}');
  print('The collection if operator: ${types_func.list8}');
  print('The collection if case operator: ${types_func.list9}');
  print('The collection for operator: ${types_func.list10}');
}