//Crear servidor
// import express from = 'express' //No soportada por express
const express = require('express')
const routes = require('./routes')

//Crear una app de express
const app = express();

app.use('/', routes());
//Crear el puerto para correr o escuchar
app.listen(7000);

//--------------------Arrancar el servidor desde package. scripp-------------------------------

//Crear las rutas para el Home. Send = motor(respuesta basica) es mostrar el la pagina y use es fn cualquier recuest lo leen 