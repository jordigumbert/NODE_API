const express = require("express");
/* creem una instancia de classe express i li donem el nom de server */
const server = new express(); // "new" és opcional  
const port1 = 3000; // per si tenim més d'un servidor, port 


// middleware de configuracion
server.use(express.json());
// srever use serveix per fer middleware de entremig, li estem dien que faci el parseo del que arribi en JSON , ja que aquest arriba en jsonstring 
// i que le converteixi a un json que netengui//llegible en JS 

// cRRud 
server.get("/", (req, res) => {
    res.json({ message: "get methond!" })

})

server.listen(port1, () => {
    console.log(`server corrent en port ${port1}; http://localhost:${port1}`)
});

server.listen(port1, () => console.log(`server local en port ${port1}`));




// CCrud 

// podem fer servir / xk és un metode diferent 
server.post( "/" , (req,res)=> {
    const dato = req.body
    console.log(dato)
    res.json({ message: "post method!" , dato: dato })   // , dato: dato }) si el nom es pot dir igual que la propiett, podem posar directament dato
})
            
// crUUd  Update
server.put( "/:id" , (req,res) => { // li asignem id al param que entra per url
    const { password } = req.body;
    const { id } = req.params;
    //console.log(dato)
    res.json({ message: "put method!" , data: `user: ${id} amb nomva pass ${password}` })   // , dato: dato }) si el nom es pot dir igual que la propiett, podem posar directament dato
})


// cruDD Delete


server.delete( "/" , (req,res) => { // li asignem id al param que entra per url
   
    const { id } = req.query ; // per quan les dades es passen per url kakaka.com:port?id=1&name=jorgen& .... 
    //console.log(dato)
    res.json({ message: "delete method!" , data: `user: ${id} amb nomva pass ${password}` })   // , dato: dato }) si el nom es pot dir igual que la propiett, podem posar directament dato
})

/* 
get - post - put/update - delete 

server.get()
server.post()
server.put()
server.delete()


server.get("/" /*path o endpoint  , (req,res) => {
    res.send("HOLA MUNDO !?!!!") ; 
});

levantar serre ( posar a escoltar) 
server.listen(3000  , () => console.log("server local en port 3000")) ; 

*/
