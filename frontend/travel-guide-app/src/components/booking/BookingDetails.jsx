import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookingById } from "../../services/api";

const BookingDetails = () => {
  const { id } = useParams(); // Get the booking ID from the URL
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const { data } = await getBookingById(id);
        setBooking(data);
      } catch (error) {
        console.error("Failed to fetch booking details:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBooking();
  }, [id]);

  if (loading) {
    return <p>Loading booking details...</p>;
  }

  if (!booking) {
    return <p>Booking not found.</p>;
  }

  return (
    <div>
      <h1>Booking Details</h1>
      <h2>Trip Name: {booking.trip.name}</h2>
      <p>Description: {booking.trip.description}</p>
      <p>Dates: {booking.trip.dates.join(", ")}</p>
      <p>Price: ${booking.trip.price}</p>
      <p>Booking Status: {booking.status}</p>
      <p>Booked on: {new Date(booking.createdAt).toLocaleString()}</p>
      <p>Available Slots: {booking.trip.availableSlots}</p>
      <p>Cancellation Policy: {booking.trip.cancellationPolicy}</p>
    </div>
  );
};

export default BookingDetails;
