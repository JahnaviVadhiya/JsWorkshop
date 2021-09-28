var http=require('http');
var a=5;
var b=10;
var c=a+b;

var value="A is " +a+ "B is "+b+ "sum is "+c;
http.createServer(function(req,res){


    res.end("Hello world in node Js  \n"+value);

}).listen(5000);

console.log("Server is started at http://127.0.0.1:5000");