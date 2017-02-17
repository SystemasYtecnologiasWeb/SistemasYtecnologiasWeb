/**
 * El index es el que arrancará nuestro servidor.
 */

// Importamos el módulo server.js
var server = require ("./server");

// Importamos el módulo router.js
var router = require ("./router");

// Importamos el módulo requestHandlers.js
var requestHandlers = require("./requestHandlers");

// Mapeamos en un array las funciones que queremos ejecutar en
// función de las peticiones que nos lleguen
var handle= {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/other"] = requestHandlers.other;

// Iniciamos el servidor diciendole que siempre que reciba una 
// petición ejecute la función route con parámetro handle
server.start(router.route, handle);