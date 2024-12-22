import React, { useState } from "react";
import { addTrip } from "../../services/api";

const AddTrip = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [availableSlots, setAvailableSlots] = useState("");
  const [dates, setDates] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addTrip({
        name,
        description,
        price,
        availableSlots,
        dates: dates.split(",").map((date) => new Date(date)),
        organizerId: localStorage.getItem("userId"),
      });
      alert("Trip added successfully!");
    } catch (error) {
      alert("Failed to add trip: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Trip</h1>
      <input
        type="text"
        placeholder="Trip Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Available Slots"
        value={availableSlots}
        onChange={(e) => setAvailableSlots(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dates (comma-separated)"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
      />
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default AddTrip;
