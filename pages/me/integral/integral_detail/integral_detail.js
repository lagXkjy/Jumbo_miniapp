import request from "../../../../utils/request";
import filter from "../../../../utils/filter";
// pages/me/integral/integral_detail/integral_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isEmpty: true,
    recode: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    filter.identity();
    let that = this;
    // 获取用户信息
    wx.getStorage({
      key: 'userInfo',
      success: (result) => {
        // console.log(result);
        that.setData({
          userInfo: result.data
        })
        // 请求积分记录
        request.send({
          url: '/getIntegrals/' + that.data.userInfo.id,
          data: {},
          success: res => {
            let empty = false;
            if (res.data.recode.length == 0) {
              empty = true;
            }
            that.setData({
              recode: res.data.recode,
              isEmpty: empty
            });
          }
        });
      }
    });
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