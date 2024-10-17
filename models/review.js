const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ReviewSchema = new Schema(
  {
    name: { type: String },
    sausage: { type: String, required: true},
    rating: {type: Number, required: true, min: 1, max: 5},
    review: { type: String, required: true}
  },
  { timestamps: true }
);

module.exports = ReviewSchema;
