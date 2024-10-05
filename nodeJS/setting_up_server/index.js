// using http module inbuilt given by node we can setuo a basic server

const http = require('http');
const PORT = 3000;
// here without third party we can make this server now there is express by which we can make server easy 
// but for now without other module we can create this server 
/**
 * http module containes a function called as createserver
 * this createserver funciion takes a callback as the input
 * nowinside the callback we get two arguments
 * - request --> his argument conatin all the details about the incoming req
 * -reponse --> thi atrgumnet contains some function using which wcan prepare the reposnse
 * the createserver function treturnsus a server object 
 * 
 */

const server = http.createServer(function exec(request,response){
    // let print request objext
    console.log(request.url); // using this we can do conditional rendering means use if else
    if(request.url == '/home'){
        response.end("welcome home")
    }else if(request.url == '/faq'){
        response.end("list of FAQ")
    }else {
        response.end("heloo avi");
    }
    
      // if anyone make any type of request on my localhost 300 i will return this helloavi

});


server.listen(PORT,function process(){
    // ones server statrted then call back process executed
    console.log("server started on port", 3000);
    
})