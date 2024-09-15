// async function fun(){
//     console.log("entered");
//     let x = await 20;  // value is constance but still await because for 0 time it assume it as
//     // pending promise and come out side ec=xecute and again go 
//     console.log("exit");
//     return x  
// }

// console.log("start");
// let val = fun();
// val.then(function f(value){
//     console.log("value is ",value);
    
// })
// console.log("end");

// function fetchdata(url) {
//     return new Promise(function (resolve, reject) {
//         console.log("starting download from url", url);
//         setTimeout(function processdownload() {
//             let data = "dummy data";
//             console.log("download complete");
//             resolve(data);
//         }, 5000);
//     });
// }

// let x = fetchdata("hdvbdjvb")
// x.then(function success(){
//     console.log("value is", value); 
// }, function err(err){
//     console.log("error is",err);
    
// })
// .then(function success1(v){
//     console.log("value againis",v); 
// })  // using this e can handle erreor and we can also add .ten in this and err will handle in calback function

// another way using catcg 
// function fetchdata(url) {
//         return new Promise(function (resolve, reject) {
//             console.log("starting download from url", url);
//             setTimeout(function processdownload() {
//                 let data = "dummy data";
//                 console.log("download complete");
//                 resolve(data);
//             }, 5000);
//         });
//     }
    
//     let x = fetchdata("hdvbdjvb")
//     x.then(function success( v){
//         console.log("value is", v); 
//         return 10;
//     })  // using this e can handle erreor
//     .then(function success1(v){
//         console.log("value againis",v); 
//     })
//     .catch(function errorcome(err){
//         console.log("error os",err);
        
//     })
//     // we can handke err by both ways

// what if we have catch and erro callback function both 

function fetchdata(url) {
    return new Promise(function (resolve, reject) {
        console.log("starting download from url", url);
        setTimeout(function processdownload() {
            let data = "dummy data";
            console.log("download complete");
            if(typeof data == undefined){
                reject(data);
            }
            else{
                resolve(data)
            }

        }, 5000);
    });
}

let x = fetchdata("hdvbdjvb")
x.then(function success( v){
    console.log("value is", v); 
    return 10;
})
.then(function success1(v){
    console.log("value againis",v); 
})
.catch(function errorcome(err){
    console.log("error os",err);
    
})
