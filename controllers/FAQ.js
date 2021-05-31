const { FAQCamp, FAQBeginners } = require('../models/FAQ')
const Request = require('../core/Request')

const FAQCampController = new Request(FAQCamp)
const FAQBeginnersController = new Request(FAQBeginners)

module.exports = { FAQCampController, FAQBeginnersController }
