function fetchCustom(url,fn){
    
        console.log("starting download from url",url);
        setTimeout(function processdownload(){
            
            console.log("download complete");
            let response = "dummy data"
            fn(new Error("something"),response)   // we can pass custom error here  just a codding still if we get callback we call err 
        },4000)
}

fetchCustom("www.googl.com",function(err,response){
    if(err){
        console.log("error is",err);
        return
    }
    console.log("response is", response);
    
})