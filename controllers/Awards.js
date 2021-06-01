const { ClubAwards, AthleteAwards } = require('../models/Awards')
const Request = require('../core/Request')

const ClubAwardsController = new Request(ClubAwards)
const AthleteAwardsController = new Request(AthleteAwards)

module.exports = { ClubAwardsController, AthleteAwardsController }
