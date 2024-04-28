const user = {
    username : "Hitesh",
    price: 444,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    } 
}

// user.welcomeMessage()
// user.username = "Satyam"
// user.welcomeMessage()                  

console.log(this);


function chai(){
    let username = "Satyam";
    // console.log(this);
    // console.log(this.username);// gives undefined
}

// chai()

// const coffee = function (){
//     let username = "Kumar"
//     console.log(this.username);
// }

const coffee = () => {
    let username = "ssss";
    console.log(this.username);
    console.log(this);
}

coffee() 
//===============================================
// const add = (num1,num2) => {
//     return num1 + num2;
// }

//======================================
const add = (num1,num2) => (num1 + num2)
const add1 = (num1,num2) => num1 + num2
const rr = () => (username = "kumar")
// when using the retuen keyword the content should be inside the curly braces but when we are not writing the return statement then the content should be inside the paranthesis
console.log(add(3,4));
console.log(add1(3,4));
console.log(rr());