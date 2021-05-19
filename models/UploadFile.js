const { Schema, model } = require('mongoose')

const UploadFile = new Schema({
  filename: String,
  size: Number,
  ext: String,
  url: String,
})

module.exports = model('Uploads', UploadFile)
