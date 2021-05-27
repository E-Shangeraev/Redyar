class Request {
  constructor(model) {
    this.model = model
  }
  getItems = async (req, res) => {
    try {
      const items = await this.model.find({})
      res.status(200)
      res.json(items)
    } catch (err) {
      res.status(500)
      throw err
    }
  }
  getItemByIndex = param => async (req, res) => {
    try {
      const item = await this.model.findOne({ index: req.params[param] })
      res.status(200)
      res.json(item)
    } catch (err) {
      res.status(500)
      throw err
    }
  }
}

module.exports = Request
