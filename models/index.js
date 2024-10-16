const mongoose = require("mongoose");
const productSchema = require("./product");
const brandSchema = require("./brand");
const sasuageSchema = require("./sausage")

const Product = mongoose.model("Product", productSchema);
const Brand = mongoose.model("Brand", brandSchema);
const Sausage = mongoose.model("Sausage", sasuageSchema)

module.exports = {
  Product,
  Brand,
  Sausage
};
