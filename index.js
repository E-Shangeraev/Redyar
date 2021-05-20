// ==== Библиотеки ====
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const { default: AdminBro } = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const options = require('./admin/admin.options')

// ==== Роуты ====
const { FileUploadRouter, buildAdminRouter } = require('./routes')

const app = express()
const admin = new AdminBro(options)
const router = buildAdminRouter(admin)

app.use(admin.options.rootPath, router)
app.use('/api/files', FileUploadRouter)

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
  } catch (err) {
    console.log(`Server error`, err.message)
    process.exit(1)
  }
}
start()
