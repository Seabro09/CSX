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