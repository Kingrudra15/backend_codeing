//how we can access function written inside searching .js
// using require we can access export modules i another type
// this is common moddule of js it is by defualt enable es need to enable by some extra effort
const searching = require('./searching.js'); // Corrected file name

console.log("start");
let arr = [4, 5, 2, 8, 9, 7, 5, 1,6,21];
let x = 6;
console.log(searching.linear(arr, x));

// in es modules we use import let see
// import searching from './searching.js'
// console.log("start");
// let arr = [4, 5, 2, 8, 9, 7, 5, 1,6,21];
// let x = 6;
// console.log(searching.linear(arr, x));

// // get error we can use it 

