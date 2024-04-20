// singleton

// object literals

const mySim = Symbol("key1")
const user = { 
    name : "kumar",
    age : 21,
    // mySim : "simkey", // when we use it this way then it will be a string type value(check itbu using the typeof method)
    [mySim] : "simKey", // this is the proper syntax of using a symbol inside the object
    city : "ghaziabad",
    email : "kumar@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday","Wednesday"]
}

// console.log(user["name"]);
// console.log(user.name)
// console.log(user[mySim]);
// console.log(typeof mySim);
// console.log(user);

user.email = "satyam@2002"
// console.log(user["email"]);
// console.log(user.email);

// Object.freeze(user)
user.email = "kumar7777"
console.log(user.email);

user.greeting = function(){
    console.log("Hello js users");
}

user.greeting2 = function(){
    console.log(`Hello user,${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2());