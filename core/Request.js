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
}

module.exports = Request
