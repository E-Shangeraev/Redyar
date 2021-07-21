const { Schema, model } = require('mongoose')

const CompetingAthletes = new Schema({
  uploadedFile: JSON,
})

module.exports = model('CompetingAthletes', CompetingAthletes)
