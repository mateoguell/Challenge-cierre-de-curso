const express = require('express');
const router = express.Router();


const peliculasController = require('../controllers/peliculasController');

router.get('/', peliculasController.index);
router.get('/peliculasD/:id?', peliculasController.peliculasD);
router.get('/createP', peliculasController.createP);
router.get('/editP', peliculasController.editP);



module.exports = router;