const { Router } = require('express')
const AthletesController = require('../controllers/Athletes')
const router = Router()

router.get('/', AthletesController.getItems)

module.exports = router
