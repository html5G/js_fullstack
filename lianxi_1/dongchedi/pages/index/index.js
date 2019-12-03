//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    page: 1,
    navData: [{
      zuozhe: '车知事',
      biaoqian: 'SUV热度也退潮！国产车刚抢的阵地又将被合资夺回？',
      image1: 'https://img4.imgtn.bdimg.com/it/u=2327429253,3849133181&fm=26&gp=0.jpg',
      image2: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1535479170,1318659007&fm=26&gp=0.jpg',
      image3: 'https://img1.imgtn.bdimg.com/it/u=1138466502,1065584887&fm=11&gp=0.jpg',
      shijian: '7分钟前',
    }]
  },
  vehicle: function () {
    wx.switchTab({
      url: '../selection/selection'
    })
  },
  photograph: function (e) {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
  },
  release: function () {
    wx.navigateTo({
      url: '../fabu/fabu'
    })
  },
  onReachBottom: function() {
    var that = this;
  },
  //事件处理函数
  bindViewTap: function () {

  },
  onLoad: function () {

  },
  getUserInfo: function () {

  }
})
