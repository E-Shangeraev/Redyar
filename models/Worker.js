const { Schema, model, Types } = require('mongoose')

const Worker = new Schema({
  order: Number,
  uploadedFile: JSON,
  name: {
    type: String,
    required: true,
  },
  achievements: String,
  post: {
    type: String,
    required: true,
  },
  addition: Array,
  socials: new Schema({
    vk: String,
    instagram: String,
    telegram: String,
    youtube: String,
  }),
})

module.exports = model('Worker', Worker)
