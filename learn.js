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


/////////////////////////////////////////////////////////////////

// Here we are iterating over an array (synonyms[]) and pushing those values to a second array (greetings[]).
// Then we iterate over that array and console.log it out

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];



for (let i = 0; i < synonyms.length; i++) {
  	greetings.push('Have a ' + synonyms[i] + ' day!';
}

for (let i = 0; i < greetings.length; i++) {
    console.log(greetings[i]);
}
    
///////////////////////////////////////////////////////////////////////////
    
// Here we are working on invoking functions. Must pay attention to the concept of "return" 
    
    let calls = "";

function jerry(str) {
 str += "Jerry";
 return kramer(str); // After we run the code in the jerry() function, we return the calculated result of the kramer() function.  Then same with the george() function and so on and so forth. 
}

function george(str) {
 str += "George";
  return elaine(str);
}

function elaine(str) {
	str += "Elaine";
  return str;
}

function kramer(str) {
	str += "Kramer";
  return george(str);
}


// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'
    
//////////////////////////////////////////////////////////////////////////
    
    
// Below is another example of returning a function to another function
    
let friendsAvailable = true;

function makePlans(name) {
  return callFriend(friendsAvailable, name);
}

function callFriend(bool, name) {
  if (bool === true) {
    name = `Plans made with ${name} this weekend`;
  } else {
    name = `Everyone is busy this weekend`;
  }
  return name;
}

console.log(makePlans("Mary")) 
friendsAvailable = false;
console.log(makePlans("James")) 

// makePlans function passes in Mary as an Argument
// it then takes the name of "Mary" and runs the callFriend function.
// that function then runs an else if statement, passing in the bool of friendsAvailable
// since bool is true, it sets name variable equal to "Plans made with Mary this weekend"
// it returns that value stored in name back to callFriend whiuch is returned to makePlans which is then console.logged out
  
    
    
//////////////////////////////////////////
    
    
function getTheSum(arr){
  let sum = 0; // Able to declare sum before the for statement AND able to set it equal to 0 so it is forced to be a number instead of string
	for (let i = 0; i<arr.length; i++){
     sum += arr[i];
  }
  return sum;
}
   


// Uncomment these to check your work!
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33
    
    

/////////////////////////////////////////////
    
    
    
// In the below example, we don't have an array or properties in an object
// yet we have an unknow number of arguments that need to be passed.
// here we can iterate through using the arguments object.
// https://stackoverflow.com/questions/4116608/pass-unknown-number-of-arguments-into-javascript-function
    
// ADD CODE HERE 

function multiplyAll() { 
  let total = 1;
	for (let i = 0; i < arguments.length; i++) {
    total *= arguments[i];
  }
  return total;
}

// Uncomment these to check your work!
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375
    
//Could also do...
    

const multiplyAll = (...nums) => { 
  let total = 1;
	for (let i = 0; i < nums.length; i++) {
    total = (total * nums[i]);
  }
  return total;
}

/////////////////////////////////////////////

// below is another fairly complex example of functions and if else statements.

function closestToTheMark(player1, player2){
  let sum = 0;
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let return1 = "";
  let return2 = "";
  const theMark = Math.floor(Math.random() * 100)
  console.log(`If theMark is ${theMark}...`);
	sum = theMark - player1;
  sum1 = theMark - player2;
	sum2 = Math.abs(sum);
  sum3 = Math.abs(sum1);
  if (sum2 > sum3) {
    return "Player 2 is closest";
  } else if (sum3 > sum2) {
    return "Player 1 is closest";
  }
}


console.log(closestToTheMark(25, 75));
    
    
//////////////////////////////////////////////////////////////////////

//Below is an example of multiple conditions
    
  //  Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

//BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.
    
// function to get sum of all odd numbers in array
function getSumOfAllOddNumbersInArray(oddArray){
  var sumOfOddNumbers = 0;
  for (let i = 0; i < oddArray.length; i++) {
    // use remainder operator to find out if element is odd or not
    if (oddArray[i] % 2 !== 0 ) {
      sumOfOddNumbers += oddArray[i];
    }
  }
  return sumOfOddNumbers;
}

// function to get sum of all EVEN numbers in array
function getSumOfAllEvenNumbersInArray(evenArray){
  var sumOfEvenNumbers = 0;
  for (let i = 0; i < evenArray.length; i++) {
    // use remainder operator to find out if element is odd or not
    if (evenArray[i] % 2 === 0 ) {
      sumOfEvenNumbers += evenArray[i];
    }
  }
  return sumOfEvenNumbers;
}

// Return true if there is at least one element in array that is greater than 20
function hasElementOverTwenty(overTwentyArray ){
  for (let i = 0; i < elementArray.length; i++) {
    if (overTwentyArray[i] > 20) {
      // no need to keep looping, we found one - exit function
      return true;
    }
  }
  return false;
}


function addingAllTheWeirdStuff( firstArray, secondArray ){
  var sumOfOddNumbersInArray = getSumOfAllOddNumbersInArray( secondArray );
  var sumOfEvenNumbersInArray = getSumOfAllEvenNumbersInArray( secondArray );
  var needToAddOne = hasElementOverTwenty( secondArray );    
  for (let i = 0; i < firstArray.length; i++) {
    // Challenge One
    if (firstArray[i] < 10) {
      firstArray[i] = firstArray[i] + sumOfOddNumbersInArray;       
    } else if (firstArray[i] > 10) {
    // Challenge Two
      firstArray[i] = firstArray[i] + sumOfEvenNumbersInArray;       
    }
    // bonus
    if(needToAddOne){
      firstArray[i]++;
    }   
  }
  return firstArray;
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); 
console.log('expected:' + [10, 12, 14, 23, 21] );
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22]));
console.log('expected:' + [11, 13, 15, 46, 44, 11] );
    

    
////////////////////////////////////////////////////////////

