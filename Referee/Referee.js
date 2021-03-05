// pages/Referee/Referee.js
var intt;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['蛋清饼-布鲁菲尔德', '足协-方鸽', '蛋清饼-足协', '方鸽-布鲁菲尔德', '蛋清饼-方鸽', '足协-布鲁菲尔德'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
    i: 0,
    bcolor1: "rgb(180,180,180)",
    bcolor2: "rgb(180,180,180)",
    bcolor3: "rgb(180,180,180)",
    bcolor4: "rgb(13,65,140)",
    saishi: "/images/icons/bottom/saishi2.png",
    fabuhui: "/images/icons/bottom/fabuhui2.png",
    shipin: "/images/icons/bottom/shipin2.png",
    gengduo: "/images/icons/bottom/gengduo.png",
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    timecount: '00:00',
    zhuduibifen: 0,
    keduibifen: 0,
    cost: 0,
    flag: 1,
    start_tag: 0,
    endtime: "",
    close: true,
    show1: false,
    show2: false,
    player_name: '',
    team_name: 0,
    lists: [],
    listss: [],
    openids: [],
    time: '',
    host_team: '',
    guest_team: '',
    cup_type: '',
    lists2: [],
    lists3: [],
    gameid: 0,
    goalteam: [],
    access_token: '',
    openid: '',
  },

  getUserInfo(event) {
    console.log(event.detail);
    this.setData({ close: true });
  },

  onClose() {
    this.setData({ close: true });
  },

  jinqiu: function (e) {
    console.log(e)
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Judge/player_goal',
      method: 'POST',
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      data: {
        player_name: this.data.player_name,
        game_id: this.data.gameid,
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
          wx.showModal({
            title: '提示',
            content: '上传成功，请勿重复点击',
            showCancel: false,
            success(res) { }
          })
        }
      }
    })
  },

  bindKeyInput: function (e) {
    this.data.player_name = e.detail.value
  },

