// pages/Botton_menu/Bottom_menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scolor: "rgb(13,65,140)",
    jcolor: "rgb(180,180,180)",
    playercolor: "rgb(180,180,180)",
    teamcolor: "rgb(180,180,180)",
    bcolor1: "rgb(13,65,140)",
    bcolor2: "rgb(180,180,180)",
    bcolor3: "rgb(180,180,180)",
    bcolor4: "rgb(180,180,180)",
    color0: "rgb(13,65,140)",
    color98: "rgb(180,180,180)",
    color5: "rgb(180,180,180)",
    color3: "rgb(180,180,180)",
    saishi: "/images/icons/bottom/saishi.png",
    fabuhui: "/images/icons/bottom/fabuhui2.png",
    shipin: "/images/icons/bottom/shipin2.png",/*  cloud://playforzju-11s88.706c-playforzju-11s88-1302023007/test/can.png*/
    gengduo: "/images/icons/bottom/gengduo2.png",
    gamepoint: 1,
    pos: 180,
    list: [],
    pos1: 0,
    pos3: 0,
    pos5: 0,
    pos98: 0,
    checked: false,
    lastTapTime: 0,
    access_token: '',
    list_2019_fresh: []
  },

  /* ***************************************************************************** */
  /* 订阅功能，暂不发布 */
  dingyue: function (e) {
    //接下来，开始发送订阅消息
    console.log('开始测试发送订阅信息')
    var that = this
    var app = getApp()
    var openid = app.globalData.user.openid
    console.log(openid)
    //订阅消息的模板id
    var template_id = "PrFtuIM5zHnoWCA1YZ-X3XuU1PYs3URCkZz7Xuwr2oo"
    //先获得access_token
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Index/get_access_token',
      method: 'POST',
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      data: {
        appid: 'wxb21c24c7d3c9fc7f',
        secret: '23997fd83e3e72c415cb43b6b1dbde45',
      },
      success(res) {
        console.log(res.data);
        that.setData({
          access_token: res.data.access_token
        })
        console.log(that.data.access_token)
        //发送请求推送消息
        wx.request({
          url: 'https://playforzju.applinzi.com/index.php/Home/Index/get_message',
          // method:'POST',
          // header: {
          //   'content-type':"application/x-www-form-urlencoded"
          // },
          data: {
            access_token: that.data.access_token,
            //数据包
            data: {
              //"access_token": that.data.access_token,
              //openid
              "touser": "omICg4tyGh50ogD5JroLTlFPPQ-c",
              //模板id
              "template_id": "PrFtuIM5zHnoWCA1YZ-X3XuU1PYs3URCkZz7Xuwr2oo",
              "miniprogram_state": "developer",
              "lang": "zh_CN",
              "data": {
                "time1": {
                  "value": "2020-8-12 15:00"
                },
                "thing2": {
                  "value": "皇家马德里"
                },
                "thing3": {
                  "value": "巴塞罗那"
                },
              }
            },
          },
          success: function (res) {
            console.log("订阅成功")
            console.log(res)
          },
          fail: function (res) {
            console.log("订阅失败")
          }
        })
      }
    })
  },

  yuyue: function (e) {
    var app = getApp()
    var that = this
    console.log(e)
    wx.requestSubscribeMessage({
      tmplIds: ['PrFtuIM5zHnoWCA1YZ-X3XuU1PYs3URCkZz7Xuwr2oo'],
      success(res) {
        wx.request({
          url: 'https://playforzju.applinzi.com/index.php/Home/Index/game_yuding',
          method: 'POST',
          header: {
            'content-type': "application/x-www-form-urlencoded"
          },
          data: {
            user_id: app.globalData.user.id,
            game_id: e.currentTarget.dataset.gameid,
          },
          success(res) {
            if (res.data.error_code == 0) {
              wx.showModal({
                title: '好啦！',
                content: '您已成功预约本场比赛，一起看球吧！',
                showCancel: false
              })
            } else if (res.data.error_code == 1) {
              wx.showModal({
                title: '提醒',
                content: '缺少参数',
                showCancel: false
              })
            } else if (res.data.error_code == 2) {
              wx.showModal({
                title: '提醒',
                content: '您已预约本场比赛，请勿重复预约！',
                showCancel: false
              })
            } else if (res.data.error_code == 4) {
              wx.showModal({
                title: '提醒',
                content: '该比赛已结束！',
                showCancel: false
              })
            } else {
              wx.showModal({
                title: '好啦',
                content: '预约成功！但是不要重复预约了哦',
                showCancel: false
              })
            }
          }
        })

      }
    })

    //发送access_token请求
    // wx.request({
    //   url: '',
    //   method:'POST',
    //   header: {
    //     'content-type':"application/x-www-form-urlencoded"
    //   },
    //   data:{},
    // })
  },
  /* 订阅功能，暂不发布 */

  /* ***************************************************************************** */
  onChange({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
  },

  /* ***************************************************************************** */
  /* 底部导航栏选择 */
  select1: function () {

  },

  select2: function () {
    wx.redirectTo({
      url: '/pages/square/square',
    })
  },

  select3: function () {
    wx.redirectTo({
      url: '/pages/Video_show/Video_show',
    })
  },

  select4: function () {
    wx.redirectTo({
      url: '/pages/Person/Person',
    })
  },

  /* 底部导航栏选择 */

  /* ***************************************************************************** */
  /* 顶部赛事选择 */
  gamee1: function () {
    var gamepoint = this.data.gamepoint;
    var color0 = this.data.color0;
    var color98 = this.data.color98;
    var color5 = this.data.color5;
    var color3 = this.data.color3;
    var pos1 = this.data.pos1;
    var app = getApp();
    app.globalData.gamepoint = 1;
    this.setData({
      gamepoint: app.globalData.gamepoint,
      color0: "rgb(13,65,140)",
      color98: "rgb(180,180,180)",
      color5: "rgb(180,180,180)",
      color3: "rgb(180,180,180)",
      pos: pos1 * 180,
    })
    console.log(gamepoint)
    this.onReady()
  },

  gamee2: function () {
    var gamepoint = this.data.gamepoint;
    var color0 = this.data.color0;
    var color98 = this.data.color98;
    var color5 = this.data.color5;
    var color3 = this.data.color3;
    var pos98 = this.data.pos98;
    var app = getApp();
    app.globalData.gamepoint = 98;

    this.setData({
      gamepoint: app.globalData.gamepoint,
      color0: "rgb(180,180,180)",
      color98: "rgb(13,65,140)",
      color5: "rgb(180,180,180)",
      color3: "rgb(180,180,180)",
      pos: pos98 * 180,
    })
    console.log(gamepoint)
    this.onReady()
  },

  gamee3: function () {
    var gamepoint = this.data.gamepoint;
    var color0 = this.data.color0;
    var color98 = this.data.color98;
    var color5 = this.data.color5;
    var color3 = this.data.color3;
    var pos5 = this.data.pos5;
    var app = getApp();
    app.globalData.gamepoint = 5;
    this.setData({
      gamepoint: app.globalData.gamepoint,
      color0: "rgb(180,180,180)",
      color98: "rgb(180,180,180)",
      color5: "rgb(13,65,140)",
      color3: "rgb(180,180,180)",
      pos: pos5 * 180,
    })
    console.log(gamepoint)
    this.onReady()
  },

  gamee4: function () {
    var gamepoint = this.data.gamepoint;
    var color0 = this.data.color0;
    var color98 = this.data.color98;
    var color5 = this.data.color5;
    var color3 = this.data.color3;
    var pos3 = this.data.pos3;
    var app = getApp();
    app.globalData.gamepoint = 3;

    this.setData({
      gamepoint: app.globalData.gamepoint,
      color0: "rgb(180,180,180)",
      color98: "rgb(180,180,180)",
      color5: "rgb(180,180,180)",
      color3: "rgb(13,65,140)",
      pos: pos3 * 180
    })
    console.log(gamepoint)
    this.onReady()
  },

  /* 顶部赛事选择 */

  /* ***************************************************************************** */
  /* 进入裁判系统功能 */
  edit: function (e) {
    console.log(e)
    var app = getApp()
    console.log(app.globalData.user.judge)
    if (app.globalData.user.judge == 1) {
      wx.navigateTo({
        url: '/pages/Referee/Referee?gameid=' + e.currentTarget.dataset.gameid,
      })
    } else {
      wx.showModal({
        title: 'sorry',
        content: '您还不是裁判，无法更改比赛',
        showCancel: false
      })
    }
  },
  /* 进入裁判系统功能 */

  /* ***************************************************************************** */
  /* 顶部导航栏版面选择 */
  game: function () {

  },

  scoreboard: function () {
    wx.redirectTo({
      url: '/pages/Scoreboard/Scoreboard',
    })
  },

  playerboard: function () {
    wx.redirectTo({
      url: '/pages/Playerboard/Playerboard',
    })
  },

  teamboard: function () {
    wx.redirectTo({
      url: '/pages/Teamboard/Teamboard',
    })
  },
  /* 顶部导航栏版面选择 */
  /* ***************************************************************************** */

  /**
   * 生命周期函数--监听页面加载
   */
  //onload时获取小程序实例
  onLoad: function (options) {

    this.app = getApp()
    var that = this

    wx.cloud.callFunction({
      name: "GetGameList1",
      success(res) {
        console.log("云函数获取数据成功！", res)
        that.setData({
          list_2019_fresh: res.result.data
        })
      },
      fail(res) {
        console.log("fail to get database")
      }
    })
    console.log("name : " + getApp().globalData.name)
    console.log("_id : " + getApp().globalData._id)
    console.log("openid : " + getApp().globalData.openid)

    // 下面修改并使用陈雨航写的获取最新结束比赛的方法
    // 到这里，所有数据已从后台数据库进入list中,遍历list中的所有子项
    var list_length = that.data.list_2019_fresh.length
    for (var i = 0; i < list_length; i++) {
      var list_item = that.data.list_2019_fresh[i]
      var item_gameid = list_item.type
      //取到每个子项，判断子项中的gameid
      if (item_gameid == 1) {
        //新生杯
        if (list_item.state == '已结束') {
          that.data.pos1 ++
        }
      } else if (item_gameid == 3) {
        //三好杯
        if (list_item.state == '已结束') {
          that.data.pos3 ++
        }
      } else if (item_gameid == 5) {
        //五人制
        if (list_item.state == '已结束') {
          that.data.pos5 ++
        }
      } else if (item_gameid == 98) {
        //五人制
        if (list_item.state == '已结束') {
          that.data.pos98 ++
        }
      }

    }
    if (that.data.pos1 != 0) {
      that.data.pos1--
    }
    if (that.data.pos3 != 0) {
      that.data.pos3--
    }
    if (that.data.pos5 != 0) {
      that.data.pos5--
    }
    if (that.data.pos98 != 0) {
      that.data.pos98--
    }


/*     wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Schedule/get_schedule',
      method: 'POST',
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      success(res) {
        if (res.data.error_code != 0) {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false,
            success(res) { }
          })
        } else if (res.data.error_code == 0) {
          that.setData({
            list: res.data.data
          })
          console.log(that.data.list)
        }

        //到这里，所有数据已从后台数据库进入list中,遍历list中的所有子项
        var list_length = that.data.list.length
        for (var i = 0; i < list_length; i++) {
          var list_item = that.data.list[i]
          var item_gameid = list_item.gameid
          //取到每个子项，判断子项中的gameid
          if (item_gameid == 1) {
            //新生杯
            if (list_item.state == '已结束') {
              that.data.pos1++
            }
          } else if (item_gameid == 3) {
            //三好杯
            if (list_item.state == '已结束') {
              that.data.pos3++
            }
          } else if (item_gameid == 5) {
            //五人制
            if (list_item.state == '已结束') {
              that.data.pos5++
            }
          } else if (item_gameid == 98) {
            //五人制
            if (list_item.state == '已结束') {
              that.data.pos98++
            }
          }

        }
        if (that.data.pos1 != 0) {
          that.data.pos1--
        }
        if (that.data.pos3 != 0) {
          that.data.pos3--
        }
        if (that.data.pos5 != 0) {
          that.data.pos5--
        }
        if (that.data.pos98 != 0) {
          that.data.pos98--
        }

      }
    }) */
  },
  //页面展示时，触发动画
  onShow: function () {
    this.app.slideupshow(this, 'slide_up1', -200, 1)

    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up2', -200, 1)
    }.bind(this), 1000);
  },
  //页面隐藏时，触发渐出动画
  onHide: function () {
    //你可以看到，动画参数的200,0与渐入时的-200,1刚好是相反的，其实也就做到了页面还原的作用，使页面重新打开时重新展示动画
    this.app.slideupshow(this, 'slide_up1', 200, 0)
    //延时展现容器2，做到瀑布流的效果，见上面预览图
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up2', 200, 0)
    }.bind(this), 1000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.pageScrollTo({
      scrollTop: this.data.pos,
      duration: 1500
    })
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

  },

  onPullDownRefresh: function () {
    wx.showNavigationBarLoading()
    this.onLoad()
    setTimeout(() => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 2000);
  },




})