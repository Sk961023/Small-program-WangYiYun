// pages/list/list.js
import url from "../../config/url.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let { id,type } = options
    // id = 0;
    wx.request({
      url: `${url.list}?idx=${id}`,
      success:(res)=>{
        this.setData({
          list: res.data.playlist.tracks.slice(0,10)
        })
        wx.setNavigationBarTitle({
          title: type,
        })
      }
    })
  },
  tap(e){
    let {id} = e.currentTarget.dataset
    wx.navigateTo({
      url: `../play/play?id=${id}`,
    })
  }

  
})