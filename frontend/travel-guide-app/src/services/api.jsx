
import axios from "axios";

const API = axios.create({ baseURL: "https://travel-guide-en22.onrender.com/api" });

export const login = (credentials) => API.post("/auth/login", credentials);
export const register = (data) => API.post("/auth/register", data);
export const getTrips = () => API.get("/trips");
export const getTripById = (id) => API.get(`/trips/${id}`);
export const bookTrip = (data) => API.post("/bookings/book", data);
export const getUserBookings = () => API.get("/bookings/my-bookings");
export const addTrip = (data) => API.post("/trips/add", data);

export default API;
