let sayHello = "Hello";
console.log(sayHello);
global.console.log('sayHello'); 

console.log(__dirname);
console.log(__filename);
console.log(process);
console.log(require);

const path = require('path');
console.log(`The file name is ${path.basename(__filename)}`);

console.log(process.pid);
console.log(process.versions);
console.dir(process)
console.log('Here you are: ' + JSON.stringify(process.env));
console.log(process.argv);
 
clg = console.log;
clg('me')
clg('you') 