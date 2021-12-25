/* 
A function called `addFavoritethat` receives a parameter called bookname
*/
const addFavoriteBook = (bookName) => {
  if(!bookName.includes("Great")){
    favoriteBooks.push(bookName);
  } 
}

const printFavoriteBooks = () => {
console.log(`
Favorite Books: ${favoriteBooks.length}
`)
let favoriteBook;
 for(favoriteBook of favoriteBooks){
   console.log(favoriteBook);
 }
}

const favoriteBooks = [];
addFavoriteBook("Moby Dick")
addFavoriteBook("You don't know JS yet")
addFavoriteBook("Oliver Twist the Great")
addFavoriteBook("Intro to Algorithms")
addFavoriteBook("Greater things ahead")

printFavoriteBooks()

var show = console.log
var num = 6;
var letter = `whoami`;
var anothernum = 6;

if(
  (num === letter || num === anothernum) &&
  (letter === "whoami" || `whoami`)  
){
  console.log("Yes!")
}else{
  "Laugh!"
}

function ask(question){
  setTimeout(function  waitASec(){
    show(question);
  }, 900);
}
ask("What is your name  ")


function ask(question){
  console.log(this.teacher, question)
}
function otherClass(){
  var myContext = {
    teacher:"Suzy"
  };
  ask.call(myContext, "why?")
}
otherClass();