const Trip = require('../models/trip.model');

exports.getTrips = async (req, res) => {
  const trips = await Trip.find();
  res.json(trips);
};

exports.addTrip = async (req, res) => {
  try {
    const trip = await Trip.create({ ...req.body, organizerId: req.user.id });
    res.status(201).json(trip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
