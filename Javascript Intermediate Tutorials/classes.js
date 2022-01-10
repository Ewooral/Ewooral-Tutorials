// Defining a (pseudo) class

function Building(floors) {
    this.floors = floors;
    this.what = 'Building';
    // this.getFloors = function() {
    //     return this.floors;
    }  //  this is not best practice and should be avoided.


//creating instance of Building
var myBuilding = new Building(10);
// the NEW keyword creates an empty object
// and sets the constructor property to the function
// it was called with 

// METHOS(for all instance)
Building.prototype.getFloors = function() {
    return this.floors;
}

console.log(myBuilding.getFloors());

// if the methods are defined inside of the constructor function
// then anytime we call the function, we'd be creating a new instance
// of the methods which eats up space and ignores the relevance of the relevance
// of a function.

function GetNames(firstname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

GetNames.prototype.getLastName = () => {
    return this.lastname;
}

var myNames = new GetNames('John', 'Doe', 30);
console.log(myNames);


