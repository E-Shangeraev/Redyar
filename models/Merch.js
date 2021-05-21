const { Schema, model, Types } = require('mongoose')
const FileUpload = require('./FileUpload.js')

const Merch = new Schema({
  uploadedFile: FileUpload,
  price: Number,
  name: {
    type: String,
    required: true,
  },
  sizes: [String],
})

module.exports = model('Merch', Merch)
