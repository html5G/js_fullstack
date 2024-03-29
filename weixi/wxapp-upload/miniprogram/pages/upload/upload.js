const app =  getApp();

Page({
  data:{
    files:[]
  },
  chooseImage(e) {
    let that = this
    wx.chooseImage({
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success(res) {
        console.log('9999'.res)
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        })
        //-------
        for ( let  i = 0; i < res.tempFilePaths; i++) {
          const filePath = res.tempFilePaths[i]
          let a = filePath.lastIndexOf('.')
          let b = filePath.lastIndexOf('.',filePath.length - 7)
          let c = filePath.substring(b + 1,a)
          const cloudPath = c + res.tempFilePaths[0].match(/\.[^.]+?$/)
        }
        const filePath = res.tempFilePaths[0];
        const cloudPath = 'my-image' + res.tempFilePaths[0].match(/\.[^.]+?$/)
        wx.cloud.uploadFile({
          cloudPath,
          filePath, // 文件路径
          success: res => {
            // get resource ID
            console.log('上传成功',res)
          },
          fail: err => {
            // handle error
          }
        })
      }
    })
  },
  previewImage(e) {
    console.log('6666',e)
    wx.previewImage({
      current:e.currentTarget.id,
      urls: this.data.files
    })
  }
})

  