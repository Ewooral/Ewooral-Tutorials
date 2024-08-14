// A pattern matches a value, destructures it, both depending on the context and
// shape of the pattern.

//  MATCHING
const a = 'a';
const b = 'b';

String switchCase(String letter) {
  switch (letter) {
    // matches if letter is 'a'
    case a:
      return 'a';
    case b:
      return 'b';
    default:
      return 'not a or b';
  }
}

// pattern variable declaration
Object pattern_variable_declaration() {
  var (d, e) = ('str', [1, 2, 3]);
  return {d, e};
}

String pattern_destructure() {
  var (a, b) = ('left', 'right');
  // swap
  (b, a) = (a, b);
  return '$a, $b';
}
