const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const ProductSchema = new Schema(
    {
        brand: { type: Schema.Types.ObjectId, ref: 'BrandSchema' },
        product_model: { type: String, required: true },
        SKU: { type: Number, required: true },
        product_name: { type: String, required: true },
        year_released: { type: Number, required: true },
        price: { type: Number, required: true, min: 0 },
        storage_GB: { type: Number, required: true},
        ram_GB: { type: Number, required: true },
        gpu: { type: String, required: true },
        motherboard: { type: String, required: true },
        cpu: { type: String, required: true },
        color: { type: String, required: true },
        preowned: { type: Boolean, required: true },
        product_image: { type: String, required: true},
        is_laptop: { type: Boolean, required: true }
    }
)


module.exports = ProductSchema