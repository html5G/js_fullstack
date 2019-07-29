

var express = require('express')
var fs = require('fs')
var router = express.Router()

// 获取首页路由
router.get('/',function(req,res,next) {
    function readImage(path,res) {
        fs.readFile(path,'binary',function(err,file) {
            if (err) {
                return
            } else {
                console.log('输出文件')
                res.writeHead(200,{'Content-Type' : 'image/jpeg'})
                res.write(file,'binary')
                res.end()
            }
        })
    }
    readImage('/pubilc/images/head.jpeg',res)
    // next()
})
module.exports = router