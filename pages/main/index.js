//index.js
//获取应用实例
const app = getApp()

const db = wx.cloud.database();
const sublets = db.collection('sublets')

const order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    title: 'The Flats @ West Village',
    description: 'Contact (434) 509-4430 with any questions ',
    scrollTop: 100
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e)
  },
  tap(e) {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})