function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }

const arrayFunc = [multiplyBy2, add7];

for (let i = 0; i < arrayFunc.length; i++) {
    console.log(arrayFunc[i](2));
}

