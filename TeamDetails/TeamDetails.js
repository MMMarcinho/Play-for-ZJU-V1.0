// pages/TeamDetails/TeamDetails.js
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
    my_team_98_leader: "",
    my_team_98_captain: "",
    my_team_98_coach: "",
    chooseteamid: 0,
    teamlist: {},
    playerlist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.setData({
      chooseteamid: Number(options.chooseteamid),
      my_team_98_id: Number(options.chooseteamid),
    })
    // console.log(typeof(that.data.chooseteamid) + that.data.chooseteamid)
    // 再次尝试获取 team
    wx.cloud.database().collection("test")
      .where({
        team_id: this.data.chooseteamid,
      })
      .get({
        success(res) {
          console.log(res)
          that.setData({
            my_team_98_name: res.data[0].team_name,
            my_team_98_url: res.data[0].team_url,
            my_team_98_color: res.data[0].team_color,
            my_team_98_num: res.data[0].team_98_num,
            my_team_98_leader: res.data[0].team_leader,
            my_team_98_captain: res.data[0].team_captain,
            my_team_98_coach: res.data[0].team_coach,
          })
        },
        fail(res) {
          console.log("fail to get database in get team")
        }
      })

    // 查询球队球员
   /*  wx.cloud.database().collection("team_2020_98")
      .where({
        team_id: this.data.chooseteamid,
      })
      .get({
        success(res) {
          console.log(res)
          that.setData({
            my_team_98_name: res.data[0].team_name,
            my_team_98_url: res.data[0].team_url,
            my_team_98_color: res.data[0].team_color,
            my_team_98_num: res.data[0].team_98_num,
            my_team_98_leader: res.data[0].team_leader,
            my_team_98_captain: res.data[0].team_captain,
            my_team_98_coach: res.data[0].team_coach,
          })
        },
        fail(res) {
          console.log("fail to get database in get team")
        }
      }) */
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