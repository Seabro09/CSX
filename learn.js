const num = 3;
function multiplyBy2 (inputNumber) { // inputNumber is the parameter
    const result = inputNumber*2;
    return result;
}

const output = multiplyBy2(4); // 4 is the Argument


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function disemvowel(string) {
  let finalString = "";
  for (let i = 0; i < string.length; i++) {
    if ((string.charAt(i) !==  "o") && (string.charAt(i) !== "e") && (string.charAt(i) !== "a") && (string.charAt(i) !== "i") && (string.charAt(i) !== "u")) {
          finalString += string.charAt(i);
    } 
  }
  return finalString;
}

// Uncomment these to check your work!
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'