// My own example of closure

function firstFunc(num) {
    return num1 => num1 * num;
}

let secondFunc = firstFunc(10);

let result = secondFunc(40);

console.log(result); // 400
