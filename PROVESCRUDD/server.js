const express = require("express");
/* creem una instancia de classe express i li donem el nom de server */
const server = new express(); // "new" és opcional  
const port1 = 3000; // per si tenim més d'un servidor, port 
server.use(express.json()); // xk entengui bé els JSON
// CRUD
server.