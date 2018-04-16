// pages/login/login.js
import { store } from './store';
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:true,
    login:{
      mobile:"",
      code:"",
      codeLocked:false,
      lockedTime:60
    },
    users:[],
    select_user_uuid:""
  },
  goLogin(){
    if (!this.data.login.mobile) {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    if (!this.data.login.code) {
      wx.showToast({
        title: '请输入验证码',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    clearInterval(app.globalData.timer);
    store.login({mobile:this.data.login.mobile,code:this.data.login.code},(resp) => {
      // console.log(resp)
      this.setData({
        "users": resp.users
      })
    },(resp) => {
      wx.showToast({
        title: resp.msg,
        icon: 'none',
        duration: 2000
      })
    })

    this.setData({
      isLogin:false
    })
  },
  goMy(){
    if (!this.data.select_user_uuid){
      wx.showToast({
        title: "请选择登录账号",
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    let obj = null;
    for(var items of this.data.users){
      if (items.user.uuid == this.data.select_user_uuid){
        obj = items;
      }
    }
    if(obj){
      store.getUserByTicket({ticket:obj.ticket},(resp) => {
        // console.log(resp);
        app.globalData.token = resp.token;
        app.globalData.user = obj.user;
        let url = "/pages/my/my";
        wx.switchTab({
          url: url
        })
      })
    }

    
  },
  setLoginMobile(e){
    var mobile = e.detail.value;
    this.setData({
      "login.mobile":mobile
    })
  },
  setLoginCode(e) {
    var code = e.detail.value;
    this.setData({
      "login.code": code
    })
  },
  getCode(){//获取验证码
    if (this.data.login.codeLocked){//验证码锁定
      return false;
    }

    if(!this.data.login.mobile){
      wx.showToast({
        title: '请输入手机号',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    this.setData({
      "login.codeLocked":true
    })
    app.globalData.timer = setInterval(() => {
      var temp = this.data.login.lockedTime;
      temp--;
      console.log(temp)
      this.setData({
        "login.lockedTime":temp
      })
      if(temp <=0 ){
        this.setData({
          "login.codeLocked": false,
          "login.lockedTime":60
        })
        clearInterval(app.globalData.timer);
      }
    },1000)

    store.getMobileCode({mobile:this.data.login.mobile},(resp) => {
      wx.showToast({
        title: '验证码发送成功',
        icon: 'success',
        duration: 2000
      })
      console.log(resp);
    })


  },
  selectUser(e){
    const uuid = e.target.dataset.uuid;
    this.setData({
      "select_user_uuid":uuid
    })

  },

  getUserInfo() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
})