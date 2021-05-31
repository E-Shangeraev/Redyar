const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['name', 'text', 'complexity', 'uploadedFile', 'mimeType'],
  editProperties: ['name', 'text', 'complexity', 'uploadedFile'],

  navigation: {
    icon: 'Trophy',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = options
