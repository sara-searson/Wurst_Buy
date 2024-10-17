const { Review } = require("../models");

const getAllReviews = async (req, res) => {
  try {
    const review = await Review.find();
    res.json(review);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);
    if (review) {
      return res.json(review);
    }
    return res.status(404).send(`that brand with ID not found`);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body);
    await review.save();
    return res.status(201).json({ review });
  } catch (e) {
    return res.status(500).json({ error: error.message });
  }
};

const getReviewBySausage = async (req, res) => {
    try {
        const { sausageName } = req.params;
        console.log(sausageName)
        const review = await Review.find({ sausage: sausageName });
        console.log(review)
        if (review) {
          return res.json(review);
        }
        return res.status(404).send(`looks like we don't have any reviews for ${sausageName} yet`);
      } catch (e) {
        return res.status(500).send(e.message);
      }
}

module.exports = {
    getAllReviews,
    getReviewById,
    createReview,
    getReviewBySausage
  };
  