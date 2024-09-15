// ex2++++++++++++++

// function a(name){
//     return function b(){
//         console.log(name);
        
//     }
// }
// let x = a("sanket");
// console.log(x);
// x();


// ex3++++++++++++++

// function fun(){
//     let name = "harshit";
//     function callback(params){
//         console.log(college);
//         console.log(name);
        
//     }
//     return callback;
// }
// let x = fun()
// x();
// var college = "glb"
// x();

// ex4++++++++++++++
// function test(){
//     for(var i = 0; i <3;i++){
//         setTimeout(function exec(){
//             console.log(`i: ${i}`);
//         },i*1000)
//     }
// }
// test()

// function test(){
//     for(let i = 0; i <3;i++){
//         setTimeout(function exec(){
//             console.log(`i: ${i}`);
//         },i*1000)
//     }
// }
// test()

// function test(){
//     for(var i = 0; i <3;i++){
//         let j = i
//         setTimeout(function exec(){
//             console.log(`j: ${j}`);
//         },j*1000)
//     }
// }
// test()


const add = (function () {
    let counter  = 0;
    return function(){
        counter += 1;
        console.log(counter)
        return counter
    }
})();
add();
add();
add();

