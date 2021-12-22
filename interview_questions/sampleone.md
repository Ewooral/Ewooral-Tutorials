Frontend Pre-interview test
Full Name *
Boahen Elijah Owusu-Ewooral
Email *
boahen.cos@gmail.com
Which CSS property would you use to change text color? 
Color property

We have a 8x8 grid element with 64 cells.


Let’s write a CSS selector in order to give some of the cells a background colour:


/* ? what is the selector ? */ {
  background: gray;
}


a) .cell:every(9nth)

b) .cell:nth-child(10)

c) .cell:nth-of-type(9n + 1)

d) .cell:nth-of-type(1, 10, 19, 28, 37, 46, 55, 64)

e) Not possible, we will need to give these cells a separate CSS class 
c) .cell:nth-of-type(9n + 1)

<style>
  .block {
    height: 30px;
  }
  #block1 {
    float: left;
  }
  #block2 {
    clear: both;
  }
  #block3 {
    float: right;
  }
  #block4 {
    float: right;
  }
</style>
<div id="container">
  <div class="block" id="block1">1</div>
  <div class="block" id="block2">2</div>
  <div class="block" id="block3">3</div>
  <div class="block" id="block4">4</div>
</div>
<script>
  console.log(document.getElementById("container").offsetHeight);
</script>

Assuming there's no extra CSS or JS in the HTML5 document what is logged to the console? 
60

Which of the following options are true about pseudo classes and pseudo elements?


A) Pseudo element lets you style specific part of selected element

B) Pseudo class lets you style specific part of selected element

C) Pseudo class does not exist

D) ::last-line, ::after and ::selection are valid pseudo elements

E) ::first-line, ::after and ::selection are valid pseudo elements

F) :active, :checked and :invalid are valid pseudo classes

G) :selection, :last-child and :not() are valid pseudo classes 
Select an option
A
G
E
F
<style>
  .box + .box {
    /*???*/
  }
</style>
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>

Given this HTML and CSS what CSS rule should we put in place of the comment to have 10px between the .box elements? 
padding: 10px 

What is the difference between the regular anonymous function function() { … } and an arrow function () => { … }.


a) The arrow function binds this at the point where it was defined, while function binds this at the point where it is invoked.

b) The regular function binds this at the point where it was defined, while the arrow function binds this at the point where it is invoked.

c) Arrow functions are a performance optimization because they don't create a new scope.

d) Arrow functions are supposed to be used only with the async modifier to enable concurrency. 
b) The regular function binds this at the point where it was defined, while the arrow function binds this at the point where it is invoked.

What is the output of the following code?

const check = () => { throw new Error('Oh, it\'s an error'); };
const hello = (name = check()) => console.log(`hello_${name}`);
hello(undefined);

Note: Output is wrapped in quotes, to see the spaces in output


a) "hello_undefined"

b) "Uncaught Error: Oh, it's an error"

c) "hello_"

d) "hello_ "

e) "hello_0" 


const res = [];
while (a.length) {
  const el = a.shift();
  if (Array.isArray(el)) {
    a = el.concat(a);
  } else {
    res.push(el);
  }
}


What is the purpose of this JS snippet? 


Never submit passwords through Airtable forms. Report malicious form
Airtable
