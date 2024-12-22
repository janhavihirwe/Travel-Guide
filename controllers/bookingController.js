const Booking = require('../models/booking.model');
const Trip = require('../models/trip.model');

exports.bookTrip = async (req, res) => {
  try {
    const { tripId } = req.body;
    const trip = await Trip.findById(tripId);

    if (!trip || trip.availableSlots < 1) {
      return res.status(400).json({ message: 'No slots available' });
    }

    const booking = await Booking.create({
      userId: req.user.id,
      tripId,
      status: 'confirmed',
    });

    trip.availableSlots -= 1;
    await trip.save();

    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBooking = async (req, res) => {
    try {
      // Fetch bookings for the authenticated user
      const bookings = await Booking.find({ userId: req.user.id }).populate('tripId');
  
      if (!bookings.length) {
        return res.status(404).json({ message: 'No bookings found' });
      }
  
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
