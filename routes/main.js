const { Router } = require('express')
const router = Router()

router.get('/', async (req, res) => {
  console.log('Hello')
})

module.exports = router
