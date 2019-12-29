<template>
  <div class="container">
    <div class="info">
      <div class="info__left">
        <p class="info__left__text">小草莓外婆</p>
        <div class="info__left__btn">投诉反馈</div>
      </div>
      <img mode="aspectFit" class="info__avatar" src="/static/images/index__avatar.png">
    </div>
    <div class="scroll">
      <mw-scroll :can-scroll="canScroll" :list-data="listData" :init-flag="initFlag" @scrolltolower="scrolltolower">
        <template slot="noData">
          <div class="noData">
            <!-- <p>该用户还没有发布闲置品</p> -->
            <p class="warn">该账号异常<br>已被管理员停止使用</p>
          </div>
        </template>
      </mw-scroll>
    </div>
  </div>
</template>

<script>
import mwScroll from '@/components/mw-scroll.vue'
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
  components: {
    mwScroll
  },

  data () {
    return {
      canScroll: true,
      listData: mockData,
      initFlag: true
    }
  },

  created () {
  },

  methods: {
    getData () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let listData = this.listData
          this.listData = listData.concat(mockData)
          resolve()
        }, 1000)
      })
    },
    scrolltolower () {
      this.getData()
    }
  }
}
</script>

<style lang="less">
@import '~@/utils/less/var.less';
.container{
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.info{
  padding: 0 30/@bs;
  height: 240/@bs;
  display: flex;
  flex-direction: row;
  align-items: center;
  &__left{
    flex: 1;
    display: flex;
    flex-direction: column;
    &__text{
      color: #333;
      font-size: 54/@bs;
      line-height: 70/@bs;
    }
    &__btn{
      border-radius: 70/@bs;
      background-color: #f0f2f3;
      border: 1px dashed #588122;
      height: 70/@bs;
      width: 200/@bs;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36/@bs;
      font-weight: bolder;
      margin-top: 10/@bs;
      color: #498a68;
    }
  }
  &__avatar{
    width: 150/@bs;
    height: 150/@bs;
    border-radius: 50%;
  }
}
.scroll{
  flex: 1;
  overflow: hidden;
}
.noData{
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p{
    font-size: 48/@bs;
    color: #3b6b08;
    margin-bottom: 300/@bs;
    line-height: 80/@bs;
    text-align: center;
    &.warn{
      color: #ff0000;
    }
  }
}
</style>
