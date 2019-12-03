Page({
  data:{
    city:'南昌',
  imgUrls:[
    'https://images.pexels.com/photos/2168366/pexels-photo-2168366.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=d8d48aa8a151f3dedcb2bf64a4eff0ec/4610b912c8fcc3ce863f8b519c45d688d53f20d0.jpg',
    'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=42001b3c85d4b31cef3c92bbb7d7276f/6a600c338744ebf812a16440d7f9d72a6159a7f8.jpg'
  ],
  items:[],
  indicatorDots:true, 
},
 onLoad() {
   let that = this
   wx.request({
     url:'https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/new-movie-list',
     success:function(res) {
       that.setData({
        items:res.data.data.movieList
      })
     }
    })
 },
  onPullDownRefresh() {
    console.log(134)
  },
  onReachBottom() {
    console.log(666)
  }
})