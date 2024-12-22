import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTripById, bookTrip } from "../../services/api";

const TripDetails = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      const { data } = await getTripById(id);
      setTrip(data);
    };
    fetchTrip();
  }, [id]);

  const handleBooking = async () => {
    try {
      await bookTrip({ tripId: trip._id });
      alert("Trip booked successfully!");
    } catch (error) {
      alert("Booking failed: " + error.message);
    }
  };

  if (!trip) return <div>Loading...</div>;

  return (
    <div>
      <h1>{trip.name}</h1>
      <p>{trip.description}</p>
      <p>Price: ${trip.price}</p>
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default TripDetails;
