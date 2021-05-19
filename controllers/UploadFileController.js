const upload = require('../services/file-upload')

const singleUpload = upload.single('image')

class UploadFileController {
  create = (req, res) => {
    singleUpload(req, res, err => {
      return res.json({ imageUrl: req.file.location })
    })
  }

  delete = (req, res) => {}
}

module.exports = UploadFileController
