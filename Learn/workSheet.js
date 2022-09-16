const obj = {color: "blue", height: "6-2", weight: 180}

function inOperator(object, property) {
    if ( property in object) {
        return object[property];
        
    } else {
        return false;
    }
}

console.log(inOperator(obj, "color"));