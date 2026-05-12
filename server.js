const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const monitoringRoutes = require('./routes/monitoringRoutes');
const feedingRoutes = require('./routes/feedingRoutes');
const dosingRoutes = require('./routes/dosingRoutes');

app.use('/api/monitoring', monitoringRoutes);
app.use('/api/feeding', feedingRoutes);
app.use('/api/dosing', dosingRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('Smart Biofloc Backend Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
