String handle_error() {
  try {
    throw Exception('This is an error');
  } catch (e) {
    return 'Error: $e';
  }
}

String handle_error_include_on_keyword() {
  try {
    throw Exception('Ths is an error with on keyword');
  } on Exception catch (e) {
    return 'Error: $e';
  }
}

// To handle code that can throw more than one type of exception,
// you can specify multiple catch clauses.
String handle_error_multiple_catch() {
  try {
    throw FormatException('This is a format exception');
  } on FormatException {
    return 'Caught a FormatException';
  } on Exception catch (e) {
    return 'Error: $e';
  } catch (e) {
    return 'Unknown error: $e';
  }
}

//  Partially handle an exception
void handle_error_partially() {
  try {
    dynamic foo = true;
    print(foo++);
  } catch (e) {
    print(
        'handle_error_partially() partially handled the error ${e.runtimeType}');
  }
}
