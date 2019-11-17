<template>
  <div class="loading" v-show="hasMore">
    <div v-show="hasMore" class="load-spinner"></div>
    <p>{{hasMore ? loadingText : noMoreText}}</p>
  </div>
</template>

<script>
export default {
  props: {
    loadingText: {
      type: String,
      default: '正在努力加载中...'
    },
    noMoreText: {
      type: String,
      default: '无更多内容~'
    },
    hasMore: {
      type: Boolean,
      default: true
    }
  }
}
</script>



<style lang="less" scoped>
@import '~@/utils/less/var.less';
.loading{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 1080/@bs;
  height: 160/@bs;
  p{
    color: #c5c5c5;
    font-size: 40/@bs;
  }
}
.load-spinner{
    margin-right: 30/@bs;
    width: 60/@bs;
    height: 60/@bs;
    border: 10/@bs solid transparent;
    border-top-color: rgb(204, 204, 204);
    border-bottom-color: rgb(204, 204, 204);
    border-left-color: rgb(204, 204, 204);
    border-radius: 50%;
    animation: loading .8s infinite linear;
}
@keyframes loading {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}
</style>
