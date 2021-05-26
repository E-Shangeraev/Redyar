const { Router } = require('express')
const ReportController = require('../controllers/Report')
const router = Router()

router.get('/', ReportController.getItems)

module.exports = router
