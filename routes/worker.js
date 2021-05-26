const { Router } = require('express')
const WorkerController = require('../controllers/Worker')
const router = Router()

router.get('/', WorkerController.getItems)

module.exports = router
