function fun(){
    return new Promise(function(resolve,reject){
        setTimeout(function process(){
            console.log("resolved");
            resolve(123)
        },5000)
    })
}
let x = fun()
x.then(function exec(value){
    console.log("value is", value);
    for(let i = 0;i < 1000000000;i++)
    return 100;
})
// .then(function exec1(value){
//     console.log("value here is ,", value);
    
// })

x.then(function exec1(value){
    console.log("yo the value is ,", value);
    return 200; // we can add more function in fullfillment array
})