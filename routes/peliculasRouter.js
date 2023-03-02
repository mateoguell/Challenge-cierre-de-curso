const express = require('express');
const router = express.Router();
const auth = require('../Middlewares/auth');

const peliculasController = require('../controllers/peliculasController');

router.get('/', auth, peliculasController.index);

router.get('/peliculasD/:id?', auth, peliculasController.peliculasD);

router.get('/createP/:id?', auth, peliculasController.add);
router.post('/createP', auth, peliculasController.create);

router.get('/peliculasD/editP/:id?', auth, peliculasController.editP);
router.post('/peliculasD/editP/:id?', auth, peliculasController.update);

router.post('/peliculasD/:id?', auth, peliculasController.delete);

module.exports = router;