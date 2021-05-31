const { Schema, model } = require('mongoose')

const FAQ = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
})

const FAQCamp = model('FAQCamp', FAQ)
const FAQBeginners = model('FAQBeginners', FAQ)

module.exports = { FAQCamp, FAQBeginners }
