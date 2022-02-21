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

  for( i of array) {
      const updated = callback(i);
    output.push(updated);
   

  }
    return output;
  }


// // Callback functions
function add10(num) {
  return num + 10;
}

function multiplyBy20(num) {
  return num * 20;
}

function stringify(num) {
  return num.toString();
}

// Call update with each callback function
console.log(update(add10)) // returns [11, 12, 13]
console.log(update(multiplyBy20) )// returns [20, 40, 60]
console.log(update(stringify) )// returns [‘1’, ‘2’, ‘3’]

/**
 * Why is add10 the callback? It satisfies these two conditions -

It is used as input in another function call.
It is called inside of the other function.

................................................................................................

Why is 'update' the higher-order function? It satisfies these two conditions -

It takes a function as an argument.
It calls its input function when it is called. 


Hence, the term "callback" as one function call leads to another.

==============================================================================================

Wrapping Up
Let’s summarize what we’ve discussed in this article.

1. Callbacks are functions that are passed as input to other functions.

2. Higher-order functions take at least one function as input (and/or return
a function, although we haven’t dug into that aspect of them in this
article. You can learn more about that in our post on Closures!)

3. Functions give us the power to use the same code without copy/pasting it.
We insert parameters where we’d like control over changing values.

4. Higher-order functions provide an additional layer of abstraction,
using callbacks as parameters to control functionality instead of
simple values. 

NOTE: The built-in map function is one example of an 
incredibly useful higher-order function that transforms arrays with 
callbacks.
 */