const AdminBro = require('admin-bro')
const { Admin } = require('../models/Admin')
const {
  before: passwordBeforeHook,
  after: passwordAfterHook,
} = require('./actions/password.hook')

/** @type {AdminBro.ResourceOtions} */
const options = {
  parent: {
    name: 'Администрирование',
    icon: 'UserAdmin',
  },
  properties: {
    encryptedPassword: {
      isVisible: false,
    },
    password: {
      type: 'password',
    },
  },
  actions: {
    new: {
      before: passwordBeforeHook,
      after: passwordAfterHook,
    },
    edit: {
      before: passwordBeforeHook,
      after: passwordAfterHook,
    },
  },
}

module.exports = {
  options,
  resource: Admin,
}
