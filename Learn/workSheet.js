function eitherCallback(callback1, callback2) {
  return (element) => { // here is the ES6 arrow function syntax. It will allow us to return a generic anonymous function with the three parameters.  We initalize them first then... 
    if (callback1(element) || callback2(element)) {
        return true;
    } // here we return the boolean if either callback is true
  }
}

// important, we don't actually need to return i and array, only element. However,we can do this so that later if we need them, we have them returned. 

//Uncomment these to check your work!
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i]) === true) {
        newArray.push(array[i]); // if true, push the element to newArray
    }
  }
  return newArray;
}
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]