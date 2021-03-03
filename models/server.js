const express = require('express');
const cors = require('cors');
// import express from 'express';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios/'

        //Middelwares 
        
        this.middelwares();

        //Rutas
        this.routes(); 
    }

    middelwares() {
        //CORS
        this.app.use( cors() );

        //Lectura y parsro del body
        this.app.use( express.json( ));

        //Public
        this.app.use (express.static('public') );
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/users') );  
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor escuchando el puerto: ', this.port);
        });
    }

}

module.exports = Server;
// export default Server;