const buildAdminRouter = require('./admin')
const merchRouter = require('./merch')
const competitionRouter = require('./competition')
const reportRouter = require('./report')
const workerRouter = require('./worker')
const athletesRouter = require('./athletes')
const scheduleRouter = require('./schedule')
const teamPhotoRouter = require('./teamPhoto')
const campPhotoRouter = require('./campPhoto')
const reviewsRouter = require('./reviews')
const faqRouter = require('./faq')
const awardsRouter = require('./awards')
const priceRouter = require('./price')
const blogRouter = require('./blog')
const mailRouter = require('./mail')

module.exports = {
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
  mailRouter,
}
