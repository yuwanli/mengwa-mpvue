<template>
  <div :class="['popup','popup__'+popupType, (!showInCurrent || !show) && 'popup__hide']" :data-type="popupType" v-if="show || showInCurrent" @click="popupClick">
      <div :class="['popup-content',(!showInCurrent || !show) && (scaleAni ? 'popup-content__hide--ani':'popup-content__hide')]" @click.stop>
        <slot></slot>
      </div>
  </div>
</template>
<script>
export default {
  name: 'APP',
  data () {
    return {
      showInCurrent: false
    }
  },
  created () {
  },
  watch: {
    show: {
      immediate: true,
      handler: function (val) {
        if (val) {
          // this.$nextTick(() => {
          //   this.showInCurrent = val
          // })
          // wx.nextTick(() => {
          //   this.showInCurrent = val
          // })
          setTimeout(() => {
            this.showInCurrent = true
          }, 120)
        } else {
          setTimeout(() => {
            this.showInCurrent = false
          }, 300)
        }
      }
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    defaultClose: {
      type: Boolean,
      default: true
    },
    popupType: {
      type: String,
      default: 'center'
    },
    scaleAni: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    popupClick () {
      if (this.defaultClose) {
        this.closePopup()
      }
    },
    closePopup () {
      this.$emit('closePopup')
    }
  }
}
</script>
<style lang="less" scoped>
.popup{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    transition: all 0.3s ease;
    &__top{
        .popup-content{
            top: 0;
            left: 0;
            z-index: 3000;
            transition: all 0.3s ease;
        }
        &.fade-leave-active{
            background-color: rgba(0,0,0,0.6);
            .popup-content{
                opacity: 1;
                transform: translateY(0);
            }
        }
        &.fade-leave-to{
            background-color: rgba(0,0,0,0);
            .popup-content{
                opacity: 0;
                transform: translateY(-100%);
            }
        }
        &.fade-enter-active{
            background-color: rgba(0,0,0,0);
            .popup-content{
                opacity: 0;
                transform: translateY(-100%);
            }
        }
        &.fade-enter-to{
            background-color: rgba(0,0,0,0.6);
            .popup-content{
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
    &__bottom{
        .popup-content{
            bottom: 0;
            left: 0;
            z-index: 3000;
            transition: all 0.3s ease;
        }
        &.fade-leave-active{
            background-color: rgba(0,0,0,0.6);
            .popup-content{
                opacity: 1;
                transform: translateY(0);
            }
        }
        &.fade-leave-to{
            background-color: rgba(0,0,0,0);
            .popup-content{
                opacity: 0;
                transform: translateY(100%);
            }
        }
        &.fade-enter-active{
            background-color: rgba(0,0,0,0);
            .popup-content{
                opacity: 0;
                transform: translateY(100%);
            }
        }
        &.fade-enter-to{
            background-color: rgba(0,0,0,0.8);
            .popup-content{
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
    &__center{
      .popup-content{
        opacity: 1;
        transition: all 0.3s ease;
        transform: scale(1);
        &__hide{
          opacity: 0;
          transform: scale(1);
          &--ani{
            transform: scale(0.3);
          }
        }
      }
    }
    &__hide{
      background-color: rgba(0,0,0,0);
    }
}
</style>


