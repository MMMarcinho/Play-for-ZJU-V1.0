// pages/Create/Create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    creater_id:"",
    team_img:"",
    team_type:"",
    team_name:"",
    location:"",
    unit:"",
    shirt:"",
    color:"",
    
    gameArray: [{
      "id": "1",
      "text": "新生杯"
  }, {
      "id": "3",
      "text": "三好杯"
  }, {
     "id": "98",
     "text": "98杯"
  }, {
     "id": "5",
     "text": "五人制"
  }],
  colorArray:[
    {
      "true": "yellow",
      "text": "黄色"
    },
    {
      "true": "red",
      "text": "红色"
    },
    {
      "true": "blue",
      "text": "蓝色"
    },
    {
      "true": "green",
      "text": "绿色"
    },
    {
      "true": "white",
      "text": "白色"
    },
    {
      "true": "purple",
      "text": "紫色"
    },

  ]
  },

  create:function(e){
    var that = this
    var app = getApp()
    if(that.data.team_type==''||that.data.team_name==''||that.data.location==''||that.data.unit==''||that.data.shirt==''||that.data.color==''){
      wx.showModal({
        title: '提示',
        content: '输入参数不全，请确保输入信息完全',
        showCancel: false,
        success (res) {}
      })
    }else{
      wx.request({
        url: 'https://playforzju.applinzi.com/index.php/Home/Leader/new_team',
        data: {
          creater_id: app.globalData.userid,
          team_name: that.data.team_name,
          team_img: 'xxx.png',
          team_type: that.data.team_type,
          unit: that.data.unit,
          shirt: that.data.shirt,
          color: that.data.color,
          location: that.data.location,
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
          }else{
            wx.showModal({
              title: '恭喜',
              content: '您的建队申请已提交成功，请耐心等待管理员审核',
              showCancel: false,
              success (res){},
              complete:function(res){
                wx.redirectTo({
                  url: '/pages/Lic_leader/Lic_leader',
                })
              }
            })
          }
        }

      })
    }
  },

  cuptypeSelect:function(e){
    this.data.team_type = e.detail.text
  },

  teamnameInput:function(e){
    this.data.team_name = e.detail.value
  },

  locationInput:function(e){
    this.data.location = e.detail.value
  },

  unitInput:function(e){
    this.data.unit = e.detail.value
  },

  shirtInput:function(e){
    this.data.shirt = e.detail.value
  },

  colorSelect:function(e){
    this.data.color = e.detail.text
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