// object cheat sheet

const obj = {}; // new object

obj["String1"] = 1; // use brackets to set a new key/value pair or property/value pair

obj["String1"] = 2; // when we use the same key but set it equal to a new value, it simply changes the first String1 key's value 

obj["String2"] = 2; // when we use a different key and set it equal to another value, it will create a new key/value pair within the object. 

obj.string1 = 1; // if we use dot notation with a new key (notice the lower case s), we will get a new key/value pair.

obj.String1 = 1; // if we use dot notation with the same key, it will simply update the value of the String1 key's value.

obj;

////////////////////// Working with the in operator ///////////

const obj = {color: "blue", height: "6-2", weight: 180}

function inOperator(object, property) {
    if ( property in object) {
        return object[property];
        
    } else {
        return false;
    }
}

console.log(inOperator(obj, "color")); // will log to the console "blue"

/////////////////Working with Arrays as values in a key value pair. ////////////////

function groupBy(array, callback) {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let currArr = array[i]
    let finish = callback(currArr);
    if (!obj.hasOwnProperty(finish)) {
             obj[finish] = [currArr]
    } else {
        obj[finish].push(currArr)
    }
  }
  return obj; 
}
// Uncomment these to check your work!
 const decimals = [1.3, 2.1, 2.4];
 const floored = function(num) { return Math.floor(num); };
 console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

//////////////Iterating through keys and values ///////////////////////

// My Code
function goodKeys (object, callback) {	
  	let newArr = []; // created new array
  	for (const [key, value] of Object.entries(object)) { // for each key and value of object
      	if (callback(value)) { // if running the callback on the value returns true,
          newArr.push(key); // push the key into a the new array newArr.
        }
    }
  return newArr; // return newAr
}
// Uncomment these to check your work!
const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
