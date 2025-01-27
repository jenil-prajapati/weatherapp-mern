const mongoose = require("mongoose");

const WeatherSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  dateRange: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  temperature: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Weather", WeatherSchema);
