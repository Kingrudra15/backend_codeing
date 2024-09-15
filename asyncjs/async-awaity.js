// function fetchdata(url){
//     return new Promise(function(resolve,reject){
//         console.log("starting download from url");
//         setTimeout(function processdownload(){
//             let data = "dummy data"
//             console.log("download complete");
//             resolve(data)
//             // resolve("avi")   these lines will not be executed as promise is fullfilled only once
//             // resolve(1234556)
//         },4000)
        
//     })
// }

// function writefile(data){
//     return new Promise(function(resolve,reject){
//         console.log("satrting writing", data, "in a file");
//         setTimeout(function processwritinh(){
//             let filename = "file.txt";
//             console.log("file written succefully");
//             resolve(filename)
//         },3000)
        
//     })
// }

// function fileuploading(file,url){
//     return new Promise (function (resolve,reject){
//         console.log("start uploadingvon url",url,"filename is",file);
//         setTimeout(function processupload(){
//             let result = "success";
//             console.log("uploading done");
//             resolve(result)
//         },5000)
        
//     })
// }
// // easier way to handle promise by async await

// async function processing(){
//     let downloaddata = await fetchdata("ww.google.com")
//     console.log("downloading await complete ");
    
//     let writenfile = await writefile(downloaddata);
//     console.log("write await complete ");
//     let uploadresponse = await fileuploading(writenfile,'www.drive.com');
//     console.log("upload await complete ");
//     console.log("complete process with response: ", uploadresponse);

//     return true;
    
// }
// // can t await outside async and cant withou async


// processing();


// ex2+++++++++

function fetchdata(url){
    return new Promise(function(resolve,reject){
        console.log("starting download from url",url);
        setTimeout(function processdownload(){
            let data = "dummy data"
            console.log("download complete");
            resolve(data)
            // resolve("avi")   these lines will not be executed as promise is fullfilled only once
            // resolve(1234556)
        },4000)
        
    })
}

async function processing(){
    console.log("entering prcessing");
    let value1 = await fetchdata("www.google.com")
    console.log("yputube downloading done");
    let value2 = await fetchdata("www.google.com")
    console.log("google downloading done");
    console.log("exiting processing");
    
    return value1 + value2;
}

    console.log("start");
    setTimeout(function timer1() {console.log("timer1");
    },0)
console.log("after setting timetr1");
let x = processing();
x.then(function(value){
    console.log("finally processing promise resolve with ", value); 
})
setTimeout(function timer2(){console.log("timer 2")},1000)
setTimeout(function timer3(){console.log("timer 3")},0)
console.log("end");


    