const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['uploadedFile', 'mimeType'],
  editProperties: ['uploadedFile'],
  parent: {
    name: 'Главная',
    icon: 'Home',
  },
  navigation: {
    icon: 'Camera',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = options
