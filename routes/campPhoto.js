const { Router } = require('express')
const CampPhotoController = require('../controllers/CampPhoto')
const router = Router()

router.get('/', CampPhotoController.getItems)

module.exports = router
