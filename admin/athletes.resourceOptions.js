const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['name', 'achievements', 'uploadedFile', 'mimeType'],
  editProperties: ['name', 'achievements', 'uploadedFile'],

  navigation: {
    icon: 'Fire',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = options
