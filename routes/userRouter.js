const express = require('express');
const router = express.Router();
// const { body } = require('express-validator');
const userController = require('../controllers/userController');

// const validateRegister = [ 
//     body('name')
//     .notEmpty().withMessage('Debes completar el nombre').bail(),
//     body('password')
//     .notEmpty().withMessage('Se requiere una constraseña').bail()
//     .isLength({min: 8}).withMessage('Como minimo 8 caracteres'),
//     body('email')
//     .notEmpty().withMessage('Debes completar el email').bail()
//     .isEmail().withMessage('Debes completar con un email valido')
// ]

router.get('/', userController.login);
router.post('/', userController.checklogin);

router.get('/register', userController.register);
router.post('/register', userController.store);

router.post('/logout', userController.logout);

module.exports = router;