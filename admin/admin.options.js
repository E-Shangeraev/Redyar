const { default: AdminBro } = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
const uploadFeature = require('@admin-bro/upload')
const config = require('config')
const Admin = require('./admin.resourceOptions')
const Merch = require('./merch.resourceOptions')
const Competition = require('./competition.resourceOptions')
const Report = require('./report.resourceOptions')

// const FileUpload = require('../models/FileUpload')

// const region = config.get('AWSRegion')
// const bucket = config.get('AWSBucket')
// const secretAccessKey = config.get('AWSSecretAccessKey')
// const accessKeyId = config.get('AWSAccessKeyID')

// const features = [
//   uploadFeature({
//     provider: {
//       aws: { region, bucket, secretAccessKey, accessKeyId, expires: 0 },
//     },
//     properties: {
//       filename: 'uploadedFile.filename',
//       file: 'uploadedFile',
//       key: 'uploadedFile.path',
//       bucket: 'uploadedFile.folder',
//       size: 'uploadedFile.size',
//       mimeType: 'mimeType',
//     },
//     validation: {
//       mimeTypes: ['image/png', 'image/jpg', 'image/jpeg'],
//     },
//   }),
// ]

// Merch.features = features

AdminBro.registerAdapter(AdminBroMongoose)

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  locale: {
    language: 'rus',
    translations: {
      actions: {
        new: 'Добавить',
        edit: 'Редактировать',
        show: 'Подробнее',
        delete: 'Удалить',
        list: 'Записи',
        search: 'Искать',
        addNewItem: 'Добавить',
      },
      labels: {
        Admin: 'Администраторы',
        Merch: 'Мерч',
        Competition: 'Виды соревнований',
      },
      buttons: {
        filter: 'Фильтр',
        save: 'Сохранить',
      },
      resources: {
        Merch: {
          properties: {
            name: 'Название',
            price: 'Цена',
            sizes: 'Доступные размеры',
            uploadedFile: 'Фото',
          },
        },
        Competition: {
          properties: {
            name: 'Название',
            text: 'Описание',
            complexity: 'Сложность',
            uploadedFile: 'Фото',
          },
        },
        Report: {
          properties: {
            uploadedFile: 'Фото',
          },
        },
      },
    },
  },
  resources: [Admin, Merch, Competition, Report],
  branding: {
    companyName: 'Crossfit Redyar',
    logo: '',
    softwareBrothers: false,
  },
}

module.exports = options
