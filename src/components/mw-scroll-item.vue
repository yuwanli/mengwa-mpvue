<template>
  <div class="item">
    <div class="item__con">
      <!-- <img mode="widthFix" class="item__img" :lazy-load="true" :src="itemData.img"> -->
      <img mode="widthFix" class="item__img" :lazy-load="true" src="/static/images/index__love.png">
      <div v-if="itemData.status" class="item__status">{{statusText[itemData.status]}}</div>
    </div>
    <p class="item__title">{{itemData.title}}</p>
    <div class="item__wrapper">
      <img mode="aspectFill" :src="itemData.avatar" class="item__avatar">
      <p class="item__name">{{itemData.name}}</p>
      <img :class="['item__love',active ? 'item__love--active' : '']" @click="likeClick" :src="loveImgUrl">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loveImgs: [
        '/static/images/index__love.png',
        '/static/images/index__love--active.png'
      ],
      active: false,
      statusText: ['', '已下架', '被投诉异常']
    }
  },
  computed: {
    loveImgUrl () {
      return this.loveImgs[+this.itemData.liked]
    }
  },
  watch: {
    'itemData.liked': function (val) {
      if (val) {
        this.active = true
        setTimeout(() => {
          this.active = false
        }, 300)
      }
    }
  },
  props: {
    itemData: {
      type: Object,
      default: {}
    }
  },
  methods: {
    likeClick () {
      this.$emit('likeClick', this.itemData.liked)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/utils/less/var.less';
.item{
  float: left;
  padding: 15/@bs 15/@bs 70/@bs;
  width: 495/@bs;
  &__con{
    position: relative;
    overflow: hidden;
    border-radius: 20/@bs;
  }
  &__status{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255,0.8);
    color: #ff0000;
    text-align: center;
    font-size: 40/@bs;
  }
  &__img{
    display: block;
    width: 495/@bs;
    background-color: #ccc;
  }
  &__title{
    margin-top: 12/@bs;
    margin-bottom: 12/@bs;
    color: #000;
    font-size: 36/@bs;
    line-height: 48/@bs;

    .lines(2);
  }
  &__wrapper{
    display: flex;
    align-items: center;
    flex-direction:row;
    justify-content: space-between;
    height: 50/@bs;
  }
  &__avatar{
    width: 50/@bs;
    height: 50/@bs;
    border-radius: 50/@bs;
  }
  &__name{
    flex: 1;
    padding: 0 10/@bs;
    color: #999;
    font-size: 30/@bs;
    line-height: 50/@bs;

    .lines(1);
  }
  &__love{
    width: 44/@bs;
    height: 39/@bs;
    &--active{
      animation: loveAni 0.3s ease-in-out;
    }
  }
}
@keyframes loveAni {
  0%{
    transform: scale(1)
  }
  65% {
    transform: scale(1.4)
  }
  100%{
    transform: scale(1)
  }
}
</style>
