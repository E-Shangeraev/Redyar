const AdminBro = require('admin-bro')
const uploadFeature = require('@admin-bro/upload')
const config = require('config')
const Report = require('../models/Report')

const region = config.get('AWSRegion')
const bucket = config.get('AWSBucket')
const secretAccessKey = config.get('AWSSecretAccessKey')
const accessKeyId = config.get('AWSAccessKeyID')

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

const features = [
  uploadFeature({
    provider: {
      aws: { region, bucket, secretAccessKey, accessKeyId, expires: 0 },
    },
    properties: {
      filename: 'uploadedFile.filename',
      file: 'uploadedFile',
      key: 'uploadedFile.path',
      bucket: 'uploadedFile.folder',
      size: 'uploadedFile.size',
      mimeType: 'mimeType',
    },
    validation: {
      mimeTypes: ['image/png', 'image/jpg', 'image/jpeg'],
    },
  }),
]

module.exports = {
  options,
  features,
  resource: Report,
}
