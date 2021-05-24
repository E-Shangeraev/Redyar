const Merch = require('../models/Merch')

class MerchController {
  getItems = async (req, res) => {
    try {
      const items = await Merch.find({})
      res.status(200)
      res.json(items)
    } catch (err) {
      res.status(500)
      throw err
    }
  }
}

module.exports = new MerchController()
