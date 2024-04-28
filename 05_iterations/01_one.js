// for loop
// myArray = [1,2,3,4,5]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     if(i == 5){
//         continue;// continue is used to skip a particular condition
//     }
//     console.log(i);
// }

for (let i = 0; i < 10; i++) {
    if(i == 5){
        break;
    }
    console.log(i);
}


for (let i = 1; i <= 5; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j < 10; j++) {
    console.log( i * j);
        
    }
    
}