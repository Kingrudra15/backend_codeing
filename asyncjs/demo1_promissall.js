// here each promise execute paraallel
function fetchdata(url) {
    return new Promise(function (resolve, reject) {
        console.log("starting download from url", url);
        setTimeout(function processdownload() {
            let data = "dummy data";
            console.log("download complete");
            resolve(data);
        }, 5000);
    });
}

function writefile(data) {
    return new Promise(function (resolve, reject) {
        console.log("starting writing", data, "in a file");
        setTimeout(function processwriting() {
            let filename = "file.txt";
            console.log("file written successfully");
            resolve(filename);
        }, 4000);
    });
}

function fileuploading(file, url) {
    return new Promise(function (resolve, reject) {
        console.log("start uploading on url", url, "filename is", file);
        setTimeout(function processupload() {
            let result = "success";
            console.log("uploading done");
            resolve(result);
        }, 3000);
    });
}

async function process1() {
    let downloaddata = await fetchdata("ww.google.com");
    let file = await writefile(downloaddata);
    let uploadresponse1 = await fileuploading(file, 'www.drive.com');
    return uploadresponse1;
}

async function process2() {
    let downloaddata1 = await fetchdata("ww.google.com");
    let file1 = await writefile(downloaddata1);
    let uploadresponse2 = await fileuploading(file1, 'www.onedrive.com');
    return uploadresponse2;
}

async function process3() {
    let downloaddata2 = await fetchdata("ww.google.com");
    let file2 = await writefile(downloaddata2);
    let uploadresponse3 = await fileuploading(file2, 'www.metabase.com');
    return uploadresponse3;
}

async function processing() {
    let [uploadresponse1, uploadresponse2, uploadresponse3] = await Promise.all([process1(), process2(), process3()]);
    return uploadresponse1 + uploadresponse2 + uploadresponse3;
}

console.log("start");

Promise.all([process1(),process2(),process3()]).then(function process(value){
        console.log(value);
        
    })

    // here we try to remove async await hell we can club out all the dependednt process or bind them inside seperate
    // fnction and execute seperately