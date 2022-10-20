// LITERAL SYNTAX
console.log("1..................................")
const obj = {Food:"Tuozaffi"};
console.log(obj);


// OBJECT CONSTRUCTOR
console.log("2..................................")
const OBJ = new Object();
OBJ.name = "Elijah";
console.log(OBJ);


// OBJECT CREATE METHOD
console.log("3..................................")
var object = Object.create(null);
object.isLoggedIn= true;
object.password = "20445522";
console.log(object);


// FUNCTION CONSTRUCTOR
console.log("4..................................")
function Person(name){
  this.name = name;
  this.age = 29;
}
var obje = new Person("Elijah");
console.log(obje);


// FUNCTION CONSTRUCTOR WITH PROTOTYPE
console.log("5..................................")
function anotherPerson() {}
  anotherPerson.prototype.anothername = "elijah";
  anotherPerson.prototype.anotherage = 28;

var anotherObj = new anotherPerson("Josepth Kuntoh")
console.log(anotherObj.anotherage)
console.log(anotherObj.anothername)


// ES6-CLASS SYNTAX
console.log("6..................................")
class Obj{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var onlyObj = new Obj("Mary Asante", 31);
console.log(onlyObj)


// SINGLETON PATTERN (object which can only be instantiated one time
//Repeated calls to its constructor return the same instance and 
//this way one can ensure that they don't accidentally create multiple instances.)
console.log("7..................................")
var newObj = new function(name, age){
  this.name = name
  this.age = age
}
newObj.name = "John Oduro Boahen";
newObj.age = 17;
console.log(newObj);
