//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    type:[
      { "0": '云音乐新歌榜'},
      { "1": '云音乐热歌榜'},
      { "2": '网易原创歌曲榜'},
      { "3": '云音乐飙升榜'},
      { "4": '云音乐电音榜'},
      { "5": 'UK排行榜周榜'},
      { "6": '美国Billboard周榜'},
      { "7": 'KTV嗨榜'},
      { "8": 'iTunes榜'},
      { "9": 'HitFMTop榜'},
      { "10": '日本Oricon周榜'},
      { "11": '韩国Melon排行榜周榜'},
      { "12": '韩国Mnet排行榜周榜'},
      { "13": '韩国Melon原声周榜'},
      { "14": '中国TOP排行榜(港台榜)'},
      { "15": '中国TOP排行榜(内地榜)'},
      { "16": '香港电台中文歌曲龙虎榜'},
      { "17": '华语金曲榜'},
      { "18": '中国嘻哈榜'},
      { "19": '法国NRJEuroHot30周榜'},
      { "20": '台湾Hito排行榜'},
      { "21": 'Beatport全球电子舞曲榜'},
      { "22": '云音乐ACG音乐榜'},
      { "23": '云音乐嘻哈榜'}
    ]
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onLoad: function () {
    
  },
  tap(e){
    let { id } = e.currentTarget.dataset
    // console.log(this.data.type[id])
    wx.navigateTo({
      url: `../list/list?id=${id}&type=${this.data.type[id][id]}`,
    })
  },
  getUserInfo: function() {

  }
})
