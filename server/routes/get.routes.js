const express = require("express");
const Data = require("../models/DataModel.js");

const router = express.Router();

// GET endpoint to fetch all data
router.get("/data", async (req, res) => {
  try {
    const { year, topics, sector, region, PEST, source, SWOT, country, city } =
      req.query;
    let query = {};

    if (year) query.year = year;
    if (topics) query.topics = { $in: topics.split(",") };
    if (sector) query.sector = sector;
    if (region) query.region = region;
    if (PEST) query.PEST = PEST;
    if (source) query.source = source;
    if (SWOT) query.SWOT = SWOT;
    if (country) query.country = country;
    if (city) query.city = city;

    const data = await Data.find(query);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
