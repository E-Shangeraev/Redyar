const aws = require('aws-sdk')
const upload = require('../services/file-upload')

const s3 = new aws.S3()

const singleUpload = upload.single('image')

class FileUploadController {
  create = (req, res) => {
    singleUpload(req, res, err => {
      if (err) {
        return res.status(442).send({
          errors: [
            {
              title: 'File upload error',
              details: err.message,
            },
          ],
        })
      }
      return res.json({ imageUrl: req.file.location })
    })
  }

  get = async (req, res) => {
    const params = { Bucket: 'redyar-images', Key: '1621408674370' }
    s3.getObject(params, (err, data) => {
      if (err) {
        return res.send({ error: err })
      }
      res.send({ data })
    })
    // const response = await s3
    //   .listObjectsV2({
    //     Bucket: 'redyar-images',
    //   })
    //   .promise()
    // console.log(response)
  }

  delete = (req, res) => {}
}

module.exports = new FileUploadController()
