const { Schema, model } = require('mongoose')

const Competition = new Schema({
  uploadedFile: JSON,
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  complexity: {
    type: String,
    required: true,
  },
})

module.exports = model('Competition', Competition)
