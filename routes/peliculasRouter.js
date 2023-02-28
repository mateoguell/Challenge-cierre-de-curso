const express = require('express');
const router = express.Router();


const peliculasController = require('../controllers/peliculasController');

router.get('/', peliculasController.index);
router.get('/peliculasD/:id?', peliculasController.peliculasD);
router.get('/createP/:id?', peliculasController.add);
router.get('/peliculasD/editP/:id?', peliculasController.editP);


router.post('/createP', peliculasController.create);
router.post('/peliculas/editP', peliculasController.update);

module.exports = router;