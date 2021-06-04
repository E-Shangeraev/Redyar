const Blog = require('../models/Blog')
const Request = require('../core/Request')

class BlogController extends Request {
  getArticles = async (req, res) => {
    try {
      const { category } = req.query
      const items = category
        ? await this.model.find({ [`category.cat${category}`]: true })
        : await this.model.find()
      res.status(200).json(items)
    } catch (err) {
      res.status(500)
      throw err
    }
  }
  getSimilarArticles = async (req, res) => {
    try {
      const { category, skip, limit } = req.query
      const items = category
        ? await this.model
            .find({
              $and: [
                { [`category.cat${category}`]: true },
                { _id: { $ne: skip } },
              ],
            })
            .limit(limit)
        : await this.model.find({ _id: { $ne: skip } }).limit(limit)

      res.status(200).json(items)
    } catch (err) {
      res.status(500)
      throw err
    }
  }
  getArticleById = async (req, res) => {
    try {
      const item = await this.model.findOne({ _id: req.params.id })
      res.status(200).json(item)
    } catch (err) {
      res.status(500)
      throw err
    }
  }
}

module.exports = new BlogController(Blog)
