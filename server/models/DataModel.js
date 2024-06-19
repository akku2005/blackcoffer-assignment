// models/DataModel.js
const mongoose = require("mongoose");
const { COLLECTION_NAME } = require("../constants.js");

const dataSchema = new mongoose.Schema(
  {
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: Date,
    published: Date,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number,
  },
  {
    collection: COLLECTION_NAME, // Specify the collection name here
  }
);

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
