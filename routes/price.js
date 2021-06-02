const { Router } = require('express')
const {
  CardController,
  OneTimeVisitController,
} = require('../controllers/Price')
const router = Router()

router.get('/card', CardController.getItems)
router.get('/one-time-visit', OneTimeVisitController.getItems)

module.exports = router
