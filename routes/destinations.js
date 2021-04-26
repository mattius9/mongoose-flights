const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

/* POST new destination to selected flight */
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;