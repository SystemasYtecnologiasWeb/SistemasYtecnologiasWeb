/*
 * Se encarga del enrutamiento de la petición.
 * 
 * param handle = array con las funciones a ejecutar en función de 
 * 				  la petición
 * param pathname = petición que nos habrá llegado a través de la 
 *                  petición.
 */

function route(handle, pathname) {
	console.log("About to route a request for " + pathname);
	
	// Si vemos que tenemos mapeada una función para ese handle, 
	// invocamos la función asociada
	if (typeof handle[pathname] === 'function'){
		handle[pathname]();
	}
	else {
		console.log("No request handler for " + pathname);
	}
}

//Exportamos la función route (la hacemos pública).
exports.route=route;