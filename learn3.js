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
