const { Reviews, ReviewsMain } = require('../models/Review')
const Request = require('../core/Request')

const ReviewController = new Request(Reviews)
const ReviewMainController = new Request(ReviewsMain)

module.exports = { ReviewController, ReviewMainController }
