let counter = 0;
function recurse(){
    counter++;
    console.log(counter);
    recurse();
}