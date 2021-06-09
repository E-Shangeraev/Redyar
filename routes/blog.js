const { Router } = require('express')
const BlogController = require('../controllers/Blog')
const router = Router()

router.get('/', BlogController.getArticles)
router.get('/similar', BlogController.getSimilarArticles)
router.get('/:id', BlogController.getArticleById)
router.post('/', BlogController.findArticles)

module.exports = router
