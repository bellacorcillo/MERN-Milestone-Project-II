// reviews.js

const mongoose = require('mongoose');

// Define the review schema
const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

// Create the review model
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;