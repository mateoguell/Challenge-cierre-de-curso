// const { validationResult } = require("express-validator");
let db = require('../database/models');

const userController = {
    login: function (req, res) {
        res.render('login');
    },
    checklogin: (req, res) =>{
        const { username, password } = req.body;
        if (username === 'admin' && password === 'admin') {
            req.session.authenticated = true;
            res.redirect('/');
        } else {
            console.log('Credenciales incorrectas');
            res.render('login');
        }
    },
    register: function (req, res) {
        res.render('register');
    },
    store: function(req,res){
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            rol: 0
        })
        res.redirect('/');
    }
}


module.exports = userController;