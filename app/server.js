'use strict';

// Constants
const PORT = 8887;

var http=require('http');
var url = require ('url');

/**
 * Función que arranca el servidor
 */
function start(route,handle) {
	
	/*
	 * Se asociará la información de la petición en 
	 * los parámetros request y response
	 */ 
	function onRequest(request,response){
		
		// pathname = se queda con la parte correspondiente a 
		// la petición de la url.
		var pathname = url.parse(request.url).pathname;
		
		// Invocamos la llamada de enrutamiento de la función
		// dependiendo del pathname.
		route(handle, pathname);
		
		console.log("Request for " + pathname + " received.");
		console.log("%j", request);
		
		// 200 - OK.
		response.writeHead(200,{'Content-Type':'html'});
		response.write("Hello World!");
		response.end();
	}
	// Aqui ejecutamos 
	http.createServer(onRequest).listen(PORT);
	console.log("Server running on port " + PORT);
}

// Exportamos la función start (La hacemos pública).
exports.start=start;
