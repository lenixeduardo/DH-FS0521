var express = require('express');
var router = express.Router();
const petsController = require('../controllers/petsController')
const tipoPetController = require('../controllers/tipoPetController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pets', petsController.index)
router.get('/pets/:id', petsController.show)
router.get('/tipopet/:tipo', tipoPetController.show)


module.exports = router;
