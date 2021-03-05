Page({

  /**
   * 页面的初始数据
   */
  data: {
    bcolor1: "rgb(180,180,180)",
    bcolor2: "rgb(180,180,180)",
    bcolor3: "rgb(13,65,140)",
    bcolor4: "rgb(180,180,180)",
    saishi:"/images/icons/bottom/saishi2.png",
    fabuhui:"/images/icons/bottom/fabuhui2.png",
    shipin:"/images/icons/bottom/shipin.png",
    gengduo:"/images/icons/bottom/gengduo2.png",
    pointbiaoti: "八年了，我还爱你",
    pointvurl :"http://playforzju-video.stor.sinaapp.com/%E7%AC%AC%E5%85%AB%E5%B9%B4%E4%BA%86%EF%BC%8C%E6%88%91%E8%BF%98%E7%88%B1%E4%BD%A0.mp4",
    pointtime: "2019年3月12日",
    pointtimes: 10123,
    pointid: 0,

    list:[
      {
        vid: 0,
        suoluetu_url1: "http://playforzju-images.stor.sinaapp.com/videopic/quanyuandahui.png",
        shipinbiaoti: "浙江大学学生足球协会2019年纳新！",
        topbiaoti: "浙大足协2019年纳新！足协等你！",
        vurl: "cloud://playforzju7-pszkt.706c-playforzju7-pszkt-1302023007/video/2019年纳新.mp4",
        /* http://playforzju-video.stor.sinaapp.com/2019%E5%B9%B4%E7%BA%B3%E6%96%B0.mp4  */
        time: "2019年9月2日",
        times: 8213,
        shipinzhaiyao: "欢迎来到足协大家庭鸭！",
      },
      {
        vid: 1,
        suoluetu_url1: "http://playforzju-images.stor.sinaapp.com/videopic/coincidance.png",
        shipinbiaoti: "98 98，踢球去！浙大足协Coincidence",
        topbiaoti: "98 98，踢球去！",
        vurl: "http://playforzju-video.stor.sinaapp.com/2019%E5%B9%B498%E6%9D%AF%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91%20Coincidance-Soccer%20Dancer.mp4",
        time: "2019年4月2日",
        times: 2123,
        shipinzhaiyao: "一起看球吧！",
      },
      {
        vid: 2,
        suoluetu_url1: "http://playforzju-images.stor.sinaapp.com/videopic/zuxiehesui.png",
        shipinbiaoti: "新年快乐！2019年浙大足协贺岁视频",
        topbiaoti: "2019年浙大足协贺岁视频",
        vurl: "http://playforzju-video.stor.sinaapp.com/x083582xhwo.mp4",
        time: "2019年2月2日",
        times: 8213,
        shipinzhaiyao: "新年快乐",
      },
      {
        vid: 3,
        suoluetu_url1: "http://playforzju-images.stor.sinaapp.com/videopic/zuxiejiyi.png",
        shipinbiaoti: "足协七岁生日快乐！！",
        topbiaoti: "八年了，我还爱你",
        vurl: "http://playforzju-video.stor.sinaapp.com/%E7%AC%AC%E5%85%AB%E5%B9%B4%E4%BA%86%EF%BC%8C%E6%88%91%E8%BF%98%E7%88%B1%E4%BD%A0.mp4",
        time: "2019年3月12日",
        times: 10213,
        shipinzhaiyao: "小小的足协，大大的梦想！",
      },
      {
        vid: 4,
        suoluetu_url1: "http://playforzju-images.stor.sinaapp.com/videopic/naxin.png",
        shipinbiaoti: "2018年浙大足协纳新宣传片",
        topbiaoti: "2018年浙大足协纳新宣传片",
        vurl: "http://playforzju-video.stor.sinaapp.com/2018%E5%B9%B4%E5%AE%A3%E4%BC%A0%E7%89%87.mp4",
        time: "2018年8月29日",
        times: 8213,
        shipinzhaiyao: "足协冲鸭！！！",
      },
      {
        vid: 5,
        suoluetu_url1: "/images/MainIcon.png",
        shipinbiaoti: "踢在浙大，现在来啦！！！",
        topbiaoti: "踢在浙大小程序介绍视频",
        vurl: "cloud://playforzju7-pszkt.706c-playforzju7-pszkt-1302023007/video/踢在浙大介绍视频.mp4",
        time: "2018年8月29日",
        times: 666,
        shipinzhaiyao: "芜湖~起飞",
      },
    ]
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

  },

  select4: function(){
    wx.redirectTo({
      url: '/pages/Person/Person',
    })
  },

  jump: function(e){
    var pointvurl = this.data.pointvurl;
    var pointbiaoti = this.data.pointbiaoti;
    var pointtime = this.data.pointtime;
    var pointtimes = this.data.pointtimes;
    var pointid = e.currentTarget.dataset.index;
    console.log(pointid);
    this.setData({
      pointvurl : this.data.list[pointid].vurl,
      pointbiaoti : this.data.list[pointid].topbiaoti,
      pointtime : this.data.list[pointid].time,
      pointtimes : this.data.list[pointid].times,
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