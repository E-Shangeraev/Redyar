const Merch = require('../models/Merch')

exports.getItems = async (req, res) => {
  try {
    const items = await Merch.find({})
    res.status(200)
    res.json(items)
  } catch (err) {
    res.status(500)
    throw err
  }
}
