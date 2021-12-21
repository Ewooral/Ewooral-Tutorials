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


function multiplier(x =3, y=5){
    x = x || 4 // x equals to x or 4. if x is not given a value, it will use the default value
    y = y || 2
    return x * y;
}

print(multiplier(3))

