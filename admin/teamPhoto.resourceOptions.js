const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['uploadedFile'],
  editProperties: ['uploadedFile'],
  parent: {
    name: 'Фото',
    icon: 'Camera',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = options