/* 
  select1: function () {
    wx.redirectTo({
      url: '/pages/Game/Game',
    })
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

  }, */
  back: function () {
    wx.redirectTo({
      url: '/pages/Person/Person',
    })
  },
  upload: function () {
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Judge/change_game_state',
      data: {
        game_id: this.data.gameid,
        state: '已结束',
      },
      method: 'POST',
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      success(res) {
        wx.showModal({
          title: '比赛结束',
          content: res.data.msg,
          showCancel: false,
          success(res) { }
        })
      },
    })
    wx.redirectTo({
      url: '/pages/Game/Game',
    })
  },

  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用函数
    console.log(options)
    var that = this
    that.setData({
      gameid: options.gameid,
    })
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Judge/detail',
      method: 'POST',
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      data: {
        game_id: that.data.gameid,
      },
      success(res) {
        that.setData({
          cup_type: res.data.data.cup_type,
          host_team: res.data.data.host_team,
          guest_team: res.data.data.guest_team,
          time: res.data.data.time,
        })
      }
    })

    //console.log(that.data.gameid)
  },


  yuding: function (e) {
    console.log('开始发送消息')
    var that = this
    //先获得所有用户的openids
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Index/get_openid',
      method: 'POST',
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      data: {
        game_id: that.data.gameid
      },
      success(res) {
        that.setData({
          openids: res.data.data
        })
      }
    })

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
          access_token: res.data.access_token,
        })
        console.log(that.data.access_token)
      }
    })

    console.log(that.data.openids)
    var openids_len = that.data.openids.length
    console.log(openids_len)
    var j = 0
    for (j = 0; j < openids_len; j++) {
      //发送请求推送消息
      wx.request({
        url: 'https://playforzju.applinzi.com/index.php/Home/Index/get_message',
        data: {
          access_token: that.data.access_token,
          //数据包
          data: {
            //"access_token": that.data.access_token,
            //openid
            "touser": that.data.openids[j],
            //模板id
            "template_id": "PrFtuIM5zHnoWCA1YZ-X3XuU1PYs3URCkZz7Xuwr2oo",
            "miniprogram_state": "developer",
            "lang": "zh_CN",
            "data": {
              "time1": {
                "value": that.data.time
              },
              "thing2": {
                "value": that.data.host_team
              },
              "thing3": {
                "value": that.data.guest_team
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


  },

  start: function () {
    var that = this
    var app = getApp()
    if (that.data.start_tag == 0) {
      that.setData({
        start_tag: 1,
      })
      wx.request({
        url: 'https://playforzju.applinzi.com/index.php/Home/Judge/change_game_state',
        data: {
          game_id: that.data.gameid,
          state: '进行中',
        },
        method: 'POST',
        header: {
          'content-type': "application/x-www-form-urlencoded"
        },
        success(res) {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false,
            success(res) { }
          })
        },
      })
    }
    //停止（暂停）
    clearInterval(intt);
    //时间重置
    that.setData({
      minute: this.data.minute,
      second: this.data.second,
      millisecond: this.data.millisecond,
      timecount: this.data.minute + ':' + this.data.second,
    })
    intt = setInterval(function () { that.timer() }, 50);
  },

  //暂停
  stop: function () {
    clearInterval(intt);
  },

  //下半场
  Reset: function () {
    var that = this
    clearInterval(intt);
    this.setData({
      minute: 45,
      second: 0,
      millisecond: 0,
      timecount: 45 + ':' + '0' + 0,
    })
  },
  //清零
  zero: function () {
    clearInterval(intt);
    this.setData({
      minute: 0,
      second: 0,
      millisecond: 0,
      timecount: '0' + 0 + ':' + '0' + 0,
    })
  },

  timer: function () {
    var that = this;
    that.setData({
      millisecond: that.data.millisecond + 5
    })
    if (that.data.millisecond >= 100) {
      that.setData({
        millisecond: 0,
        second: that.data.second + 1
      })
    }
    if (that.data.second >= 60) {
      that.setData({
        second: 0,
        minute: that.data.minute + 1
      })
    }

    if (that.data.minute < 10 && that.data.second < 10) {
      that.setData({
        timecount: "0" + that.data.minute + ":" + "0" + that.data.second
      })
    }

    else if (that.data.minute < 10 && that.data.second > 10) {
      that.setData({
        timecount: "0" + that.data.minute + ":" + that.data.second
      })
    }

    else if (that.data.minute > 10 && that.data.second < 10) {
      that.setData({
        timecount: that.data.minute + ":" + "0" + that.data.second
      })
    }

    else {
      that.setData({
        timecount: that.data.minute + ":" + that.data.second
      })
    }

  },

  addList: function () {
    var lists = this.data.lists
    /* var goalteam = this.data.goalteam */
    var zhuduibifen = this.data.zhuduibifen
    var minute = this.data.minute
    var host_team = this.data.host_team

    lists.push(minute);//实质是添加lists数组内容，使for循环多一次
    this.setData({
      zhuduibifen: zhuduibifen + 1,
      lists: lists,
    })

    //在这里调用接口来更新信息(更新主客队得分)
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Judge/update_score',
      data: {
        game_id: this.data.gameid,
        host_score: this.data.zhuduibifen,
        guest_score: this.data.keduibifen,
      },
      method: 'POST',
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      success(res) {
        wx.showModal({
          title: '提示',
          content: res.data.msg,
          showCancel: false,
          success(res) { }
        })
      },
    })
  },

  addList2: function () {
    var listss = this.data.listss
    var keduibifen = this.data.keduibifen
    var minute = this.data.minute
    var guest_team = this.data.guest_team

    listss.push(minute);//实质是添加lists数组内容，使for循环多一次
    this.setData({
      keduibifen: keduibifen + 1,
      listss: listss,
    })

    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Judge/update_score',
      data: {
        game_id: this.data.gameid,
        host_score: this.data.zhuduibifen,
        guest_score: this.data.keduibifen,
      },
      method: 'POST',
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      success(res) {
        wx.showModal({
          title: '提示',
          content: res.data.msg,
          showCancel: false,
          success(res) { }
        })
      },
    })
  },

  addListhuanren: function () {
    var lists2 = this.data.lists2
    var minute = this.data.minute
    lists2.push(minute);//实质是添加lists数组内容，使for循环多一次
    this.setData({
      lists2: lists2,
    })
  },

  addListfangui: function () {
    var lists3 = this.data.lists3
    var minute = this.data.minute
    lists3.push(minute);//实质是添加lists数组内容，使for循环多一次
    this.setData({
      lists3: lists3,
    })
  },

  delList: function () {
    var lists2 = this.data.lists;
    lists2.pop();      //实质是删除lists数组内容，使for循环少一次
    this.setData({
      lists2: lists2,
    })
  },

  delList3: function () {
    var lists3 = this.data.lists3;
    lists3.pop();      //实质是删除lists数组内容，使for循环少一次
    this.setData({
      lists3: lists3,
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