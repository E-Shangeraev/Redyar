const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const config = require('config')

aws.config.update({
  secretAccessKey: config.get('AWSSecretAccessKey'),
  accessKeyId: config.get('AWSAccessKeyID'),
  region: 'us-east-2',
})

const s3 = new aws.S3()

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('Invalid Mime Type, only JPEG and PNG'), false)
  }
}

const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: 'redyar-images',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: 'images' })
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    },
  }),
})

module.exports = upload
