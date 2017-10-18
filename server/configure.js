var path = require('path'),
exphdb = require('express-handlebars'),
express = require('express'),
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
morgan = require('morgan'),
methodOverride = require('method-override'),
errorHandler = require('errorhandler'),
moment = require('moment'),
multer = require('multer');
// Cargar un modulo personalizado
// con las rutas validas de la aplicacion
var routes = require('./routes');

module.exports = function(app){
// Conectado Middlewares
// Middleware para
// logging de HTTP
app.use(morgan('dev'));
// Parseo de URL
app.use(bodyParser.urlencoded({
    'extended':true
}));
app.use(bodyParser.json());
// Compatibilidad de verbos HTTP
app.use(methodOverride());
// Parseo de Cookies
app.use(cookieParser('Algun-valor-secreto'));

// Crear las rutas de prueba de la app
app = routes(app);

// Habilitando el servicio estatico
// de archivos
app.use('/public/', 
express.static(path.join(
    __dirname, '../public'
)));

// Middleware pera el manejo
// de errores
if(app.get('env') === 'development'){
    app.use(errorHandler());
}
return app;
};