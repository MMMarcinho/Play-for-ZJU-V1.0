// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "",
    openId: "",
    //上面是陈雨航写的。下面是我要用的openid
    openid: '',
    
  },

  // 陈雨航的陈年老代码，手动输入登录，之后仅作测试使用
  /* regist: function (e) {
    var that = this
    if (that.data.username == '') {
      wx.showModal({
        title: '提示',
        content: '请输入用户名',
        showCancel: false,
        success(res) { }
      })
    } else if (that.data.password == '') {
      wx.showModal({
        title: '提示',
        content: '请输入密码',
        showCancel: false,
        success(res) { }
      })
    } else {
      //console.log("success")
      if (e.detail.errMsg == 'getUserInfo:fail auth deny') {
        wx.showModal({
          title: '警告',
          content: '用户公开信息获取失败',
          cancelText: '拒绝授权',
          success(res) {
            if (res.confirm) {
              wx.showToast({
                title: '多谢啦~',
              })
            }
            else {
              wx.showLoading({
                title: 'byebye',
                mask: true,
              })
              setTimeout(function () { wx.hideLoading() }, 10000)
            }
          }
        })
      }
      else {
        //授权成功，已获得appid，encryptedData，iv
        console.log(e)
        var appid = 'wxb21c24c7d3c9fc7f'
        var encryptedData = e.detail.encryptedData
        var user_name = e.detail.userInfo.nickName
        var iv = e.detail.iv
        wx.login({
          success: res => {
            if (res.code) {
              wx.request({
                url: 'https://api.weixin.qq.com/sns/jscode2session',
                data: {
                  'appid': appid,
                  'secret': '23997fd83e3e72c415cb43b6b1dbde45',
                  'js_code': res.code,
                  'grant_type': "authorization_code"
                },
                method: 'GET',
                header: {
                  'content-type': 'application/json'
                },
                success: function (data) {

                  var openid = data.data.openid
                  wx.request({
                    url: 'https://playforzju.applinzi.com/index.php/Home/User/login',
                    data: {
                      phone: that.data.username,
                      password: that.data.password,
                      openid: openid
                    },
                    method: 'POST',
                    header: {
                      'content-type': "application/x-www-form-urlencoded"
                    },
                    success(res) {
                      console.log(res.data)
                      if (res.data.error_code == 1) {
                        wx.showModal({
                          title: '提示',
                          content: res.data.msg,
                          showCancel: false,
                          success(res) { }
                        })
                      } else if (res.data.error_code == 2) {
                        wx.showModal({
                          title: '提示',
                          content: res.data.msg,
                          showCancel: false,
                          success(res) { }
                        })
                      } else if (res.data.error_code == 3) {
                        wx.showModal({
                          title: '提示',
                          content: res.data.msg,
                          showCancel: false,
                          success(res) { }
                        })
                      } else if (res.data.error_code != 0) {
                        wx.showModal({
                          title: '哎呀',
                          content: '出错' + res.data.msg,
                          success: function (res) {
                            if (res.confirm) {
                              console.log('用户点击确定')
                            }
                            else if (res.cancel) {
                              console.log('用户点击取消')
                            }
                          }
                        })
                      } else if (res.data.error_code == 0) {
                        getApp().globalData.user = res.data.data
                        getApp().globalData.userid = res.data.data.id
                        wx.showModal({
                          title: 'Hello！',
                          content: '开启你的浙大足球全新版本吧！',
                          showCancel: false,
                          success(res) { },
                          complete: function (res) {
                            wx.reLaunch({
                              url: '/pages/Game/Game',
                            })
                          }
                        })
                      }
                    }
                  })
                }
              })
            }
          }
        })
      }


    }
  }, */
  regist: function (e) {
    wx.showModal({
      title: '注意哦',
      content: '手动输入登录功能目前仅作后台测试，感谢之前陈雨航同学以及各位测试同学的付出',
      showCancel: false,
    })
  },

  // 陈雨航未使用云开发功能的一键登录，较为复杂
  /* yijian: function (e) {
    if (e.detail.errMsg == 'getUserInfo:fail auth deny') {
      wx.showModal({
        title: '警告',
        content: '用户公开信息获取失败',
        cancelText: '拒绝授权',
        success(res) {
          if (res.confirm) {
            wx.showToast({
              title: '谢谢合作',
            })
          }
          else {
            wx.showLoading({
              title: 'byebye',
              mask: true,
            })
            setTimeout(function () { wx.hideLoading() }, 10000)
          }
        }
      })
    }
    else {
      //授权成功，已获得appid，encryptedData，iv
      console.log('获得openid后第一次输出' + e)
      var appid = 'wxb21c24c7d3c9fc7f'
      var encryptedData = e.detail.encryptedData
      var user_name = e.detail.userInfo.nickName
      var iv = e.detail.iv
      //需要获得session_key
      wx.login({
        success: res => {
          if (res.code) {
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session',
              data: {
                'appid': appid,
                'secret': '23997fd83e3e72c415cb43b6b1dbde45',
                'js_code': res.code,
                'grant_type': "authorization_code"
              },
              method: 'GET',
              header: {
                'content-type': 'application/json'
              },
              success: function (data) {
                console.log("获得openid后第二次输出data", data)
                var sessionKey = data.data.session_key
                var openid = data.data.openid
                console.log('获得openid后第三次输出' + sessionKey)
                console.log('获得openid后第四次输出' + openid)
                console.log(user_name)
                //获得openid 连接后端接口进行登录
                wx.request({
                  url: 'https://playforzju.applinzi.com/index.php/Home/User/login_yijian',
                  data: {
                    openid: openid,
                    user_name: user_name,
                  },
                  method: 'POST',
                  header: {
                    'content-type': "application/x-www-form-urlencoded"
                  },
                  success(res) {
                    console.log(res.data)
                    if (res.data.error_code == 1) {
                      wx.showModal({
                        title: '提示',
                        content: res.data.msg,
                        showCancel: false,
                        success(res) { }
                      })
                    }
                    else if (res.data.error_code != 0) {
                      wx.showModal({
                        title: '哎呀',
                        content: '出错' + res.data.msg,
                        success: function (res) {
                          if (res.confirm) {
                            console.log('用户点击确定')
                          }
                          else if (res.cancel) {
                            console.log('用户点击取消')
                          }
                        }
                      })
                    } else if (res.data.error_code == 0) {
                      getApp().globalData.user = res.data.data
                      getApp().globalData.userid = res.data.data.id
                      wx.showModal({
                        title: 'Hello！',
                        content: '开启你的浙大足球全新版本吧！',
                        showCancel: false,
                        success(res) { },
                        complete: function (res) {
                          wx.reLaunch({
                            url: '/pages/Game/Game',
                          })
                        }
                      })
                    }
                  }
                })
              }
            })
          }
        }
      })
      wx.reLaunch({
        url: '../Game/Game',
      })
    }
  }, */

  // 调用云函数之后的一键登录获得openid，使用起来很舒适
  Login_in: function () {
    var that = this
    wx.cloud.callFunction({
      name: 'GetOpenid',
      complete: res => {
        console.log('callFunction test result: ', res)
        that.setData({
          openid : res.result.OPENID
        })
        wx.cloud.database().collection("user_temp")
          .where({
           openid: res.result.OPENID,
          })
          .get({
            success(res) {
              console.log(res)
              console.log(res.data)
              if (res.data.length != 0) {
                // 找到相应用户之后并不进行操作，赋值在后面进行
                console.log('找到了' + res.data[0].name)
              }else{
                console.log('找不到了')
                // 没有找到相应用户就自动分配注册
                wx.cloud.database().collection("user_temp").add({
                  // _id : 使用自动分配_id
                  // data的内容肯定太少，建议增加身份判断和参赛状态
                  data : {
                    openid : that.data.openid,
                    name : "",
                    num_98 : 0,
                    team_98 : "",
                    school_id : 0,
                    phone: 0
                  }
                })
                .then((res) => {
                  console.log(res);
                  wx.showToast({
                    title: '踢在浙大欢迎你！',
                    icon: 'none',
                    duration: 1000
                  })
                });
              }
              // 真正开始赋值，因为此时已经获得了相应的id信息
              wx.cloud.database().collection("user_temp")
              .where({
                openid: that.data.openid,
              })
              .get({
                success(res){
                  if (res.data.length != 0){
                    // 转移到全局变量中
                    getApp().globalData._id = res.data[0]._id
                    getApp().globalData.openid = res.data[0].openid
                    getApp().globalData.name = res.data[0].name
                    getApp().globalData.team_98 = res.data[0].team_98
                    getApp().globalData.school_id = res.data[0].school_id
                    getApp().globalData.num_98 = res.data[0].num_98
                    getApp().globalData.phone = res.data[0].phone
                    wx.reLaunch({
                      url: '/pages/Game/Game',
                    })
                  }else{
                    // 这种情况的问题应该尝试返回给后台
                    console.log("有问题")
                  }
                }
              })
            },
            fail(res) {
              // 如果失去与服务器的连接
              // 自查问题建议：网络问题，云服务是否过期
              console.log("fail to get database")
            }
          })
      }
    })
    wx.showToast({
      title: '欢迎来到 PlayForZJU！',
      icon: 'none',
      duration: 1000
    })
  },

  usernameInput: function (e) {
    this.data.username = e.detail.value
  },

  passwordInput: function (e) {
    this.data.password = e.detail.value
  },

/* 取消了注册环节，已经不需要手动注册了   
  signin: function (e) {
    wx.redirectTo({
      url: '/pages/enroll/enroll',
    })
  }, */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /**
     * 获取用户信息，获取的都是社交平台的基本信息，并未清楚有什么用，但还是存了下来
     */
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        var app = getApp()
        app.globalData.avatarUrl = res.userInfo.avatarUrl
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

  }
})