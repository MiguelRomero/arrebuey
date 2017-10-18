// para crear las rutas
var express = require('express'),
router = express.Router();

// Se cargan los controladores
var homeController = require('../controllers/home');
var imageController = require('../controllers/images');

module.exports = function(app){
// Se empaquetan las rutas usando
// el objeto router
router.get('/', homeController.index);
router.get('/home', homeController.index);
router.get('/home/index', homeController.index);
router.get('/images/index/:image_id', imageController.index);
router.post('/images/create', imageController.create);
router.post('/images/like/:image_id', imageController.like);
router.post('/images/comment/:image_id', imageController.comment);
// Cargando las rutas empaquetadas
// a la aplicacion
app.use(router);
return app;
};