<template>
  <scroll-view>
    <div class="form">
      <div class="title">
        <span class="title__label">标题</span>
        <input class="title__input" placeholder-style="color:#ccc" maxlength="35" type="text" placeholder="输入标题内容">
      </div>
      <div class="desc">
        <p class="desc__label">闲置品说明</p>
        <textarea :auto-height="false" class="desc__input" placeholder="请输入闲置品说明" placeholder-style="color:#cccccc" maxlength="500"></textarea>
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
      <div class="publish">确定发布</div>
    </div>
  </scroll-view>
</template>

<script>
import { formatTime } from '@/utils/index'
import upload from './upload.vue'

export default {
  components: {
    upload
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
      ]
    }
  },

  created () {
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
  },

  methods: {
    labelClick (item) {
      item.choosed = !item.choosed
    },
    chooseImage (e) {
      let _this = this
      wx.chooseImage({
        count: 5,
        success: function (res) {
          _this.uploadList = _this.uploadList.reverse().concat(res.tempFilePaths).reverse()
        }
      })
    },
    deleteCurrent (index) {
      this.uploadList.splice(index, 1)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/utils/less/var.less';

.label{
  font-size: 60/@bs;
  color: #333;
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
  height: 156/@bs;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ccc;
  align-items: center;
  &__label{
    .label;
    margin-right: 75/@bs;
  }
  &__input{
    .input;
  }
}
.desc{
  padding: 40/@bs 0 80/@bs;
  border-bottom: 1px solid #ccc;
  position: relative;
  &__label{
    .label;
  }
  &__input{
    width: 100%;
    line-height: 86/@bs;
    height: 258/@bs;
    .input;
  }
  &__tips{
    position: absolute;
    right: 0;
    bottom: 0;
    color: #666;
    line-height: 70/@bs;
    font-size: 40/@bs;
  }
}
.method{
  padding: 60/@bs 0;
  &__label{
    .label;
    span{
      color: #ccc;
      font-size: 36/@bs;
      margin-left: 10/@bs;
    }
  }
  &__item{
    margin: 30/@bs 0 0;
    height: 70/@bs;
    padding: 0 25/@bs;
    box-sizing: border-box;
    border: 1px dashed #d2d2d2;
    background-color: #f0f2f3;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 70/@bs;
    &--active{
      .method__item__select{
        background-color: #498a68;
      }
      .method__item__name{
        color: #498a68;
      }
    }
    &__select{
      width: 32/@bs;
      height: 32/@bs;
      border-radius: 32/@bs;
      display: inline-block;
      font-size: 0;
      box-sizing: border-box;
      border: 1px solid #999999;
      transition: all 0.3s ease;
    }
    &__name{
      font-size: 36/@bs;
      color: #cccccc;
      margin-left: 12/@bs;
      transition: all 0.3s ease;
    }
    &__input{
      flex: 1;
      font-size: 36/@bs;
      margin-left: 34/@bs;
      color: #999;
    }
  }
}
.upload{
  &__label{
    .label;
    span{
      color: #ccc;
      font-size: 36/@bs;
      margin-left: 10/@bs;
    }
  }
  &__group{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &__item{
    width: 160/@bs;
    height: 160/@bs;
    margin: 20/@bs 80/@bs 20/@bs 0;
  }
  &__btn{
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 80/@bs;
      height: 80/@bs;
    }
  }
}
.labels{
  &__title{
    .label;
    margin-top: 40/@bs;
  }
  &__group{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25/@bs;
    flex-wrap: wrap;
    &__item{
      border: 1px dashed #d2d2d2;
      padding: 0 40/@bs;
      color: #ccc;
      font-size: 36/@bs;
      height: 70/@bs;
      border-radius: 70/@bs;
      background-color: #f0f2f3;
      margin-right: 30/@bs;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin-bottom: 15/@bs;
      transition: all 0.3s ease;
      &--active{
        border: 1px dashed #588122;
        color: #498a68;
      }
    }
  }
}
.publish{
  margin-top: 130/@bs;
  margin-bottom: 130/@bs;
  height: 94/@bs;
  background-color: #498a68;
  font-size: 54/@bs;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 94/@bs;
}
</style>
