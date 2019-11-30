<template>
  <scroll-view
    class="container"
    :scroll-y="true"
    lower-threshold="0"
    :scroll-into-view="test"
    :style="{'height': clientHeight + 'px'}"
    @scroll="scroll"
  >
    <div class="wrapper">
      <img class="top" src="/static/images/index__top.png">
      <div class="select">
        <p class="select__base">这里是小区名字</p>
        <p class="select__btn">切换</p>
      </div>
    </div>
    <swiper class="swiper">
      <swiper-item>
        <div class="swiper__item" style="background-color:red"></div>
      </swiper-item>
      <swiper-item>
        <div class="swiper__item" style="background-color:yellow"></div>
      </swiper-item>
    </swiper>
    <div class="tab-wrapper" id="tab" :style="{'height': clientHeight+'px'}" @touchstart="touchstart">
      <div class="tab" :data-active="activeIndex">
        <div class="tab__item" @click="tabClick(0)">我的关注{{canScroll}}</div>
        <div class="tab__item" @click="tabClick(1)">小区婴童闲置</div>
        <div class="tab__item" @click="tabClick(2)">我的闲置</div>
      </div>
      <mw-swiper :active-index="activeIndex" @swiperChange="swiperChange" :can-scroll="canScroll"></mw-swiper>
      <!-- <swiper class="swiper" :current="active" @change="swiperChange" :indicator-dots="false">
        <mw-swiper-item :list-data="focusData"></mw-swiper-item>
        <mw-swiper-item :list-data="mainData"></mw-swiper-item>
        <mw-swiper-item :list-data="myData"></mw-swiper-item>
      </swiper> -->
    </div>
  </scroll-view>
</template>

<script>
import mwSwiper from '@/components/mw-swiper.vue'
import base from '@/mixins/base.js'
import {throttle} from '@/utils/index.js'

export default {
  data () {
    return {
      activeIndex: 0,
      focusData: [
        {
          img: '/static/images/index__demo3.png',
          title: '1低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo2.png',
          title: '2低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo1.png',
          title: '3低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo2.png',
          title: '4低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo3.png',
          title: '5低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo2.png',
          title: '6低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo1.png',
          title: '7低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 1,
          id: 1
        },
        {
          img: '/static/images/index__demo3.png',
          title: '8低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 1,
          id: 1
        },
        {
          img: '/static/images/index__demo3.png',
          title: '9低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 1,
          id: 1
        }
      ],
      mainData: [
        {
          img: '/static/images/index__demo3.png',
          title: '1低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo2.png',
          title: '2低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo1.png',
          title: '3低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo2.png',
          title: '4低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo3.png',
          title: '5低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo2.png',
          title: '6低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo1.png',
          title: '7低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 1,
          id: 1
        },
        {
          img: '/static/images/index__demo3.png',
          title: '8低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 1,
          id: 1
        },
        {
          img: '/static/images/index__demo3.png',
          title: '9低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 1,
          id: 1
        }
      ],
      myData: [
        {
          img: '/static/images/index__demo3.png',
          title: '1低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo2.png',
          title: '2低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo1.png',
          title: '3低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo2.png',
          title: '4低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo3.png',
          title: '5低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo2.png',
          title: '6低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 0,
          id: 1
        },
        {
          img: '/static/images/index__demo1.png',
          title: '7低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 1,
          id: 1
        },
        {
          img: '/static/images/index__demo3.png',
          title: '8低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 1,
          id: 1
        },
        {
          img: '/static/images/index__demo3.png',
          title: '9低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
          avatar: '/static/images/index__avatar.png',
          name: '小草莓外婆',
          liked: 1,
          id: 1
        }
      ],
      canScroll: false,
      clientHeight: 0,
      tabTop: 0,
      test: ''
    }
  },

  components: {
    mwSwiper
  },

  mixins: [base],

  methods: {
    scroll: throttle(function (e) {
      if (e.target.scrollTop >= this.tabTop - 10) {
        this.canScroll = true
        this.test = 'tab'
      } else {
        this.canScroll = false
        this.test = ''
      }
    }, 200, 500),
    scrolltoupper () {
      this.canScroll = false
    },
    scrolltolower () {
      console.log('aaa')
      this.canScroll = true
      // e.preventDefault()
    },
    swiperChange (index) {
      this.activeIndex = index
    },
    tabClick (index) {
      this.activeIndex = index
    }
  },

  created () {
    const res = wx.getSystemInfoSync()
    this.clientHeight = res.windowHeight
  },
  mounted () {
    const _this = this
    wx.createSelectorQuery().select('#tab').boundingClientRect(function (rect) {
      _this.tabTop = rect.top
      console.log('111')
    }).exec()
  }
}
</script>

<style lang="less" scoped>
@import '~@/utils/less/var.less';

.container{
  position: relative;
  overflow: hidden;
  width: 1080/@bs;
  height: 550px;
  // min-height: 100%;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
  }
}
.swiper{
  height: 240/@bs;
  margin-top: 56/@bs;
  &__item{
    height: 100%;
    background-color: yellowgreen;
  }
}
.wrapper{
  width: 1080/@bs;
  height: 290/@bs;
}
.tab{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30/@bs;
  padding: 0 50/@bs 10/@bs;
  height: 108/@bs;
  &[data-active='0']{
    .tab__item:nth-child(1){
      color: #498a68;
    }
    &::after{
      transform: translateX(50/@bs);
    }
  }
  &[data-active='1']{
    .tab__item:nth-child(2){
      color: #498a68;
    }
    &::after{
      transform: translateX(390/@bs);
    }
  }
  &[data-active='2']{
    .tab__item:nth-child(3){
      color: #498a68;
    }
    &::after{
      transform: translateX(730/@bs);
    }
  }
  &__item{
    width: 300/@bs;
    overflow: hidden;
    color: #848484;
    text-align: center;
    font-size: 48/@bs;
    line-height: 108/@bs;
    transition: all 0.3s ease;
    &--active{
      color: #498a68;
    }
  }
  &-wrapper{
    display: flex;
    flex-direction: column;
    // box-sizing: border-box;
    // padding-top: 290/@bs;
  }
  &::after{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300/@bs;
    height: 100%;
    height: 10/@bs;
    border-radius: 10/@bs;
    background-color: #498a68;
    content: '';
    transition: transform 0.3s ease;
  }
}


.top{
  width: 1080/@bs;
  height: 290/@bs;
}
.select{
  position: absolute;
  top: 240/@bs;
  left: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 35/@bs;
  height: 70/@bs;
  border: 1px dashed #588122;
  border-radius: 35/@bs;
  background-color: #f0f2f3;
  font-weight: bolder;
  font-size: 30/@bs;
  line-height: 70/@bs;
  transform: translateX(-50%);
  &__base{
    margin: 0 16/@bs;
    color: #000;
  }
  &__btn{
    margin-left: 16/@bs;
    padding: 0 16/@bs;
    color: #3b6b08;
    text-decoration: underline;
  }
}

</style>
