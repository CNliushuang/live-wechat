// pages/bind/bind.js
import { store } from './store';
const app = getApp();



Page({

  /**
   * 页面的初始数据
   */
  data: {
    cashType:"AUTO",
    wechat:{
      accountName:"",
      accountNum:""
    },
    zfb:{
      accountName: "",
      accountNum: ""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.cashType){
      this.setData({
        cashType: options.cashType
      })
    }
  },
  changeNum(e){
    const cashType = e.target.dataset.type;
    const val = e.detail.value;
    if(cashType == "AUTO"){
      this.setData({
        "wechat.accountNum":val
      })
    }else{
      this.setData({
        "zfb.accountNum": val
      })
    }
  },
  changeName(e) {
    const cashType = e.target.dataset.type;
    const val = e.detail.value;
    if (cashType == "AUTO") {
      this.setData({
        "wechat.accountName": val
      })
    } else {
      this.setData({
        "zfb.accountName": val
      })
    }
  },
  goBindHandle(){
    if (!this.data.zfb.accountName){
      wx.showToast({
        title: "请输入真实姓名",
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    if (!this.data.zfb.accountNum) {
      wx.showToast({
        title: "请输入支付宝账号",
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    let accountName = this.data.zfb.accountName;
    let accountNum = this.data.zfb.accountNum;
    let cashType = this.data.cashType;
    let accountType = this.data.cashType == "AUTO"?0:1;
    store.bindHandleAccount({ accountNickname: accountNum, cashType, accountType, accountName, accountNum},(resp) => {
      wx.showToast({
        title: "绑定成功",
        icon: 'success',
        duration: 2000
      })

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