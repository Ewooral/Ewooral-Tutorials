// Defining a (pseudo) class

function Building(floors) {
    this.floors = floors;
    this.what = 'Building';
}

//creating instance of Building
var myBuilding = new Building(10);
// the NEW keyword creates an empty object
// and sets the constructor property to the function
// it was called with 
