
// My Code
function objOfMatches1(array1, array2, callback) {
  let obj = {};
  for (let i = 0; i  < array1.length; i++) {
    for (let z = 0; z < array2.length; z++ ) {
      if (callback(array1[i]) === array2[z]) {
        obj[array1[i]] = array2[z];
      }
    }
  }
  return obj;
}

//CSX Code (better)

function objOfMatches(array1, array2, callback) {
  let obj = {};
  for (let i = 0; i  < array1.length; i++) {
      if (callback(array1[i]) === array2[i]) {
        obj[array1[i]] = array2[i];
    }
  }
  return obj;
}



// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
console.log(objOfMatches1(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }