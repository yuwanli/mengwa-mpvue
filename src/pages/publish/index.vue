<template>
  <scroll-view class="container" :scroll-y="!successPopup">
    <div class="form">
      <div class="title">
        <span class="title__label">标题</span>
        <input class="title__input" placeholder-style="color:#ccc" maxlength="35" type="text" placeholder="输入标题内容">
      </div>
      <div class="desc">
        <p class="desc__label">闲置品说明</p>
        <textarea :auto-height="false" class="desc__input" :placeholder="successPopup ? '':'请输入闲置品说明'" placeholder-style="color:#cccccc" maxlength="500"></textarea>
        <span class="desc__tips">500字</span>
      </div>
      <div class="method">
        <p class="method__label">选择联系方式<span>(可多选) </span></p>
        <div class="method__item method__item--active">
          <span class="method__item__select"></span>
          <p class="method__item__name">私信留言(通过私信留言与邻居联系) </p>
        </div>
        <div class="method__item">
          <span class="method__item__select"></span>
          <p class="method__item__name">微信号</p>
          <input class="method__item__input" placeholder-style="color:#ccc" type="text" placeholder="请输入个人微信号(需邻居提交申请，审核可见) ">
        </div>
      </div>
      <div class="upload">
        <p class="upload__label">添加闲置图片<span>(最多5张图) </span></p>
        <div class="upload__group">
          <div class="upload__item upload__btn" @click="chooseImage">
            <img src="/static/images/publish__add.png">
          </div>
          <div class="upload__item" v-for="(item,index) in uploadList" v-bind:key="item">
            <upload :data="item" :is-cover="index === uploadList.length - 1" @delete="deleteCurrent(index)"></upload>
          </div>
        </div>
      </div>
      <div class="labels">
        <p class="labels__title">标签</p>
        <div class="labels__group">
          <div :class="['labels__group__item',item.choosed && 'labels__group__item--active']" v-for="item in labels" v-bind:key="item" @click="labelClick(item)">{{item.name}}</div>
        </div>
      </div>
      <div class="publish" id="btn" @click="publishClick">确定发布</div>
    </div>
    <popup
    @closePopup="successPopup = false"
    :show="successPopup"
    :default-close="true"
    :scale-ani="false"
    popup-type="center"
    >
      <div class="share">
        <div class="share__title">发布成功</div>
        <div class="share__btn">查看闲置</div>
        <div class="share__tips" @click="savePic">点击保存下图，分享好友</div>
        <div class="share__canvas">
          <canvas id="canvas" class="canvas" canvas-id="share"></canvas>
        </div>
      </div>
    </popup>
  </scroll-view>
</template>

<script>
import { wxFun2Async, generateShareImg, saveCanvasImg } from '@/utils/index'
import upload from './upload.vue'
import popup from '@/components/popup'

