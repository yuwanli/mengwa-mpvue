<template>
  <div class="select" @click="change" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
    <div class="select__active">
      <img class="select__active__arrow left" src="/static/images/add__right__arrow.png">
      <div id="active" class="select__active__wrapper" :style="{'transform': 'translate(0,'+distanceActiveY+'px)'}">
        <p v-for="item in list" v-bind:key="item">{{item}}</p>
      </div>
      <img class="select__active__arrow right" src="/static/images/add__right__arrow.png">
    </div>
    <div class="select__base">
      <div class="select__base__wrapper" :style="{'transform': 'translate(0,'+distanceBaseY+'px)'}">
        <p v-for="(item,index) in list" :class="(index === activeIndex +1) && 'active'" v-bind:key="item">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      startY: 0, // start时的偏移量
      distanceActiveY: 0, // 实时的偏移量
      endY: 0, // 结束时的偏移量
      listLength: 0,
      itemHeight: 0
    }
  },
  props: {
    list: {
      type: Object,
      default: []
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    wx.createSelectorQuery().select('#active').boundingClientRect((res) => {
      this.listLength = this.list.length
      this.itemHeight = res.height / this.listLength
    }).exec()
  },
  computed: {
    distanceBaseY () {
      return ((this.distanceActiveY - this.itemHeight) * 80 / 122).toFixed(2)
    }
  },
  methods: {
    touchstart (event) {
      this.startY = event.pageY
    },
    touchmove (event) {
      const res = this.endY + event.pageY - this.startY
      if (res < 0 && res > -1 * this.itemHeight * (this.listLength - 1)) {
        this.distanceActiveY = res
      }
    },
    touchend (event) {
      let index = 0
      const ratio = -1 * this.distanceActiveY / this.itemHeight
      if (ratio > 0.55) {
        index = Math.min(parseInt(ratio - 0.55) + 1, this.listLength - 1)
      }
      this.$emit('changeIndex', index)
      // console.log(this.distanceActiveY, (-1 * this.distanceActiveY / (this.itemHeight * 0.6)), index)
      this.distanceActiveY = -1 * index * this.itemHeight
      this.endY = this.distanceActiveY
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/utils/less/var.less';
.select{
  width: 676/@bs;
  &__active{
    display: flex;
    overflow: hidden;
    align-items: flex-start;
    flex-direction: row;
    box-sizing: border-box;
    height: 122/@bs;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    color: #254502;
    text-align: center;
    font-weight: bolder;
    font-size: 48/@bs;
    line-height: 122/@bs;
    &__arrow{
      margin-top: 48/@bs;
      width: 15/@bs;
      height: 26/@bs;
      &.left{
        margin-left: 22/@bs;
        animation: leftArrow 1s ease infinite;
      }
      &.right{
        margin-right: 22/@bs;
        transform: rotateZ(-180deg);
        animation: rightArrow 1s ease infinite;
      }
    }
    &__wrapper{
      position: relative;
      display: flex;
      align-items: center;
      flex: 1;
      flex-direction: column;
    }
  }
  &__base{
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    padding-top: 20/@bs;
    height: 180/@bs;
    color: rgba(255,255,255,0.2);
    text-align: center;
    font-size: 48/@bs;
    line-height: 80/@bs;
    p.active{
      color: rgba(255,255,255,0.5);
    }
    &__wrapper{
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
}
@keyframes leftArrow {
  0% {
    transform: translateX(0/@bs);
  }
  50% {
    transform: translateX(10/@bs);
  }
  60%{
    transform: translateX(10/@bs);
  }
  100%{
    transform: translateX(0/@bs);
  }
}
@keyframes rightArrow {
  0% {
    transform: translateX(0/@bs) rotateZ(-180deg);
  }
  50% {
    transform: translateX(-10/@bs) rotateZ(-180deg);
  }
  60%{
    transform: translateX(-10/@bs) rotateZ(-180deg);
  }
  100%{
    transform: translateX(0/@bs) rotateZ(-180deg);
  }
}
</style>
