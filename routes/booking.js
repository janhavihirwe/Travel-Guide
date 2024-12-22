const express = require('express');
const { bookTrip ,getBooking} = require('../controllers/bookingController');
const { protect } = require('../middleware/authmiddleware');
const router = express.Router();

router.post('/', protect, bookTrip);
router.get('/my-bookings', protect, getBooking);
module.exports = router;
