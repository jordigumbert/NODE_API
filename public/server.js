const express = require("express");
/* creem una instancia de classe express i li donem el nom de server */
const server = new express();


/* 
get - post - put/update - delete 

server.get()
server.post()
server.put()
server.delete()

*/
server.get("/" /*path o endpoint */ , (req,res) => {
    res.send("HOLA MUNDO !?!!!") ; 
});

/*levantar serre ( posar a escoltar) */
server.listen(3000 /* port */, () => console.log("server local en port 3000")) ; 



