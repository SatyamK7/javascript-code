// for of loop

const myArray = [1,2,3,4,5];

for (const i of myArray) {
    console.log(i);
}
i = 0
const greeting = "Hello world";
for (const t of greeting) {
    console.log(`${i++}th character is ${t}`);   
}

// maps
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America");


console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [i,j] of map) {
    console.log(i,':-',j);
}
// -------------------------------------------------------------
const myObject = {
    'game' : 'NFS',
    'game2': 'Spiderman'
}

for (const [i,j] of myObject) {
    console.log(i,':-',j);
}