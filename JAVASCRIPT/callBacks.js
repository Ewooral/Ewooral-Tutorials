/**
 * First-Class Citizens To The Rescue
In JavaScript, functions are first-class citizens. This means that 
functions can be passed as input to other functions (as well as returned
from other functions, modified, and assigned to variables). This gives 
developers the ability to use functions as parameters, which we refer 
to as callbacks.

So how could we perform more complex calculations in our stock prices 
example? Well, if a number parameter allows us to use any number 
(like 10 or 20), then a function parameter allows us to use any
 functionality (like adding, subtracting, or more complex manipulation)!

That’s hard to visualize without a concrete example. So, here’s a 
concrete example. Notice how the updated variable has changed and we 
can apply three different functions to the array quite easily -

=============================================================================

CALLBACK FUNCITON 
In JavaScript, CALLBACK FUNCITON is a function that is passed as an argument to another function.

A HIGHER ORDER FUNCTION
a function that takes at least one function as input and/or returns a function as output
 */

const array = [1, 2, 3];

function update(callback) {
  const output = [];

  for( up of array) {
      const updated = callback(up);
    output.push(updated);
   

  }
    return output;
  }


// // Callback functions
function add10(num) {
  return num + 10;
}

// function multiplyBy20(num) {
//   return num * 20;
// }

// function stringify(num) {
//   return num.toString();
// }

// // Call update with each callback function
// update(add10) // returns [11, 12, 13]
// update(multiplyBy20) // returns [20, 40, 60]
// console.log(update(stringify) )// returns [‘1’, ‘2’, ‘3’]