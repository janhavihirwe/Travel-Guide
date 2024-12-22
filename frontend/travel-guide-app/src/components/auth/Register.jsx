import React, { useState } from "react";
import { register } from "../../services/api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default to 'user'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register({ email, password, role });
      alert("Registration successful! Please log in.");
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="organizer">Organizer</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
