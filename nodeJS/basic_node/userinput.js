// by this we can take userinput with it


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function main (){
    console.log("enter the first number");
    let x = readLine();
    console.log("enter the second nuber");
    let y = readLine()
    console.log(Number(x)-Number(y));
}
