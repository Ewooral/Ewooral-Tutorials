const addMore = (a, b)=>{
let c = a * b
return c
}

// Immediately Invoked Function Expression (IIFE)
// Language: javascript
// Path: Javascript Intermediate Tutorials\function.js
(function(){
    console.log('Hello')
}
)() 

const dj = eat => eat + 100;
console.log(dj(100)); // 200

// 1. NB 
// function declaration can be HOISTED; meanning they can 
// be called before they are defined, that's improper way of coding 

// 2. NB
// You can't use arrow function when you are declaring a method in a function 
