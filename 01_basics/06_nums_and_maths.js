const score = 400 // here it is automatically understood that the entered value is a number
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString);
console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 1212.134
console.log(otherNumber.toPrecision(3));//see the answer of this

const hundreds = 100000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// --------------------------Maths------------------------------
// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2)); // will round off to the greater value
// console.log(Math.floor(4.8)); // will round off to the lesser value
// console.log(Math.sqrt(169));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1) + min); // will always give values greater than the minimum valueand lesser than the maximum value

