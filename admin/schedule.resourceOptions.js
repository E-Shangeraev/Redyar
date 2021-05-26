const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['weekDay'],
  editProperties: ['weekDay', 'schedule'],
  navigation: {
    icon: 'EventSchedule',
  },
}

module.exports = options
