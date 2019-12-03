// pages/fabu/fabu.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData:[
    {month:'5月',id:'Fi',
    imgUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1043414558,1846250770&fm=11&gp=0.jpg',
    name:'逸动ET',money:'16.29',day:'11'},

    {month:'4月',id:'Fo',
    imgUrl:'http://img2.imgtn.bdimg.com/it/u=3223746554,1721656546&fm=26&gp=0.jpg',
    name:'瑞风S2',money:'5.78',day:'30'},

    {month:'3月',id:'Th',
    imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2091031339,3453267566&fm=26&gp=0.jpg',
    name:'名爵EZS纯电动',money:'10.98',day:'30'},

    {month:'2月',id:'Tw',
    imgUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1023845178,31393164&fm=26&gp=0.jpg',
    name:'牧马人',money:'42.99',day:'28'},

    {month:'1月',id:'O',
    imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1021841700,1514374435&fm=26&gp=0.jpg',
    name:'宝马X6',money:'67.85',day:'30'},

    {month:'12月',id:'T',
    imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1117140279,868630988&fm=26&gp=0.jpg',
    name:'传祺GM8',money:'116.88',day:'30'} 
    ],
    curIndex: 0,
    isScroll:false,
    toView:'Fi'
  },
  switchTab:function(e){  
    console.log(e);
      this.setData({
        toView:e.target.dataset.id,
        curIndex:e.target.dataset.index
      })  
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