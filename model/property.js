const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rooms: { type: Number, required: true },
    beds: { type: Number, required: true },
});

module.exports = mongoose.model('Property', propertySchema);
