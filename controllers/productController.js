// const Product = require("../models/product");

// const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// };

// const getProductById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     if (product) {
//       return res.json(product);
//     }
//     return res.status(404).send(`that product with ID not found`);
//   } catch (e) {
//     return res.status(500).send(e.message);
//   }
// };

// const createProduct = async (req, res) => {
//   try {
//     const plant = await new Product(req.body);
//     await product.save();
//     return res.status(201).json({ product });
//   } catch (e) {
//     return res.status(500).json({ error: error.message });
//   }
// };

// const updateProduct = async (req, res) => {
//   try {
//     let { id } = req.params;
//     let product = await Product.findByIdAndUpdate(id, req.body, { new: true });
//     if (product) {
//       return res.status(200).json(product);
//     }
//     throw new Error("product not found");
//   } catch (e) {
//     return res.status(500).send(error.message);
//   }
// };

// const deleteProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await Product.findByIdAndDelete(id);
//     if (deleted) {
//       return res.status(200).send("Product deleted");
//     }
//     throw new Error("Product not found");
//   } catch (e) {
//     return res.status(500).send(e.message);
//   }
// };

// module.exports = {
//   getAllProducts,
//   getProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// };
