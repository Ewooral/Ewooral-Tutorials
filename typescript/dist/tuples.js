"use strict";
// THIS IS THE BEST WAY TO DEFINE TUPLES    
// We need to explicitly state the type of a tuple whenever we declare one
let myCar = [
    1994,
    "Jeep",
    "Coco Lapas",
    true
];
const [year, make, model, isExpensive] = myCar; // destructuring
console.log(isExpensive);
console.log(myCar);
const numPair = [11, 12];
numPair.forEach((x) => {
    console.log(x + 20);
});
numPair.push(400);
numPair.concat(200);
console.log(numPair);
