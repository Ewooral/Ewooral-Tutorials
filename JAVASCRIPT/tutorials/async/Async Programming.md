# Introducing asynchronous JavaScript

    Overview: Asynchronous
    Next

In this article we'll explain what asynchronous programming is, why we need it, and briefly discuss some of the ways asynchronous functions have historically been implemented in JavaScript.
Prerequisites: Basic computer literacy, a reasonable understanding of JavaScript fundamentals, including functions and event handlers.
Objective: To gain familiarity with what asynchronous JavaScript is, how it differs from synchronous JavaScript, and why we need it.

## Asynchronous programming

    is a technique that enables your program to start a potentially long-running task, and then rather than having to wait until that task has finished, to be able to continue to be responsive to other events while the task runs. Once the task is completed, your program is presented with the result.

Many functions provided by browsers, and especially the most interesting ones, can potentially take a long time, and are therefore asynchronous. For example:

    making HTTP requests with fetch()
    accessing the user's camera or microphone with getUserMedia()
    asking the user to select files for you to access using showOpenFilePicker()

So even though you may not have to implement your own asynchronous functions very often, you are very likely to need to use them correctly.

In this article, we'll start by looking at the problem with long-running synchronous functions, which make asynchronous programming a necessity.

## Synchronous programming

Consider the following code:

```js
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"
```

This code:

    declares a string called name
    declares another string called greeting, that uses name
    logs the greeting to the JavaScript console.

What we should note here is that the browser effectively steps through the program one line at a time, in the order we wrote it, and at each point it waits for the line to finish its work, before going on to the next line. It has to do this, because each line depends on the work that was done in the preceding lines.

That makes this a synchronous program. It would still be synchronous if we called out to a separate function, like this:

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}
const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

Here makeGreeting() is a synchronous function, because the caller has to wait for the function to finish its work before the function returns.

### A long-running synchronous function

What if the synchronous function takes a long time?

This program generates a number of large prime numbers, using a very inefficient algorithm, when the user clicks the "Generate primes" button. You can control the number of primes to generate, which of course affects how long the operation will take.

<label for="quota">Number of primes:</label>
<input type="text" id="quota" name="quota" value="1000000">

<button id="generate">Generate primes</button>
<button id="reload">Reload</button>

<div id="output"></div>

```js
function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  const primes = generatePrimes(quota);
  document.querySelector(
    "#output"
  ).textContent = `Finished generating ${quota} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});
```

Try clicking "Generate primes". Depending on how fast your computer is, it will probably take a few seconds before the program displays the "Finished!" message.
The trouble with long-running synchronous functions

The next example is just like the last one, except we added a text box for you to type in. This time, try clicking "Generate primes", then typing in the text box.

You'll find that while our generatePrimes() function is running, our program is completely unresponsive: the user can't type anything, or click anything, or do anything else.

This is the basic problem with long-running synchronous functions. What we would like here is a way that our program can:

    1. start a long-running operation by calling a function
    2. have the function start the operation and return right away, so our program can still be responsive to other events
    3. be notified with the result of the operation, when it eventually completes.

That's what an asynchronous function offers us, and the rest of this module explains how they are implemented in JavaScript.
Event handlers

The description we just saw of asynchronous functions might remind you of event handlers, and if it does, you'd be right. Event handlers are really a form of asynchronous programming: you provide a function (the event handler) that will be called, not right away, but whenever the event happens. If "the event" is "the asynchronous operation has completed", then you could see how an event could be used to notify the caller about the result of an asynchronous function call.

Some early asynchronous APIs used events in just this way. The XMLHttpRequest API enables you to make HTTP requests to a remote server using JavaScript. Since this can take a long time, it's an asynchronous API, and you get notified about the progress and eventual completion of a request by attaching event listeners to the XMLHttpRequest object.

The following example shows this in action. Press "Click to start request" to send a request. We create a new XMLHttpRequest and listen for its loadend event. The handler logs a "Finished!" message along with the status code.

After adding the event listener we send the request. Note that after this, we can log "Started XHR request": that is, our program can continue to run while the request is going on, and our event handler will be called when the request is complete.

<button id="xhr">Click to start request</button>
<button id="reload">Reload</button>

<pre readonly class="event-log"></pre>

```js
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loaded", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
```

This is just like the event handlers we've encountered in a previous module, except that instead of the event being a user action, like the user clicking a button, the event is a change in some object's state.

### Callbacks

An event handler is a particular type of callback.

    A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time. As we just saw: callbacks used to be the main way asynchronous functions were implemented in JavaScript.

However, callback-based code can get hard to understand when the callback itself has to call functions that accept a callback. This is a common situation if you need to perform some operation that breaks down into a series of asynchronous functions. For example, consider the following:

```py
function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();
```

Here we have a single operation that's split into three steps, where each step depends on the last step. In our example the first step adds 1 to the input, the second adds 2, and the third adds 3. Starting with an input of 0, the end result is 6 (0 + 1 + 2 + 3). As synchronous code this is very straightforward. But what if we implemented the steps using callbacks?

```py
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, result1 => {
    doStep2(result1, result2 => {
      doStep3(result2, result3 => {
        console.log(`result: ${result3}`);
      });
    });
  });

}

