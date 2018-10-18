// pages/play/play.js
import url from '../../config/url.js'
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    song:{},
    duration:0,
    current:0,
    isDown:false,
    ric: {
      "0":"正在获取歌词"
    },
    currentric:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let{id} = options
    //获取歌词
    wx.request({
      url: `${url.lyric}?id=${id}`,
      success: (res)=>{
        let {lyric} = res.data.lrc
        var obj = {}
        
        let r = /\[(.*?)](.*)/g;
        lyric.replace(r,($0,$1,$2)=>{
          obj[$1.substring(0,5)] = $2
        })
        this.setData({
          ric:obj
        })
      }
    })

    //获取歌曲播放
    wx.request({
      url: `${url.song}?ids=${id}`,
      success:(res)=>{
        this.setData({
          song:res.data.songs[0]
        })
        let { song } = this.data
        console.log(song)
        wx.setNavigationBarTitle({
          title: song.name,
        })
      }
    })
    let { song } = app.globalData
    if(!song){
      song = app.globalData.song = wx.createInnerAudioContext()
    }
    song.src = `http://music.163.com/song/media/outer/url?id=${id}.mp3`
    song.play()
    song.onPlay(res=>{
      console.log("开始播放")
    })
    song.onTimeUpdate( res => {
      if(this.data.duration !== song.duration){
        this.setData({
          duration: song.duration
        })
      }
      if(!this.data.isDown){
        this.setData({
          current: song.currentTime
        })
      }
      let { currentTime: c } = song
      let min = Math.floor(c / 60)
      let sec = Math.floor(c % 60)
      var attr = (min < 10 ? "0" + min : "" + min) + ":" + (sec < 10 ? "0" + sec : "" + sec)
      if (attr in this.data.ric && "el-"+attr !==this.data.currentric){
        this.setData({
          currentric:"el-" + attr
        })
      }
    })
  },
  changing(){
    this.setData({
      isDown:true
    })
  },
  chang(e){
    this.setData({
      isDown: false,
      current: e.detail.value
    })
    app.globalData.song.seek(e.detail.value)
  },
  tap(){
    let {song} = app.globalData;
    song.paused ? song.play() : song.pause();
  }
})