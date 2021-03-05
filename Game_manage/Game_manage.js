// pages/Game_manage/Game_manage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    publisher_id: "",
    cup_type: "",
    game_type: "",
    field: "",
    host_team: "",
    guest_team: "",
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
  },
  cuptype_input:function(e){
    this.data.cup_type=e.detail.value
  },
  gametype_input:function(e){
    this.data.game_type=e.detail.value
  },
  field_input:function(e){
    this.data.field=e.detail.value
  },
  hostteam_input:function(e){
    this.data.host_team=e.detail.value
  },
  guestteam_input:function(e){
    this.data.guest_team=e.detail.value
  },
  year_input:function(e){
    this.data.year=e.detail.value
  },
  month_input:function(e){
    this.data.month=e.detail.value
  },
  day_input:function(e){
    this.data.day=e.detail.value
  },
  hour_input:function(e){
    this.data.hour=e.detail.value
  },
  minute_input:function(e){
    this.data.minute=e.detail.value
  },

  confirm: function(e){
    var that = this
    var app = getApp()
    if(that.data.cup_type == '' || that.data.game_type == ''|| that.data.field == ''|| that.data.host_team == ''|| that.data.guest_team == ''|| that.data.year == ''|| that.data.month == ''|| that.data.day == ''|| that.data.hour == ''|| that.data.minute == ''){
      wx.showModal({
        title: '提示',
        content: '输入信息不全',
        showCancel: false,
        success (res) {}
      })
    }else{
      wx.request({
        url: 'https://playforzju.applinzi.com/index.php/Home/Schedule/publish_new_schedule',
        data: {
          publisher_id: app.globalData.userid,
          cup_type: that.data.cup_type,
          game_type: that.data.game_type,
          field: that.data.field,
          host_team: that.data.host_team,
          guest_team: that.data.guest_team,
          year: that.data.year,
          month: that.data.month,
          day: that.data.day,
          hour: that.data.hour,
          minute: that.data.minute,
        },
        method:'POST',
        header: {
          'content-type':"application/x-www-form-urlencoded"
        },
        success(res){
          console.log(res.data)
          if(res.data.error_code != 0){
            wx.showModal({
              title: '提示',
              content: res.data.msg,
              showCancel: false,
              success (res){}
            })
          }
          else if(res.data.error_code == 0){
            wx.showModal({
              title: '恭喜',
              content: '新赛事创建成功！',
              showCancel: false,
              success (res){},
              complete:function(res){
                wx.reLaunch({
                  url: '/pages/Game_manage/Game_manage',
                })
              }
            })
          }
        }
      })
    }
  },

  back: function(){
    wx.redirectTo({
      url: '/pages/Manage/Manage',
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