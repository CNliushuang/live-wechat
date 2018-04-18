// pages/account/account.js
import { store } from './store';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    tab:"cash",
    limit:50
  },
  switchTab(event){
    let tab = event.target.dataset.tab;
    if(tab != this.tab){
      this.setData({
        tab:tab
      })
      this.getList();
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();

  },
  getList(start){
    start = start || 0;
    if(this.data.tab == 'cash'){
      store.getCashList({start,limit:this.data.limit},(resp) => {
        console.log(resp)
      })
    }else{
      store.getAccountList({ start, limit: this.data.limit }, (resp) => {
        console.log(resp)
      })
    }
  },
  upper(){

  },
  lower(){

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