"use strict";
// ARROW FUNCTIONS
const test = (name) => {
    return (`
    This is ${name}
    `);
};
console.log(test(["Naoki", "Kudus"]
    .map((name, id) => `${id} ${name} `)));
// DEFAULT PARAMETERS
const multNums = (a, b = 10) => a * b;
console.log(multNums(3));
// SPREAD AND REST
// and Optional Arguments(?)
// @ts-ignore
const addNums = (a, b) => a + b;
const nums = [5, 6];
// const [c, d] = nums
// console.log(c, d)
console.log(addNums(...nums));
// DESTRUCTURING
let anotherPerson = {
    firstName: 'elia', lastName: 'Boahen', ge: 28
};
// Now, if you want to grab the values out of that object, you might do
const FirstName = anotherPerson.firstName;
const LastName = anotherPerson.lastName;
const Age = anotherPerson.ge;
//That’ll work, but it’s an awful lot of typing! With destructuring, you can get at that
// data more concisely:
const { firstName, lastName, ge } = anotherPerson;
console.log(firstName, lastName, ge);
let arrays = [3, 10];
const [aa, bb] = arrays;
console.log(aa);
console.log(bb);
