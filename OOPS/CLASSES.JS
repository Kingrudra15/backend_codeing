class Product {
    discount = 10;
    constructor(n,p){
        // cunstructor function to create a  new real life instances called as object
        // when we create4 an object this cunstructor is the first function that gets called 
        this.name = n;
        this.price = p;  
    }
    //define member function
    displaayproduct(){ // no need to gicve function keyword
        console.log(this.name,this.price,this.discount);   // we need to use this i we try to access inside data member  
    }
}
let iphone = new Product("iphone11",100000);
let mac = new Product("macbook",500000);
//console.log(iphone,mac);
iphone.displaayproduct()