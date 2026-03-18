/*farem el servidor en express*/
const express = require("express");
const Joi = require("joi")

const server = new express();
const port1 = 3001
const url_api = "http://localhost";

// DATABASE , array buit
const tareasDB = [{
    id: 1,
    titulo: "tarea1",
    completada: false
}] ;



// validacio Joi
const schema_tarea = Joi.object( {
    titulo : Joi.string()
        .alphanum()
        .min(3)
        .max(127)
        .required()

} )

// configurar JSON
server.use(express.json()); // todo lo que viene del cliente se parsea a json 

// rutas :  
// get ALL todo's
server.get("/tareas/:id",(request , response ) => {

    const { id } = request.params
    console.log(id )
    // const id = request.params.id  
                                            // la tarea que té la id que hem guardat abans 
    const tarea = tareasDB.find( (tarea) => { tarea.id === id } )


    response.json({
        message: !tarea ?  `No hay tarea con id:  ${id}` : "GET de tarea por ID ",
        data : tarea 
    })
})




server.post("/tarea",(request , response ) => {

    const { id } = request.params
    console.log(id )
    // const id = request.params.id  
                                            // la tarea que té la id que hem guardat abans 
    const tarea = tareasDB.find( (tarea) => { tarea.id === id } )


    response.json({
        message: !tarea ?  `No hay tarea con id:  ${id}` : "GET de tarea por ID ",
        data : tarea 
    })
})






server.listen(port1, () => {
    console.log(`servidor en ${url_api}:${port1}`)

} );
