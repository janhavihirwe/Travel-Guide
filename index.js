const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const tripRoutes = require('./routes/trips');
const bookingRoutes = require('./routes/booking');

dotenv.config();


const app = express();
app.use(express.json());
app.use(require('cors')());

app.use('/api/auth', authRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async() => {
    try{
        await connectDB
        console.log(`Server running on port ${PORT} and Connected to database`)
    }
    catch(err){
        console.log("Error while connecting")
    }
    

});
