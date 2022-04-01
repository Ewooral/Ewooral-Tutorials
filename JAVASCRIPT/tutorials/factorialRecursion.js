/**
 * Write a function that returns the factorial of a number.

EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.

Input: {Number} num - number whose factorial is sought
Output: {Number}
 */
function factorial(num, product = 1) {
  return  num === 0 ?  product :  factorial(num - 1 ,  product * num);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0));

