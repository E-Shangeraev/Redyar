const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['name', 'rank', 'achievements', 'uploadedFile', 'mimeType'],
  editProperties: ['name', 'rank', 'achievements', 'uploadedFile'],

  navigation: {
    icon: 'Fire',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = options