doOperation();
```

    Because we have to call callbacks inside callbacks, we get a deeply nested doOperation() function, which is much harder to read and debug. This is sometimes called "callback hell" or the "pyramid of doom" (because the indentation looks like a pyramid on its side).

    When we nest callbacks like this, it can also get very hard to handle errors: often you have to handle errors at each level of the "pyramid", instead of having error handling once at the top level.

For these reasons, most modern asynchronous APIs don't use callbacks. Instead, the foundation of asynchronous programming in JavaScript is the Promise, and that's the subject of the next article.

# ..................................................................................................................................................

# HOW TO USE PROMISES

    Previous
    Overview: Asynchronous
    Next

#### Promises are the foundation of asynchronous programming in modern JavaScript. A promise is an object returned by an asynchronous function, which represents the current state of the operation.

     At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

    Prerequisites: 	Basic computer literacy, a reasonable understanding of JavaScript fundamentals, including event handling.
    Objective: 	To understand how to use promises in JavaScript.

In the last article we talked about the use of callbacks to implement asynchronous functions. With that design, you call the asynchronous function, passing in your callback function. The function returns immediately and calls your callback when the operation is finished.

With a promise-based API, the asynchronous function starts the operation and returns a Promise object. You can then attach handlers to this promise object, and these handlers will be executed when the operation has succeeded or failed.
Using the fetch() API

Note: In this article we will explore promises by copying code samples from the page into your browser's JavaScript console. To get set up for this:

    open a browser tab and visit https://example.org
    in that tab, open the JavaScript console in your browser's developer tools
    when we show an example, copy it into the console. You will have to reload the page each time you enter a new example, or the console will complain that you have redeclared fetchPromise.

In this example we'll download the JSON file from https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json, and log some information about it.

To do this we'll make an HTTP request to the server. In an HTTP request, we send a request message to a remote server, and it sends us back a response. In this case we'll send a request to get a JSON file from the server. Remember in the last article, where we made HTTP requests using the XMLHttpRequest API? Well, in this article we'll use the fetch() API, which is the modern, promise-based replacement for XMLHttpRequest.

Copy this into your browser's JavaScript console:

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then( response => {
console.log(`Received response: ${response.status}`);
});

console.log("Started request...");

Here we are:

    calling the fetch() API, and assigning the return value to the fetchPromise variable
    immediately after, logging the fetchPromise variable. This should output something like: Promise { <state>: "pending" }, telling us that we have a Promise object, and it has a state whose value is "pending". The "pending" state means that the fetch operation is still going on.
    passing a handler function into the Promise's then() method. When (and if) the fetch operation succeeds, the promise will call our handler, passing in a Response object, which contains the server's response.
    Logging a message that we have started the request.

The complete output should be something like:

Promise { <state>: "pending" }
Started request...
Received response: 200

Note that Started request... is logged before we receive the response. Unlike a synchronous function, fetch() returns while the request is still going on, enabling our program to stay responsive. The response shows the 200 (OK) status code, meaning that our request succeeded.

This probably seems a lot like the example in the last article, where we added event handlers to the XMLHttpRequest object. Instead of that, we're passing a handler into the then() method of the returned promise.
Chaining promises

With the fetch() API, once you get a Response object, you need to call another function to get the response data. In this case we want to get the response data as JSON, so we would call the json() method of the Response object. It turns out that json() is also asynchronous. So this is a case where we have to call two successive asynchronous functions.

Try this:

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then( response => {
const jsonPromise = response.json();
jsonPromise.then( json => {
console.log(json[0].name);
});
});

In this example, as before, we add a then() handler to the promise returned by fetch(). But this time our handler calls response.json(), and then passes a new then() handler into the promise returned by response.json().

This should log "baked beans" (the name of the first product inside "products.json").

But wait! Remember the last article, where we said that by calling a callback inside another callback, we got successively more nested levels of code? And we said that this "callback hell" made our code hard to understand? Isn't this just the same, only with then() calls?

It is, of course. But the elegant feature of promises is that: then() itself returns a promise, which will be completed with the result of the function that was passed to it. This means that we can (and certainly should) rewrite the above code like this:

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
.then( response => {
return response.json();
})
.then( json => {
console.log(json[0].name);
});

Instead of calling the second then() inside the handler for the first then(), we can return the promise returned by json(), and call the second then() on that return value. This is called promise chaining and means we can avoid ever-increasing levels of indentation when we need to make consecutive asynchronous function calls.

Before we move on to the next step, there's one more piece to add. We need to check that the server accepted and was able to handle the request, before we try to read it. We'll do this by checking the status code in the response and throwing an error if it wasn't "OK":

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
.then( response => {
if (!response.ok) {
throw new Error(`HTTP error: ${response.status}`);
}
return response.json();
})
.then( json => {
console.log(json[0].name);
});

Catching errors

This brings us to the last piece: how do we handle errors? The fetch() API can throw an error for many reasons (for example, because there was no network connectivity or the URL was malformed in some way) and we are throwing an error ourselves if the server returned an error.

In the last article, we saw that error handling can get very difficult with nested callbacks, making us handle errors at every nesting level.

To support error handling, Promise objects provide a catch() method. This is a lot like then(): you call it and pass in a handler function. However, while the handler passed to then() is called when the asynchronous operation succeeds, the handler passed to catch() is called when the asynchronous operation fails.

If you add catch() to the end of a promise chain, then it will be called when any of the asynchronous function calls fails. So you can implement an operation as several consecutive asynchronous function calls, and have a single place to handle all errors.

Try this version of our fetch() code. We've added an error handler using catch(), and also modified the URL so the request will fail.

const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
.then( response => {
if (!response.ok) {
throw new Error(`HTTP error: ${response.status}`);
}
return response.json();
})
.then( json => {
console.log(json[0].name);
})
.catch( error => {
console.error(`Could not get products: ${error}`);
});

Try running this version: you should see the error logged by our catch() handler.
Promise terminology

Promises come with some quite specific terminology that it's worth getting clear about.

First, a promise can be in one of three states:

    pending: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made.
    fulfilled: the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called.
    rejected: the asynchronous function has failed. When a promise is rejected, its catch() handler is called.

Note that what "succeeded" or "failed" means here is up to the API in question: for example, fetch() considers a request successful if the server returned an error like 404 Not Found, but not if a network error prevented the request being sent.

Sometimes we use the term settled to cover both fulfilled and rejected.

A promise is resolved if it is settled, or if it has been "locked in" to follow the state of another promise.

The article Let's talk about how to talk about promises gives a great explanation of the details of this terminology.
Combining multiple promises

The promise chain is what you need when your operation consists of several asynchronous functions, and you need each one to complete before starting the next one. But there are other ways you might need to combine asynchronous function calls, and the Promise API provides some helpers for them.

Sometimes you need all the promises to be fulfilled, but they don't depend on each other. In a case like that it's much more efficient to start them all off together, then be notified when they have all fulfilled. The Promise.all() method is what you need here. It takes an array of promises, and returns a single promise.

The promise returned by Promise.all() is:

    fulfilled when and if all the promises in the array are fulfilled. In this case the then() handler is called with an array of all the responses, in the same order that the promises were passed into all()
    rejected when and if any of the promises in the array are rejected. In this case the catch() handler is called with the error thrown by the promise that rejected.

For example:

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
.then( responses => {
for (const response of responses) {
console.log(`${response.url}: ${response.status}`);
}
})
.catch( error => {
console.error(`Failed to fetch: ${error}`)
});

Here we're making three fetch() requests to three different URLs. If they all succeed, we will log the response status of each one. If any of them fail, we're logging the failure.

With the URLs we've provided, all the requests should be fulfilled, although for the second, the server will return 404 (Not Found) instead of 200 (OK) because the requested file does not exist. So the output should be:

https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200

If we try the same code with a badly formed URL, like this:

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
.then( responses => {
for (const response of responses) {
console.log(`${response.url}: ${response.status}`);
}
})
.catch( error => {
console.error(`Failed to fetch: ${error}`)
});

...then we can expect the catch() handler to run, and we should see something like:

Failed to fetch: TypeError: Failed to fetch

Sometimes you might need any one of a set of promises to be fulfilled, and don't care which one. In that case you want Promise.any(). This is like Promise.all(), except that it is fulfilled as soon as any of the array of promises is fulfilled, or rejected if all of them are rejected:

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
.then( response => {
console.log(`${response.url}: ${response.status}`);
})
.catch( error => {
console.error(`Failed to fetch: ${error}`)
});

Note that in this case we can't predict which fetch request will complete first.

These are just two of the extra Promise functions for combining multiple promises. To learn about the rest, see the Promise reference documentation.
async and await

The async keyword gives you a simpler way to work with asynchronous promise-based code. Adding async at the start of a function makes it an async function:

async function myFunction() {
// This is an async function
}

Inside an async function you can use the await keyword before a call to a function that returns a promise. This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.

This enables you to write code that uses asynchronous functions but looks like synchronous code. For example, we could use it to rewrite our fetch example:

async function fetchProducts() {
try {
// after this line, our function will wait for the `fetch()` call to be settled
// the `fetch()` call will either return a Response or throw an error
const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
if (!response.ok) {
throw new Error(`HTTP error: ${response.status}`);
}
// after this line, our function will wait for the `response.json()` call to be settled
// the `response.json()` call will either return the JSON object or throw an error
const json = await response.json();
console.log(json[0].name);
}
catch(error) {
console.error(`Could not get products: ${error}`);
}
}

fetchProducts();

Here we are calling await fetch(), and instead of getting a Promise, our caller gets back a fully complete Response object, just as if fetch() were a synchronous function!

We can even use a try...catch block for error handling, exactly as we would if the code were synchronous.

Note though that this magic only works inside the async function. Async functions always return a promise, so you can't do something like:

async function fetchProducts() {
try {
const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
if (!response.ok) {
throw new Error(`HTTP error: ${response.status}`);
}
const json = await response.json();
return json;
}
catch(error) {
console.error(`Could not get products: ${error}`);
}
}

const json = fetchProducts();
console.log(json[0].name); // json is a Promise object, so this will not work

Instead, you'd need to do something like:

async function fetchProducts() {
try {
const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
if (!response.ok) {
throw new Error(`HTTP error: ${response.status}`);
}
const json = await response.json();
return json;
}
catch(error) {
console.error(`Could not get products: ${error}`);
}
}

const jsonPromise = fetchProducts();
jsonPromise.then((json) => console.log(json[0].name));

You'll probably use async functions a lot where you might otherwise use promise chains, and they make working with promises much more intuitive.

Keep in mind that just like a promise chain, await forces asynchronous operations to be completed in series. This is necessary if the result of the next operation depends on the result of the last one, but if that's not the case something like Promise.all() will be more performant.
Conclusion

Promises are the foundation of asynchronous programming in modern JavaScript. They make it easier to express and reason about sequences of asynchronous operations without deeply nested callbacks, and they support a style of error handling that is similar to the synchronous try...catch statement.

The async and await keywords make it easier to build an operation from a series of consecutive asynchronous function calls, avoiding the need to create explicit promise chains, and allowing you to write code that looks just like synchronous code.

Promises work in the latest versions of all modern browsers; the only place where promise support will be a problem is in Opera Mini and IE11 and earlier versions.

We didn't touch on all promise features in this article, just the most interesting and useful ones. As you start to learn more about promises, you'll come across more features and techniques.

# ..........................................................................................................................................

How to implement a promise-based API

    Previous
    Overview: Asynchronous
    Next

In the last article we discussed how to use APIs that return promises. In this article we'll look at the other side — how to implement APIs that return promises. This is a much less common task than using promise-based APIs, but it's still worth knowing about.
Prerequisites: Basic computer literacy, a reasonable understanding of JavaScript fundamentals, including event handling and the basics of promises.
Objective: To understand how implement promise-based APIs.

Generally, when you implement a promise-based API, you'll be wrapping an asynchronous operation, which might use events, or plain callbacks, or a message-passing model. You'll arrange for a Promise object to handle the success or failure of that operation properly.
Implementing an alarm() API

In this example we'll implement a promise-based alarm API, called alarm(). It will take as arguments the name of the person to wake up and a delay in milliseconds to wait before waking the person up. After the delay, the function will send a "Wake up!" message, including the name of the person we need to wake up.
Wrapping setTimeout()

We'll use the setTimeout() API to implement our alarm() function. The setTimeout() API takes as arguments a callback function and a delay, given in milliseconds. When setTimeout() is called, it starts a timer set to the given delay, and when the time expires, it calls the given function.

In the example below, we call setTimeout() with a callback function and a delay of 1000 milliseconds:

<button id="set-alarm">Set alarm</button>

<div id="output"></div>

const output = document.querySelector('#output');
const button = document.querySelector('#set-alarm');

function setAlarm() {
window.setTimeout(() => {
output.textContent = 'Wake up!';
}, 1000);
}

button.addEventListener('click', setAlarm);

The Promise() constructor

Our alarm() function will return a Promise that is fulfilled when the timer expires. It will pass a "Wake up!" message into the then() handler, and will reject the promise if the caller supplies a negative delay value.

The key component here is the Promise() constructor. The Promise() constructor takes a single function as an argument. We'll call this function the executor. When you create a new promise you supply the implementation of the executor.

This executor function itself takes two arguments, which are both also functions, and which are conventionally called resolve and reject. In your executor implementation, you call the underlying asynchronous function. If the asynchronous function succeeds, you call resolve, and if it fails, you call reject. If the executor function throws an error, reject is called automatically. You can pass a single parameter of any type into resolve and reject.

So we can implement alarm() like this:

function alarm(person, delay) {
return new Promise((resolve, reject) => {
if (delay < 0) {
throw new Error('Alarm delay must not be negative');
}
window.setTimeout(() => {
resolve(`Wake up, ${person}!`);
}, delay);
});
}

This function creates and returns a new Promise. Inside the executor for the promise, we:

    check that delay is not negative, and throw an error if it is.
    call window.setTimeout(), passing a callback and delay. The callback will be called when the timer expires, and in the callback we call resolve, passing in our "Wake up!" message.

Using the alarm() API

This part should be quite familiar from the last article. We can call alarm(), and on the returned promise call then() and catch() to set handlers for promise fulfillment and rejection.

const name = document.querySelector('#name');
const delay = document.querySelector('#delay');
const button = document.querySelector('#set-alarm');
const output = document.querySelector('#output');

function alarm(person, delay) {
return new Promise((resolve, reject) => {
if (delay < 0) {
throw new Error('Alarm delay must not be negative');
}
window.setTimeout(() => {
resolve(`Wake up, ${person}!`);
}, delay);
});
}

button.addEventListener('click', () => {
alarm(name.value, delay.value)
.then(message => output.textContent = message)
.catch(error => output.textContent = `Couldn't set alarm: ${error}`);
});

