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