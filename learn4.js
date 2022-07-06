//Recursion

//Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.

// // My Code

// let counter = 0;
// let finalChar = "";
// function repeater(char) {
// 	if (counter === 5) { // base case
//     return finalChar;
//   }
//   counter++;
//   finalChar = char.repeat(counter);
//   return repeater(char) // recursive case
// }

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g'));
// counter = 0;
// finalChar = "";
// console.log(repeater('j'));

// CSX Code

function repeater(char) {
  if (char.length === 5) { // need to remember .length property
    return char;
  }
  
	return repeater(char + char[0]) // recursive case - even with strings, you can find their first index. Here we simply add on one g in each recursive call
}
console.log(repeater('g'));
console.log(repeater('j'));

/////////////////////////////////////////


// My Code 

function factorial(num, counter = num) {
	if (counter === 1) return num; // base case should be 1. If 0, you will multiply by 0 and get 0
  return factorial(num *= counter - 1, counter - 1) // recursive case decrementing counter and passing in newNum as a new parameter.
}

// able to use two lines of code for this whole factorial call. We can pass in the functionality as a parameter( in a sense).

console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(5)); // -> 120
console.log(factorial(7)); // -> 5040

/////////////////////////////////////////////////////

// 

function getLength(array, total = 0) { // pass in the array and another variable total as storage
	if (array.at(-1) === undefined) return total; // basecase using at() method
  array.pop(); // pop off the last element of the array
  total++ // at the same time, increment total
  return getLength(array, total) // recursive case
}

// To check if you've completed the challenge, uncomment these console.logs!

console.log(getLength([1]));
console.log(getLength([1, 2]));
console.log(getLength([1, 2, 3, 4, 5]));
console.log(getLength[]));


//////////////////////////////////////////

//Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

// add in parameters counter = 0 for base case, total = base 
function pow(base, exponent, counter = 0, total = 1) {
	// base case, if counter === exponent, return total
  if (counter === exponent){
    return total;
  }
  // total which has a value of 1 to start, multiply by 2 4 times.
 	total *= base; 
  //counter ++ , we want counter to equal 4
  counter++ 
  // recursive case,  return base, exponent, counter
  return pow(base, exponent, counter++, total);
}

console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
console.log(pow(2, 3)); // -> 8

///////////////////////////

//Write a function that takes an array of functions and a number that will be piped through all those functions. The input number passes through the first function, whose output is passed as input to the second function, whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.

// // My Code

// function flow(input, funcArray, i = 0, output = 0) {
// 	if (i === funcArray.length) {
//     return input; // we return input and NOT output here because its like if we were going to return the input to a new function, but there are no more functions.  So just return what the input would have been.
//   }
//   output = funcArray[i](input); // second time the function is called, the input is actually whatever the output is from the previous call
//   console.log(output);
//   i++;
//   return flow(output, funcArray, i) // output now passed in 
// }

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
function add2(num) { return num + 2; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10, add2];
console.log(flow(2, arrayOfFunctions)); // -> -7

// CSX Code

function flow(input, funcArray) {
  if (funcArray.length === 0) return input; // return the input, not output
	const output = funcArray[0](input);
 return flow(output, funcArray.slice(1)); // on the first recursive call, pass in funcArray but slice off the first function
}




//////////////////////////////////////////


//Write a function that takes two arrays as inputs, representing the top and bottom halves of a deck of cards, and shuffles them together. The function will return a single array containing the elements from both input arrays interleaved, like so:
//
//the first element should be the first element of the first input array,
//
//the second element should be the first element of the second input array,
//
//the third element should be the second element of the first input array,
//
//the fourth element should be the second element of the second array,
//
//and so on.
//
//The arrays may be of different lengths. After interleaving the elements of the input arrays, any remaining elements should be appended to the end of the array.

// // Two Ways:

// 1.
 function shuffleCards(topHalf, bottomHalf, newArr = []) { // add a new array as a param
 	//base case - if no more elements in first array AND no more elements in second array, return the new array
 	if ((topHalf.length === 0) && (bottomHalf.length === 0)) return newArr;
  
   // if there are elements in the first array, add the first element to the new array.  Then move on to the bottom half
   // console.log(topHalf);
   // console.log(bottomHalf);
   	if (topHalf.length !== 0) newArr.push(topHalf.shift());
    
   // if there are elements in the second array, add that first element to the new array, Then move on to the recursive call
   	if (bottomHalf.length !== 0) newArr.push(bottomHalf.shift()); 
  
   return shuffleCards(topHalf, bottomHalf, newArr)
 //return the function and pass in the two halves plus the new array
 }

/////////

// 2.
function shuffleCards(topHalf, bottomHalf,results = []) {
    if(topHalf.length === 0 && bottomHalf.length === 0) return results;
    if (topHalf.length !== 0) results.push(topHalf[0])
    if (bottomHalf.length!==0) results.push(bottomHalf[0])
    return shuffleCards(topHalf.slice(1), bottomHalf.slice(1),results); // we can slice off the first element as a parameter in the recursive call 
}


// UNCOMMENT TO TEST YOUR WORK
const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));
  /*-> ['Queen of Diamonds',
        'Jack of Hearts',
        'Five of Hearts',
        'Ten of Spades',
        'Ace of Spades',
        'Eight of Clubs',
      ]
  */


////////////////////////////////////////////////////////////////