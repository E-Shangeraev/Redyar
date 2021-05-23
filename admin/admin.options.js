const { default: AdminBro } = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
const Admin = require('./admin.resourceOptions')
const Merch = require('./merch.resourceOptions')

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
        add: 'Добавить',
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
            uploadedFile: 'Фото',
          },
        },
      },
    },
  },
  resources: [Admin, Merch],
  branding: {
    companyName: 'Crossfit Redyar',
    logo: '',
    softwareBrothers: false,
  },
}

module.exports = options
