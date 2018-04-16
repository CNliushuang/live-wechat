//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    token:"c9ab060166e5371f304ca3491d87a244",
    plat:"wechat",
    timer:null,
    "user": {
      "uuid": "985845549351702528",
      "id": 1029,
      "nickname": "УОуо.๑ˋ新主播",
      "avatarUrl": null,
      "sex": "MAN",
      "userType": "ACTOR",
      "loginName": "985845549351702528",
      "mobile": "18311344273",
      "email": null,
      "wechatId": null,
      "qqId": "39567910",
      "status": 0,
      "py": "уоуо.๑ˋxzb",
      "pinyin": "УОуо.๑ˋxinzhubo",
      "orgId": "Tw78jhzjNEqdnKwXc7vbX7",
      "orgName": "测试工会2",
      "org": null,
      "createDate": 1523878869000,
      "lastUpDate": 1523878869000,
      "platId": "CZGy7gpuUykb5Q3BkyNste",
      "platName": "测试平台",
      "unionId": "Tw78jhzjNEqdnKwXc7vbX7",
      "unionName": "测试工会2",
      "money": 0.0
    }
  }
})