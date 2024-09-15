// console.log("Start of the file");

// setTimeout(function timer1() {
//     console.log("Timer 1 done");
// }, 0);

// for (let i = 0; i < 10000000000; i++) {
//     // something
// }

// let x = Promise.resolve("Sanket's promise");
// x.then(function processPromise(value) {
//     console.log("Whose promise? ", value);
// });

// setTimeout(function timer2() {
//     console.log("Timer 2 done");
// }, 0);

// console.log("End of the file");


// example2===============
// function dummypromise(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("timer promise")
//         },10000)
//     })
// }
// console.log("Start of the file");

// setTimeout(function timer1() {
//     console.log("Timer 1 done");
//     let y = dummypromise()
//     y.then(function promise(value){
//         console.log("whose promise ?",value);
        
//     })
// }, 0);

// let x = Promise.resolve("Sanket's promise");
// x.then(function processPromise(value) {
//     console.log("Whose promise? ", value);
// });

// setTimeout(function timer2() {
//     console.log("Timer 2 done");
// }, 0);

// console.log("End of the file");

// ex3=========
// console.log("Start of the file");

// setTimeout(function timer1() {
//     console.log("Timer 1 done");
//     let y = Promise.resolve("immediately promise")
//     y.then(function promise(value){
//         console.log("whose promise ?",value);
        
//     })
// }, 0);

// let x = Promise.resolve("Sanket's promise");
// x.then(function processPromise(value) {
//     console.log("Whose promise? ", value);
// });

// setTimeout(function timer2() {
//     console.log("Timer 2 done");
// }, 0);

// console.log("End of the file");

// ex4==================

function dummypromise(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve("timer promise")
            },0)
        })
    }
    console.log("Start of the file");
    
    setTimeout(function timer1() {
        console.log("Timer 1 done");
        let y = dummypromise()
        y.then(function promise(value){
            console.log("whose promise ?",value);
            
        })
    }, 0);
    
    let x = Promise.resolve("Sanket's promise");
    x.then(function processPromise(value) {
        console.log("Whose promise? ", value);
    });
    
    setTimeout(function timer2() {
        console.log("Timer 2 done");
    }, 0);
    
    console.log("End of the file");