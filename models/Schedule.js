const { Schema, model } = require('mongoose')

const Schedule = new Schema({
  index: {
    type: Number,
    unique: true,
    required: true,
  },
  weekDay: {
    type: String,
    required: true,
  },
  schedule: [
    new Schema({
      time: { type: String, required: true },
      name: { type: String, required: true },
      description: { type: String, required: true },
    }),
  ],
})

module.exports = model('Schedule', Schedule)
