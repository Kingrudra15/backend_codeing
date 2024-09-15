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

function writefile(data){
    return new Promise(function(resolve,reject){
        console.log("satrting writing", data, "in a file");
        setTimeout(function processwritinh(){
            let filename = "file.txt";
            console.log("file written succefully");
            reject(filename)
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
    try{
        let downloaddata = await fetchdata("ww.google.com")
        let file = await writefile(downloaddata);
        let uploadresponse1 = await fileuploading(writenfile,'www.drive.com');
        return uploadresponse1;
        
    }catch(err){
        console.log(err);
        
    }

}
console.log("start");
processing();
console.log("end");

// try catch use for handle error in async await