Try setting different values for "Name" and "Delay". Try setting a negative value for "Delay".
Using async and await with the alarm() API

Since alarm() returns a Promise, we can do everything with it that we could do with any other promise: promise chaining, Promise.all(), and async / await:

const name = document.querySelector('#name');
const delay = document.querySelector('#delay');
const button = document.querySelector('#set-alarm');
const output = document.querySelector('#output');

function alarm(person, delay) {
return new Promise((resolve, reject) => {
if (delay < 0) {
throw new Error('Alarm delay must not be negative');
}
window.setTimeout(() => {
resolve(`Wake up, ${person}!`);
}, delay);
});
}

button.addEventListener('click', async () => {
try {
const message = await alarm(name.value, delay.value);
output.textContent = message;
}
catch (error) {
output.textContent = `Couldn't set alarm: ${error}`;  
 }
});

# ..........................................................................................................................................

Introducing workers

    Previous
    Overview: Asynchronous
    Next

In this final article in our "Asynchronous JavaScript" module, we'll introduce workers, which enable you to run some tasks in a separate thread of execution.
Prerequisites: Basic computer literacy, a reasonable understanding of JavaScript fundamentals, including event handling.
Objective: To understand how to use web workers.

In the first article of this module, we saw what happens when you have a long-running synchronous task in your program — the whole window becomes totally unresponsive. Fundamentally, the reason for this is that the program is single-threaded. A thread is a sequence of instructions that a program follows. Because the program consists of a single thread, it can only do one thing at a time: so if it is waiting for our long-running synchronous call to return, it can't do anything else.

