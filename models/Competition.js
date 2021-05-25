const { Schema, model } = require('mongoose')

const Competition = new Schema({
  image: {
    filename: String,
    delete: String,
    path: String,
    folder: String,
    size: String,
    mimeType: String,
  },
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
