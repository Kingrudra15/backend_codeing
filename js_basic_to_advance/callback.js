// function fun(x,fn){
//     /**x --> arg
//      * fn -> is callback fun
//      */
//     for(let i = 0;i<x;i++){
//         console.log(i);
        
//     }
//     fn();
// }

// fun(10,function log(){
//     console.log("custom logger"); // callback function
    
// })

// ex+++++++++++++++++++
/**let arr = [1,2,3,4,5];
arr.map(function process(value,indexx ){    
    console.log(value,indexx);
    

})
console.log(x);
*/

/**let arr = [1,2,3,4,5];
let x = arr.map(function process(value,indexx ){    
    console.log(value,indexx);
    return value*value
    

})
console.log(x);
console.log(arr);
*/
// custom map function+++++++++++++++++

function mapper( arr,fn){
    /** arr --> is goin to be an array of element
     * fn = callback function which expect two arg value and index
     */
    let result= [];
    for(let i = 0; i<arr.length;i++){
        // i = index , arr[i] =  vlue
        let res = fn(arr[i], i)
        result.push(res)
    }
    return result;
}
let arr = [1,2,3,4,5]
let x = mapper(arr,function cuber(v,i){
    console.log(v, v*v*v, i);
    return v*v*v
});

console.log(x,arr);


