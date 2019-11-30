<template>
   <!-- <swiper-item>
     <mw-scroll :list-data="listData"></mw-scroll>
   </swiper-item> -->
   <swiper class="swiper" :current="activeIndex" @change="swiperChange" :indicator-dots="false">
      <swiper-item v-for="(item,index) in indexData" v-bind:key="item">
        <mw-scroll :can-scroll="canScroll" :list-data="item.list" :index="index" :init-flag="item.initFlag" @scrolltolower="scrolltolower(index)">
          <template slot="noData" slot-scope="{index}">
            <p class="no-data__title">{{noDataInfo[index].title}}</p>
            <div class="no-data__btn" @click="noDataBtnClick(index)">
              <img v-if="noDataInfo[index].icon" src="/static/images/index__add.png" class="no-data__btn__icon" alt="">
              <p>{{noDataInfo[index].btn}}</p>
            </div>
          </template>
        </mw-scroll>
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
    id: 1,
    status: 1
  },
  {
    img: '/static/images/index__demo2.png',
    title: '2低价转让宝宝二手衣服九成新的，低价转让宝宝二手衣低价转让宝宝二手衣',
    avatar: '/static/images/index__avatar.png',
    name: '小草莓外婆',
    liked: 0,
    id: 1,
    status: 2
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
      test: 'testetst',
      noDataInfo: [
        {
          title: '您还没有关注内容',
          btn: '去首页查看',
          icon: false
        },
        {
          title: '该小区还没有闲置品',
          btn: '分享我的闲置',
          icon: true
        },
        {
          title: '您还没有发布闲置品',
          btn: '分享我的闲置',
          icon: true
        }
      ],
      indexData: [
        {
          page: 1,
          list: [],
          initFlag: false
        },
        {
          page: 1,
          list: [],
          initFlag: false
        },
        {
          page: 1,
          list: [],
          initFlag: false
        }
      ]
    }
  },
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    canScroll: {
      type: Boolean,
      default: false
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
          // this.indexData[index].list = []
          if (!this.indexData[index].initFlag) {
            this.indexData[index].initFlag = true
          }
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
    },
    noDataBtnClick (index) {
      if (index === 0) {
        this.$emit('swiperChange', 1)
      } else {
        wx.switchTab({
          url: `/pages/publish/main`
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/utils/less/var.less';
.swiper{
  flex: 1;
}
.no-data{
  &__title{
    color: #3b6b08;
    font-size: 48/@bs;
    line-height: 72/@bs;
  }
  &__btn{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-top: 50/@bs;
    width: 410/@bs;
    height: 90/@bs;
    border: 1px dashed #498a68;
    border-radius: 10/@bs;
    color: #3b6b08;
    font-size: 36/@bs;
    &__icon{
      margin-right: 30/@bs;
      width: 36/@bs;
      height: 36/@bs;
    }
  }
}
</style>
