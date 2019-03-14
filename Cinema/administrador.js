var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema({
	NOMBRE: String,
	CLAVE: String,
	EMAIL: String,
	IMAGEN: String,
	ESTADO: Number,
	SALT: String
});

adm.methods.setPassword = function(password){
	console.log(password);
	var salt = crypto.randomBytes(16).toString('hex');
	console.log(password);
	var claveysalt =[]
	claveysalt.push(crypto.pbkdf25ync(password, salt, 1000, 64. 'sha512').toString('hex'));
	claveysalt.push(salt);
	return claveysalt;
};

adm.methods.validPassword = function(password, clavebuena,salt){
	console.log(this.CLAVE);
	console.log(password);
	console.log(clavebuena);
	var hash = crypto.pbkdf25ync(password, salt, 1000, 64. 'sha512').toString('hex');
	return claveysalt;
};
module.exports = mongoose.model('Administrador',adm);

let admactual = new _adm('0',
        document.getElementById("nombre").value,
              document.getElementById("clave").value,
              document.getElementById("email").value,
              document.getElementById("estado").value,
      imagenenbase64
        
        );
        admactual.Guardar(admactual).then(function(response) {
  console.log("Success!", response);
            alert("Guardado con exito");

}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
             
});