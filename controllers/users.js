const { response, request } = require('express');

const usuariosGet =  (req=request, res=response) => {
    // res.send('Hello World');

    // const { } = res.query; desestructuro lo que necesito y puedo poner valores por defecto
    const query = req.query;

    res.json({
        msg: 'get API contoller',
        query
    });
}

const usuariosPost =  (req=request, res=response) => {

    const {nombre, apellido, dni} = req.body;

    res.json({
        msg: 'post API contoller',
        nombre,
        apellido,
        dni
        
    });
}

const usuariosPut =  (req=request, res=response) => {
    
    // cons id ) = req.params.id;
    const { id } = req.params;

    res.json({
        msg: 'put API contoller',
        id
    });
}

const usuariosDelete =  (req=request, res=response) => {
    res.json({
        msg: 'delete API contoller'
    });
}

const usuariosPatch =  (req=request, res=response) => {
    res.json({
        msg: 'patch API contoller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch

}