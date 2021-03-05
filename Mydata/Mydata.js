// pages/mine/mine.js
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
    
    moren_must:"球员、教练、领队申请必填",
    moren_choose:"选填（控制在8个字符内）",
    moren_truename:"",
    moren_schoolid:"",
    moren_shortname:"",
    moren_phonenumber:"",
    moren_selfid:"",
    moren_college:"",
    moren_sex:"",
    moren_nation:"",

    truename: "",
    schoolid: "",
    shortname: "",
    phonenumber: "",
    selfid: "",
    college: "",
    sex: "",
    nation: "",
    healthpath: "",
    schoolpath: "",
    oneinchpath: "",
  },
 
  truename_input:function(e){
    this.data.truename=e.detail.value
    console.log(this.data.true_name)
  },

  shortname_input:function(e){
    this.data.shortname=e.detail.value
  },

  schoolid_input:function(e){
    this.data.schoolid=e.detail.value
  },

  phonenumber_input:function(e){
    this.data.phonenumber=e.detail.value
  },

  selfid_input:function(e){
    this.data.selfid=e.detail.value
  },

  college_input:function(e){
    this.data.college=e.detail.value
  },

  nation_input:function(e){
    this.data.nation=e.detail.value
  },

  sex_input:function(e){
    this.data.sex=e.detail.value
  },



  save:function(e){
    var that = this
    var app = getApp()
    console.log(that.data.truename)
    if(that.data.truename == '' || that.data.schoolid == ''|| that.data.shortname == ''|| that.data.phonenumber == ''|| that.data.selfid == ''|| that.data.college == ''|| that.data.nation == ''|| that.data.sex == ''){
      wx.showModal({
        title: '提示',
        content: '输入信息不全',
        showCancel: false,
        success (res) {}
      })
    }else{
      wx.request({
        url: 'https://playforzju.applinzi.com/index.php/Home/User/save_info',
        data: {
          user_id: app.globalData.userid,
          
          true_name: that.data.truename,
          study_number: that.data.schoolid,
          college: that.data.college,
          sex: that.data.sex,
          country: that.data.nation,
          shortname: that.data.shortname,
          id_number: that.data.selfid,
        },
        method:'POST',
        header: {
          'content-type':"application/x-www-form-urlencoded"
        },
        success(res){
          console.log(res.data)
          if(res.data.error_code == 1){
            wx.showModal({
              title: '提示',
              content: res.data.msg,
              showCancel: false,
              success (res){}
            })
          }else if(res.data.error_code == 2){
            wx.showModal({
              title: '提示',
              content: res.data.msg,
              showCancel: false,
              success (res){}
            })
          }else if(res.data.error_code == 3){
            wx.showModal({
              title: '提示',
              content: res.data.msg,
              showCancel: false,
              success (res){}
            })
          }else if(res.data.error_code == 0){
            app.globalData.user = res.data.data
            wx.showModal({
              title: '恭喜',
              content: '保存成功',
              showCancel: false,
              success (res){},
              complete:function(res){
                wx.reLaunch({
                  url: '/pages/Mydata/Mydata',
                })
              }
            })
          }
        }
      })
    }
  },

  coach_apply:function(e){
    var that = this
    var app = getApp()
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Coach/new_coach',
      data: {
        user_id: app.globalData.userid,
      },
      method:'POST',
      header: {
        'content-type':"application/x-www-form-urlencoded"
      },
      success(res){
        wx.showModal({
          title: '提示',
          content: res.data.msg,
          showCancel: false,
          success (res){}
        })
        
      }
    })
  },

  player_apply:function(e){
    var that = this
    var app = getApp()
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Player/new_player',
      data: {
        user_id: app.globalData.userid,
      },
      method:'POST',
      header: {
        'content-type':"application/x-www-form-urlencoded"
      },
      success(res){
        wx.showModal({
          title: '提示',
          content: res.data.msg,
          showCancel: false,
          success (res){}
        })
        
      }
    })
  },

  leader_apply:function(e){
    var that = this
    var app = getApp()
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Leader/new_leader',
      data: {
        user_id: app.globalData.userid,
      },
      method:'POST',
      header: {
        'content-type':"application/x-www-form-urlencoded"
      },
      success(res){
        wx.showModal({
          title: '提示',
          content: res.data.msg,
          showCancel: false,
          success (res){}
        })
        
      }
    })
  },

  judge_apply:function(e){
    var that = this
    var app = getApp()
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Judge/new_judge',
      data: {
        user_id: app.globalData.userid,
      },
      method:'POST',
      header: {
        'content-type':"application/x-www-form-urlencoded"
      },
      success(res){
        wx.showModal({
          title: '提示',
          content: res.data.msg,
          showCancel: false,
          success (res){}
        })
        
      }
    })
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

  back: function(){
    wx.redirectTo({
      url: '/pages/Person/Person',
    })
  },

  health: function(){
    var that = this
    wx.chooseImage({
     count: 1,
     sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
     success: function (res) {
      var tempFilePaths = res.tempFilePaths
      that.setData({
       tempFilePaths: res.tempFilePaths
      })
      console.log(res.tempFilePaths)
      wx.setStorage({ key: "card", data: tempFilePaths[0] })
     }
    })
  },

  formSubmit2: function (e) {
    var that = this
    var card = wx.getStorageSync('card')
    wx.uploadFile({
     url: app.globalData.create_funds,//开发者服务器的 url
     filePath: card,// 要上传文件资源的路径 String 类型！！！
     name: 'card',//后台接口规定的关于图片的请求参数
     formData: {// HTTP 请求中其他额外的参数
      'user_id': app.globalData.userid,
     },
     success: function (res) {
      console.log(res)
     }
    })
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp()
    this.setData({
      moren_truename: app.globalData.user.true_name,
      moren_schoolid: app.globalData.user.study_number,
      moren_shortname: app.globalData.user.shortname,
      moren_phonenumber: app.globalData.user.phone,
      moren_selfid: app.globalData.user.id_number,
      moren_college: app.globalData.user.college,
      moren_sex: app.globalData.user.sex,
      moren_nation: app.globalData.user.country,
    })
    if(app.globalData.user.true_name == 'null'){
      this.setData({
        moren_truename: '球员、教练、领队申请必填',
      })
    }
    if(app.globalData.user.study_number == 'null'){
      this.setData({
        moren_schoolid: '球员、教练、领队申请必填',
      })
    }
    if(app.globalData.user.shortname == 'null'){
      this.setData({
        moren_shortname: '选填（控制在8个字符内）',
      })
    }
    if(app.globalData.user.phone == 'null'){
      this.setData({
        moren_phonenumber: '球员、教练、领队申请必填',
      })
    }
    if(app.globalData.user.id_number == 'null'){
      this.setData({
        moren_selfid: '球员、教练、领队申请必填',
      })
    }
    if(app.globalData.user.college == 'null'){
      this.setData({
        moren_college: '球员、教练、领队申请必填',
      })
    }
    if(app.globalData.user.sex == 'null'){
      this.setData({
        moren_sex: '球员、教练、领队申请必填',
      })
    }
    if(app.globalData.user.country == 'null'){
      this.setData({
        moren_nation: '球员、教练、领队申请必填',
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