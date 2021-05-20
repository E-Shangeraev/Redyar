const { default: AdminBro } = require('admin-bro')
const uploadFeature = require('@admin-bro/upload')
const AdminBroMongoose = require('@admin-bro/mongoose')
const Admin = require('./admin.resourceOptions')
const config = require('config')

const Merch = require('../models/Merch')
const FileUpload = require('../models/FileUpload')

const {
  before: passwordBeforeHook,
  after: passwordAfterHook,
} = require('./actions/password.hook')
const {
  before: uploadBeforeEventHook,
  after: uploadAfterEventHook,
} = require('./actions/upload-file.hook')

AdminBro.registerAdapter(AdminBroMongoose)

const region = config.get('AWSRegion')
const bucket = config.get('AWSBucket')
const secretAccessKey = config.get('AWSSecretAccessKey')
const accessKeyId = config.get('AWSAccessKeyID')

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
      },
      labels: {
        Admin: 'Администраторы',
        Merch: 'Мерч',
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
            fileUrl: 'Путь к изображению',
            mimeType: 'Фото',
          },
        },
      },
    },
  },
  resources: [
    Admin,
    {
      resource: Merch,
      options: {
        listProperties: ['name', 'price', 'sizes'],
        mimeType: { isVisible: true },
        parent: {
          name: 'Главная',
          icon: 'Home',
        },
        features: [
          uploadFeature({
            provider: {
              aws: { region, bucket, secretAccessKey, accessKeyId, expires: 0 },
            },
            properties: {
              key: FileUpload.path,
              bucket: FileUpload.folder,
              mimeType: FileUpload.type,
              size: FileUpload.size,
              filename: FileUpload.filename,
              file: FileUpload,
            },
            validation: {
              mimeTypes: ['image/png', 'image/jpg'],
            },
          }),
        ],
        // properties: {
        //   uploadFile: {
        //     // components: {
        //     //   edit: AdminBro.bundle('./components/upload-file.edit.tsx'),
        //     // },
        //     type: 'upload-file',
        //   },
        // },
        // navigation: {
        //   icon:
        // }
        // actions: {
        //   new: {
        //     before: async (req, context) => {
        //       const modifiedRequest = await passwordBeforeHook(req, context)
        //       return uploadBeforeEventHook(modifiedRequest, context)
        //     },
        //     after: async (res, req, context) => {
        //       const modifiedResponse = await passwordAfterHook(
        //         res,
        //         req,
        //         context
        //       )
        //       return uploadAfterEventHook(
        //         modifiedResponse,
        //         req,
        //         context,
        //         'calendar'
        //       )
        //     },
        //   },
        //   edit: {
        //     before: async (req, context) => {
        //       const modifiedRequest = await passwordBeforeHook(req, context)
        //       return uploadBeforeEventHook(modifiedRequest, context)
        //     },
        //     after: async (res, req, context) => {
        //       const modifiedResponse = await passwordAfterHook(
        //         res,
        //         req,
        //         context
        //       )
        //       return uploadAfterEventHook(
        //         modifiedResponse,
        //         req,
        //         context,
        //         'calendar'
        //       )
        //     },
        //   },
        //   //   delete: {
        //   //     after: async (res, req, context) => {
        //   //       const modifiedResponse = await passwordAfterHook(
        //   //         res,
        //   //         req,
        //   //         context
        //   //       )
        //   //       return deleteAfterEventHook(modifiedResponse, req, context)
        //   //     },
        //   //   },
        //   //   bulkDelete: {
        //   //     actionType: 'bulk',
        //   //     handler: async (req, res, context) =>
        //   //       bulkDeleteEventHook(req, res, context),
        //   //   },
        // },
      },
    },
  ],
  branding: {
    companyName: 'Crossfit Redyar',
    logo: '',
    softwareBrothers: false,
  },
}

module.exports = options
