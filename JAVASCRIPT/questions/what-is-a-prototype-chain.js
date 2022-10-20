/* Prototype chaining is a method used to
 new types of object out of an already defined object
it is analogous to inheritance in oop

The prototype on object instance is available through
**Object.getPrototypeOf(object)** or **__proto__** property
whereas prototype on constructors function is available through **Object.prototype**
*/
const Obj = { name: 'elia' };
console.log(Obj);

const newObj = Object.getPrototypeOf(Obj);
newObj.name = "Martha"
console.log(newObj);
