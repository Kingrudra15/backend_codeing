function linearsearch(arr,x){
    for(let i = 0; i<arr.length;i++){
        if(arr[i]=== x){
            return i;
        }
    }
    return NaN;
}

function binarysearch(arr,x){

}
// we can expose our code to outer world to use 
// how they can use using require in the file
module.exports = {
    linear: linearsearch,
    binary: binarysearch
}