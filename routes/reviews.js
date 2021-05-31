const { Router } = require('express')
const ReviewController = require('../controllers/Review')
const router = Router()

router.get('/', ReviewController.getItems)
router.get('/count', ReviewController.getItemsCount)

module.exports = router
