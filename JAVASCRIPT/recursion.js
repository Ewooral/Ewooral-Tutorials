let counter = 0;
function recurse(){
    if(counter === 1000) return "done";
    counter++;
    console.log(counter);
    return recurse();
}
console.log(recurse()); 