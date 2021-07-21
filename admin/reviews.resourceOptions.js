const AdminBro = require('admin-bro')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['name', 'review', 'rating', 'uploadedFile'],
  editProperties: ['name', 'review', 'rating', 'uploadedFile'],
  parent: {
    name: 'Отзывы',
    icon: 'StarReview',
  },
}

module.exports = options
