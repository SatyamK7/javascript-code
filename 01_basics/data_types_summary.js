// on the basis of how data is stored inside the memory and how it is accessed ,the data types are of two types primitives and non primitives
// primitves
// following are the primitives 
// Strings,boolean,number,null(means empty not 0),undefined,symbol(used for making a value unique),BigInt
const score = 200
const score1 = 7.7

const isLoggedIn = false
const outsideTemp = null
let userEmail;// it will by default be undefined

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2);

const bigNumber = 74692465n



//reference types(non-primitives):
// the reference of these is allocated in the memory
// arrays,objects,functions

const heroes = ["kumar","tony","satyam"]
let myObj = {
    name:"satyam",
    age:21,
}

const myFunction = function(){
    console.log("Hello world");
}

// how to know the data type of a particular value
console.log(typeof myFunction);
// ************ the data type of null is object