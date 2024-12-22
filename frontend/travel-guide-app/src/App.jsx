import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TripList from "./components/trips/TripList";
import TripDetails from "./components/trips/TripDetails";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import BookingList from "./components/Booking/BookingList";
import OrganizerDashboard from "./components/Organizer/OrganizerDashboard";
import AddTrip from "./components/Organizer/AddTrip";
import AuthProvider from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TripList />} />
          <Route path="/trip/:id" element={<TripDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/organizer" element={<OrganizerDashboard />} />
          <Route path="/organizer/add" element={<AddTrip />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
