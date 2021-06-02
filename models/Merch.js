const { Schema, model } = require('mongoose')

const Merch = new Schema({
  uploadedFile: new Schema({ path: String }),
  price: Number,
  name: {
    type: String,
    required: true,
  },
  sizes: [String],
})

module.exports = model('Merch', Merch)
