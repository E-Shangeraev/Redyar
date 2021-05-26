const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['name', 'post', 'achievements', 'uploadedFile'],
  editProperties: [
    'name',
    'post',
    'achievements',
    'addition',
    'socials',
    'uploadedFile',
  ],
  parent: {
    name: 'Главная',
    icon: 'Home',
  },
  navigation: {
    icon: 'Events',
  },
  properties: {
    mimeType: { isVisible: true },
  },
}

module.exports = options
