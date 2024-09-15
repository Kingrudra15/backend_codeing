function fetchdata(url) {
    return new Promise(function (resolve, reject) {
        console.log("starting download from url", url);
        setTimeout(function processdownload() {
            let data = "dummy data";   //  change to undefined remember to go in error block
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
    throw {error: "new error"}    // if we want to throuw error in this ,then
})
.catch(function errorcome(err){
    console.log("error os",err);
    
})
.finally(function finalcall(){
    console.log("experiment done");
    
})
