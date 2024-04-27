

{
    let a = 10;
    const b = 34;
    var c = 45;
}
// curly braces are the scopes 
// console.log(a);// will give error because the scope of the variables a and b is inside the braces only
// console.log(b);
// console.log(c);// but the variable c will be printed without any error


// nested scope

function one(){
    const username = "Kumar"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);// gives error because website has its scope only inside the two function

    two()
}

one()

//---------------------------------------------------------------

if(true){
    const user = "satyam"
    if(user === "satyam"){
        const website = " spotify"
        console.log(user + website);
    }
    // console.log(website);
}
// console.log(user);

// ============interesting================


let f = addOne(4) // we can also call the function in this way but this way will not work for the next function(cuz that is stored inside a variable)
console.log(f);
function addOne(num){
    return num + 1
}

let d = addOne(8)
console.log(d);


const addTwo = function(num){
    return num + 2
}

let e = addTwo(45)
console.log(e);