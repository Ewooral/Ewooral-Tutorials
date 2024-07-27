import 'variable/lib/variable.dart' as variable_func;
import 'types/lib/types.dart' as types_func;
import 'input-output/lib/input-output.dart' as input_output_func;

main() {
  print('......VARIABLE........');
  print('export variable from another file ${variable_func.x}');
  print('the string function that' +
      'returns the value of the variables is ${variable_func.variables()}');

  print('......TYPES........');
  print(types_func.str_to_num);
  print(types_func.y_to_string);
  print(types_func.letters_that_have_no_i_and_e_in_them);
  print(types_func.name);
  print(types_func.x);
  print(types_func.sums);

  print('......INPUT-OUTPUT........');
  print(input_output_func.input_and_output());
}
