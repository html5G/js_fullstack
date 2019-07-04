// miniprogram/pages/liandong/liandong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      'https://images.pexels.com/photos/2168366/pexels-photo-2168366.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=d8d48aa8a151f3dedcb2bf64a4eff0ec/4610b912c8fcc3ce863f8b519c45d688d53f20d0.jpg',
      'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=42001b3c85d4b31cef3c92bbb7d7276f/6a600c338744ebf812a16440d7f9d72a6159a7f8.jpg'
    ],
    routers: [
      {
          name: '学校简历',
          url: '/pages/Course/course',
          icon: '/image/java_ico.png',
          code: '10'
      },
      {
          name: '校园风光',
          url: '/pages/Course/course',
          icon: '/image/python_ico.png',
          code: '11'
      },
      {
          name: 'CSS',
          url: '/pages/Course/course',
          icon: '/image/java_ico.png',
          code: '10'
      },
      {
          name: 'PHP',
          icon: '/image/python_ico.png',
          code: '11'
      },
      {
          name: 'Python',
          url: '/pages/Course/course',
          icon: '/image/java_ico.png',
          code: '10'
      },
      {
          name: 'JavaScript',
          icon: '/image/python_ico.png',
          code: '11'
      },
      {
          name: 'C++',
          url: '/pages/Course/course',
          icon: '/image/java_ico.png',
          code: '10'
      },
      {
          name: 'Object-C',
          icon: '/image/python_ico.png',
          code: '11'
      },
      {
          name: 'Ruby',
          url: '/pages/Course/course',
          icon: '/image/java_ico.png',
          code: '10'
      }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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