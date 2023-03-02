const { validationResult } = require("express-validator");
let db = require('../database/models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userController = {
    login: function (req, res) {
        res.render('login');
    },
    checklogin: async (req, res) => {
        const { name, password, email } = req.body;
        const user = await db.User.findOne({
            where: {
                name,
                email
            }
        });
        if (!user) {
            return res.send('Usuario no encontrado');
        } else {
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                return res.send('Contraseña incorrecta');
            } else {
                req.session.authenticated = true;
                return res.redirect('/');
            }
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
            const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
            const user = await db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                rol: 0
            });
            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },
    logout: function(req, res){
        req.session.destroy((err) => {
            if (err) {
              console.log(err);
            } else {
              res.redirect('/');
            }
          })
    }
}


module.exports = userController;