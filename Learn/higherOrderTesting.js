// Thinking about higher order testing with booleans

function every(array, test) {
    let tFalse;
    array.forEach((element) => {
        if (!test(element)) {
            tFalse = false;
        }
    });
    if (tFalse !== undefined) {
        return false;
    } else {
        return true;
    }
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
console.log(every([4, 5, 67, 3, 78], n => n < 10));

console.log(every([3, 4, 5], n => n > 10));

console.log(every([74, 85, 93], n => n > 10));
