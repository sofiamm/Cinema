var peliculacontroller = require('./peliculacontroler.js');

module.exports = function(app) {
	var clasepelicula = new peliculacontroller();
	app.post('/api/nuevapelicula',clasepelicula.Guardar);
	app.post('/api/modificapelicula',clasepelicula.Modificar);
	app.post('/api/eliminapelicula',clasepelicula.Eliminar);
	app.post('/api/seleccionartodos',clasepelicula.Seleccionartodos);
	app.post('/api/seleccionarporfecha',clasepelicula.Seleccionarporfecha);
	app.post('/api/seleccionarporid',clasepelicula.Seleccionarporid);
	app.post('/api/seleccionarpornombre',clasepelicula.Seleccionarpornombre);

	app.get('*',function(req,res) { //localhost:8080
		res.sendfile('./login.html'); //Carga unica de la visita
	});
};

var controllerAdministrador = require('./controlleradministrador.js');
var claseadm = new controllerAdministrador();  
app.post('/api/nuevoadm',  claseadm.Guardar);
app.post('/api/loginadm',  claseadm.Login);