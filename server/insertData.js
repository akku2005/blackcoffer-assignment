const fs = require("fs");
const mongoose = require("mongoose");
const Data = require("./models/DataModel");
require("dotenv").config();

const CONNECTING_URL = process.env.CONNECTING_URL;
const DB_NAME = process.env.DB_NAME;

async function connectDB() {
  try {
    await mongoose.connect(`${CONNECTING_URL}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

async function insertData() {
  try {
    await connectDB();

    const jsonDataPath = "./data/jsondata.json";
    console.log(`Reading data from: ${jsonDataPath}`);

    const jsonDataContent = fs.readFileSync(jsonDataPath, "utf-8");

    let jsonData;
    try {
      jsonData = JSON.parse(jsonDataContent);
    } catch (parseError) {
      console.error("Error parsing JSON data:", parseError.message);
      process.exit(1);
    }

    const insertedData = await Data.insertMany(jsonData);
    console.log(`${insertedData.length} documents inserted successfully`);

    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting data:", err);
    process.exit(1);
  }
}

insertData();
