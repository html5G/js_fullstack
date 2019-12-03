
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const got = require('got')

let appid = 'wx9576764d83a0a314';
let secret = 'da9a425e1b8cc0d450930d5accd118ef';
let msgCheckUrl = 'https://api.weixin.qq.com/wxa/msg_sec_check?access_token=';
let tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+ appid + '&secret=' + secret;
// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx9576764d83a0a314&secret=da9a425e1b8cc0d450930d5accd118ef
// 云函数入口函数
exports.main = async (event, context) => {
//     //许可
//     let tokenResponse = await got(tokenUrl);
//     let token = JSON.parse(tokenResponse.body).access_token;
//     console.log(token);
//     let checkResponse = await got(msgCheckUrl + token,{
//         body:JSON.stringify({
//             content:event.text
//         })
//     });
//    console.log(checkResponse)
//   return checkResponse.body
return event.a + event.b
}