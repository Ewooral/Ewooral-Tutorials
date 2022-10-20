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
