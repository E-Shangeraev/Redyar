const { Schema, model } = require('mongoose')

const Awards = new Schema({
  uploadedFile: JSON,
  title: {
    type: String,
    required: true,
  },
  text: String,
})

const ClubAwards = model('ClubAwards', Awards)
const AthleteAwards = model('AthleteAwards', Awards)

module.exports = { ClubAwards, AthleteAwards }
