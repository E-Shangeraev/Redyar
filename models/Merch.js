const { Schema, model, Types, ref } = require('mongoose')
const FileUpload = require('./FileUpload.js')

const Merch = new Schema({
  fileUrl: String,
  uploadedFile: FileUpload,
  price: Number,
  name: {
    type: String,
    required: true,
  },
  sizes: [String],
  ownerId: {
    type: Types.ObjectId,
    ref: 'Admin',
  },
})

module.exports = model('Merch', Merch)
