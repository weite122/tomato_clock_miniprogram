Page({
  timer: null,
  data: {
    defalutSecond: 1500,
    time: "",
    timerStatus: 'stop',
    confirmVisible: false,
    againButtonVisible: false,
    finishConfirmVisible: false
  },
  onShow: function () {
    this.startTimer()
  },
  startTimer(){
    this.setData({ timerStatus: 'start' })
    this.changeTime()
    this.timer = setInterval(() => {
      this.data.defalutSecond = this.data.defalutSecond - 1
      this.changeTime()
      if (this.data.defalutSecond <= 0){ 
        this.setData({ againButtonVisible: true })
        this.setData({ finishConfirmVisible: true })
        return this.clearTimer()
      }
    }, 1000)
  },
  againTimer(){
    this.data.defalutSecond = 1500
    this.setData({ againButtonVisible: false })
    this.startTimer()
  },
  clearTimer(){
    clearInterval(this.timer)
    this.timer = null
    this.setData({ timerStatus: 'stop' })
  },
  changeTime(){
    let m = Math.floor(this.data.defalutSecond/60)
    let s = Math.floor(this.data.defalutSecond%60)
    if(s === 0){
      s = "00"
    }
    if((s+"").length === 1){
      s = "0" + s
    }
    if ((m + "").length === 1) {
      m = "0" + m
    }
    this.setData({ time: `${m}:${s}` })
  },
  confirmAbandon(event){
    let content = event.detail
    wx.navigateBack({
      to: -1
    })
  },
  confirmFinish(event){
    let content = event.detail
  },
  confirmCancel(){
    this.setData({ finishConfirmVisible: false })
  },
  showConfirm(){
    this.setData({ confirmVisible: true })
    this.clearTimer()
  },
  hideConfirm(){
    this.setData({ confirmVisible: false })
    this.startTimer()
  },
  onHide: function () {

  },
  onUnload: function () {

  },
}) 