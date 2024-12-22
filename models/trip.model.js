const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  dates: [Date],
  price: Number,
  availableSlots: Number,
  cancellationPolicy: String,
  organizerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Trip', TripSchema);
