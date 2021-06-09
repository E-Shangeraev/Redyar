const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['number', 'question', 'answer'],
  editProperties: ['number', 'question', 'answer'],
  parent: {
    name: 'FAQ',
    icon: 'Help',
  },
  properties: {
    answer: {
      type: 'richtext',
    },
  },
}

module.exports = options
