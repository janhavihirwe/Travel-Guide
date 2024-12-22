import React, { useEffect, useState } from "react";
import { getUserBookings } from "../../services/api";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const { data } = await getUserBookings();
      setBookings(data);
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h1>My Bookings</h1>
      {bookings.length === 0 ? (
        <p>You have no bookings.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking._id}>
            <h2>{booking.trip.name}</h2>
            <p>Status: {booking.status}</p>
            <p>Booked on: {new Date(booking.createdAt).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BookingList;
