// pages/Licence/Licence.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    point: "player",
    point_title: "浙江大学足球赛事球员证",
    point_scbg: "scbg_player",
    point_title_style: "title_player",
    name:"",
    study_number:"",
    college:"",
    img_url:"", 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.point == 1) {
      this.setData({
        point : "player",
        point_scbg: "scbg_player",
        point_title_style: "title_player",
        point_title: "浙江大学足球赛事球员证",
      })
    }else if (options.point == 2) {
      this.setData({
        point : "coach",
        point_scbg: "scbg_coach",
        point_title_style: "title_coach",
        point_title: "浙江大学足球赛事教练证",
      })
    }else {
      this.setData({
        point : "leader",
        point_scbg: "scbg_leader",
        point_title_style: "title_leader",
        point_title: "浙江大学足球赛事领队证",
      })
    }
    var app = getApp()
    this.setData({
      name: app.globalData.user.true_name,
      study_number: app.globalData.user.study_number,
      college: app.globalData.user.college,
      img_url: app.globalData.avatarUrl,  
    })
    //日期显示
     var time = util.formatTime(new Date())
     this.setData({
      time: time
    })
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