const Competition = require('../models/Competition')

class CompetitionController {
  getItems = async (req, res) => {
    try {
      const items = await Competition.find({})
      res.status(200)
      res.json(items)
    } catch (err) {
      res.status(500)
      throw err
    }
  }
}

module.exports = new CompetitionController()
