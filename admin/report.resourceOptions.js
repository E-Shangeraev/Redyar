const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['name', 'uploadedFile', 'mimeType'],
  editProperties: ['uploadedFile'],
  parent: {
    name: 'Главная',
    icon: 'Home',
  },
  navigation: {
    icon: 'ShoppingCart',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = options
