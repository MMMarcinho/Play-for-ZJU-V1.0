Page({

  /**
   * 页面的初始数据
   */
  data: {
    scolor: "rgb(180,180,180)",
    jcolor: "rgb(180,180,180)",
    playercolor: "rgb(180,180,180)",
    teamcolor: "rgb(13,65,140)",
    bcolor1: "rgb(13,65,140)",
    bcolor2:"rgb(180,180,180)",
    bcolor3:"rgb(180,180,180)",
    bcolor4:"rgb(180,180,180)",
    color0:"rgb(13,65,140)",
    color98:"rgb(180,180,180)",
    color5:"rgb(180,180,180)",
    color3:"rgb(180,180,180)",
    saishi:"/images/icons/bottom/saishi.png",
    fabuhui:"/images/icons/bottom/fabuhui2.png",
    shipin:"/images/icons/bottom/shipin2.png",
    gengduo:"/images/icons/bottom/gengduo2.png",
    playerpoint: getApp().globalData.gamepoint,
    list:[],
    team_list:[],
    toppic:"http://playforzju-images.stor.sinaapp.com/gamepic/New.jpg",
    topname:"新生杯",
    topint:"由浙大足协组织，面向全体新生的一项赛事",
    toptxt:"春风得意马蹄疾，一日看尽紫玉花",
  },

  select1: function(){

  },

  select2: function(){
    wx.redirectTo({
      url: '/pages/square/square',
    })
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

  gamee1: function(){
    var playerpoint = this.data.playerpoint;
    var color0 = this.data.color0;
    var color98 = this.data.color98;
    var color5 = this.data.color5;
    var color3 = this.data.color3;

    this.setData({
      playerpoint: 1,
      color0:"rgb(13,65,140)",
      color98:"rgb(180,180,180)",
      color5:"rgb(180,180,180)",
      color3:"rgb(180,180,180)",
    })
  },

  gamee2: function(){
    var playerpoint = this.data.playerpoint;
    var color0 = this.data.color0;
    var color98 = this.data.color98;
    var color5 = this.data.color5;
    var color3 = this.data.color3;

    this.setData({
      playerpoint: 98,
      color0:"rgb(180,180,180)",
      color98:"rgb(13,65,140)",
      color5:"rgb(180,180,180)",
      color3:"rgb(180,180,180)",
    })
  },

  gamee3: function(){
    var playerpoint = this.data.playerpoint;
    var color0 = this.data.color0;
    var color98 = this.data.color98;
    var color5 = this.data.color5;
    var color3 = this.data.color3;

    this.setData({
      playerpoint: 5,
      color0:"rgb(180,180,180)",
      color98:"rgb(180,180,180)",
      color5:"rgb(13,65,140)",
      color3:"rgb(180,180,180)",
    })
  },

  gamee4: function(){
    var playerpoint = this.data.playerpoint;
    var color0 = this.data.color0;
    var color98 = this.data.color98;
    var color5 = this.data.color5;
    var color3 = this.data.color3;

    this.setData({
      playerpoint: 3,
      color0:"rgb(180,180,180)",
      color98:"rgb(180,180,180)",
      color5:"rgb(180,180,180)",
      color3:"rgb(13,65,140)",
    })
  },
  
  game: function(){
    wx.redirectTo({
      url: '/pages/Game/Game',
    })
  },
  scoreboard: function(){
    wx.redirectTo({
      url: '/pages/Scoreboard/Scoreboard',
    })
  },
  playerboard: function(){
    wx.redirectTo({
      url: '/pages/Playerboard/Playerboard',
    })
  },

  de: function (e) {
    if (this.data.playerpoint != 98) {
      wx.showToast({
        title: '往年数据正在同步中，请关注小程序后期发展',
        icon: 'none',
        duration: 2000
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/TeamDetails/TeamDetails?chooseteamid='+e.target.dataset.chooseteamid,
      })
    }
    
  },

  get:function(e){
    console.log(e)
    var app = getApp()
    var that = this
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Player/join_team',
      data: {
        user_id: app.globalData.userid,
        team_id: e.target.dataset.id,
      },
      method:'POST',
      header: {
        'content-type':"application/x-www-form-urlencoded"
      },
      success(res){
        if(res.data.error_code != 0){
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false,
            success (res){}
          })
        }else if(res.data.error_code == 0){
          wx.showModal({
            title: '提示',
            content: '您的申请已提交成功，请等待领队审核',
            showCancel: false,
            success (res){}
          })
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.cloud.callFunction({
      name: "GetTeamListAll",
      success(res) {
        console.log("云函数获取数据成功！", res)
        that.setData({
          team_list: res.result.data
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
    var game = this.data.playerpoint;
    var toppic = this.data.toppic;
    var topname = this.data.topname;
    var topint = this.data.topint;
    var toptxt = this.data.toptxt;
    if(game == 1){
      this.setData({
        toppic:"http://playforzju-images.stor.sinaapp.com/gamepic/New.jpg",
        topname:"新生杯",
        topint:"由浙大足协组织，面向全体新生的一项赛事",
        toptxt:"春风得意马蹄疾，一日看尽紫玉花",
      })
    }
    else if (game == 98) {
      this.setData({
        toppic:"http://playforzju-images.stor.sinaapp.com/gamepic/NightEight.jpg",
        topname:"98杯",
        topint:"由浙大足协组织，自由组队的一项赛事",
        toptxt:"鲜衣怒马少年时",
      })
    }
    else if (game == 5) {
      this.setData({
        toppic:"http://playforzju-images.stor.sinaapp.com/gamepic/Five.jpg",
        topname:"五人制",
        topint:"由浙大足协组织，男女生都可参赛的一项赛事",
        toptxt:"巾帼不让须眉",
      })
    }
    else if (game == 3) {
      this.setData({
        toppic:"http://playforzju-images.stor.sinaapp.com/gamepic/Three.jpg",
        topname:"三好杯",
        topint:"由学校公体部组织，最高等级的赛事",
        toptxt:"陌上谁家年少，足风流。",
      })
    }
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