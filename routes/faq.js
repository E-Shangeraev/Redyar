const { Router } = require('express')
const {
  FAQCampController,
  FAQBeginnersController,
} = require('../controllers/FAQ')
const router = Router()

router.get('/camp', FAQCampController.getItems)
router.get('/beginners', FAQBeginnersController.getItems)

module.exports = router
