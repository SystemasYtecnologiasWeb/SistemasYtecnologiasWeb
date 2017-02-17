'use strict';

// Constants
const PORT = 8888;
var http=require("http");
var url = require ('url');
console.log("Server running on port "+PORT);
http.createServer(function(request,response){
	var pathname = url.parse(request.url).pathname;
	
	console.log("Request for " + pathname + " received.");
	console.log("%j", request);
	
	response.writeHead(200,{'Content-Type':'html'});
	response.write("Hello World!");
	response.end();
	
}).listen(PORT);
