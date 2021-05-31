const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['question', 'answer'],
  editProperties: ['question', 'answer'],
  parent: {
    name: 'FAQ',
    icon: 'Help',
  },
}

module.exports = options