Workers give you the ability to run some tasks in a different thread, so you can start the task, then continue with other processing (such as handling user actions).

But there's a price to pay for this. With multithreaded code, you never know when your thread will be suspended and the other thread will get a chance to run. So if both threads have access to the same variables, it's possible for a variable to change unexpectedly at any time, and this causes bugs that are hard to find.

To avoid these problems in the web, your main code and your worker code never get direct access to each others' variables. Workers and the main code run in completely separate worlds, and only interact by sending each other messages. In particular, this means that workers can't access the DOM (the window, document, page elements, and so on).

There are three different sorts of workers:

    dedicated workers
    shared workers
    service workers

In this article we'll walk through an example of the first sort of worker, then briefly discuss the other two.
Using web workers

Remember in the first article, where we had a page that calculated prime numbers? We're going to use a worker to run the prime-number calculation, so our page stays responsive to user actions.
The synchronous prime generator

Let's first take another look at the JavaScript in our previous example:

function generatePrimes(quota) {

function isPrime(n) {
for (let c = 2; c <= Math.sqrt(n); ++c) {
if (n % c === 0) {
return false;
}
}
return true;
}

const primes = [];
const maximum = 1000000;

while (primes.length < quota) {
const candidate = Math.floor(Math.random() \* (maximum + 1));
if (isPrime(candidate)) {
primes.push(candidate);
}
}

return primes;
}

