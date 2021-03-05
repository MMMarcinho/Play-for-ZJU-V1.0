// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bcolor1: "rgb(180,180,180)",
    bcolor2: "rgb(13,65,140)",
    bcolor3: "rgb(180,180,180)",
    bcolor4: "rgb(180,180,180)",
    saishi:"/images/icons/bottom/saishi2.png",
    fabuhui:"/images/icons/bottom/fabuhui.png",
    shipin:"/images/icons/bottom/shipin2.png",
    gengduo:"/images/icons/bottom/gengduo2.png",
    newslist:[
      {
        newstitle: "球队球员发布会",
        newsman: "waitwaitwait",
        newsimg: "/images/icons/cp/change.png",
        newstime: "2020-4-26 20:23",
        newscontent: "经过裁判委员会及新生杯大赛委员会决定，足协这次叫啥队荣获2019年体育精神奖。",
      },
      {
        newstitle: "足球赛事发布会",
        newsman: "waitwaitwait",
        newsimg: "/images/icons/top/team.png",
        newstime: "2020-4-20 12:44",
        newscontent: "受疫情影响，学生难以返校，校园足球活动难以开展，故2020年三好杯系列赛事无限期暂停。",
      },
      {
        newstitle: "其它新闻发布会",
        newsman: "waitwaitwait",
        newsimg: "/images/icons/person/019-calendar.png",
        newstime: "2020-4-1 9:00",
        newscontent: "浙大足协将与西班牙巴塞罗那俱乐部合作，梅西即将亲临紫金港韦斯特球场。",
      },
      {
        newstitle: "其它新闻发布会",
        newsman: "waitwaitwait",
        newsimg: "/images/icons/person/019-calendar.png",
        newstime: "2020-3-16 20:23",
        newscontent: "疫情也要一起玩球，浙大足协即将开展线上实况足球竞赛。",
      },
      {
        newstitle: "足球赛事发布会",
        newsman: "waitwaitwait",
        newsimg: "/images/icons/top/team.png",
        newstime: "2020-2-21 9:00",
        newscontent: "受疫情影响，学生难以返校，校园足球活动难以开展，故2020年五人制赛事无限期停赛。",
      },
    ],
    news:[]
  },

  select1: function(){
    wx.redirectTo({
      url: '/pages/Game/Game',
    })
  },

  select2: function(){

  },

  select3: function(){
    wx.redirectTo({
      url: '/pages/Video_show/Video_show',
    })
  },

  select4: function(){
    wx.redirectTo({
      url: '/pages/Person/Person',
    })
  },

  com: function(){
    wx.redirectTo({
      url: '/pages/commit/commit',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    
    /* wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Message/get_all_message',
      data:{},
      method:'POST',
      header: {
        'content-type':"application/x-www-form-urlencoded"
      },
      success(res){
        that.setData({
          newslist: res.data.data,
        })
      }
    }) */

    wx.cloud.callFunction({
      name: "GetNews",
      success(res) {
        console.log("云函数获取数据成功！", res)
        that.setData({
          news: res.result.data
        })
      },
      fail(res) {
        console.log("fail to get database")
      }
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

  },


  onPullDownRefresh: function () {
    wx.showNavigationBarLoading()
    this.onLoad()
    setTimeout(() => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 2000);
  },
})

