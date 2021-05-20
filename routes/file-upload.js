const { Router } = require('express')
const FileUpload = require('../controllers/FileUpload.js')
const router = Router()

router.post('/upload', FileUpload.create)
// router.get('/', FileUpload.get)
router.delete('/', FileUpload.delete)

module.exports = router
