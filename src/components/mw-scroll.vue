<template>
  <scroll-view class="scroll" lower-threshold="100" :enable-flex="true" :enable-back-to-top="true"  :scroll-y="canScroll" @scrolltolower="scrolltolower">
    <template v-if="initFlag && listData.length === 0">
      <div class="no-data">
        <slot name="noData" :data="{'index':index}"></slot>
      </div>
    </template>
    <template v-else>
      <div class="scroll__wrapper">
        <div class="scroll__left">
          <mw-scroll-item
            v-for="item in leftListData"
            v-bind:key="item.id"
            :item-data="item"
            @likeClick="likeClick(item)"
          >
          </mw-scroll-item>
        </div>
        <div class="scroll__right">
          <mw-scroll-item
            v-for="item in rightListData"
            v-bind:key="item.id"
            :item-data="item"
            @likeClick="likeClick(item)"
          ></mw-scroll-item>
        </div>
      </div>
      <mw-loading></mw-loading>
    </template>

  </scroll-view>
</template>

<script>
import mwScrollItem from './mw-scroll-item.vue'
import mwLoading from './mw-loading.vue'
export default {
  data () {
    return {
    }
  },
  props: {
    listData: {
      type: Array,
      default: []
    },
    index: {
      type: Number,
      default: 0
    },
    initFlag: {
      type: Boolean,
      default: false
    },
    canScroll: {
      type: Boolean,
      default: false
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
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  &__wrapper{
    padding: 0 15/@bs;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  &__left{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  &__right{
    flex: 1;
    display: flex;
    flex-direction: column;
     overflow: hidden;
  }
}
.no-data{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
