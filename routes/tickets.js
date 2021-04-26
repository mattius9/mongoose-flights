var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

/* GET new ticket form */
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
/* POST new ticket to selected flight */
router.post('/flights/:id/tickets', ticketsCtrl.create);


module.exports = router;