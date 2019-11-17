<template>
   <!-- <swiper-item>
     <mw-scroll :list-data="listData"></mw-scroll>
   </swiper-item> -->
   <swiper class="swiper" :current="activeIndex" @change="swiperChange" :indicator-dots="false">
      <swiper-item v-for="(item,index) in indexData" v-bind:key="item">
        <mw-scroll :list-data="item.list" @scrolltolower="scrolltolower(index)"></mw-scroll>
      </swiper-item>
  </swiper>
</template>

<script>
import mwScroll from './mw-scroll.vue'
const mockData = [
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
]
export default {
  data () {
    return {
      indexData: [
        {
          page: 1,
          list: []
        },
        {
          page: 1,
          list: []
        },
        {
          page: 1,
          list: []
        }
      ]
    }
  },
  props: {
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  components: {
    mwScroll
  },
  created () {
    this.getData(0)
  },
  methods: {
    getData (index) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let list = this.indexData[index].list
          this.indexData[index].list = list.concat(mockData)
          resolve()
        }, 1000)
      })
    },
    scrolltolower (index) {
      this.getData(index)
    },
    async swiperChange (event) {
      const index = event.target.current
      this.$emit('swiperChange', event.target.current)
      await this.getData(index)
    }
  }
}
</script>

<style lang="less" scoped>
.swiper{
  flex: 1;
}
</style>
