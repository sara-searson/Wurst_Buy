const { Brand } = require('mongoose')


const BrandSchema = new Schema(
 {
   brand_name: { type: String, required: true },
   os: { type: String, required: true },
   year_founded: { type: Number, required: true},
   location: { type: String, required: true },
   logo_url: { type: String, required: true }
 },
 { timestamps: true }
)


module.exports = BrandSchema
