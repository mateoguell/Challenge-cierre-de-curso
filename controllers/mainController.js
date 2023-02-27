// const db = require('../database/models')
// const Movies = db.Movie;
const { Movie } = require('../database/models/conexion.js');


const mainController = {
	index: (req, res) => {
		Movie.findAll()
			.then(movies => {
				res.render('index', { movies: movies });
			})
			.catch(err => {
				console.error('Error al obtener las películas:', err);
				res.status(500).send('Error al obtener las películas');
			});
	},
	login: function (req, res) {
		res.render('login');
	},
	register: function (req, res) {
		res.render('register');
	},
	peliculasD: function (req, res) {
		console.log(req.query);
		let id = req.query.id;
		res.render('peliculasD');
	},
	createP: function (req, res) {
		res.render('createP');
	},
	editP: function (req, res) {
		res.render('editP');
	},
}


module.exports = mainController;