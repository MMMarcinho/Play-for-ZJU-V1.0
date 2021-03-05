// pages/Person/Person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bcolor1: "rgb(180,180,180)",
    bcolor2:"rgb(180,180,180)",
    bcolor3:"rgb(180,180,180)",
    bcolor4:"rgb(13,65,140)",
    saishi:"/images/icons/bottom/saishi2.png",
    fabuhui:"/images/icons/bottom/fabuhui2.png",
    shipin:"/images/icons/bottom/shipin2.png",
    gengduo:"/images/icons/bottom/gengduo.png",

  },

  select1: function(){
    wx.redirectTo({
      url: '/pages/Game/Game',
    })
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

  },

  myteam: function(){
    /* wx.showModal({
      title: '哎呀',
      content: '我的球队被踢走了，等着程序员去捡回来嗷~',
      showCancel: false,
    }) */
    wx.navigateTo({
      url: '/pages/Myteam/Myteam',
    }) 
  },

  mycommit: function(){
    wx.navigateTo({
      url: '/pages/commit/commit',
    })
  },

  mydata: function(){
    wx.navigateTo({
      url: '/pages/Bind_User/Bind_User',
    })
  },

  about: function () {
    wx.navigateTo({
      url: '/pages/About/About',
    })
  },

  player:function(){
    var app = getApp()
    console.log(app.globalData.user)
    var isplayer = app.globalData.user.player
    if(isplayer == 1){
      wx.navigateTo({
        url: '/pages/Licence/Licence?point=' + 1,
      })
    }else{
      wx.showModal({
        title: '哎呀',
        content: '赶紧去“我的资料”里面申请球员，西操等你',
        showCancel: false,
        success (res){}
      })
    }
    
  },

  coach:function(){
    var app = getApp()
    console.log(app.globalData.user)
    var iscoach = app.globalData.user.coach
    if(iscoach == 1){
      wx.navigateTo({
        url: '/pages/Licence/Licence?point=' + 2,
      })
    }else{
      wx.showModal({
        title: '嗯哼？',
        content: '为人师表的事情，可得先申请才行呀',
        showCancel: false,
        success (res){}
      })
    }
  },

  leader:function(){
    var app = getApp()
    console.log(app.globalData.user)
    var isleader = app.globalData.user.leader
    if(isleader == 1){
      wx.navigateTo({
        url: '/pages/Licence/Licence?point=' + 3,
      })
    }else{
      wx.showModal({
        title: '嗯哼？',
        content: '这边建议在“我的资料”里先申请领队，再来打开全新版本哦',
        showCancel: false,
        success (res){}
      })
    }
   
  },
  
  Referee:function(){
    var app = getApp()
    console.log(app.globalData.user)
    var isreferee = app.globalData.user.judge
    if(isreferee == 1){
      wx.redirectTo({
        url: '/pages/Referee/Referee',
      })
    }else{
      wx.showModal({
        title: '问问你自己',
        content: '你真的是裁判吗？',
        showCancel: false,
        success (res){}
      })
    }
  },

  manage:function(){
    var app = getApp()
    console.log(app.globalData.user)
    var isadmin = app.globalData.user.admin
    if(isadmin == 1){
      wx.redirectTo({
        url: '/pages/Manage/Manage',
      })
    }else{
      wx.showModal({
        title: '歪，110？',
        content: '这里有人想冒充我老大',
        showCancel: false,
        success (res){}
      })
    }    
  },


  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("getApp().globalData.team_98 = " + getApp().globalData.team_98)
    console.log("getApp().globalData.num_98 = " + getApp().globalData.num_98)
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