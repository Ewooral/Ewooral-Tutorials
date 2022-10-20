const { default: setupWatchingContext } = require("tailwindcss/lib/jit/lib/setupWatchingContext");

console.log("John: Welcome to the async.js module!");
console.log("waiting...");

setTimeout(function () {
    console.log("Elijah: Hello, is anybody  Home?");
}
    , 1000);

console.log("John: I am waiting for you!");
// this is a function that takes another callback function
// as argument and a timer as its second argument
a = 0
var date = new Date()
var min = date.getMinutes()
var sec = date.getSeconds()
var hr = date.getHours()
setInterval(function () {
    if (sec == 60) {
        if (min == 60) {
            min = 0
            hr += "0" + 1
            if (hr == 24){
                hr = 0 + '0'
            }
        }
        
        sec = 0
        min += 1
        


        // console.log()
        console.log(`${hr}hr :  ${min}min : ${sec}sec`)


    }

    if (sec == 60){
        console.log(sec)
        
    }
    sec += 1
    


}, 1000)
// 60 = 1
// x = 60
