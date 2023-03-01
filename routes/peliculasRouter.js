const express = require('express');
const router = express.Router();


const peliculasController = require('../controllers/peliculasController');

router.get('/', peliculasController.index);

router.get('/peliculasD/:id?', peliculasController.peliculasD);

router.get('/createP/:id?', peliculasController.add);
router.post('/createP', peliculasController.create);

router.get('/peliculasD/editP/:id?', peliculasController.editP);
router.post('/peliculasD/editP/:id?', peliculasController.update);

router.post('/peliculasD/:id?', peliculasController.delete);

module.exports = router;