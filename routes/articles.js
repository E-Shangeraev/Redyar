const { Router } = require('express')
const ArticleController = require('../controllers/Article')
const router = Router()

router.get('/', ArticleController.getArticles)
router.get('/:id', ArticleController.getItemByIndex)

module.exports = router
