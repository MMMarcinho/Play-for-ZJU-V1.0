// pages/Bind_User/Bind_User.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    school_id: 0,
    phone: 0,
    team_98: "",
    num_98: 0,
    _id: "",
    team_98_temp: "", // 仅用作页面是否出现绑定的判断，后期并不依靠它修改数据
    detail_flag: 0,
    bind_flag: 1, // 用于判断是否需要出现绑定按钮
  },

  get_name: function (e) {
    this.data.name = e.detail.value
  },

  get_school_id: function (e) {
    this.data.school_id = Number(e.detail.value)
    console.log(typeof(this.data.school_id) + this.data.school_id)
  },

  Bind: function () {
    var that = this
    var temp_school_id = 0
    wx.cloud.database().collection("user_test")
    .where({
      姓名 : this.data.name,
      学工号 : this.data.school_id
    })
    .get({
      success(res) {
        console.log("好啦", res)
        console.log("撒旦", res.data[0].学工号)
        if (res.data[0].学工号) {
          console.log("找到了")
          that.setData({
            detail_flag : 1,
            school_id : res.data[0].学工号,
            phone : res.data[0].联系信息,
            name : res.data[0].姓名,
            team_98 : res.data[0].队名,
            num_98 : res.data[0].编号,
          })
          console.log(that.data.detail_flag)
        }else{
          wx.showModal({
            title: '找不到这名球员诶',
            content: '请确认学号姓名有无输入错误，或请联系足协管理员',
            showCancel: false,
          })
        }
      },
      fail(res){
        console.log("fail to get database")
      }
    })
  },

  Send_info: function () {
    var that = this
    wx.showModal({
      title: '叮咚~',
      content: '确认要进行绑定了吗？',
      showCancel: true,
      success (res) {
        if (res.confirm) {
          wx.showLoading({
            title: '正使用官僚之力',
          })
          setTimeout(function () {
            wx.hideLoading()
          },3000)
          /* 延时几秒钟，让他们见识见识官僚之力 */

          /* 修改数据库绑定信息 */
          wx.cloud.database().collection("user_temp")
          .doc( getApp().globalData._id )
          .update({
            data : {
              name : that.data.name,
              num_98 : that.data.num_98,
              team_98 : that.data.team_98,
              school_id : that.data.school_id,
              phone: that.data.phone
            }
          })
          
          wx.showToast({
            title: '好啦~绑定完毕',
            duration: 2000,
            success(res){
              getApp().globalData.name = that.data.name,
              getApp().globalData.team_98 = that.data.team_98,
              getApp().globalData.school_id = that.data.school_id,
              getApp().globalData.num_98 = that.data.num_98,
              getApp().globalData.phone = that.data.phone
              wx.redirectTo({
                url: '/pages/Person/Person',
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },


  Bind_cloud: function () {
    /* wx.cloud.callFunction({
      name: "bind_user",
      data:{
        username : "刘山标"
      },
      success:res => {
        console.log("好辣", res.result.data)
      },
      fail(res) {
        console.log("nononoon")
      }
    }) */

    wx.cloud.init({
      traceUser: true
    })
    wx.cloud.callFunction({
      name: 'bind_user',
      complete: res => {
        /* this.setData({
            news:res.result.data.reverse()
          }) */
          console.log("好辣", res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      team_98_temp : getApp().globalData.team_98,
      team_98 : getApp().globalData.team_98,
      school_id : getApp().globalData.school_id,
      num_98 : getApp().globalData.num_98,
      name : getApp().globalData.name,
      phone : getApp().globalData.phone
    })
    if (this.data.team_98.length != 0 && this.data.name.length != 0) {
      this.setData({
        bind_flag : 0
      })
    }
    console.log("bind_flag: " + this.data.bind_flag)
    console.log(getApp().globalData.phone)
    console.log("length: " + getApp().globalData.team_98.length)
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