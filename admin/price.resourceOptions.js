const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['period', 'cost', 'info', 'isHit'],
  editProperties: ['period', 'cost', 'info', 'isHit'],
  parent: {
    name: 'Стоимость',
    icon: 'Money',
  },
}

module.exports = options