// Now we will look at objects
    

const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
    
    
    
    
    
////////////////////////////////////////////////////////////
    
    
// Anonymous Function Expression
    

let myFunc = function() {
  return "Hi there!";
}

console.log(myFunc()) //should log: "Hi there!"
    
    
// Arrow Function 
    

let myJob = (name, profession) => `Hi, my name is ${name} and I'm a ${profession}.`

 console.log(myJob("Jon", "Knights Watchman"));
    
    
    
//////////////////////////////////////////////////////////////
    
// Below is an example of taking two calbacks and making them into one.
// need to review arrow functions
    
function eitherCallback(callback1, callback2) {
  return (element, i, array) => { // here is the ES6 arrow function syntax. It will allow us to return a generic anonymous function with the three parameters.  We initalize them first then... 
    return callback1(element, i, array) || callback2(element, i, array) // here we return the boolean if either callback is true
  }
}

// important, we don't actually need to return i and array, only element. However,we can do this so that later if we need them, we have them returned. 

//Uncomment these to check your work!
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]); // if true, push the element to newArray
  }
  return newArray;
}
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]
    
    /////////////////////////////////////////////////////////////////////////
    
function higherOrder(words, callBack) {
    const filtered = [];
    for (let i = 0; i < words.length; i++) {
        filtered.push(callBack(words[i]));
        
    }
    return filtered;
}


function censor(word) {
    const filtered = [];
    if (word.length !== 4) {
        filtered.push(word);
  }
  return filtered;
}

function startsWithS(word) {
    const filtered = [];
    if (word.startsWith('s')) {
        filtered.push(word);
  }
  return filtered;
}


let result = higherOrder(['oops', 'gasp', 'shout', 'sun', 'tomahawk', 'monkey', 'ball', 'steel', 'pogo'], censor);
console.log(result); 

let result1 = higherOrder(['oops', 'gasp', 'shout', 'sun', 'tomahawk', 'Monkey', 'ball', 'steel', 'pogo'], startsWithS);
console.log(result1); 


//////////////////////////////////////////////////////////////////////////



// ADD CODE HERE
function reduce(array, instructions, initialValue) {
    if (Array.isArray(array)) {
  		let accumulator = initialValue;
    	for (let i = 0 ; i < array.length; i++) {
      	accumulator = instructions(accumulator, array[i])
    	}
  	return accumulator;
	}
  return "The first argument should be an array";
}
// Uncomment these to check your work!
const nums = [4, 1, 3];


const add = function(a, b) { 
  return a + b; 
}
const mult = function(a,b) {
  if (a === 0) {
    return b;
  } else {
  return a * b;
  }
}

const multOri = function(a, b) {
  return a * b;
}

const number = 0;

console.log(reduce(nums, add, 0)); // should log 8
console.log(reduce(nums, mult, 0)); // should log 12
console.log(reduce(nums, multOri, 0)); // should log 0 
console.log(reduce(nums, mult, 2)); // should log 24
console.log(reduce(nums, multOri, 3))// should log 36

console.log(reduce(number, mult, 0)); // should return a statement asking for an array for first argument 




//////////////////////////////////////////////////////////////////////////

// Intersection

//Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. 

// My Code 
function intersection(array1, array2, array3) {
    let arrReturn = [];
    for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== undefined) {
        for (let z = 0; z < array2.length; z++) {
        if (array2[z] === array1[i]) {
            for (let y = 0; y < array3.length; y++) {
                if (array3[y] === array2[z]){
                    arrReturn.push(array1[i])
                    }
                }
            }
        }
    }
  } 
  return arrReturn; 
}

// CSX Code

function intersection (arrays) {
    let acc = arrays.pop(); // pop off third array and assign it to acc
    
    while (arrays.length) {  // while there are still arrays..
        const current = arrays.pop(); // pop off and  assign the second array to current
        const newArr = []; // create new array
        
        current.forEach((element) => { 
            if (acc.includes(element)) newArr.push(element);         
        })
    acc = newArr;
    }
    return acc;
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

//////////////////////////////////////////////////////////////////////////

// Union 

//Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array.

// My Code

// ADD CODE HERE

function union (arrays) {
  const newArr = [];
  let acc = arrays.shift(); // acc  is now equal to arr1
  acc.forEach((element) => {
    newArr.push(element); // for each element of arr1, push it into newArr
  })
  while (arrays.length) {
      const current = arrays.shift();
    	current.forEach((element) => {
        if (!acc.includes(element)) newArr.push(element)
      })
    acc = newArr;
  }
  return acc;
}


// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

/////////////////////////////////////////////////////////////////////////