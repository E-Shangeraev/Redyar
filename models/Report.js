const { Schema, model, Types } = require('mongoose')

const Report = new Schema({
  name: String,
  uploadedFile: JSON,
})

module.exports = model('Report', Report)
