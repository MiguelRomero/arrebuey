    //   cargando express
    const express = require("express"),
    path = require("path"),
    config = require("./server/configure");

    //Creando la instancia de una aplicación
    var app = express();
    
    //Variables de entorno de la aplicación 
    app.set('port',process.env.PORT || 3000);
    app.set('ip',process.env.IP || '0.0.0.0');
    
    //Configurar la ruta de las vistas
    app.set('views',path.join(__dirname,"views"));
    
    //join sirve para buscar la ruta del archivo views sin importar el sistema operativo
    app = config(app);
    
    // crear las rutas de pruebas de la app
  
    
    
    //Consultar las variables de entorno para rescatar la ip y el puerto
    const IP = app.get('ip');
    const PORT = app.get('port');

    //Iniciando el servidor
    app.listen(PORT,IP,(err)=>{
        if(err){
            console.log("Tuviste un error al iniciar el server ");
            throw err;
        }else{
            console.log(`Servidor escuchando en : http://${IP}:${PORT}`);
        }
    });
