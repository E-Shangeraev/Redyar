const { FAQCamp, FAQBeginners } = require('../models/FAQ')
const Request = require('../core/Request')

class SortRequest extends Request {
  getItems = async (req, res) => {
    try {
      const items = await this.model.find().sort({ number: 1 })

      res.status(200).json(items)
    } catch (err) {
      res.status(500)
      throw err
    }
  }
}

const FAQCampController = new SortRequest(FAQCamp)
const FAQBeginnersController = new SortRequest(FAQBeginners)

module.exports = { FAQCampController, FAQBeginnersController }
