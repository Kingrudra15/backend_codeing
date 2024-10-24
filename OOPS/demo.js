var obj0 = {
    name: "avi",
    company : "knnx",
    display: function(){
        console.log(this.name,"works in", this.company);
        
    }
}
// obj0 
var obj = {
    name: "avi",
    company : "knnx",
    display: ()=>{
        console.log(this.name,"works in", this.company);
        
    }
}
//`obj.display(); op wil undifined work undefined because in arrorw function the this function in lexical 
// environmewnt is not diffin in arrorw function so i check in global and no this fuound

var obj2 = {
    name: "avi",
    company : "knnx",
    display: ()=>{
        setTimeout(() => {
            console.log(this.name,"works in", this.company);
        },3000)

        
    }
}
obj2.display();

var obj3 = {
    name: "avi",
    company : "knnx",
    display: function(){
        setTimeout(() => {
            console.log(this.name,"works in", this.company);
        },3000)

        
    }
}
obj3.display();
