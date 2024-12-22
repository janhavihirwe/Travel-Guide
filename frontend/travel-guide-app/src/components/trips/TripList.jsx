import React, { useEffect, useState } from "react";
import { getTrips } from "../../services/api";
import { Link } from "react-router-dom";

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const { data } = await getTrips();
      setTrips(data);
    };
    fetchTrips();
  }, []);

  return (
    <div>
      <h1>Available Trips</h1>
      {trips.map((trip) => (
        <div key={trip._id}>
          <h2>{trip.name}</h2>
          <p>{trip.description}</p>
          <p>Price: ${trip.price}</p>
          <Link to={`/trip/${trip._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default TripList;
