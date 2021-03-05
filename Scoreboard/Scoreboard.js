Page({

  /**
   * 页面的初始数据
   */
  data: {
    scolor: "rgb(180,180,180)",
    jcolor: "rgb(13,65,140)",
    playercolor: "rgb(180,180,180)",
    teamcolor: "rgb(180,180,180)",
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
    gamepoint: 1,
    dis: true,
    cardCur: 0,

    list: [],
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
    var gamepoint = this.data.gamepoint;
    var color0 = this.data.color0;
    var color98 = this.data.color98;
    var color5 = this.data.color5;
    var color3 = this.data.color3;
    var dis = this.data.dis;
    this.setData({
      gamepoint: 1,
      color0:"rgb(13,65,140)",
      color98:"rgb(180,180,180)",
      color5:"rgb(180,180,180)",
      color3:"rgb(180,180,180)",
      dis: true,
    })
  },

  gamee2: function(){
    var gamepoint = this.data.gamepoint;
    var color0 = this.data.color0;
    var color98 = this.data.color98;
    var color5 = this.data.color5;
    var color3 = this.data.color3;
    var dis = this.data.dis;
    this.setData({
      gamepoint: 98,
      color0:"rgb(180,180,180)",
      color98:"rgb(13,65,140)",
      color5:"rgb(180,180,180)",
      color3:"rgb(180,180,180)",
      dis: false,
    })
  },

  gamee3: function(){
    var gamepoint = this.data.gamepoint;
    var color0 = this.data.color0;
    var color98 = this.data.color98;
    var color5 = this.data.color5;
    var color3 = this.data.color3;
    var dis = this.data.dis;

    this.setData({
      gamepoint: 5,
      color0:"rgb(180,180,180)",
      color98:"rgb(180,180,180)",
      color5:"rgb(13,65,140)",
      color3:"rgb(180,180,180)",
      dis: false,
    })
  },

  gamee4: function(){
    var gamepoint = this.data.gamepoint;
    var color0 = this.data.color0;
    var color98 = this.data.color98;
    var color5 = this.data.color5;
    var color3 = this.data.color3;
    var dis = this.data.dis;

    this.setData({
      gamepoint: 3,
      color0:"rgb(180,180,180)",
      color98:"rgb(180,180,180)",
      color5:"rgb(180,180,180)",
      color3:"rgb(13,65,140)",
      dis: false,
    })
  },

  game: function(){
    wx.redirectTo({
      url: '/pages/Game/Game',
    })
  },
  scoreboard: function(){

  },
  playerboard: function(){
    wx.redirectTo({
      url: '/pages/Playerboard/Playerboard',
    })
  },
  teamboard: function(){
    wx.redirectTo({
      url: '/pages/Teamboard/Teamboard',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
    this.app = getApp()
    var that = this
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Publicshow/get_teamboard',
      method: 'POST',
      header: {
        'content-type':"application/x-www-form-urlencoded"
      },
      success(res){
        that.setData({
          list : res.data,
        })
        console.log(res.data)
      }
    })
  },

  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
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