// Programmed by Boahen Owusu Elijah
// All copyright © reserved


function getMonthName(mo) {
  mo = mo - 1 ; // Adjust month number for array index (1 = Jan, 12 = Dec)
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'Invalid Month index Keyed in. Try again!!'; // throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName('jan'); // function could throw exception
  console.log(monthName)
}
catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}

// spits out error
function logMyErrors(error){
    console.error(error)
}


// HAVE YOU EATEN??
console.log(".................................")
function eaten(d){
    if(d === 'Yes' || d === 'yes' 
    || d === 'YES' || d === 'y' || d === 'Y'){
        console.log(true)
    } else
    throw (new Error(false))
    
   
}

try{
eaten("YeS")
}

catch (e){
    // console.error(e)
    logMyErrors(e.name)
    logMyErrors(e.message)
  
}
finally{
//   console.log("Hmmm... Food is very important!!")
}
