// pages/Control/Control.js

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
    columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
    cuptype: '',
    team: '',
    point_id: '0',
    chooseteamid: 11900,
    show: false,
    show2: false,
    show3: false,
    teamid: 0,
    teamname: "AYIYA",
    leadername: "阿月色真美",
    coachname: "方正",
    captainname: "仪风也温柔",
    teamicon: "http://playforzju-icon.stor.sinaapp.com/icons/team/%E5%88%87%E5%B0%94%E8%A5%BF.png",
    teamscbg: "scbgyellow",
    teamtitle: "titleyellow",
    pointid: 0,
    pointcid: 0,
    iconlist:[],
    list:[],
    player_num: 0,
    color: '',
   
  },
  savenumber:function(e){
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Leader/choose_number',
      data:{
        cup_type: this.data.cuptype,
        team: this.data.team,
        player_id: this.data.point_id,
        number: this.data.player_num,
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
      },
      
    })
  },
  xuanh:function(e) {
    this.data.player_num = e.currentTarget.dataset.index;
    console.log(this.data.player_num)
  },

  haoma:function(e) {
    var show3 = this.data.show3
    this.setData({
      show3: true,
      point_id: e.currentTarget.dataset.index
    })
    console.log(e)
  },

  onConfirm(event) {
    const { picker, value, index } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
  },

  onCancel() {
    var show3 = this.data.show3
    this.setData({
      show3: false
    })
  },


  img_save: function(e){
    var that = this
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Publicshow/set_img_url',
      data:{
        team_id: that.data.teamid,
        url: that.data.teamicon,
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

  changeicon: function (e) {
    var pointid = e.currentTarget.dataset.index;
    this.setData({
      teamicon : this.data.iconlist[(pointid)-2].url,
    })
    console.log(this.data.teamicon)
  },

  changecap: function (e) {
    var captainname = this.data.captainname;
    var pointcid = e.currentTarget.dataset.index;
    this.setData({
      captainname : this.data.list[(pointcid)-2].user_name,
    })
    
  },

  capsave:function(){
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Leader/choose_captain',
      data:{
        team_id: this.data.teamid,
        captain: this.data.captainname,
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

  chooseicon: function () {
    this.setData({ show: true });
  },

  choosecap: function () {
    this.setData({ show2: true });
  },

  onClose() {
    this.setData({ show: false });
    this.setData({ show2: false });
    this.setData({ show3: false });
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp()
    var that = this
    // for(var i=1;i<100;i++){
    //   this.setData({
    //     columns[i-1]: i,
    //   })
    // }
    // that.setData({
    //   columns: number
    // })
    // console.log(this.data.columns)
    that.setData({
      cuptype: options.cuptype,
      team: options.team,
    })
    //console.log(that.data.cuptype)
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Leader/change_to_team_id',
      data: {
        cup_type: that.data.cuptype,
        team: that.data.team,
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
            success (res){
               wx.redirectTo({
                url: '/pages/Lic_leader/Lic_leader',
              })
          }
          })
         
        }else{
        that.setData({
          teamid: res.data.team_id,
        }),
        wx.request({
          url: 'https://playforzju.applinzi.com/index.php/Home/Publicshow/show_team',
          data: {
            team_id: that.data.teamid
          },
          method:'POST',
          header: {
            'content-type':"application/x-www-form-urlencoded"
          },
          success(res){
            console.log(res.data)
            that.setData({
              teamname: res.data.data.team_name,
              leadername: res.data.data.leader,
              coachname: res.data.data.coach,
              captainname: res.data.data.captain,
              list: res.data.data.player,
              color: res.data.data.color,
              teamicon: res.data.data.team_img,
            })
            //console.log(this.data.list)
          }
        })
        }
        
      }
    })

    //在这里调取后台数据库的所有team_img
    wx.request({
      url: 'https://playforzju.applinzi.com/index.php/Home/Publicshow/show_all_team_img',
      data :{},
      method:'POST',
      header: {
        'content-type':"application/x-www-form-urlencoded"
      },
      success(res){
        that.setData({
          iconlist: res.data.data,
        })
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
    wx.showNavigationBarLoading()
    this.onLoad()
    setTimeout(() => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 2000);
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