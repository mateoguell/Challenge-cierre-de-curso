const { validationResult } = require("express-validator");
let db = require('../database/models');

const userController = {
    login: function (req, res) {
        res.render('login');
    },
    checklogin: async (req, res) => {
        const { name, password } = req.body;

        try {
            const user = await db.User.findOne({ name });

            if (!user) {
                console.log('Usuario no encontrado');
                res.render('login');
            } else if (user.password !== password) {
                console.log('Contraseña incorrecta');
                res.render('login');
            } else {
                req.session.authenticated = true;
                res.redirect('/');
            }
        } catch (error) {
            console.log(error);
            res.render('login');
        }
    },
    register: function (req, res) {
        res.render('register');
    },
    store: async function (req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        try {
            const user = await db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                rol: 0
            });

            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
}


module.exports = userController;