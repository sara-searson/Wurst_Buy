const mongoose = require("mongoose");
const productSchema = require("./product");
const brandSchema = require("./brand");
const sasuageSchema = require("./sausage")
const reviewSchema = require("./review")

const Product = mongoose.model("Product", productSchema);
const Brand = mongoose.model("Brand", brandSchema);
const Sausage = mongoose.model("Sausage", sasuageSchema)
const Review = mongoose.model("Review", reviewSchema)

module.exports = {
  Product,
  Brand,
  Sausage,
  Review
};
