let db = require('../database/models');

const peliculasController = {
	index: (req, res) => {
		db.Movie.findAll({
			include: [
				{ model: db.Actor, as: 'actors' },
				{ model: db.Genre, as: "genres" }
			]
		}).then(movies => {
			res.render('index', { movies });
		})
			.catch(err => res.send(err));
	},
	peliculasD: function (req, res) {
		db.Movie.findByPk(req.params.id, {
			include: [
				{ model: db.Actor, as: 'actors' },
				{ model: db.Genre, as: "genres" }
			]
		}).then(function (movie) {
			res.render('peliculasD', { movie });
		})
			.catch(err => res.send(err));
	},
	add: function (req, res) {
		db.Genre.findAll()
			.then(function (genres) {
				db.Movie.findAll({
					include: [{ model: db.Genre, as: "genres" }]
				})
					.then(function (movies) {
						res.render('createP', { movies, genres });
					})
					.catch(err => res.send(err));
			})
			.catch(err => res.send(err));
	},
	create: function (req, res) {
		db.Movie.create({
			title: req.body.title,
			rating: req.body.rating,
			awards: req.body.awards,
			release_date: req.body.release_date,
			length: req.body.length,
			genre_id: req.body.genre_id
		})
			.then(() => {
				res.redirect('/index');
			})
			.catch(err => res.send(err));
	},
	editP: function (req, res) {
		db.Movie.findByPk(req.params.id, {
			include: [
				{ model: db.Actor, as: 'actors' },
				{ model: db.Genre, as: "genres" }
			]
		}).then(function (movie) {
			res.render('editP', { movie });
		})
			.catch(err => res.send(err));
	},
	update: function (req, res) {
		db.Movie.update({
			title: req.body.title,
			rating: req.body.rating,
			awards: req.body.awards,
			release_date: req.body.release_date,
			length: req.body.length
		},
			{
				where: {
					id: req.params.id
				}
			})
			.then(() => {
				request.render('/index');
			})
			.catch(err => res.send(err));
	}
}


module.exports = peliculasController;