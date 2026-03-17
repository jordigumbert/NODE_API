const express = require("express");
/* creem una instancia de classe express i li donem el nom de "server" */
const server = new express(); // "new" és opcional  
const port1 = 3000; // per si tenim més d'un servidor, port 
server.use(express.json()); // xk entengui bé els JSON

// iniciem el servidor, i li diem que ens
server.listen(port1, () => console.log(`server local en port ${port1}`));



// CRUD
server.get( "/", (req,res) => { 
    console.log( [ { message : " GET method on !" } , BBDD  ]) // a la consola del server !!
    res.json( { message: "get methond!" } )   // li diem que la resposta és el parseo del JSON 
})

// podem fer servir el mateix endpoint ( / ) xk és un metode diferent
server.post("/", (req,res) => {
    //console.log( req.body , " \n\n LALALALALALALALAAL\n\n")
    res.json([req.body , {"name" : "hello" , "surname": "world"}])
})


server.post("/INTRO", (req,res) => {
    //console.log( req.body , " \n\n LALALALALALALALAAL\n\n")
    // res.json()
    //console.log(req.body)
    BBDD.push({name : req.body.name, id : 10})

    res.json(BBDD)
})


const BBDD = [
    {
        id: 1 ,
        name: "caca"
    },
    {
        id : 2 ,
        name : "pedo" 
    },
    {
        id : 3 ,
        name : "culo" 
    },
    {
        id : 4 ,
        name : "pis"
    },
    {
        id : 5 ,
        name : "PAPA"
    },
    {
        id : 6,
        name: "POPO"
    }
]



server.get( "/BD", (req,res) => { 
    console.log(" GET method on BBDD !!!") // a la consola del server !!
    res.json( BBDD )   // li diem que la resposta és el parseo del JSON 
})