export default {
  components: {
    upload,
    popup
  },

  data () {
    return {
      uploadList: [
      ],
      labels: [
        {
          name: '免费',
          choosed: true
        },
        {
          name: '这是一个新标签',
          choosed: false
        },
        {
          name: '这是一个新标签',
          choosed: false
        }
      ],
      successPopup: false,
      test: '',
      ratio: 1
    }
  },

  created () {
    // setTimeout(() => {
    //   this.successPopup = true
    // }, 1000)
  },

  mounted () {
    // setTimeout(async () => {
    console.log(generateShareImg)
    generateShareImg('share', {
      avatar: '',
      img: '/static/images/share__demo.png',
      name: '商品名称'
    })
    // this.initShareImg()
    // }, 1000)
  },

  methods: {
    async savePic () {
      await saveCanvasImg({
        x: 0,
        y: 0,
        width: 187.5,
        height: 333,
        destWidth: 464,
        destHeight: 820,
        canvasId: 'share'
      })
      wx.showToast({
        title: '图片保存成功',
        icon: 'success',
        duration: 1000
      })
    },
    publishClick () {
      this.successPopup = true
    },
    labelClick (item) {
      item.choosed = !item.choosed
    },
    async chooseImage (e) {
      const res = await wxFun2Async('chooseImage', {
        count: 5
      })
      this.uploadList = this.uploadList.reverse().concat(res.tempFilePaths).reverse()
    },
    deleteCurrent (index) {
      this.uploadList.splice(index, 1)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/utils/less/var.less';
.container{
  width: 100%;
  height: 100%;
}

.label{
  color: #333;
  font-size: 60/@bs;
  line-height: 80/@bs;
}
.input{
  color: #333;
  font-size: 60/@bs;
}
.form{
  padding: 0 50/@bs;
  font-size: 60/@bs;
}
.title{
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 156/@bs;
  border-bottom: 1px solid #ccc;
  &__label{
    margin-right: 75/@bs;

    .label;
  }
  &__input{
    .input;
  }
}
.desc{
  position: relative;
  padding: 40/@bs 0 80/@bs;
  border-bottom: 1px solid #ccc;
  &__label{
    .label;
  }
  &__input{
    width: 100%;
    height: 258/@bs;
    line-height: 86/@bs;
    &--hide{
      opacity: 0;
    }

    .input;
  }
  &__tips{
    position: absolute;
    right: 0;
    bottom: 0;
    color: #666;
    font-size: 40/@bs;
    line-height: 70/@bs;
  }
}
.method{
  padding: 60/@bs 0;
  &__label{
    .label;
    span{
      margin-left: 10/@bs;
      color: #ccc;
      font-size: 36/@bs;
    }
  }
  &__item{
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    margin: 30/@bs 0 0;
    padding: 0 25/@bs;
    height: 70/@bs;
    border: 1px dashed #d2d2d2;
    border-radius: 70/@bs;
    background-color: #f0f2f3;
    &--active{
      .method__item__select{
        background-color: #498a68;
      }
      .method__item__name{
        color: #498a68;
      }
    }
    &__select{
      display: inline-block;
      box-sizing: border-box;
      width: 32/@bs;
      height: 32/@bs;
      border: 1px solid #999999;
      border-radius: 32/@bs;
      font-size: 0;
      transition: all 0.3s ease;
    }
    &__name{
      margin-left: 12/@bs;
      color: #cccccc;
      font-size: 36/@bs;
      transition: all 0.3s ease;
    }
    &__input{
      flex: 1;
      margin-left: 34/@bs;
      color: #999;
      font-size: 36/@bs;
    }
  }
}
.upload{
  &__label{
    .label;
    span{
      margin-left: 10/@bs;
      color: #ccc;
      font-size: 36/@bs;
    }
  }
  &__group{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &__item{
    margin: 20/@bs 80/@bs 20/@bs 0;
    width: 160/@bs;
    height: 160/@bs;
  }
  &__btn{
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    img{
      width: 80/@bs;
      height: 80/@bs;
    }
  }
}
.labels{
  &__title{
    margin-top: 40/@bs;

    .label;
  }
  &__group{
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 25/@bs;
    &__item{
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin-right: 30/@bs;
      margin-bottom: 15/@bs;
      padding: 0 40/@bs;
      height: 70/@bs;
      border: 1px dashed #d2d2d2;
      border-radius: 70/@bs;
      background-color: #f0f2f3;
      color: #ccc;
      font-size: 36/@bs;
      transition: all 0.3s ease;
      &--active{
        border: 1px dashed #588122;
        color: #498a68;
      }
    }
  }
}
.publish{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 130/@bs;
  margin-bottom: 130/@bs;
  height: 94/@bs;
  border-radius: 94/@bs;
  background-color: #498a68;
  color: #fff;
  font-size: 54/@bs;
}
.share{
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 640/@bs;
  &__title{
    color: #fff;
    font-size: 60/@bs;
    line-height: 80/@bs;
  }
  &__btn{
    margin-top: 30/@bs;
    width: 600/@bs;

    .commonBtn;
  }
  &__tips{
    margin-top: 140/@bs;
    color: #498a68;
    text-decoration: underline;
    font-weight: bolder;
    font-size: 36/@bs;
  }
  &__canvas{
    margin-top: 20/@bs;
    width: 540/@bs;
    height: 960/@bs;
    background-color: #498a68;
  }
}
.canvas{
  width: 540/@bs;
  height: 960/@bs;
}
</style>
