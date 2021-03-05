// pages/Check/Check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkid: 1,
    topcolor1: "switch1",
    topcolor2: "switch2",
    personalData:{},
    teamData:{},
  },

  back:function(){
    wx.redirectTo({
      url: '/pages/Manage/Manage',
    })
  },

  self:function(){
    var checkid = this.data.checkid;
    var topcolor1 = this.data.topcolor1;
    var topcolor2 = this.data.topcolor2;
    this.setData({
      checkid : 1,//1代表审核的是个人
      topcolor1 : "switch1",
      topcolor2 : "switch2",
    })
  },

  tt:function(){
    var checkid = this.data.checkid;
    var topcolor1 = this.data.topcolor1;
    var topcolor2 = this.data.topcolor2;
    this.setData({
      checkid : 2,//2代表审核的是球队
      topcolor1 : "switch11",
      topcolor2 : "switch22",
    })
  },

  /*同意个人申请*/
  pass:function(e){
    var that = this
    var app = getApp()
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Admin/check_personal_apply',
      data: {
        user_id: app.globalData.userid,
        id: e.target.dataset.id,
        check: 1,
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
            content: '您的审核结果为：通过',
            showCancel: false,
            success (res){},
            complete:function(res){
              wx.reLaunch({
                url: '/pages/Check/Check',
              })
            }
          })
        }
      },
      fail: function(res){
        wx.showModal({
          title: '哎呀~',
          content: '网络不在状态呢！',
          success: function(res){
            if(res.confirm){
              console.log('用户点击确定')
            }else if(res.cancel){
              console.log('用户点击取消')
            }
          }
        })
      },
      complete: function(res){
      }
    })

  },

  /*驳回球员申请*/
  reject:function(e){
    var that = this
    var app = getApp()
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Admin/check_personal_apply',
      data: {
        user_id: app.globalData.userid,
        id: e.target.dataset.id,
        check: 0,
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
            content: '您的审核结果为：否决',
            showCancel: false,
            success (res){},
            complete:function(res){
              wx.reLaunch({
                url: '/pages/Check/Check',
              })
            }
          })
        }
      },
      fail: function(res){
        wx.showModal({
          title: '哎呀~',
          content: '网络不在状态呢！',
          success: function(res){
            if(res.confirm){
              console.log('用户点击确定')
            }else if(res.cancel){
              console.log('用户点击取消')
            }
          }
        })
      },
      complete: function(res){
      }
    })

  },
  
  /*同意球队申请*/
  pass_team:function(e){
    var that = this
    var app = getApp()
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Admin/check_newteam',
      data: {
        user_id: app.globalData.userid,
        team_id: e.target.dataset.id,
        check: 1,
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
            content: '您的审核结果为：通过',
            showCancel: false,
            success (res){},
            complete:function(res){
              wx.reLaunch({
                url: '/pages/Check/Check',
              })
            }
          })
        }
      },
      fail: function(res){
        wx.showModal({
          title: '哎呀~',
          content: '网络不在状态呢！',
          success: function(res){
            if(res.confirm){
              console.log('用户点击确定')
            }else if(res.cancel){
              console.log('用户点击取消')
            }
          }
        })
      },
      complete: function(res){
      }
    })

  },
  /*驳回球队申请*/
  reject_team:function(e){
    var that = this
    var app = getApp()
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Admin/check_newteam',
      data: {
        user_id: app.globalData.userid,
        team_id: e.target.dataset.id,
        check: 0,
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
            content: '您的审核结果为：驳回',
            showCancel: false,
            success (res){},
            complete:function(res){
              wx.reLaunch({
                url: '/pages/Check/Check',
              })
            }
          })
        }
      },
      fail: function(res){
        wx.showModal({
          title: '哎呀~',
          content: '网络不在状态呢！',
          success: function(res){
            if(res.confirm){
              console.log('用户点击确定')
            }else if(res.cancel){
              console.log('用户点击取消')
            }
          }
        })
      },
      complete: function(res){
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var app = getApp()
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Admin/show_checkPending_person',
      data: {
        user_id: app.globalData.userid,
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
          that.setData({
            personalData : res.data.data
          })
          console.log(that.data.personalData)
        }
      },
      fail: function(res){
        wx.showModal({
          title: '哎呀~',
          content: '网络不在状态呢！',
          success: function(res){
            if(res.confirm){
              console.log('用户点击确定')
            }else if(res.cancel){
              console.log('用户点击取消')
            }
          }
        })
      },
      complete: function(res){
        wx.hideLoading()
      }
    })

    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Admin/show_checkPending_newteam',
      data: {
        user_id: app.globalData.userid,
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
          that.setData({
            teamData : res.data.data
          })
          console.log(that.data.teamData)
        }
      },
      fail: function(res){
        wx.showModal({
          title: '哎呀~',
          content: '网络不在状态呢！',
          success: function(res){
            if(res.confirm){
              console.log('用户点击确定')
            }else if(res.cancel){
              console.log('用户点击取消')
            }
          }
        })
      },
      complete: function(res){
        wx.hideLoading()
      }
    })

    setTimeout(function(){
      wx.hideLoading()
    },2000)
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