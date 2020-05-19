//index.js
const app = getApp()
const db = wx.cloud.database({});
const todos = db.collection("smzdmYouhuiLists").doc('jM7iIblpMzePjdNHtlQd1mPCMpiQs3gKYs6MeBBED8VRy6XB')
Page({
  data: {
    canIUse:true
  },

  onLoad: function (options) {
    db.collection("smzdmYouhuiLists").where({
      openid: 'opNWH5F9RMFdMKP4iVN7LtwVhTDk'
    }).get({
      success: res => {
        console.log('成功',res)
      },
      fail: error => {
        console.log(2222)
      }
    })
  }
})