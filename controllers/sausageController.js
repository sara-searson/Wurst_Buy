const { Sausage } = require("../models");

const getAllSausages = async (req, res) => {
  try {
    const sausage = await Sausage.find();
    res.json(sausage);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getSausageById = async (req, res) => {
  try {
    const { id } = req.params;
    const sausage = await Sausage.findById(id);
    if (sausage) {
      return res.json(sausage);
    }
    return res.status(404).send(`that sausage with ID not found`);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createSausage = async (req, res) => {
  try {
    const sausage = await new Sausage(req.body);
    await sausage.save();
    return res.status(201).json({ sausage });
  } catch (e) {
    return res.status(500).json({ error: error.message });
  }
};

const updateSausage = async (req, res) => {
  try {
    let { id } = req.params;
    let sausage = await Sausage.findByIdAndUpdate(id, req.body, { new: true });
    if (sausage) {
      return res.status(200).json(sausage);
    }
    throw new Error("sausage not found");
  } catch (e) {
    return res.status(500).send(error.message);
  }
};

const getByName = async (req, res) => {
  try {
    const { name } = req.params;
    const sausage = await Sausage.findOne({ sausage_name: name});
    if (sausage) {
      return res.json(sausage);
    }
    return res.status(404).send(`Sausage with name '${name}' not found. Is your capitalization correct?`);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

module.exports = {
  getAllSausages,
  getSausageById,
  createSausage,
  updateSausage,
  getByName
};
