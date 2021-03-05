// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my_team_98_name: "",
    my_team_98_id: 0,
    my_team_98_url: "",
    my_team_98_type: 98,
    my_team_98_color: "",
    my_team_98_num: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    if (getApp().globalData.team_98.length != 0) {
      that.setData({
        my_team_98_name: getApp().globalData.team_98
      })
      wx.cloud.database().collection("team_2020_98")
        .where({
          team_name: that.data.my_team_98_name,
        })
        .get({
          success(res) {
            that.setData({
              my_team_98_id: res.data[0].team_id,
              my_team_98_url: res.data[0].team_url,
              my_team_98_type: 98,
              my_team_98_color: res.data[0].team_color,
              my_team_98_num: res.data[0].team_98_num,
            })
          },
          fail(res) {
            console.log("fail to get database in get team")
          }
        })

    } else {
      wx.showModal({
        title: '耶？',
        content: '你明明没有加入球队啊，快去绑定吧',
        showCancel: false,
      })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    /* var app = getApp()
    var that = this
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Publicshow/show_my_team',
      method:'POST',
      header: {
        'content-type':"application/x-www-form-urlencoded"
      },
      data:{
        user_id: app.globalData.userid,
      },
      success(res){
        that.setData({
          list: res.data.data,
        })
        console.log(res.data)
      }
    }) */
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