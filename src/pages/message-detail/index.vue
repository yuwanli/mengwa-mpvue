<template>
  <div class="container">
    <div class="title">
      <p class="title__name">小草莓外婆小草莓小草莓小草莓 </p>
      <p class="title__tag">私信记录</p>
    </div>
    <scroll-view :scroll-y="true" class="scroll">
      <div class="item left">
        <img mode="aspectFit" class="item__avatar" src="/static/images/index__avatar.png">
        <div class="item__content">
          <p class="item__name">小草莓外婆小草莓小草莓小草莓</p>
          <p class="item__time">2018-12-30  08:00</p>
          <p class="item__detail">私信标题标题标题标题标题标题标题 私信标题标题标题标题标题标题标题</p>
        </div>
      </div>
      <div class="item right">
        <img mode="aspectFit" class="item__avatar" src="/static/images/index__avatar.png">
        <div class="item__content">
          <p class="item__name">小草莓外婆小草莓小草莓小草莓</p>
          <p class="item__time">2018-12-30  08:00</p>
          <p class="item__detail">私信标题标题标题标题标题标题标题 私信标题标题标题标题标题标题标题</p>
        </div>
      </div>
      <div class="item left">
        <img mode="aspectFit" class="item__avatar" src="/static/images/index__avatar.png">
        <div class="item__content">
          <p class="item__name">小草莓外婆小草莓小草莓小草莓</p>
          <p class="item__time">2018-12-30  08:00</p>
          <p class="item__detail">私信标题标题标题标题标题标题标题 私信标题标题标题标题标题标题标题</p>
        </div>
      </div>
      <div class="item right">
        <img mode="aspectFit" class="item__avatar" src="/static/images/index__avatar.png">
        <div class="item__content">
          <p class="item__name">小草莓外婆小草莓小草莓小草莓</p>
          <p class="item__time">2018-12-30  08:00</p>
          <p class="item__detail">私信标题标题标题标题标题标题标题 私信标题标题标题标题标题标题标题</p>
        </div>
      </div>
      <div class="item left">
        <img mode="aspectFit" class="item__avatar" src="/static/images/index__avatar.png">
        <div class="item__content">
          <p class="item__name">小草莓外婆小草莓小草莓小草莓</p>
          <p class="item__time">2018-12-30  08:00</p>
          <p class="item__detail">私信标题标题标题标题标题标题标题 私信标题标题标题标题标题标题标题</p>
        </div>
      </div>
      <div class="item right">
        <img mode="aspectFit" class="item__avatar" src="/static/images/index__avatar.png">
        <div class="item__content">
          <p class="item__name">小草莓外婆小草莓小草莓小草莓</p>
          <p class="item__time">2018-12-30  08:00</p>
          <p class="item__detail">私信标题标题标题标题标题标题标题 私信标题标题标题标题标题标题标题</p>
        </div>
      </div>
      <div class="item left">
        <img mode="aspectFit" class="item__avatar" src="/static/images/index__avatar.png">
        <div class="item__content">
          <p class="item__name">小草莓外婆小草莓小草莓小草莓</p>
          <p class="item__time">2018-12-30  08:00</p>
          <p class="item__detail">私信标题标题标题标题标题标题标题 私信标题标题标题标题标题标题标题</p>
        </div>
      </div>
      <div class="item right">
        <img mode="aspectFit" class="item__avatar" src="/static/images/index__avatar.png">
        <div class="item__content">
          <p class="item__name">小草莓外婆小草莓小草莓小草莓</p>
          <p class="item__time">2018-12-30  08:00</p>
          <p class="item__detail">私信标题标题标题标题标题标题标题 私信标题标题标题标题标题标题标题</p>
        </div>
      </div>

    </scroll-view>
    <div class="comment">
      <image mode="aspectFit" class="comment__avatar" src="/static/images/index__avatar.png"></image>
      <input class="comment__input" placeholder="输入回复内容">
    </div>
  </div>

</template>

<script>

export default {
  components: {
  },

  data () {
    return {
    }
  },

  created () {
  }
}
</script>

<style lang="less">
@import '~@/utils/less/var.less';
.container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f3f4f5;
  display: flex;
  flex-direction: column;
}
.title{
  height: 210/@bs;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-bottom: 30/@bs;
  &__name{
    font-size: 54/@bs;
    color: #333;
    line-height: 1.5;
  }
  &__tag{
    font-size: 52/@bs;
    color: #498a68;
    line-height: 1.5;
  }
}
.scroll{
  flex: 1;
  overflow: hidden;
  background-color: #fff;
}
.item{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 50/@bs;
  padding: 0 30/@bs;
  &__avatar{
    width: 150/@bs;
    height: 150/@bs;
    border-radius: 150/@bs;
    margin-right: 20/@bs;
  }
  &__content{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  &__name{
    font-size: 36/@bs;
    color: #cccccc;
    line-height: 60/@bs;
  }
  &__time{
    font-size: 32/@bs;
    color: #ccc;
  }
  &__detail{
    width: 100%;
    font-size: 50/@bs;
    color: #333;
    line-height: 80/@bs;
    margin-top: 15/@bs;
  }
  &.right{
    flex-direction: row-reverse;
    .item__avatar{
      margin-right: 0;
      margin-left: 20/@bs;
    }
    .item__content{
      text-align: right;
    }
  }
}
.comment{
  height: 150/@bs;
  padding: 0 50/@bs;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: row;
  &__avatar{
    width: 85/@bs;
    height: 85/@bs;
    border-radius: 85/@bs;
    margin-right: 20/@bs;
  }
  &__input{
    flex: 1;
    font-size: 44/@bs;
    height: 150/@bs;
  }
}
</style>
