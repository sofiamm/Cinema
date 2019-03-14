var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var pelicula = new Schema({
	NOMBRE: String,
	DURACIONMINUTOS: Number,
	GENERO: String,
	IDIOMAAUDIO: String,
	IDIOMASUB: String,
	SINOPSIS: String,
	CLASIFICACION:String,
	PRECIO:Number,
	HORAINICIO: Number,
	FECHA: Date,
	MINUTOINICIO:Number,
	ASIENTOS: {
		//FILA A
		A1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		A2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		A3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		A4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		A5:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		A6:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},

		//FILA B
		B1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		B2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		B3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		B4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		B5:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		B6:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},

		//FILA C
		C1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		C2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		C3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		C4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		C5:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		C6:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},

		//FILA D
		D1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		D2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		D3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		D4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		D5:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},

		//FILA E
		E1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		E2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		E3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		E4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},

		//FILA F
		F1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		F2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		F3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		F4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},

		//FILA G
		G1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		G2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		G3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		G4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},

		//FILA H
		H1:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		H2:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		H3:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		},
		H4:{
			NOMBREESTUDIANTE: String,
			SECCION: String,
			CARNET: Number
		}},
		
		IMAGEN: String,
		ESTADO: Number,
});
module.exports = mongoose.model('Pelicula',pelicula);