// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'j44-v0rvx'
cloud.init()
const db = cloud.database({env})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const groupNum = await db.collection('user-group').where({
    userInfo:cloud.getWXContext().OPENID
  })
  .get()

   const storeUser = await db.collection('user').where({
     openId:cloud.getWXContext().OPENID
   })
   .get()
   return {
     groupNum:groupNum.data.length,
     storeUser:storeUser.data[0]
   }
}