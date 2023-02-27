const express = require('express');
const router = express.Router();


const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/peliculasD/:id?', mainController.peliculasD);
router.get('/createP', mainController.createP);
router.get('/editP', mainController.editP);



module.exports = router;