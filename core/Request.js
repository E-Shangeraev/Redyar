class Request {
  constructor(model) {
    this.model = model
  }
  getItems = async (req, res) => {
    try {
      const { _from, _to } = req.query
      let skip
      let limit

      if (_from) {
        skip = +_from
        limit = 0
      }
      if (_to) {
        skip = 0
        limit = +_to
      }
      if (_from && _to) {
        skip = +_from
        limit = _to - _from
      }

      const items = await this.model.find().skip(skip).limit(limit)

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
  getItemsCount = async (req, res) => {
    try {
      await this.model.collection.stats((err, results) => {
        res.status(200)
        res.json(results.count)
      })
    } catch (err) {
      res.status(500)
      throw err
    }
  }
}

module.exports = Request
