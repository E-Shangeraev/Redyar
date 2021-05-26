const { Router } = require('express')
const ScheduleController = require('../controllers/Schedule')
const router = Router()

router.get('/', ScheduleController.getItems)

module.exports = router
