<template>
  <scroll-view class="scroll" lower-threshold="100" :enable-flex="true" :enable-back-to-top="true"  :scroll-y="true" @scrolltolower="scrolltolower">
    <div class="scroll__left">
      <mw-scroll-item
        v-for="item in leftListData"
        v-bind:key="item.id"
        :item-data="item"
        @likeClick="likeClick(item)"
      ></mw-scroll-item>
    </div>
    <div class="scroll__right">
      <mw-scroll-item
        v-for="item in rightListData"
        v-bind:key="item.id"
        :item-data="item"
        @likeClick="likeClick(item)"
      ></mw-scroll-item>
    </div>
    <mw-loading></mw-loading>
  </scroll-view>
</template>

<script>
import mwScrollItem from './mw-scroll-item.vue'
import mwLoading from './mw-loading.vue'
export default {
  props: {
    listData: {
      type: Array,
      default: []
    }
  },
  computed: {
    leftListData () {
      return this.listData.filter((val, index) => {
        return index % 2 === 0
      })
    },
    rightListData () {
      return this.listData.filter((val, index) => {
        return index % 2 === 1
      })
    }
  },
  components: {
    mwScrollItem,
    mwLoading
  },
  methods: {
    likeClick (item) {
      item.liked = !item.liked
    },
    scrolltolower () {
      this.$emit('scrolltolower')
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/utils/less/var.less';
.scroll{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 15/@bs;
  width: 100%;
  height: 100%;
  &__left{
    width: 525/@bs;
  }
  &__right{
    width: 525/@bs;
  }
}
</style>
