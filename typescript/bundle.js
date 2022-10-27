(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/* OBJECT TYPES
* In JavaScript, the fundamental way that we group and
* pass around data is through objects. In
* TypeScript, we represent those through object types.
* As we've seen, they can be anonymous:
*
*
* */
function street(person) {
    return "Hello " + person.name;
}
let Circle = {
    Height: 25,
    Width: "100%",
};
/*
* PROPERTY MODIFIERS

Each property in an object type can specify a couple of things: the type,
whether the property is
optional, and whether the property can be written to.
*
*
* OPTIONAL PROPERTIES
*
Much of the time, we'll find ourselves dealing with objects that
might have a property set. In those
cases, we can mark those properties as
optional by adding a question mark ( ? ) to the end of their
names.
* */
// PROPERTY MODIFIERS
// const paintShape = (opts:Shapes) => {
//     let xPos = opts.Shape === undefined ? 0 : opts.Shape;
//     let yPos = opts.Height === undefined ? 0 : opts.Height;
//     return ({xPos, yPos})
// }
const paintShape = ({ Height = 0, Shape }) => {
    let xPos = Shape === undefined ? true : Shape;
    let yPos = Height === undefined ? false : Height;
    return ({ xPos, yPos });
};
console.log("Function painShape", paintShape({ Width: "", Color: "red" }));
console.log(Circle.Height);
console.log(Circle);
const Gucci = (footwear) => {
    return `
    ${footwear.footWearID}
    ${footwear.yearManufactured}
    `;
};
let shoes = {
    yearManufactured: 2008,
    footWearID: 1130113,
    footWearISPNum: 100 - 912 - 423
};
console.log(Gucci(shoes));
function doSomething(obj) {
    // We can read from obj.prop
    console.log(`prop has the value ${obj.prop}.`);
    // But we can't re-assign it
    // obj.prop = "hello"  // Cannot assign to 'prop' because it is a read-only property.
}
module.exports = shoes;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {paintShape} from "./object-types";
const shoes = require("./object-types");
console.log(shoes.footWearID);

},{"./object-types":1}]},{},[2]);
