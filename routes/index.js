const buildAdminRouter = require('./admin')
const mainRouter = require('./main')
const FileUploadRouter = require('./file-upload')

module.exports = { mainRouter, FileUploadRouter, buildAdminRouter }
