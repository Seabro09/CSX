// ADD CODE HERE

function reduce(array, instructions, initialValue) {
    if (Array.isArray(array)) {
  		let accumulator = initialValue;
  		let totals = 0;
    	for (let i = 0 ; i < array.length; i++) {
      	accumulator = instructions(accumulator, array[i])
    		totals = accumulator
    	}
  	return totals;
	}
  return "The first argument should be an array";
}


// Uncomment these to check your work!
// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

// ADD CODE HERE

function intersection(arr1, arr2, arr3) {
    let finalArray = [];
    for (let i = 0; i < arr1.length; arr1++){
        for (let z = 0; z < arr2.length; arr2++) {
            if (arr2[z] === arr1[i]) {
                finalArray.push(arr2[z]);
            }
        }
    }
    for (let y = 0; y < arr1.length; arr1++) {
        for (let x = 0; x < arr3.length; arr3++){
            if (arr3[x] === arr1[i]) {
                finalArray.push(arr1[z]);
            }
        }
    }
    return finalArray;
}

// Uncomment these to check your work!
// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]