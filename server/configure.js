    var path = require('path'),
    exphdb = require('express-handlebars'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorhandler = require('errorhandler'),
    moment = require('moment'),
    multer = require('multer');
    //rutas validas de la aplicación
    var routes = require('./routes');

    module.exports = function(app){
    //conectando Middle ware
    //mando a llamar a morgan para hacer un loggin de desarrollo de http
    app.use(morgan('dev'));
    //parseo de la url extendida 
    app.use(bodyParser.urlencoded({
        'extended':true
    }));
    //Body parser Json
    app.use(bodyParser.json());
    //Compatibilidad de metodos http para browsers que no lo soportan
    app.use(methodOverride());
    //parseo de cookies
    app.use(cookieParser('valorsecreto'));
    //Habilitando el servicio estatico de archivos
    app.use('/public/',express.static(path.join(__dirname,'../public')));
    //si es de tipo development la variable de entorno inicio un error handler
    if(app.get('env')==='development'){
        app.use(errorhandler());
    }

    return app;
};