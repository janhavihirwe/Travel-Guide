const express = require('express');
const { getTrips, addTrip } = require('../controllers/tripController');
const { protect } = require('../middleware/authmiddleware');
const router = express.Router();

router.get('/', getTrips);
router.post('/', protect, addTrip);

module.exports = router;
