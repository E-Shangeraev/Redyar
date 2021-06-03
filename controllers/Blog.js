const Blog = require('../models/Blog')
const Request = require('../core/Request')

class BlogController extends Request {
  getArticles = async (req, res) => {
    try {
      const { category } = req.query
      const items = category
        ? await this.model.find({ [`category.cat${category}`]: true })
        : await this.model.find()

      const data = await items.map(item => {
        item.categoryName = 'Тренировки'
        // if (item.category.cat1) {
        //   console.log('cat1')
        //   item.categoryName = 'Питание'
        //   console.log(item.categoryName)
        // }
        // if (item.category.cat2) {
        //   console.log('cat2')
        //   item.categoryName = 'Соревнования'
        //   console.log(item.categoryName)
        // }
        // if (item.category.cat3) {
        //   console.log('cat3')
        //   item.categoryName = 'Лагерь'
        //   console.log(item.categoryName)
        // }
        // if (item.category.cat4) {
        //   console.log('cat4')
        //   item.categoryName = 'Растяжка'
        // }
        // if (item.category.cat5) {
        //   console.log('cat5')
        //   item.categoryName = 'Тренировки'
        // }
        // let array = Object.keys(item.category)
        // array = array.map(cat => {
        //   switch (cat) {
        //     case 'cat1':
        //       return 'Питание'
        //     case 'cat2':
        //       return 'Соревнования'
        //     case 'cat3':
        //       return 'Лагерь'
        //     case 'cat4':
        //       return 'Растяжка'
        //     case 'cat5':
        //       return 'Тренировки'
        //   }
        // })
        // console.log(item.category)
        return item
      })

      console.log(data)

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
            .find({ [`category.cat${category}`]: true }, { _id: { $ne: skip } })
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
