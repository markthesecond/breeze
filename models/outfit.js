const mongoose = require('mongoose')

const outfitSchema = new mongoose.Schema({
  name: String,
  garments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Garment'
  }],
})

const Outfit = mongoose.model('Outfit', outfitSchema)

module.exports = Outfit
