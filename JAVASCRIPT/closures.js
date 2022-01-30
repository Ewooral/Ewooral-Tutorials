// SCOPE MEANS ACCESS. VARIABLES WE HAVE ACCESS TO WHEN A CODE IS RUNNING
// CLOSURES ARE FUNCTIONS THAT HAVE ACCESS TO VARIABLES OUTSIDE OF THEIR SCOPE
// functions have access to variables inside and outside of their scope

var fun = 5;

function funFunction(){
    var fun = "Hellooo";
    console.log(1, fun);
}

function funerFunction(){
    var fun = "Byeee";
    console.log(2, fun);
}
console.log(fun);

function funestFunction(){
     fun = "AHHHHH!";
    console.log(3, fun);
}

console.log("Window:", fun)
funFunction();
funerFunction();
funestFunction();




// For all of these, what is the value of a when the function gets called with the console.log()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(a); //3
}

//#2
// you must first run q2() in your console to add the new value. then run q22()
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    console.log(a); //5
}

// run in the console:
// q22() -- 0
// q2() -- undefined
// q22() -- 5

//#3
function q3() {
    window.a = "hello";
}

// you must first run q3() in your console to add the a property to the window. then run q32()
function q32() {
    console.log(a); //"hello"
}

//#4
var a = 1;
function q4() {
    var a = "test";
    console.log(a); //"test"
}

//#5 with var keyword, if statements do not create a new scope
var a = 2;
if (true) {
    var a = 5;
    console.log(a); // 5
}
console.log(a); // 5




function squareAndMultiply(num1, num2){

    function square(x){
        return x * x;
    }

    function multiplyBy10(y){
         return y * 10;
    }
    return square(num1) * multiplyBy10(num2);
}

console.log(squareAndMultiply(4, 4));