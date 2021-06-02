const { Schema, model } = require('mongoose')

const Price = new Schema({
  cost: {
    type: Number,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  info: String,
  isHit: Boolean,
})

const CardPrice = model('CardPrice', Price)
const OneTimeVisitPrice = model('OneTimeVisitPrice', Price)

module.exports = { CardPrice, OneTimeVisitPrice }
