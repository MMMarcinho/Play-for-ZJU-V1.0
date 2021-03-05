// pages/About/About.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bcolor1: "rgb(180,180,180)",
    bcolor2:"rgb(180,180,180)",
    bcolor3:"rgb(180,180,180)",
    bcolor4:"(13,65,140)",
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
    wx.redirectTo({
      url: '/pages/Person/Person',
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