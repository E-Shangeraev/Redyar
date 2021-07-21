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

const Reviews = model('Reviews', Review)
const ReviewsMain = model('ReviewsMain', Review)

module.exports = { Reviews, ReviewsMain }
