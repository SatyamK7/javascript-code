const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb : 'Ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is the shortcut for ${myObject[key]}`);
}

const programming = ["js","cpp","java","py"]

for (const key in programming) { 
//    console.log(key);
}

//------------------------------------------------------
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America");

for (const key in map) { // for in loop when applied to the map objects then it will not show any error but the statements will not be executed
   console.log(key);
}