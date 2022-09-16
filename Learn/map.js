// Simple usage of map method

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]



//Here we are using the map method to run the three functions that are elements in the array on each element of the first array 

function multiMap (valArr, callbackArr) {
  let obj = {};
  for (let element of valArr) {
    obj[element] = callbackArr.map(eachFunc => eachFunc(element)) // here we can use map to run the functions within the array on each element. 
  }
  return obj;
}

// Uncomment these to check your work!
 function uppercaser(str) { return str.toUpperCase(); }
 function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
 function repeater(str) { return str + str; }
	const items = ['catfood', 'glue', 'beer'];
	const functions = [uppercaser, capitalize, repeater];
	//console.log(multiMap1(items, functions));
	console.log(multiMap(items, functions));