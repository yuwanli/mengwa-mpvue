<template>
  <div class="container">
    <div class="main" @click="userClick">
      <p class="main__name">小草莓外婆</p>
      <img mode="aspectFit" class="main__avatar" src="/static/images/index__avatar.png" alt="">
    </div>
    <div class="item" @click="itemClick('/pages/user-list/main')">
      <p class="item__name">我的闲置</p>
      <img mode="aspectFit" class="item__arrow" src="/static/images/user__arrow.png">
    </div>
    <div class="item">
      <p class="item__name">我的关注</p>
      <img mode="aspectFit" class="item__arrow" src="/static/images/user__arrow.png">
    </div>
    <div class="item" @click="itemClick('/pages/message-list/main')">
      <p class="item__name">我的消息</p>
      <img mode="aspectFit" class="item__arrow" src="/static/images/user__arrow.png">
    </div>
    <div class="item">
      <p class="item__name">我的私信</p>
      <img mode="aspectFit" class="item__arrow" src="/static/images/user__arrow.png">
    </div>
    <div class="item">
      <p class="item__name">客服</p>
      <img mode="aspectFit" class="item__arrow" src="/static/images/user__arrow.png">
    </div>
    <div class="change">更换小区 </div>
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
  },
  methods: {
    itemClick (url) {
      wx.navigateTo({
        url
      })
    }
  }
}
</script>

<style lang="less">
@import '~@/utils/less/var.less';
.main{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30/@bs;
  padding: 50/@bs 30/@bs;
  height: 150/@bs;
  &__name{
    color: #333333;
    font-size: 54/@bs;
  }
  &__avatar{
    width: 150/@bs;
    height: 150/@bs;
    border-radius: 150/@bs;
  }
}
.item{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 50/@bs;
  height: 156/@bs;
  border-bottom: 1px solid #cccccc;
  &__name{
    color: #666666;
    font-size: 60/@bs;
  }
  &__arrow{
    margin-right: 86/@bs;
    width: 15/@bs;
  }
}
.change{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100/@bs auto 0;
  width: 600/@bs;
  height: 70/@bs;
  border: 1px dashed #588122;
  border-radius: 70/@bs;
  background-color: #f0f2f3;
  color: #498a68;
  font-weight: bolder;
  font-size: 36/@bs;
}
</style>
