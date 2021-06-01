const { Schema, model } = require('mongoose')

const Athletes = new Schema({
  uploadedFile: JSON,
  name: {
    type: String,
    isRequired: true,
  },
  achievements: Array,
  rank: {
    type: String,
    isRequired: true,
  },
})

module.exports = model('Athletes', Athletes)
