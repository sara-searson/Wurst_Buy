const { Brand } = require("../models");

const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getBrandById = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findById(id);
    if (brand) {
      return res.json(brand);
    }
    return res.status(404).send(`that brand with ID not found`);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createBrand = async (req, res) => {
  try {
    const brand = await new Brand(req.body);
    await brand.save();
    return res.status(201).json({ brand });
  } catch (e) {
    return res.status(500).json({ error: error.message });
  }
};

const updateBrand = async (req, res) => {
  try {
    let { id } = req.params;
    let brand = await Brand.findByIdAndUpdate(id, req.body, { new: true });
    if (brand) {
      return res.status(200).json(plant);
    }
    throw new Error("brand not found");
  } catch (e) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
};
