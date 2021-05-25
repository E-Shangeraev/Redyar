const { Router } = require('express')
const CompetitionController = require('../controllers/Competition')
const router = Router()

router.get('/', CompetitionController.getItems)

module.exports = router
