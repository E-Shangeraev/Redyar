const { Schema, model } = require('mongoose')

const Review = new Schema({
  uploadedFile: JSON,
  name: {
    type: String,
    required: true,
  },
  review: String,
  rating: {
    type: Number,
    required: true,
  },
})

module.exports = model('Reviews', Review)
