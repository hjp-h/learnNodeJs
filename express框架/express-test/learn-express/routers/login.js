const express = require('express')
const multer = require('multer')
const router = express.Router()
const upload = multer()
router.post('/',upload.any(),(req,res,next) => {
  console.log(req.body);
  res.end('登陆成功！')
})
module.exports = router
