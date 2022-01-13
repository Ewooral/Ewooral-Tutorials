"use strict";
const anExampleVariable = "Hello World";
const show = console.log;
console.log(anExampleVariable);
// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
let arr = [1, 2, 3, 4, 5];
let arrr = [4, 5, 6, 7, 2];
show(arr);
show(arrr);
show(typeof (arr));
show(typeof (arrr));
/**
 * ANY type
TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of
 any type, or pretty much anything else that’s syntactically legal:
 */
let obj = { x: 0 };
// obj.foo();
show(obj.bar = 1);
show(obj.baz = 'hello world');
show(obj = 'Hey');
const n = obj;
show(obj.x);
/*
Type Annotations on Variables
When you declare a variable using const, var, or let, you can optionally add a
type annotation to explicitly specify the type of the variable*/
let fufu = " African Dish";
show(fufu);
/**When you don’t specify a type, and TypeScript can’t
 * infer it from context, the compiler will typically default to any. */
//FUNCTIONS 
// Parameter Type Annotations
// When you declare a function, you can add type annotations after each parameter to declare 
// what types of parameters the function accepts. Parameter type annotations go after the parameter name:
function greet(name) {
    return "Hello, " + name.toUpperCase() + "!";
}
show(greet("world"));
show(greet("TypeScript"));
// No type annotations here, but TypeScript can spot the bug
const names = ['Alice', 'Bob', 'Eve'];
//Contextual typing for function
show("=============");
names.forEach(function (s) {
    show(s.toUpperCase());
});
// Object Types
show("============");
// You can use , or ; to separate the properties, and the last separator is optional either way.
function printCoord(pt, sw, num, arr) {
    show(`The coordinate's x value is ${pt.x}`);
    show(`The coordinate's y value is ${pt.y}`);
    show(sw);
    show(num);
    show("============");
    show(arr[0]);
    show(typeof (pt));
    show(typeof (sw));
    let numb = 0;
    arr.forEach((args) => {
        if (args === 1) {
            numb += 1;
            show("Take a break");
            arr.push(1200);
            show(arr);
        }
        show(args, numb);
    });
}
printCoord({ x: "of type string", y: 6 }, 'Midnight memory', 400, [23, 45, 1, 2, 3, 4, 5]);
// Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:
function printName(obj) {
    // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
function myName(obj) {
    var _a;
    // Error - might crash if 'obj.last' wasn't provided!
    //   console.log(obj.last.toUpperCase());
    // Object is possibly 'undefined'.
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
const numbers = [1, null, 3, 4, 5, null, 9];
numbers.filter(Boolean).map((x) => {
    // show(x)
    show(typeof (x));
});
