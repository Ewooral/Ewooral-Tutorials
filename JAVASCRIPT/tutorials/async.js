console.log("John: Welcome to the async.js module!");
console.log("waiting...");

setTimeout(function(){
    console.log("Elijah: Hello, is anybody  Home?");
} 
,7000);

console.log("John: I am waiting for you!");
// this is a function that takes another callback function
// as argument and a timer as its second argument
