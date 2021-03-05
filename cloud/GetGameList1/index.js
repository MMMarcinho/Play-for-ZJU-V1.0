// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "playforzju7-pszkt",
})

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection("game_2019_fresh").get();
}