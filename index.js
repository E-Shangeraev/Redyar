// ==== Библиотеки ====
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

// ==== Роуты ====
const { uploadFileRouter } = require('./routes')

const app = express()

app.use('/api/files', uploadFileRouter)

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (err) {
    console.log(`Server error`, err.message)
    process.exit(1)
  }
}
start()

app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
