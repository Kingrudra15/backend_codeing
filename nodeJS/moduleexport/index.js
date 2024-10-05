import searching,{linearsearch,binarysearch} from './searchingalgo.js'
console.log(searching, linearsearch,binarysearch);

// does not provide an export named 'default' what is default export we know fyrther 
//but after add package .json we are not getting error like import not found 
// change algo file to cjs one ways it changes to cjs and in this export works
// another way is to use export insteadof module exports

// what if we use rewquirew?
// const x = require('./searchingalgo.js')
// console.log(searching);

//ReferenceError: require is not defined in ES module scope, you can use import instead
//This file is being treated as an ES module because it has a '.js' file extension and 
//package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.