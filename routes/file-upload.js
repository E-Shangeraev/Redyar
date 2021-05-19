const { Router } = require('express')
// const multer = require('multer')
const UploadFileController = require('../controllers/UploadFileController.js')

const router = Router()
const controller = new UploadFileController()

router.post('/upload', controller.create)

router.delete('/', controller.delete)

module.exports = router
