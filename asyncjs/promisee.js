// write a function to download data from url
// write a function to save that downloaded data in a file  and return the file name
// write a function to upload the file written in previous step to a new url.
// // how can we write a function to download some data from a url and not use callback use promise

// function fetchdata(url){
//     return new Promise(function(resolve,reject ){   // new promise is cunstructure which expects to take a function 
//            console.log("starting fetching dta",url);
//         setTimeout(function process(){
//             let data = "dummy data"
//             console.log("completed fetching the data");
//             // somehow we need to return th data? need to do
//             resolve(data)   // return some data 
//         },4000)
//     })   
// }

// function fetch1(url){
//     return new Promise(function(resolve,reject){
//         for(let i = 0; i<10000000000;i++){
//         }
//         console.log("completed");
//         resolve("sanket")
//     })
// }

// fetch1("www.graphy")

// ex===================

// function demo1(){
//     return new Promise(function(resolve,rejec){
//         console.log("hi");
//         setTimeout(function process(){
//             console.log("woho task done");
//             resolve("student are best")
            
//         },1000)
//         console.log("by");
  
//     })
// }
// ex++++++++++++
// function demo2(val){
//     return new Promise(function(resolve,reject){
//         console.log("start");
//         setTimeout(function process(){
//             console.log("complete timer");
//             if(val%2 == 0){
//                 resolve("even")
//             }else {
//                 reject("odd")
//             }
//         },10000)
//         console.log("somewhere");

//     })
// }

// ex=====================

function fetchdata(url){
    return new Promise(function(resolve,reject){
        console.log("going to start downlaod");
        setTimeout(function process(){
            let data = "dumy downloadeed data"
            console.log("download complete");
            resolve(data)
            
        },10000);
        console.log("timer to mimic download started");
              
    })
}
console.log("starting the program");
console.log("we are expecting to mimic a download");
x = fetchdata("www.google.com")
console.log("new promise object created succesfullu but downl oading strill goin on");


