const myArr = [1,2,3,4,5,6]
// console.log(myArr);

const myHeroes = ["tony","shaktimaan","sampu bapu"]
// console.log(myHeroes);

// Array methods

// myArr.push(8) // will add 8 to the existing array
// myArr.pop() // will remove a value
// console.log(myArr)

// myArr.unshift(9) // will add 9 at the start of the array
// myArr.shift() // will remove the value at the start
// console.log(myArr);

// console.log(myArr.includes(9)); // will give false
// console.log(myArr.indexOf(9)); // will give -1 as 9 is not a part of the array
// console.log(myArr)

// const newArr = myArr.join() // converts the array into a string

// console.log(myArr);
// console.log(newArr);

// slice ,splice

console.log("A" ,myArr);

const myn1 = myArr.slice(1,3) // the end value is not included
console.log(myn1);

console.log("B",myArr);

const myn2 = myArr.splice(1,3) // the end value is included.The splice method permanently removes the values from the original array
console.log(myn2);
console.log("C",myArr);