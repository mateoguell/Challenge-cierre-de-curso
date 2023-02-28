let db = require('../database/models');

const peliculasController = {
	index: (req, res) => {
		db.Movie.findAll({
			include: [{ model: db.Genre, as: "movieGenre" }]
		}).then(movies => {
			res.render('index', { movies });
		});
	},
	peliculasD: function (req, res) {
		db.Movie.findByPk(req.params.id, {
			include: [{ model: db.Genre, as: "movieGenre" }]
		}).then(function (movie) {
			// console.log(models.Genre && movie.Genre.name);
			res.render('peliculasD', { movie });
		})
	},
	createP: function (req, res) {
		res.render('createP');
	},
	editP: function (req, res) {
		res.render('editP');
	},
}


module.exports = peliculasController;