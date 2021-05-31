const { Router } = require('express')
const ScheduleController = require('../controllers/Schedule')
const router = Router()

router.get('/:day', ScheduleController.getItemByIndex('day'))

module.exports = router
