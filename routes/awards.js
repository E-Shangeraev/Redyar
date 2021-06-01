const { Router } = require('express')
const {
  ClubAwardsController,
  AthleteAwardsController,
} = require('../controllers/Awards')
const router = Router()

router.get('/club', ClubAwardsController.getItems)
router.get('/athlete', AthleteAwardsController.getItems)

module.exports = router
