// pages/find/find.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodRecommend: {
      imgUrls: [
        '/assets/images/food-1.png',
        '/assets/images/food-2.png',
        '/assets/images/food-3.png'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      circular: true,
      nextMargin: '0'
    },
    foodClass: {
      imgInfo: [
        {
          listName: "快餐便当",
          listIcon: '/assets/images/icons/food-list/list-1.png'
        },
        {
          listName: "意面披萨",
          listIcon: '/assets/images/icons/food-list/list-2.png'
        },
        {
          listName: "中式点心",
          listIcon: '/assets/images/icons/food-list/list-3.png'
        },
        {
          listName: "汉堡薯条",
          listIcon: '/assets/images/icons/food-list/list-4.png'
        },
        {
          listName: "西式餐厅",
          listIcon: '/assets/images/icons/food-list/list-5.png'
        }
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 3000,
      duration: 1000,
      circular: true,
      nextMargin: '50rpx'
    },
    foodCard: {
      fastFood : [
        {
          img:'/assets/images/icons/food-cards/1.jpg',
          title:'口水鸡',
          content: '111'
        }
      ]
    }

  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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