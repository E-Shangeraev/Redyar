const { CardPrice, OneTimeVisitPrice } = require('../models/Price')
const Request = require('../core/Request')

const CardController = new Request(CardPrice)
const OneTimeVisitController = new Request(OneTimeVisitPrice)

module.exports = { CardController, OneTimeVisitController }
