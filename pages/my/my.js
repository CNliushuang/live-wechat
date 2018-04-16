// pages/my/my.js
import { store } from './store';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:null,
    cashAccount:[],
    autoAccount:null,
    handleAccount:null,
    userInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.user){
      this.setData({
        user:app.globalData.user
      })
    }
    this.getCashAccount();
    this.getUserInfo();
  },
  getUserInfo(){
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
  getCashAccount(){
    store.getCashAccount({},(resp) => {
      console.log(resp);
      let handleAccount=null,autoAccount=null;
      if(resp.list && resp.list.length > 0){
        for(var items of resp.list){
          if (items.cashType == "HANDLE"){
            handleAccount = items;
          }
          if (items.cashType == "AUTO") {
            autoAccount = items;
          }
        }
      }

      this.setData({
        cashAccount:resp.list,
        autoAccount:autoAccount,
        handleAccount: handleAccount
      })
    })
  },
  go_bind(e){//绑定账号
    const cashType = e.target.dataset.type;
    console.log(cashType)
    const url = '/pages/bind/bind?cashType=' + cashType;
    wx.navigateTo({
      url: url
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
    this.getCashAccount();
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