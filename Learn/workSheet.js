let array1 = [1,2,3,4];
let array2 = [5,6,7,8];

function union2(array1, array2) {
    let finArr = [];
    for (let i = 0; i < array1.length; i++) {
    finArr.push(array1[i] + array2[i])
    }
return finArr;
}

console.log(union2(array1, array2));


function union(arrays) {
    return arrays.reduce((sumArray, currentArray) => {
        currentArray.forEach(el => {
            sumArray.push(el);
        })
        return sumArray;
    }, [])
}

const finArr = union([array1, array2])

console.log(finArr.reduce((previousValue, currentValue) => previousValue + currentValue
));

