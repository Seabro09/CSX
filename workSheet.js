function flow(input, funcArray, i = 0, output = 0) {
	if (i === funcArray.length) {
    return input;
  }
  output = funcArray[i](input);
  input = output;
  console.log(output);
  i++;
  return flow(input, funcArray, i)
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7