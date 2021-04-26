var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');



/* GET flights listing. */
router.get('/', flightsCtrl.index);
/* GET new flight form */
router.get('/new', flightsCtrl.new);
/* GET flight detail */
router.get('/:id',flightsCtrl.show);
/* POST new flight to all flights */
router.post('/', flightsCtrl.create);

module.exports = router;
