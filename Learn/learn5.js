// ASYNC

const num = 3;
function multiplyBy2 (inputnumber) {
    const result = inputNumber * 2;
    return result;
}

const output = multiplyBy2(4);
const newOutput = multiplyBy2(10);

/////////


function display(data) {
    console.log(data)
}

const dataFromAPI = fetchAndWait('https://twitter.com/will/tweets/1')

display(dataFromAPI)

console.log("Me later!");

///////


function printHello() {
    console.log("Hello");
}

setTimeout(printHello, 2000);

console.log("Me first!");

/////

function display(data) {
    console.log(data);
}

const futureData = fetch('https://twitter.com/will/tweets/1')

futureData.then(display); // attaches display functionality

console.log("Me First!");


////////////

function display(data){console.log(data)}
function printHello(){console.log("Hello");}
function blockFor300ms(){/*blocks js thread for 300 ms with long for loop */}

setTimeout(printHello, 0);

const futureData = fetch('https://twitter.com/will.tweets/1')

blockFor300ms();

// Which will run first?

console.log("Me first!");

///////////////////////////////////////////////



//Recreate the built in array method, forEach - Write a function that takes as parameters an array, arr, and a callback function, cb. The forEach function will iterate through arr passing each element and its index as arguments to cb.
//
//Create a variable named delays and assign to it an array with the numbers 200, 500, 0, and 350 (in that order).
//
//Write a function, delayLog, that takes as input a delayTime and an index, i. When invoked, the function should wait delayTime milliseconds before logging to the console, "printing element i" (with "i" replaced with the actual index passed in).
//
//Putting it all together, run the delayLog function on each item of the delays array using the forEach function you created.


// My code

function forEach(arr, cb) { // declare a function forEach with inputs arr and cb
  for (let i = 0; i < arr.length; i++) { // simple for loop
    cb(arr[i], i); // run the call back on each element and also pass in i
  }
}

let delays = [200, 500, 0, 350]; // delays - array of times

function delayLog(delayTime, i) { // declare a function delayLog and pass in the time and element number
   function place () {console.log(`printing element ${[i]}`)} // create a function that we will use in setTimeout = logs our output
  setTimeout(place, delayTime); // setTimeout function in local memory passing in the place function and the delay time
    //note, we actually don't need the place function, we can simply pass in the console.log functionality as the first argument in setTimeout
}


forEach(delays, delayLog) // call the forEach function passing in the array of times and the delayLog function

///////////////////////////////////////////////////////////////////////

//In this challenge we are going to simulate an AJAX call to get information from a server. This is not a real AJAX call, but the asynchonicity is similar.
//
//The function ajaxSimulate takes an id and a callback function as input. Modify the function so that after the database array, it will set a timer that will pass the element of database whose index matches id to the callback function after 0 ms.
//
//Create a second function storeData (outside of ajaxSimulate) that takes data as input and assigns it to the dataReceived variable already defined.
//
//Invoke the ajaxSimulate function with an id of 1 and the storeData function as the callback. Immediately after, log to the console the value of dataReceived. What do you expect it to be?
//
//Without changing anything else, copy-paste the console.log statement somewhere where it will log with the info we need.

// My code

let dataReceived;

function ajaxSimulate(id, callback) {
  const database = ['Aaron', 'Barbara', 'Chris'];
  setTimeout(callback, 0, database[id]);
}

function storeData(data) {
  dataReceived = data;
  console.log(dataReceived);
}

ajaxSimulate(1, storeData)

// console.log(dataReceived) must be in the storeData function because of the concept of the event loop and the synchronous JS code. The synchronous code has to run first and since that is the case, it will log out undefined because setTimeout (which works on the event loop) will not have run yet and therefore will not have taken the data (barbara) and stored it in dataReceived yet.



/////////////////////////////////////////////

//Write a function called runInOrder that accepts as arguments in this order -
//
//an array of functions
//an array of numbers representing times in milliseconds
//runInOrder should execute the functions in order, with the corresponding numbers in milliseconds being the time to wait from the previous invocation.

// My Code (After a bit of help from CSX)

function runInOrder(arrFunc, arrNum) {
	let total;
  for (let i = 0; i < arrFunc.length; i++) {
    total += arrNum[i];
    setTimeout(arrFunc[i], total);
  }
}

/* Uncomment the following lines and click 'run' to test your work */

function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);


// should log:
// 'hi' (after 200 ms)
// 'bye' (100 ms after 'hi')