const fs = require('fs');
const transformStream = require('stream') //to get chunk by chink reading
let fileStrem = fs.createReadStream(__dirname + "/input.txt");
let outputStream = process.stdout;
// readstream.pipe(writestream)
let middleSteam = new transformStream.Transform({
    transform(chunk,enc,nextCB){
        let modifiedChunk = chunk.toString().toUpperCase()
        this.push(modifiedChunk);
        setTimeout(nextCB,1000)
    }
});
let newReadablestream = fileStrem.pipe(middleSteam)
newReadablestream.pipe(outputStream);