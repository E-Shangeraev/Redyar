const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['title', 'text', 'uploadedFile', 'mimeType'],
  editProperties: ['title', 'text', 'uploadedFile'],

  parent: {
    name: 'Награды',
    icon: 'Badge',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = options
