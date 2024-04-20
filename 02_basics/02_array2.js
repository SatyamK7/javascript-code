const marvelHeroes = ["tony","bruce","thor"]
const dcHeroes = ["superman","batman","flash"]

// marvelHeroes.push(dcHeroes) // on merging the arrays using push,the second array becomes the next element of the first array i.e. dcHeroes is the fourth element of merged array

// console.log(marvelHeroes);
// console.log(marvelHeroes[2]); // will give thor as output
// console.log(marvelHeroes[3][1]); // will give batman as output 

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

// spread operator
const allNewHeroes = [...marvelHeroes,...dcHeroes] //it is preffered because it can merge two or more arrays in the simillar manner,...
console.log(allNewHeroes);

const anotherArray = [1,2,3,[4,5],6,[7,8,[9,10]]]
const realAnotherArray = anotherArray.flat(1) // here 1 inside the parenthesis is called the depth and if we set it to infinity then it will automatically detect that to what depth the array is to be expanded
// console.log(realAnotherArray);

console.log(Array.isArray("kumar"));
console.log(Array.from("kumar"));
console.log(Array.from({name:"Satyam"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));