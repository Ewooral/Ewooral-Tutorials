
// THIS IS THE BEST WAY TO DEFINE TUPLES    
// We need to explicitly state the type of a tuple whenever we declare one
let myCar: [number, string, string, boolean] = 
[
1994, 
"Jeep", 
"Coco Lapas",
true
];

const [year, make, model, isExpensive] = myCar;

console.log(isExpensive);
console.log(myCar);