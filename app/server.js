'use strict';

// Constants
const PORT = 80;
var http=require("http");

http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"HTML"});
	response.write("Hello World2!");
	response.end();
}).listen(PORT);
