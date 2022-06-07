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

//Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

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
    let acc = arrays.pop();
    
    while (arrays.length) {
        const current = arrays.pop();
        const newArr = [];
        
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