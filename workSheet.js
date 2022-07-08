const num = 3;
function multiplyBy2 (inputnumber) {
    const result = inputNumber * 2;
    return result;
}

const output = multiplyBy2(4);
const newOutput = multiplyBy2(10);

/////////


function display(data) {
    console.log(data)
}

const dataFromAPI = fetchAndWait('https://twitter.com/will/tweets/1')

display(dataFromAPI)

console.log("Me later!");

///////


function printHello() {
    console.log("Hello");
}

setTimeout(printHello, 1000);

console.log("Me first!");

