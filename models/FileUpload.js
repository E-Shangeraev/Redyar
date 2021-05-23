const { Schema } = require('mongoose')

const FileUpload = new Schema({
  path: String,
  type: String,
  size: Number,
  folder: String,
  filename: String,
})

module.exports = FileUpload
