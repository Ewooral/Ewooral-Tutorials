// const name = new Array(10).fill(["elijah","boahen"])
const names = ["Marry", "Kusi", "Ama"];

function findTheMiddleName(_Array, name) {
  for (let i = 0; i < _Array.length; i++) {
      if (_Array[i] === name){
          console.log(_Array[i], " was found!") ;
        
      }

  }
  

}

findTheMiddleName(names, 'Kusi')
console.log(names)
