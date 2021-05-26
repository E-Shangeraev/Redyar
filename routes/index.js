const buildAdminRouter = require('./admin')
const merchRouter = require('./merch')
const competitionRouter = require('./competition')
const reportRouter = require('./report')
const workerRouter = require('./worker')
const athletesRouter = require('./athletes')
const scheduleRouter = require('./schedule')

module.exports = {
  buildAdminRouter,
  merchRouter,
  competitionRouter,
  reportRouter,
  workerRouter,
  athletesRouter,
  scheduleRouter,
}
