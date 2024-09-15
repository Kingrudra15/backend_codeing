// function fun(inputString,fn){
//     //execute some algorithm onthe string
//     //internal function we are just using it for examnple
//     let output = inputString.split(','); // output of the array
//     for(let i = 0; i< output.length; i++){
//         fn(output[i]);
//         // fn(output[i]);
//         //for example is someone is used this function for 2 time then it will be a blunder
//         // for ex if this function is booking funtion then the person get 2 booking  a time then we are att
//         //loss
//     };
// }
// // uisng above functionjj
                                                           
// fun("name:sanket,subject:cse",function process(ip){
//     let arr = ip.split(':');
//     console.log("{",arr[0], "==>", arr[1],"}");
    
// })

// ex2+++++++++++++++++++++++

// write a function to download data from url
// write a function to save that downloaded data in a file  and return the file name
// write a function to upload the file written in previous step to a new url.

function fetchCustom(url,fn){
    // download content of url
    // this downloading can take sometime,
    // we will download the content from url and then whatever is the result,we will pass to the callback
    
    console.log("starting downloading data",url);
    setTimeout(function process(){
        console.log("download complete");
        let response = "dummy data"
        fn(response)
        
    },3000);
}
    function writefile(data,fn){
        console.log("started writing data",data);
        setTimeout(function process(){
            console.log("wrriteing complete");
            let filename = "outpu.txt"
            fn(filename);
        }, 4000);
        
    }

    function uploadfile(filename,newurl,fn){
        console.log("UPLOAD STARTED");
        setTimeout(function Process(){
            console.log("file", filename, "uploaded successfully on", newurl);
            let uploadresponse = "success";
            fn(uploadresponse)
        },2000)
        
    }
fetchCustom("www.google.com",function downloadcallback(response){
    console.log("download response",response);
    writefile(response,function writecallback(filenameresponse){
        console.log("new fuile written is",filenameresponse);
        uploadfile(filenameresponse,"www.drive.com",function (uploadresponse){
            console.log("succesfully uploaded",uploadresponse);
            
        })
    })
    
})