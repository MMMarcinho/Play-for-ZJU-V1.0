// pages/commit/commit.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bcolor1: "rgb(180,180,180)",
    bcolor2: "rgb(180,180,180)",
    bcolor3: "rgb(180,180,180)",
    bcolor4: "rgb(13,65,140)",
    saishi:"/images/icons/bottom/saishi2.png",
    fabuhui:"/images/icons/bottom/fabuhui2.png",
    shipin:"/images/icons/bottom/shipin2.png",
    gengduo:"/images/icons/bottom/gengduo.png",
    show:false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData:['足球赛事发布会','球员球队发布会','其他新闻发布会'],//下拉列表的数据
    index:0,//选择的下拉列表下标
    type:'足球赛事发布会',

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

    // 点击下拉显示框
    selectTap(){
      this.setData({
       show: !this.data.show
      });
      },
    // 点击下拉列表
      optionTap(e){
      console.log(e)
      let Index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      this.setData({
       index:Index,
       show:!this.data.show,
       type: e.currentTarget.dataset.type,
      });
      },

  bindTextAreaBlur:function(e){
    //console.log(e.detail.value)
    this.data.detail=e.detail.value
    //console.log(this.data.detail)
  },

  send:function(e){
    var that=this
    var app = getApp()
    /* if (app.globalData.user.admin ==1 ) { */
      wx.request({
        url: 'https://playforzju.applinzi.com/index.php/Home/Message/publish_new_message',
        data:{
          user_id: app.globalData.userid,
          user_name: app.globalData.user.name,
          type: this.data.type,
          content: this.data.detail,
        },
        method:'POST',
        header: {
          'content-type':"application/x-www-form-urlencoded"
        },
        success(res){
          if(res.data.error_code != 0){
            wx.showModal({
              title: '提示',
              content: '发布失败',
              showCancel: false,
              success (res){}
            })
          }else{
            wx.showModal({
              title: '提示',
              content: '发布成功！',
              showCancel: false,
              success (res){
                wx.redirectTo({
               url: '/pages/square/square',
            })
              }
            })
            
          }
        }
      })
    /* else{
      wx.showModal({
        title: 'Hi~',
        content: '发布会内容将会在管理员审核之后发布哦！',
        showCancel: false,
        success (res){}
      })
    } */
    


    wx.showLoading({
      title: '加载中',
    })
    console.log(that.data.detail)

    //与服务器交互
    setTimeout(function(){
      wx.hideLoading()
    },2000)
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