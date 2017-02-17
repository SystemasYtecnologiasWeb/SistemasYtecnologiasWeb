/**
 * Función que se ejecutará cuando se invoque al handler de / o de /start;
 */
function start() {
	console.log("Request handler 'start' was called.");
}

function other() {
	console.log("Request handler 'other' was called.");
}

// Exportamos la función start (la hacemos pública)
exports.start=start;

//Exportamos la función other (la hacemos pública)
exports.other=other;