const express = require('express');
const router = express.Router();
const proyectosController = require('../controller/proyectosClontroller')

module.exports = function(){

    router.get('/', proyectosController.proyectosHome)

    router.get('/nosotros',  proyectosController.nosotros)

    return router;
}
 