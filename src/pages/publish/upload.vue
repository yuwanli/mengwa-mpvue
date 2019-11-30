<template>
  <div class="upload">
    <span class="upload__label" v-if="isCover && !loading">封面</span>
    <img class="upload__img" mode="aspectFill" :src="data">
    <div class="upload__border"></div>
    <img v-if="!loading" src="/static/images/publish__delete.png" @click="deleteCurrent" class="upload__delete">
    <div :class="['upload__mask',!loading && 'upload__mask--hide']">
      <img class="upload__loading" src="/static/images/publish__loading.png"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true
    }
  },
  props: {
    data: {
      type: String,
      default: ''
    },
    isCover: {
      type: Boolean,
      default: false
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 1000 * Math.random() * 5)
  },
  methods: {
    deleteCurrent () {
      this.$emit('delete')
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/utils/less/var.less';
.upload{
  width: 160/@bs;
  height: 160/@bs;
  background-color: #7f7f7f;
  position: relative;
  z-index: 1;
  &__label{
    position: absolute;
    height: 50/@bs;
    line-height: 50/@bs;
    width: 90/@bs;
    text-align: center;
    font-size: 36/@bs;
    color: #fff;
    z-index: 30;
    background-color: #ff4d4d;
  }
  &__delete{
    position: absolute;
    width: 60/@bs;
    height: 60/@bs;
    right: -20/@bs;
    top: -20/@bs;
    z-index: 30;
  }
  &__img{
    position: absolute;
    width: 160/@bs;
    height: 160/@bs;
    left: 0;
    top: 0;
    z-index: 10;
  }
  &__border{
    position: absolute;
    width: 160/@bs;
    height: 160/@bs;
    left: 0;
    top: 0;
    z-index: 15;
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
  }
  &__mask{
    position: absolute;
    width: 160/@bs;
    height: 160/@bs;
    left: 0;
    top: 0;
    z-index: 20;
    background-color: rgba(0,0,0,0.5);
    transition: opacity 0.5s ease;
    &--hide{
      opacity: 0;
    }
  }
  &__loading{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 52/@bs;
    height: 52/@bs;
    z-index: 10;
    animation: loading 2s linear infinite;
  }
}
@keyframes loading {
  0%{
    transform: translate(-50%,-50%) rotateZ(0deg);
  }
  100% {
    transform: translate(-50%,-50%) rotateZ(360deg);
  }
}
</style>
