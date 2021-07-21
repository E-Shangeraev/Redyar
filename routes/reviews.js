const { Router } = require('express')
const {
  ReviewController,
  ReviewMainController,
} = require('../controllers/Review')
const router = Router()

router.get('/camp', ReviewController.getItems)
router.get('/camp/count', ReviewController.getItemsCount)
router.get('/club', ReviewMainController.getItems)
router.get('/club/count', ReviewMainController.getItemsCount)

module.exports = router
