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