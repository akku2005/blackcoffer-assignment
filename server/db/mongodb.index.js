const mongoose = require("mongoose");
require("dotenv").config();
const { DB_NAME } = require("../constants.js");

const CONNECTING_URL = process.env.CONNECTING_URL;

async function connectDB() {
  try {
    await mongoose.connect(`${CONNECTING_URL}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB is connected to ${mongoose.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

console.log(`Database Name: ${DB_NAME}`);
module.exports = { connectDB };
