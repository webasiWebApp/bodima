require('dotenv').config();

const express = require('express');
const app = express();

const connectDB = require('./db');

const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/property');

// Connect to MongoDB
connectDB();


// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.use('/api/property', propertyRoutes);

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
