

const uri = "mongodb+srv://sniper2002praveen:PyfhcnnnKe6LDrJg@bodima.3juag.mongodb.net/?retryWrites=true&w=majority&appName=bodima";

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the application if connection fails
    }
    // newwee
};

module.exports = connectDB;
