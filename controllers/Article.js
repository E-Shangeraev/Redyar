const Article = require('../models/Article')
const Request = require('../core/Request')

class ArticleController extends Request {
  getArticles = async (req, res) => {
    try {
      const { category } = req.query
      const items = await this.model.find({ [`category.cat${category}`]: true })
      items.forEach(item => {
        console.log(item.category)
      })
      // const articles =

      res.status(200).json(items)
    } catch (err) {
      res.status(500)
      throw err
    }
  }
}

module.exports = new ArticleController(Article)
