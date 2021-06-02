const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['title', 'text', 'publishedAt', 'uploadedFile'],
  editProperties: ['category', 'title', 'text', 'publishedAt', 'uploadedFile'],

  navigation: {
    icon: 'Blog',
  },
  properties: {
    mimeType: { isVisible: true },
    text: {
      type: 'richtext',
    },
  },
}

module.exports = options
