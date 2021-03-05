// pages/enroll/enroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    phonenumber:"",
    password:"",
    passwordAck:""
  },

  regist:function(e){
    var that=this
    if(that.data.username == ''){
      wx.showModal({
        title: '提示',
        content: '请输入用户名',
        showCancel: false,
        success (res) {}
      })
    }else if(that.data.phonenumber == ''){
      wx.showModal({
        title: '提示',
        content: '请输入手机号',
        showCancel: false,
        success (res) {}
      })
    }else if(that.data.phonenumber.length != 11){
      wx.showModal({
        title: '提示',
        content: '手机号长度有误，请重新输入！',
        showCancel: false,
        success (res) {}
      })
    }else if(that.data.password == ''){
      wx.showModal({
        title: '提示',
        content: '请输入密码',
        showCancel: false,
        success (res) {}
      })
    }
    else if(that.data.passwordAck == ''){
      wx.showModal({
        title: '提示',
        content: '请确认密码',
        showCancel: false,
        success (res) {}
      })
    } else if(that.data.passwordAck != that.data.password){
      wx.showModal({
        title: '提示',
        content: '两次输入密码不一样！',
        showCancel: false,
        success (res) {}
      })
    }else {
      //console.log("success"),
      wx.request({
        url: 'https://playforzju.applinzi.com/index.php/Home/User/sign',
        data: {
          name: that.data.username,
          phone: that.data.phonenumber,
          password: that.data.password,
          passwordAck: that.data.passwordAck,
          user_img: 'null',
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
              success (res) {}
            })
          }else if(res.data.error_code == 2){
            wx.showModal({
              title: '提示',
              content: '两次输入密码不一样！',
              showCancel: false,
              success (res) {}
            })
          }
          else if(res.data.error_code == 3){
            wx.showModal({
              title: '提示',
              content: '手机号已被注册！',
              showCancel: false,
              success (res) {}
            })
          }
          else if(res.data.error_code != 0){
            wx.showModal({
              title: '哎呀',
              content: '出错' + res.data.msg,
              success:function(res){
                if(res.confirm){
                  console.log('用户点击确定')
                }
                else if(res.cancel){
                  console.log('用户点击取消')
                }
              }
            })
          }
          else if(res.data.error_code == 0){
            wx.showModal({
              title: '恭喜',
              content: '注册成功',
              showCancel: false,
              success (res) {},
              complete:function(res){
                wx.reLaunch({
                  url: '/pages/login/login',
                })
              }
            }) 
          }
        }

      })
    }
  },

  signin:function(e){
    wx.redirectTo({
      url: '/pages/login/login',
    })
  },

  usernameInput:function(e){
    this.data.username=e.detail.value
  },

  phonenumberInput:function(e){
    this.data.phonenumber=e.detail.value
  },

  passwordInput:function(e){
    this.data.password=e.detail.value
  },

  passwordInputAck:function(e){
    this.data.passwordAck=e.detail.value
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