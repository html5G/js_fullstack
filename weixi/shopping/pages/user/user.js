// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   thumb:'',
   nickname:'',
   orders:[],
   hasAddress:false,
   address:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let self = this
     wx.getUserInfo({
       success:(result) => {
         self.setData({
           thumb:result.userInfo.avatarUrl,
           nickname:result.userInfo.nickName
         });
         wx.request({
           url:'http://www.gdfengshuo.com/api/wx/orders.txt',
           success:(res) =>{
            self.setData({
              orders:res.data
            })
           }
         })
       },
       fail:() =>{},
       complete:() =>{}
     });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let self =this
    wx.getStorage({
      key:'address',
      success:(result) =>{
        self.setData({
          hasAddress:true,
          address:result.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})