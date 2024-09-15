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
//     let writenfile = await writefile(downloaddata);
//     let uploadresponse1 = await fileuploading(writenfile,'www.drive.com');
//     let uploadresponse2 = await fileuploading(writenfile,'www.onedrive.com');
//     let uploadresponse3 = await fileuploading(writenfile,'www.metabase.com');
//     return uploadresponse;
    
// }
// console.log("start");
// processing();
// console.log("end");

// to resolve await heli we have some functions like promise.all()

// function fetchdata(url){
//     return new Promise(function(resolve,reject){
//         console.log("starting download from url",url);
//         setTimeout(function processdownload(){
//             let data = "dummy data"
//             console.log("download complete");
//             resolve(data)
//             // resolve("avi")   these lines will not be executed as promise is fullfilled only once
//             // resolve(1234556)
//         },5000)
        
//     })
// }

// function writefile(data){
//     return new Promise(function(resolve,reject){
//         console.log("satrting writing", data, "in a file");
//         setTimeout(function processwritinh(){
//             let filename = "file.txt";
//             console.log("file written succefully");
//             resolve(filename)
//         },4000)
        
//     })
// }

// function fileuploading(file,url){
//     return new Promise (function (resolve,reject){
//         console.log("start uploadingvon url",url,"filename is",file);
//         setTimeout(function processupload(){
//             let result = "success";
//             console.log("uploading done");
//             resolve(result)
//         },3000)
        
//     })
// }
// let downloadpromise =  fetchdata("www.drice.google.com");
// let writepromise = writefile("dummy data")
// let uploadpromise = fileuploading("test.txt","drive.google.com")
// console.log("start");
// Promise.all([downloadpromise,writepromise,uploadpromise]).then(function process(value){
//     console.log(value);
    
// })
// //this is loks simple from above but chaining is missing use case is remove async await hell


// ex222++++++++++++++++++
function fetchdata(url){
    return new Promise(function(resolve,reject){
        console.log("starting download from url");
        setTimeout(function processdownload(){
            let data = "dummy data"
            console.log("download complete");
            resolve(data)
            // resolve("avi")   these lines will not be executed as promise is fullfilled only once
            // resolve(1234556)
        },4000)
        
    })
}

function writefile(data){
    return new Promise(function(resolve,reject){
        console.log("satrting writing", data, "in a file");
        setTimeout(function processwritinh(){
            let filename = "file.txt";
            console.log("file written succefully");
            resolve(filename)
        },3000)
        
    })
}

function fileuploading(file,url){
    return new Promise (function (resolve,reject){
        console.log("start uploadingvon url",url,"filename is",file);
        setTimeout(function processupload(){
            let result = "success";
            console.log("uploading done");
            resolve(result)
        },5000)
        
    })
}
// easier way to handle promise by async await

async function processing(){
    let downloaddata = await fetchdata("ww.google.com")
    let file = await writefile(downloaddata);
    let uploadresponse1 = await fileuploading(writenfile,'www.drive.com');
    let downloaddata1 = await fetchdata("ww.google.com")
    let file1 = await writefile(downloaddata);
    let uploadresponse2 = await fileuploading(writenfile,'www.onedrive.com');
    let downloaddata2 = await fetchdata("ww.google.com")
    let file2 = await writefile(downloaddata);
    let uploadresponse3 = await fileuploading(writenfile,'www.metabase.com');
    return uploadresponse1 + uploadresponse2 + uploadresponse3;
    
}
console.log("start");
processing();
console.log("end");
