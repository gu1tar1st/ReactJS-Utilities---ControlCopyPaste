/**
 * connectMongoDB.js
 *
 * This module establishes a connection to a MongoDB database using Mongoose.
 * It reads the MongoDB URI from environment variables and handles connection
 * success and error events.
 * 
 * @libraries mongoose, mongodb, express, cors, nodemon, dotenv
 * 
 * @configuration Requires a .env file with the following variable:
 * MONGO_USERNAME - Your MongoDB username (email)
 * MONGO_PASSWORD - Your MongoDB password
 * MONGO_CLUSTER  - Your MongoDB cluster address (see more about MongoDB connection string)
 * MONGO_APP_NAME - Your MongoDB application name (cluster name)
 * 
 * @author Henry Vu
 * @latest_update Jan 17, 2026
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
async function connectToMongoDB() { 
    try { 
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/?appName=${process.env.MONGO_APP_NAME}`); 
        console.log("Connected to MongoDB"); 
        return true; 
    } catch (err) { 
        console.error("MongoDB connection error:", err); 
        return false; 
    } 
} 

module.exports = { connectToMongoDB };

app.get("/connect", async (req, res) => { 
    const ok = await connectToMongoDB(); 
    res.json({ success: ok }); 
});

app.listen(5000, () => {
    console.log("App is running on port 5000");
});