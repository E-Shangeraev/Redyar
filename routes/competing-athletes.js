const { Router } = require('express')
const CompetingAthletesController = require('../controllers/CompetingAthletes')
const router = Router()

router.get('/', CompetingAthletesController.getItems)

module.exports = router
