const express = require('express');
const Property = require('../model/property');

const router = express.Router();

// Add a new property
router.post('/add', async (req, res) => {
    const { title, description, price, rooms, beds } = req.body;

    // Validate input
    if (!title || !description || !price || !rooms || !beds) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Create a new property
        const newProperty = new Property({
            title,
            description,
            price,
            rooms,
            beds,
        });

        await newProperty.save();
        res.status(201).json({ message: 'Property added successfully', property: newProperty });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all properties
router.get('/list', async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