document.querySelector('#generate').addEventListener('click', () => {
const quota = document.querySelector('#quota').value;
const primes = generatePrimes(quota);
document.querySelector('#output').textContent = `Finished generating ${quota} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
document.location.reload();
});

In this program, after we call generatePrimes(), the program becomes totally unresponsive.
Prime generation with a worker

For this example, start by making a local copy of the files at https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/start. There are four files in this directory:

    index.html
    style.css
    main.js
    generate.js

The "index.html" file and the "style.css" files are already complete:

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="main.js" defer></script>
    <link href="style.css"rel="stylesheet">
  </head>

  <body>

    <label for="quota">Number of primes:</label>
    <input type="text" id="quota" name="quota" value="1000000">

    <button id="generate">Generate primes</button>
    <button id="reload">Reload</button>

    <textarea id="user-input" rows="5" cols="62">Try typing in here immediately after pressing "Generate primes"</textarea>

    <div id="output"></div>

  </body>

</html>

textarea {
display: block;
margin: 1rem 0;
}

The "main.js" and "generate.js" files are empty. We're going to add the main code to "main.js", and the worker code to "generate.js".

So first, we can see that the worker code is kept in a separate script from the main code. We can also see, looking at "index.html" above, that only the main code is included in a <script> element.

Now copy the following code into "main.js":

// Create a new worker, giving it the code in "generate.js"
const worker = new Worker('./generate.js');

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector('#generate').addEventListener('click', () => {
const quota = document.querySelector('#quota').value;
worker.postMessage({
command: 'generate',
quota: quota
});
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener('message', message => {
document.querySelector('#output').textContent = `Finished generating ${message.data} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
document.location.reload();
});

    First, we're creating the worker using the Worker() constructor. We pass it a URL pointing to the worker script. As soon as the worker is created, the worker script is executed.
    Next, as in the synchronous version, we add a click event handler to the "Generate primes" button. But now, rather than calling a generatePrimes() function, we send a message to the worker using worker.postMessage(). This message can take an argument, and in this case we're passing a JSON object containing two properties:
        command: a string identifying the thing we want the worker to do (in case our worker could do more than one thing)
        quota: the number of primes to generate.
    Next, we add a message event handler to the worker. This is so the worker can tell us when it has finished, and pass us any resulting data. Our handler takes the data from the data property of the message, and writes it to the output element (the data is exactly the same as quota, so this is a bit pointless, but it shows the principle).
    Finally, we implement the click event handler for the "Reload" button. This is exactly the same as in the synchronous version.

