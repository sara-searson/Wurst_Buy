const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const SausageSchema = new Schema(
  {
    sausage_name: { type: String, require: true },
    price_single: { type: Number, require: true },
    price_sixpack: { type: Number, require: true },
    spicy: { type: Boolean, require: true },
    is_wurst: { type: Boolean, require: true },
    vegan: { type: Boolean, require: true},
    image: { type: String, require: true },
    description: { type: String, require: true}
  },
  { timestamps: true }
);

module.exports = SausageSchema;