const { Schema, model } = require('mongoose')

const Blog = new Schema({
  uploadedFile: JSON,
  category: {
    type: new Schema({
      cat1: Boolean,
      cat2: Boolean,
      cat3: Boolean,
      cat4: Boolean,
      cat5: Boolean,
    }),
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: String,
  publishedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
})

Blog.index({ title: 'text', text: 'text' }, { default_language: 'russian' })

module.exports = model('Articles', Blog)
