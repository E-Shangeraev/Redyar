const AdminBro = require('admin-bro')
const uploadFeature = require('@admin-bro/upload')
const config = require('config')
const Competition = require('../models/Competition')

const region = config.get('AWSRegion')
const bucket = config.get('AWSBucket')
const secretAccessKey = config.get('AWSSecretAccessKey')
const accessKeyId = config.get('AWSAccessKeyID')

/** @type {AdminBro.ResourceOtions} */
const options = {
  listProperties: ['name', 'text', 'complexity', 'image', 'mimeType'],
  editProperties: ['name', 'text', 'complexity', 'image'],

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
      file: 'image',
      filename: 'image.filename',
      filesToDelete: 'image.delete',
      key: 'image.path',
      bucket: 'image.folder',
      size: 'image.size',
      mimeType: 'image.mimeType',
    },
    validation: {
      mimeTypes: ['image/png', 'image/jpg', 'image/jpeg'],
    },
  }),
]

module.exports = {
  options,
  features,
  resource: Competition,
}
