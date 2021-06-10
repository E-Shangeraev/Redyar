const { Router } = require('express')
const BlogController = require('../controllers/Blog')
const router = Router()

router.get('/:id', BlogController.getArticleById)

module.exports = router
