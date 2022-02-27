


class MyArray{
    constructor(){
        this.length = 0;
        this.data = {1:"key1",2:"key2",3:"key3"};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        console.log("Here: ",this)
        this.data[this.length+1] = item;
        this.length++;
        return this.length;
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1]; 
        this.length--;
        return lastItem;
    }
}



const newArray = new MyArray();
newArray.push("key4");
newArray.pop();
console.log(newArray);
console.log(newArray.get(1));




















const collection = ["Piggy", 5, true];
collection[1] = "Doggy";
console.log(collection);
//JOIN METHOD
collection.join(" , ");
// PUSH METHOD adds a new element to the end of the array   
collection.push("Cat");
console.log(collection);
// UNSHIFT METHOD adds a new element to the beginning of the array
collection.unshift("Dog");
console.log(collection);
// POP METHOD removes the last element of the array
collection.pop();
console.log(collection);
// SHIFT METHOD removes the first element of the array
collection.shift();
console.log(collection);
// SPLICE METHOD removes elements from the array 
// splice(index, no of elements)
collection.splice(1, 2); // 1st parameter is the index of the element to be removed, 2nd parameter is the number of elements to be removed
console.log(collection);
// SLICE METHOD returns a new array with the elements from the original array
// slice(start index, end index)
collection.slice(1, 3);
console.log( " Here: " + collection);   
// SORT METHOD sorts the elements of the array
collection.sort();
console.log(collection);
// REVERSE METHOD reverses the order of the elements of the array
collection.reverse();
console.log(collection);
// CONCAT METHOD returns a new array with the elements of the original array
// concat(array)
const newCollection = collection.concat(["Dog", "Cat"]);
console.log(newCollection);
// SPLIT METHOD splits a string into an array of substrings
// split(separator, limit)
const string = "Hello, World!";
const splitString = string.split("");
console.log(splitString);
// INDEXOF METHOD returns the index of the first occurrence of a specified value in an array
// indexOf(searchElement, fromIndex)
const index = collection.indexOf("Doggy");
console.log(index);
// LASTINDEXOF METHOD returns the index of the last occurrence of a specified value in an array
// lastIndexOf(searchElement, fromIndex)
const lastIndex = collection.lastIndexOf("Doggy");
console.log(lastIndex);
// EVERY METHOD tests whether all elements in the array pass the test implemented by the provided function
// every(callback, thisArg)
const every = collection.every(function(value, index, array) {
    return typeof value === "string";
}
);
console.log(every);
// SOME METHOD tests whether some element in the array passes the test implemented by the provided function
// some(callback, thisArg)
const some = collection.some(function(value, index, array) {
    return typeof value === "number";
}
);
console.log(some);
// FILTER METHOD creates a new array with all elements that pass the test implemented by the provided function
// filter(callback, thisArg)
const filter = collection.filter(function(value, index, array) {
    return typeof value === "string";
}
);
console.log(filter);
// MAP METHOD creates a new array with the results of calling a provided function on every element in this array
// map(callback, thisArg)
const map = collection.map(function(value, index, array) {
    return value + " is a string";
}
);
console.log(map);
// REDUCE METHOD applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
// reduce(callback, initialValue)
const reduce = collection.reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
}
, 0);
console.log(reduce);
// REDUCE RIGHT METHOD applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value
// reduceRight(callback, initialValue)
const reduceRight = collection.reduceRight(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
}
, 0);
console.log(reduceRight);
// FOREACH METHOD calls a function for each element in the array
// forEach(callback, thisArg)
collection.forEach(function(value, index, array) {
    console.log(value);
}
);

const users = [
    {
        name:'elijah',
        state:'CO',
    }, 
    {
        name:'lisha',
        state:'CO',
    },
    {
        name:'moses',
        state:'kibi',
    },
    {
        name:'Karl Andrew',
        state:'MN',
    }
]

for(let i=0; i<users.length; i++){
    let user = users[i];
    console.log(user);
}

var answers = {'a': 3,'b': 2,'c': 3, 'd': 1};
var keys = Object.keys(answers);
var duplicate = false;

for(var i=0;i<keys.length;i++){
 for(var j=i+1;j<keys.length;j++){
   if(answers[keys[i]] === answers[keys[j]]){
     duplicate = true;
     break;
   }
 }
 if(duplicate){ console.log("dupe value is there.."); break; }
}

/**
 * Destructuring assignment
The destructuring assignment syntax is a JavaScript 
expression that makes it possible to unpack values from 
arrays, or properties from objects, into distinct variables.
 */
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
