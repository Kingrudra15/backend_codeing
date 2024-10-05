
import {readFile,writeFile} from "fs/promises"
// in es module __dirname not aplicable
// use this to get file path console.log(import.meta.url);

const filePath = new URL('./index.html', import.meta.url);
let data = await readFile(filePath, {encoding: 'utf8'})  // utf8 with that we get full file
console.log(data);
//  here we get this type of buffer data so we us utf-8
// <Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0d 0a 3c 68 74 6d 6c 20 6c 61 6e 
// 67 3d 22 65 6e 22 3e 0d 0a 3c 68 65 61 64 3e 0d 0a 20 20 20 20 3c 6d 65 ... 171 more bytes>

const obj = {
    title: "my custometitile",
    body : "custom body"
}

// let prepare very basic templating engine

for(const [key,value] of Object.entries(obj)){
    data = data.replace(`{${key}}` , value)
}

await writeFile(new URL('./index.html', import.meta.url),data)


// IN INDEX.HTML TITLE AND BODY CHANGED 
// READ THE DOCUMENTATION ALWAYS MAKE GOOGLE YOUR USECASE AND THEN WORK

