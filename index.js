// ==== Библиотеки ====
const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const { default: AdminBro } = require('admin-bro')
// const AdminBroExpress = require('@admin-bro/express')
const options = require('./admin/admin.options')

// ==== Роуты ====
const {
  buildAdminRouter,
  merchRouter,
  competitionRouter,
  reportRouter,
  workerRouter,
  athletesRouter,
  scheduleRouter,
  teamPhotoRouter,
  campPhotoRouter,
  reviewsRouter,
  faqRouter,
  awardsRouter,
  priceRouter,
  blogRouter,
  articleRouter,
} = require('./routes')

const app = express()
const admin = new AdminBro(options)
const adminRouter = buildAdminRouter(admin)

// ==== Middlewares ====
// app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

// ==== API ====
app.use(admin.options.rootPath, adminRouter)
app.use('/api/merch', merchRouter)
app.use('/api/competitions', competitionRouter)
app.use('/api/report', reportRouter)
app.use('/api/workers', workerRouter)
app.use('/api/athletes', athletesRouter)
app.use('/api/schedule', scheduleRouter)
app.use('/api/team-photo', teamPhotoRouter)
app.use('/api/camp-photo', campPhotoRouter)
app.use('/api/reviews', reviewsRouter)
app.use('/api/faq', faqRouter)
app.use('/api/awards', awardsRouter)
app.use('/api/price', priceRouter)
app.use('/blog', blogRouter)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// ==== App Start ====
const PORT = config.get('port') || 5000

const start = async () => {
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