Now for the worker code. Copy the following code into "generate.js":

// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`
addEventListener("message", message => {
if (message.data.command === 'generate') {
generatePrimes(message.data.quota);
}
});

// Generate primes (very inefficiently)
function generatePrimes(quota) {

function isPrime(n) {
for (let c = 2; c <= Math.sqrt(n); ++c) {
if (n % c === 0) {
return false;
}
}
return true;
}

const primes = [];
const maximum = 1000000;

while (primes.length < quota) {
const candidate = Math.floor(Math.random() \* (maximum + 1));
if (isPrime(candidate)) {
primes.push(candidate);
}
}

// When we have finished, send a message to the main thread,
// including the number of primes we generated.
postMessage(primes.length);
}

Remember that this runs as soon as the main script creates the worker.

The first thing the worker does is start listening for messages from the main script. It does this using addEventListener(), which is a global function in a worker. Inside the message event handler, the data property of the event contains a copy of the argument passed from the main script. If the main script passed the generate command, we call generatePrimes(), passing in the quota value from the message event.

The generatePrimes() function is just like the synchronous version, except instead of returning a value, we send a message to the main script when we are done. We use the postMessage() function for this, which like addEventListener() is a global function in a worker. As we already saw, the main script is listening for this message and will update the DOM when the message is received.

