let db = require('../database/models');

const peliculasController = {
	index: (req, res) => {
		db.Movie.findAll({
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
				res.redirect('/');
			})
			.catch(err => res.send(err));
	},
	editP: function (req, res) {
		db.Genre.findAll()
			.then(function (genres) {
				db.Movie.findByPk(req.params.id,{
					include: [{ model: db.Genre, as: "genres" }]
				})
					.then(function (movie) {
						res.render('editP', { movie, genres });
					})
					.catch(err => res.send(err));
			})
	},
	update: function (req, res) {
		db.Movie.update({
			title: req.body.title,
			rating: req.body.rating,
			awards: req.body.awards,
			release_date: req.body.release_date,
			length: req.body.length,
			genre_id: req.body.genre_id
		}, {
			where: {
				id: req.params.id
			}
		})
			.then(() => {
				res.redirect("/");
			})
			.catch(err => res.send(err));
	},
	delete: (req, res) => {
		db.Movie.destroy({
			where: {
				id: req.params.id
			}
		})
			.then(() => {
				res.redirect('/')
			})
			.catch(error => res.send(error))
	},
}


module.exports = peliculasController;