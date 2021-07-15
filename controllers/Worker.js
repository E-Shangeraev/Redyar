const Worker = require('../models/Worker')
const Request = require('../core/Request')
class SortRequest extends Request {
  getItems = async (req, res) => {
    try {
      const items = await this.model.find().sort({ order: 1 })

      res.status(200).json(items)
    } catch (err) {
      res.status(500)
      throw err
    }
  }
}

module.exports = new SortRequest(Worker)