Note: To run this site, you'll have to run a local web server, because file:// URLs are not allowed to load workers. See our guide to setting up a local testing server. With that done, you should be able to click "Generate primes" and have your main page stay responsive.

If you have any problems creating or running the example, you can see the finished version at https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/finished and try it live at https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished.
Other types of worker

The worker we just created was what's called a dedicated worker. This means it's used by a single script instance.

There are other types of worker, though:

    Shared workers can be shared by several different scripts running in different windows.
    Service workers act like proxy servers, caching resources so that web applications can work when the user is offline. They're a key component of Progressive Web Apps.

Conclusion

In this article we've introduced web workers, which enable a web application to offload tasks to a separate thread. The main thread and the worker don't directly share any variables, but communicate by sending messages, which are received by the other side as message events.

Workers can be an effective way to keep the main application responsive, although they can't access all the APIs that the main application can, and in particular can't access the DOM.
See also

    Using web workers
    Using service workers
    Web workers API

    Previous
    Overview: Asynchronous
    Next

In this module

    Introducing asynchronous JavaScript
    How to use promises
    Implementing a promise-based API
    Introducing workers
    Assessment: sequencing animations

## ......................................................................................

In JavaScript, a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It is a way to handle asynchronous operations such as fetching data from an API or reading a file, without blocking the main thread of execution.

A promise has three states:

- Pending: The initial state, meaning that the promise is neither fulfilled nor rejected.
- Fulfilled: The operation completed successfully and the promise has a resulting value.
- Rejected: The operation failed and the promise has a reason for the failure.

Promises allow you to chain asynchronous operations together, making it easier to handle complex workflows. They also provide a way to handle errors in a more structured way, using the catch() method to handle any rejected promises.

Here's an example of how to create a promise in JavaScript:

```ts
const promise = new Promise((resolve, reject) => {
  // Do some asynchronous operation
  if (/_ Operation successful _/) {
    resolve("Resulting value");
  } else {
    reject("Reason for failure");
  }
});

promise
  .then((result) => {
    // Do something with the resulting value
  })
  .catch((error) => {
    // Handle the error
  });
```

In this example, the promise is created with a function that takes two arguments: resolve and reject. These are functions that are used to either fulfill or reject the promise. Once the promise is created, you can use the then() method to handle the successful completion of the promise, and the catch() method to handle any errors.
