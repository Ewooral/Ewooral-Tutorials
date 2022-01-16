function add(a:number, b:number):number{
    return a + b;
}

console.log( add(3, 5))

// a function that takes in an array and searches for a particular element
const nemo: string[] = ["Nemo"];

function findNemo(array: string[]){
    for(let i = 0; i < array.length; i++){
        if(array[i] == "Nemo"){
            console.log("Found Nemo");
        }
    }
}
findNemo(nemo);