const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['uploadedFile'],
  editProperties: ['uploadedFile', 'mimeType'],
  parent: {
    name: 'Фото',
    icon: 'Camera',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = options
