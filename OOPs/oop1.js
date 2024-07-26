const user = {
    username: "kumar",
    roll: 107,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got all the details of the user");
        // console.log(this.name);// The this keuwors is used to refer the current context(It is the user object here)
        // console.log(this);// It will give the object here

    }

}

// console.log(user.getUserDetails());
// console.log(this);// It will print empty curly braces because here there no any current context which is reffered by the this keyword
// But if we write the same statement in the browser then we will get a lot of objects like the window object because this keyword refers to the parent context in which it is used

function User(username,loginCount,isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function () {
        console.log(`The username is ${this.username}`);
    }

    // return this
}

const userOne = User("Kumar",8,false)
// const userTwo = User("Satyam",7,true)

const userTwo = new User("Satyam",7,true)// he new keyword is used to create a new object


console.log(userTwo);