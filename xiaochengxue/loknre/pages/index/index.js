//index.js
//获取应用实例
import util from '../../utils/index'
const app = getApp()

Page({
  data: {
    articleList: [],
    articles: []
  },
  onLoad: function () {
    this.requestArticle()
  },
  requestArticle() {
    util.request({
      mock: true,
      url: 'list'
    })
    .then(res => {
      let articleList = res.data.data
      console.log(articleList)
      this.setData({
        articleList
      })
    })
    .catch((e) => {})
  },
})
