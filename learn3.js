// Closure, Scope, and Execution Context

// simple example below of returning a function

// My Code

function createFunction() { // declare a function in global memory with the label createFunction
  function helloWorld() { // declare a function in LOCAL memory with the label helloWorld
  	return "hello world"; // return the string "hello world" to the function helloWorld
  }
  return helloWorld; // return the function helloWorld
}
// Uncomment these to check your work!
const myFunction = createFunction(); // declare a constant in global memory called myFunction and store in it the invoked function createFunction(); that will return the function definition helloWorld() and it's "backpack"
console.log(myFunction()); //should log: 'hello world'

/////////////////////////////////////////////////////

// My Code

function createFunctionWithInput(param) { // declare a function with label createFunctionWithInput in global memory and pass in an argument(input); 
  function returnString() { // declare a function with label returnString in local memory
    if (param == 'sample') { // if input is sample, return sample
      return 'sample';
    } else { // else return hello
      return 'hello';
    }
  }
  return returnString; // return function definition of returnString and its backpack
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc = createFunctionWithInput('sample'); //delcare a constant named sampleFunc and on the left side, we grab the function definition (and backpack) of returnString that is within createFunctionWithInput
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'

// CSX Code

function createFunctionWithInput(input) {
    //create new function
    function printInput(){
        //return input value.. inportant.. we don't need the if statement. it will simply return what we passed in as input
        return input;
    }
    //return new function
    return printInput; 
}

////////////////////////////////////////////////////////////

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter(); // logs 1
willCounter(); // logs 2
willCounter(); // logs 3

jasCounter(); // logs 1, the backpack starts over
// brand new local memory
// "distinct functions with independent permanent memories"
willCounter(); // logs 4

///////////////////////////////////////////////

//Another Example of Closure/Backpacks

// My Code

function addByX(param) { // declare a function with label addByX in global memory with a parameter
  function finalAdd(param1) {
    return param1 + param;
  }
  return finalAdd;
}

const addByTwo = addByX(2); // declare a constant addByTwo and set it equal to the invoked function of addByX with a parameter of 2.  It will return the function finalAdd back into addByTwo with it's backpack. 
const addByThree = addByX(3);
const addByFour = addByX(4);

// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(1)); // will return 3
// Now call addByTwo with an input of 2 and log the output
console.log(addByTwo(2)); // will return 4

console.log(addByThree(2));
console.log(addByFour(6));

////////////////////////////////////////////////////

//Once Challenge - Useful for when we only want a function to run once 

// My Code (CSX Assisted)

function once(callback) { // declare a function in global memory labeled once with an input parameter "callback" 
  let hasBeenCalled = false; // helps determine if callback has been ran yet. Set it to false first. 
  let cachedResult; // where we will store our invoked callback
 	function call(...args) { // declare a function in local memory named "call" and pass in args using spread syntax. This is useful when passing in a variable numnber of arguments
    if (hasBeenCalled === false) { //if call back has not been ran
        cachedResult = callback(...args); // store the invoked callback in cachedResult
      	hasBeenCalled = true; //hasBeenCalled is now true letting us know the callback has been ran once
    }
    return cachedResult; // return cachedResult back to the inner function "call"
  }
  return call; //return call out and back to the constant addByTwoOnce
}

const addByTwoOnce = once(function(num) { //declare a constant in local memory, return the function definition of the inner function "call" that is within the once function. 
  return num + 2;
});

//it is importatnt to notice that the second time that we run addByTwoOnce.. we doing nothing with the once function. We are simply looking back into the local memory of addByTwoOnce, pulling out it's backpack and function definition, and noticing that hasBeenCalled is now true so we bypass running the call back again and simply log out the previous cachedResult,  which is 7.
// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7 // log out the function addByTwoOnce and pass in 5 as it's input. 
console.log(addByTwoOnce(10));  //should log 7 // Callback is ran again so should log same thing.
console.log(addByTwoOnce(9001));  //should log 7


////  Without Comments ////

function once(callback) {
    let hasBeenCalled = false;
         let cachedResult;
         function call(...args) 
         if (hasBeenCalled === false) { 
             cachedResult = callback(...args); 
             hasBeenCalled = true;
         }
        return cachedResult;
    }
    return call;
}

const addByTwoOnce = once(function(num) {
      return num + 2;
});

console.log(addByTwoOnce(5)); 
console.log(addByTwoOnce(10)); 
console.log(addByTwoOnce(9001)); 


/////////////////////////////////////////////////


// Another Example
// ADD CODE HERE

// My Code

