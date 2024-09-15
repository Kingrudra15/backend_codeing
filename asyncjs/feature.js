// // write a function to download data from url
// // write a function to save that downloaded data in a file  and return the file name
// // write a function to upload the file written in previous step to a new url.


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

// // let data = fetchdata("www.datdrive.com ")
// // let filename = writefile(data);
// // let response = fileuploading(filename,"www.drive.com");
// // .. the avobe will not work in required fashion we can use ....

// let downloadpromise = fetchdata("www.datadrive.com")
// downloadpromise.then(function processdownload(value){
//     console.log("download promise fullfiled");
//     //console.log(value);
//     // as we have acces of value then we can write file
//     let writepromise = writefile(value)
//     writepromise.then(function processwrite(value){
//         console.log("writing of filecomplete");
//         //console.log((value));
//         let uploadpromise = fileuploading(value)
//         uploadpromise.then(function processupload(value){
//             console.log("upload done");
//             console.log(value); 
//         })  
//     })    // now here promise hell created but invesrtion of control solves and callback hele never a problem
//     // now promise hell started there arre two ways to solve it

// })
let downloadpromise = fetchdata("www.datadrive.com")
 downloadpromise
.then(function prcessfownload(value){
    console.log("downloading is done with tthe following value", value);
    // return "avi" // here promise will be updated with value avi and state will be fullfill
    return value
})
.then(function processwrite(value){
    return writefile(value);
})
.then(function processupload(value){
    return fileuploading(value,"www.drive.com")
})
