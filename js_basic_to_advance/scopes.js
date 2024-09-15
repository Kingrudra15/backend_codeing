// example of global scope for let and const output is same
// var name = "avi"
// let name = "avi"
// const name = "avi"
// function greet(){
//     console.log("greeting !", name);
//     function test(){      
//         console.log("test is not global scope it inside function where as greet and fun is  gobal scoped function");
        
//     }
// }
// function fun(){
//     console.log("have fun !", name);
    
// }

// greet();
// fun()


// function scope

// var name = "avi"
// function greet(){
//     console.log("greeting !", name);
//     var x = 10
//     function test(){      
//         console.log("test is not global scope it inside function where as greet and fun is  gobal scoped function" , x);
        
//     }
//     test();
//     console.log(x);
    
// }
// function fun(){
//     console.log("have fun !", name);
    
// }

// greet();
// fun()

// block scopes
{
    // block h ye
}

// let, var, const

// {
//     var x = 10;
//     console.log(x);
//     // var does not care about block 
// }
// console.log(x);
//  but if we rap it inside function 
// function fun(){
//     var x = 10;
//     console.log(x);
// }
// console.log(x);    // it will give error x is not fdifferen for outer log because now x is funcyion scope


// function fun(){
//     console.log(x);  // due to lexical scope we get  undefined for it
//     var x = 10;
//     console.log(x);
// }

// {
//     var y = 7 // become global due to var
// }
// console.log(y);

// // another case
//  if(true){
//     var z = 30;
//  }
//  if(false){
//     var a = 20;
//  }
//   console.log(z);
//   console.log(a);
  

// fun()  

// let+++++++++++++++

{
   let x = 10;
   console.log(x);
    
}

function fun(){
    console.log(y);  // Cannot access 'y' before initialization  
    let y = 8
    console.log(y);
    
}
fun()
console.log(x); // x is not defined due to let 
// you can redeclare in var but not inlet it will not llow you to redeclare
