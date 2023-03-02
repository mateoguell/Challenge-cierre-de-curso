const express = require('express');
const router = express.Router();
// const auth = require('../Middlewares/auth');
const userAdmin = require('../Middlewares/userAdmin');
const peliculasController = require('../controllers/peliculasController');

router.get('/', peliculasController.index);

router.get('/peliculasD/:id?', peliculasController.peliculasD);

router.get('/createP/:id?', userAdmin, peliculasController.add);
router.post('/createP', userAdmin, peliculasController.create);

router.get('/peliculasD/editP/:id?', userAdmin, peliculasController.editP);
router.post('/peliculasD/editP/:id?', userAdmin, peliculasController.update);

router.post('/peliculasD/:id?', userAdmin, peliculasController.delete);

module.exports = router;