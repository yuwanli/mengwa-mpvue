<template>
  <div class="item">
    <img mode="widthFix" class="item__img" :lazy-load="true" :src="itemData.img">
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
      active: false
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
  &__img{
    width: 495/@bs;
    border-radius: 10/@bs;
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
