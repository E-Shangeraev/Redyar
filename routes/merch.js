const { Router } = require('express')
const MerchController = require('../controllers/Merch')
const router = Router()

router.get('/', MerchController.getItems)

module.exports = router
