// normally we do console log to print output 
console.log("hi");
console.log("bi");
// it will print the value in new line consoee .log do that automaticaaly

// in node js we can do same with more control on output wich help of process module

process.stdout.write("hi")
process.stdout.write("+ 2")

// it will not give new linethe output will be "hi +2"
// '' now what is the standard input output?
// there is different way to read data in computer like filesytem
// 2nd is strem-->