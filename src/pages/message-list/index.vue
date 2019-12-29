<template>
  <scroll-view class="container">
    <div class="item">
      <div class="item__row">
        <img mode="aspectFit" class="item__img" src="/static/images/index__avatar.png">
        <div class="item__wrapper">
          <p class="item__name">小草莓外婆小草莓小草莓小草莓</p>
          <div class="item__row">
            <p class="item__type">私信</p>
            <div class="item__btn">查看</div>
            <div class="item__btn">删除</div>
          </div>
        </div>
      </div>
      <p class="item__content">《标题标题标题标题标题标题标题标题标题题标题标题标……》</p>
    </div>
    <div class="item">
      <div class="item__row">
        <img mode="aspectFit" class="item__img" src="/static/images/index__avatar.png">
        <div class="item__wrapper">
          <p class="item__name">小草莓外婆小草莓小草莓小草莓</p>
          <div class="item__row">
            <p class="item__type">私信</p>
            <div class="item__btn">查看</div>
            <div class="item__btn">删除</div>
          </div>
        </div>
      </div>
      <p class="item__content">《标题标题标题标题标题标题标题标题标题题标题标题标……》</p>
    </div>
  </scroll-view>
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
  background-color: #f3f4f5;
}
.item{
  display: flex;
  flex-direction: column;
  margin-bottom: 30/@bs;
  padding: 30/@bs;
  background-color: #fff;
  &__row{
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  &__img{
    margin-right: 20/@bs;
    width: 150/@bs;
    height: 150/@bs;
    border-radius: 150/@bs;
  }
  &__name{
    margin-bottom: 16/@bs;
    color: #333333;
    font-size: 54/@bs;
    line-height: 70/@bs;
  }
  &__type{
    flex: 1;
    color: #ccc;
    font-size: 36/@bs;
  }
  &__btn{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 60/@bs;
    width: 200/@bs;
    height: 70/@bs;
    border: 1px dashed #588122;
    border-radius: 70/@bs;
    background-color: #f0f2f3;
    color: #498a68;
    font-weight: bolder;
    font-size: 36/@bs;
  }
  &__wrapper{
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  &__content{
    overflow: hidden;
    margin-top: 30/@bs;
    color: #333333;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 36/@bs;
    line-height: 70/@bs;
  }
}

</style>
