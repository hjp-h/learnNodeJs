const express = require('express')
const router = express.Router()
// 添加用户
router.post('/:name',(req,res,next) => {
  res.end(`用户${req.params.name}添加成功！`)
})

module.exports = router
