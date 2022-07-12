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

setTimeout(printHello, 2000);

console.log("Me first!");

/////

function display(data) {
    console.log(data);
}

const futureData = fetch('https://twitter.com/will/tweets/1')

futureData.then(display); // attaches display functionality

console.log("Me First!");


////////////

function display(data){console.log(data)}
function printHello(){console.log("Hello");}
function blockFor300ms(){/*blocks js thread for 300 ms with long for loop */}

setTimeout(printHello, 0);

const futureData = fetch('https://twitter.com/will.tweets/1')

blockFor300ms();

// Which will run first?

console.log("Me first!");
