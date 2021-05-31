const { Schema, model } = require('mongoose')

const CampPhoto = new Schema({
  uploadedFile: JSON,
})

module.exports = model('CampPhoto', CampPhoto)
