function deepEqual(obj, obj) {
    if (typeof (obj) === typeof (obj)) {
        return true;
    } else {
        return false;
    }
}

let obj = {
    here: {
        is: "an"
    },
    object: 2
};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {
    here: 1,
    object: 2
}));
// → false
