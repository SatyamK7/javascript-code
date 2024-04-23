function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(200,400));
// --------------------------------------------------------
function calculateCartPrice2(val1,val2,...num1){
    return val1,val2,num1
}

console.log(calculateCartPrice2(23,23,23,45,56));
// ---------------------------------------------------------
const user = {
    name: "kumar",
    roll: 107
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.name} and the roll number is ${anyobject.roll}`); 
     
}

// handleObject(user)

handleObject({
    name: "satyam",
    roll: 113
})
// ------------------------------------------------
const Array = [12,34,56,78]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(Array));
console.log(returnSecondValue([12,56,90,45]));