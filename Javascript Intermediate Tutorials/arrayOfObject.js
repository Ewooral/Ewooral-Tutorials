var print = console.log
const users = [
    { name:'Stefan Maggio', state: 'CO'},
    { name:'John Doe', state: 'CA'},
    { name:'Jane Doe', state: 'CA'},
    { name:'Joe Smith', state: 'NY'},
    { name:'Jane Smith', state: 'NW'},
    { name:'John Smith', state: 'NY'},
    { name:'Jane Smith', state: 'NY'},
    { name:'Joe Smith', state: 'ID'},

];
 
// A function that doubles numbers in an array
const numb = [1,2, 3, 4, 5,4,5];

const doubledNumb = (number) => {
    const newNumb = [];
    number.forEach((x)=>{
       const result = x * 2 
     newNumb.push(result)
    })
    return newNumb
}
print(doubledNumb(numb));

// A function that multipliers given parameters
function multiplier(x =3, y=5){
    x = x || 4 // x equals to x or 4. if x is not given a value, it will use the default value
    y = y || 2 
    return x * y;
}

print(multiplier(3))


// function multiply(multiplier, ...args) {
// // console.log(arguments)  // arguments is a built-in function that converts the arguments into codes.
// //  const args = Array.prototype.slice.call(arguments, logAllArguments.length)
// // print(args.sort())
// return args.map(function(x){
//     multiplier * x
// })
// }
// print(multiply(Number ,Boolean, 1, true, 2, 3, false, 7, 4, 5)
// )

function multiply(multiplier, ...nums) {
    return nums.map((x) =>  multiplier * x)
}

print(multiply(4,2,3,4,5, false))

// Function Constructor
function Dog(name, height) {
    this.puppy = name;
    this.stature = height;
    setInterval(()=>{
        this.stature+=1;
      print(this)
    }, 1000)
}
const Dog1 = new Dog('hush Puppy', 0);
// print(Dog1);
