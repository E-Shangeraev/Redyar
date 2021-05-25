const { Schema, model, Types } = require('mongoose')

const Report = new Schema({
  uploadedFile: JSON,
})

module.exports = model('Report', Report)
