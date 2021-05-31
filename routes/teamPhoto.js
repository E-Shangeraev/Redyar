const { Router } = require('express')
const TeamPhotoController = require('../controllers/TeamPhoto')
const router = Router()

router.get('/', TeamPhotoController.getItems)

module.exports = router
