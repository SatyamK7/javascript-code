//  const userEmail = "hfhf"
// const userEmail = []
const userEmail = ""

 if(userEmail){
    console.log("email found");
 }
 else{
    console.log("Email not found");
 }

 // falsy values
 // false, 0, -0, BigInt 0n, "", null, undefined, NaN

 // truthy values
 // "0", 'false', " ", {}, funtion (){}""

//______________________________________________________________
// detecting whether the array is empty or not
myArr = [45]

if(myArr.length === 0){
    console.log("The array is empty");
}else {
    console.log("The array is not empty");
}
 
// detecting whether the object is empty or not
myObj = {df :45}
if(Object.keys(myObj).length === 0){
    console.log("The object is empty");
} else {
    console.log("The object is not empty");
}

//---------Null Coalescing Operator(??)

let val1 = 5 ?? 10
let val2 = null ?? 30 // generally their is a complex function at the place of 30.
let val3 = undefined ?? 23
let val4 = null ?? 263 ?? 56

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
 

// ternary Operator
// condition ? true : false

// let age = 3;
let age = 5;
(age > 3) ? console.log("Tickets applied") : console.log("No ticket required");