let _o = console.log
console.log("hey " + "key")
console.log("hey " +  4)
console.log(!false)
console.log(2 < 4)
console.log(3 == 2)
console.log(3 === 2)
console.log(true && false) // 
console.log(true || false) // 
_o(typeof "hey")
_o(typeof 4)
_o(typeof !false)
_o(typeof undefined)
_o(typeof null)
_o(typeof {age:40})
_o(typeof [1,2,3])
var age = 39
age++
age +=2
_o(age)


 
function greetStudent(student){
    _o(`Good Morning ${student}`)
}
var students = ["Sarah", "John", "Ishmael", "Babra", "Priyanka"]
 while (students.length > 0){
     let student = students.shift();
     greetStudent(student)
     _o(students)
 }