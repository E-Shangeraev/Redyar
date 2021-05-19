const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')
const config = require('config')

cloudinary.config({
  cloud_name: config.get('cloudinaryName'),
  api_key: config.get('cloudinaryAPIKey'),
  api_secret: config.get('cloudinaryAPISecret'),
})

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'images',
  allowedFormats: ['jpg', 'jpeg', 'png', 'gif'],
  transformation: [],
})

const uploader = multer({ storage })

export default uploader
