// bitwise operator
// console.log(5&3);
// console.log(8 | 1);
// console.log(3 ^ 3);
// console.log(5 << 2);
// console.log(5 >> 1);

// confitional operator

// if (10 > 20) {
//     console.log("hi");
// } else{
//   console.log(1.22)
// }

if(2<1){
    console.log("hi");
}else if(10>11){
    console.log("bty");
}else if (2%2 === 0) {
    console.log("goddnight");
}else{
    console.log("nothing");
}

if((2>1) && "sanket"){
    console.log("hi");
    
}

console.log((2>1) && "sanket");


// ***************looops*************

for (let i = 1; i < 20; i++) {
    if (i%7 === 0) {
        console.log("breaaking now");
        break;  
    }
    console.log(i);
    
}


for(let i = 0; i<5; i++){
    let str = "";
    for(let j = 0; true; j++){
        str += "*";
        if(j == i){
            break;
        }
    }
    console.log(str);
    
}