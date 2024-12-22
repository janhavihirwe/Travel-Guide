import React, { useEffect, useState } from "react";
import { getTrips } from "../../services/api";
import { Link } from "react-router-dom";

const OrganizerDashboard = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const { data } = await getTrips();
      setTrips(data.filter((trip) => trip.organizerId === localStorage.getItem("userId")));
    };
    fetchTrips();
  }, []);

  return (
    <div>
      <h1>My Trips</h1>
      <Link to="/organizer/add">Add New Trip</Link>
      {trips.length === 0 ? (
        <p>You have no trips.</p>
      ) : (
        trips.map((trip) => (
          <div key={trip._id}>
            <h2>{trip.name}</h2>
            <p>{trip.description}</p>
            <p>Price: ${trip.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrganizerDashboard;
