const name = "kumar";
const repoCount = 50

// console.log(name + " " +repoCount + " good");// outdated way of concatenation

console.log(`Hello my name is ${name} and my repoCount is ${repoCount} `);

const myName = new String("Kumar_Satyam")

console.log(myName[1]);
console.log(myName.__proto__);

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.charAt(4));
console.log(myName.indexOf('m'));

const newString = myName.substring(0,8);
console.log(newString);

const anotherString = myName.slice(2,8)
console.log(anotherString);

const newStringOne = "     legend     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "jdosfihdofiidhfosdihfsatyam.com"
console.log(url.replace('satyam','kumar'));

console.log(url.includes('kumar'));

const str = "jksj-kjjnlk-dsnlfk-jflk-klkdf-dsff"
const word = str.split('-')

console.log(word[4]);