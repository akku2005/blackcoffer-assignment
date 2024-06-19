require("dotenv").config({ path: "./.env" });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import the Data model and routes
const dataRouter = require("./routes/get.routes");
const { connectDB } = require("./db/mongodb.index");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });

    app.on("error", (err) => {
      console.log("Error", err);
      throw err;
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });

// Use the router to get the data
app.use("/api", dataRouter);
