const { Schema, model } = require('mongoose')

const TeamPhoto = new Schema({
  uploadedFile: JSON,
})

module.exports = model('TeamPhoto', TeamPhoto)