function after1(num, callback) {
  let result;
  let counter = 1;
  function call(string){
    if (counter !== num) {
      counter++
    } else {
      result = callback(string);
    } 
    return result;
  } 
  return call;
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);
const afterCalled1 = after(3, called);


///// The function of call() has it's own local memory and that is returned to afterCalled. It remembers that coutner is incrememnted and once it gets to 3, it runs the call back on the string "world" that was passed into afterCalled() and subsequently, call()


//CSX Code

function after(numOfCalls, callback) {
  let count = 0;
  return function(...args) { // we don't even have to name a function with a label. We can just return a general function with the result being the callback function on the given parameter to afterCalled if the conditions are met
    count += 1; // increment by 1
    if (count >= numOfCalls) {
      return callback(...args);
    } // if these conditions are not met, it returns an undefined function
  }
}

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled1('world')); // -> undefined is printed
console.log(afterCalled1('world')); // -> undefined is printed
console.log(afterCalled1('world')); // -> 'hello world' is printed

console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed

/////////////////////////////////////////////////////////////////////

// Here is another function expanding on the concept of closure. 

// Challenge : Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

// My Code 

function cycleIterator(array) {// declare a function in global memory and pass in array
  let day = ""; // variable to hold the day
  let i = 0; // variable to hold the index position number
  return function() { // return a function back to getDay() with a backpack
    if (i === array.length) { // if i is equal to the length of the array, start over
      i = 0; // start over, so index or i is now 0;
    }
    day = array[i] // otherwise, set day equal to array index.
    i++; // increment i
    return day; // return day to the function, then return the function back to getDay() with its backpack that will have what the index postion is, and other functionality, or function definition.
  }
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun']; // declare a const in global memory and set it equal to an array.
const getDay = cycleIterator(threeDayWeekend); // declare a constant in golobal memory and set it equal to the invoked calling of cycleIterator passing in threeDayWeekend as the argument/parameter and return a function.
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'

/////////////



// CSX Code

function cycleIterator1(array) {
  let index = 0;
  return function() { // no need to name a function or have to return anything at bottom.
    const result = array[index++]; // we can simply increment array each time the function is called and pass it into result;
      if (index >= array.length) index = 0;
    return result;
  }
}

const threeDayWeekend1 = ['Fri', 'Sat', 'Sun']; 
const getDay1 = cycleIterator1(threeDayWeekend1); 
console.log(getDay1()); // should log: 'Fri'
console.log(getDay1()); // should log: 'Sat'
console.log(getDay1()); // should log: 'Sun'
console.log(getDay1()); // should log: 'Fri'
console.log(getDay1()); // should log: 'Sat'

////////////////////////////////////////////////////////////////////////////////////////////

// Challenge: defineFirstArg

//Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.

// My Code

function defineFirstArg(callback, argu) {
  let num = 0;
    function returnSubtract(...args) { // spread operator so that the returned function can accept multiple arguments
      num = callback(argu, ...args);
      return num;
    }
  return returnSubtract;
}
// Uncomment these to check your work!
const subtract = function(big, small) { 
return big - small; 
};

const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15

///////////////////////////////////////////////////////////////////////////////////

//Create a function dateStamp that accepts a function and returns a function. The returned function will accept whatever arguments the passed-in function accepts and return an object with a date key whose value is today's date (not including the time) represented as a human-readable string (see the Date object for conversion methods), and an output key that contains the result from invoking the passed-in function.

// My Code

function dateStamp1(callback) { // dateStamp takes in a callback function as an parameter
  let obj = {};
  const newDate = new Date(); // new date passed into object newDate
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  return function(n) {  // return a new function to stampedMultBy2 that has a single parmeter. 
  	obj[`date`] = (newDate.toLocaleDateString(undefined, options));; // localeDateString Function -  pass in the options we set above.
    obj[`output`] = callback(n); // run the callback on that parameter that we pass into stampedMultBy2 below
  	return obj;
  }
}

// CSX Code
// declare a function, dateStamp, that has 1 parameter
function dateStamp(func) {
  // return a function that accepts any arguments that the passed-in function accepts
  return function(...args) { // they wanted the rest parameter here.
    //create an object
    const result = {};
    //create a property with the key "date" and the value of today's date (nt including the time)
    result["date"] = new Date().toDateString();
      //create a property with the key "date" and the value of today's date (nt including the time)
    result["output"] = func(...args) // they wanted the spread operator here.
    //return the object
    return result;
  }
}


const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4));
console.log(stampedMultBy2(6));


// Uncomment these to check your work!
const stamped1MultBy2 = dateStamp1(n => n * 2); // the argument within dateStamp is what we will pass into as the callback
console.log(stamped1MultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stamped1MultBy2(6)); // should log: { date: (today's date), output: 12 }