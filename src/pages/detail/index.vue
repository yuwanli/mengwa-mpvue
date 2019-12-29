<template>
  <scroll-view class="container" :scroll-y="true">
     <div class="detail">
       <img class="detail__top" mode="widthFix" src="http://img4.imgtn.bdimg.com/it/u=2737213714,4157773318&fm=26&gp=0.jpg">
       <p class="detail__title">低价转让宝宝二手衣服九成新糖的，低价 转让宝宝二手衣宝二手衣服九成</p>
       <div class="detail__info">
         <img class="detail__info__avatar" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3402063479,1936521224&fm=11&gp=0.jpg">
         <p class="detail__info__name">小草莓外婆</p>
         <div class="detail__info__share" @click="shareClick">
           分享<img src="/static/images/detail__share.png">
         </div>
       </div>
       <div class="detail__time">12:20  08-15  2019</div>
       <div class="detail__labels">
         <div class="detail__labels__item">基础标签第一个</div>
         <div class="detail__labels__item">基础标签第一个</div>
         <div class="detail__labels__item">基础标签第一个</div>
       </div>
       <div class="detail__desc">
         最多字数样式数据显示，今年双11启动1分36秒，销售额即突破100亿元；1小时零3分59秒，突破1000亿元，截至16点31分，数据已达2135亿元，这一数据打破2018年天猫双11全天成交额记录。截至11月11日19点，湖南位列全国GMV（按：Gross Merchandise Volume，指网站交易总额）总量TOP第11位，与去年持平。湖南省购买力排行前五的城市也和去年一样，分别为长沙、岳阳、衡阳、株洲、常德；购买力排名前五的区县全部是长沙的区：岳麓区、雨花区、开福区、天心区、芙蓉区。湖南消费者最爱淘哪些商品呢？前五名分别是裤子、手机、羽绒服、面部护理套装、空调；最喜爱购买的单品前五名分别是华为Mate30、科沃斯扫地机器人T5 Max、IPhone11 Pro、兰蔻小黑瓶精华肌底液、荣耀9X。以上数据可以看出，数码、美妆品类尤为受到湖南消费者喜爱最多字数。今天在天猫双11华中会场还公布了最爱网购的高校。各大高校菜鸟驿站的大数据显示，湖南科技大学的包裹量位列湖南第一，也是华中地区第一，排在全国第5；湖南地区包裹量第2到第10位的高校分别是湘潭大学、湖南工业大学、邵阳学院、中南大学、湖南工程学院、湖南文理学院、湖南涉外经济学院、湖南工商大学、湖南化工职业技术学院。
       </div>
       <div class="detail__imgs">
         <img mode="widthFix" class="detail__imgs__item" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2786098934,1637644239&fm=26&gp=0.jpg" alt="">
         <img mode="widthFix" class="detail__imgs__item" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2786098934,1637644239&fm=26&gp=0.jpg" alt="">
       </div>
       <div class="detail__apply">申请联系方式</div>
       <div class="detail__comment">
         <div class="detail__comment__title">评论<span>发私信</span></div>
         <div class="detail__comment__item">
           <img class="detail__comment__item__avatar" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3402063479,1936521224&fm=11&gp=0.jpg">
           <div class="detail__comment__item__content">
             <p class="name">小草莓外婆</p>
             <p class="desc">这是一句评论的话这是一句评论的话这是一句评论的话这是一句评论的话这是一句评论的评论的话这是一句评论的话这是一句评论这是一句评论的话这是一句评论的话这是一句评论的话这是一句评论的话这是一句评论的评论的话这是最长评论字数最长评论字数</p>
           </div>
         </div>
         <div class="detail__comment__item">
           <img class="detail__comment__item__avatar" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3402063479,1936521224&fm=11&gp=0.jpg">
           <div class="detail__comment__item__content">
             <p class="name">小草莓外婆</p>
             <p class="desc">这是一句评论的话这是一句评论的话这是一句评论的话这是一句评论的话这是一句评论的评论的话这是一句评论的话这是一句评论这是一句评论的话这是一句评论的话这是一句评论的话这是一句评论的话这是一句评论的评论的话这是最长评论字数最长评论字数</p>
           </div>
         </div>
         <div class="detail__comment__item">
           <img class="detail__comment__item__avatar" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3402063479,1936521224&fm=11&gp=0.jpg">
           <div class="detail__comment__item__content">
             <p class="name">小草莓外婆</p>
             <p class="desc">这是一句评论的话这是一句评论的话这是一句评论的话这是一句评论的话这是一句评论的评论的话这是一句评论的话这是一句评论这是一句评论的话这是一句评论的话这是一句评论的话这是一句评论的话这是一句评论的评论的话这是最长评论字数最长评论字数</p>
           </div>
         </div>
         <div class="detail__comment__btn" @click="commentClick">
           <img class="detail__comment__btn__avatar" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3402063479,1936521224&fm=11&gp=0.jpg">
           <p class="detail__comment__btn__desc">点击输入留言内容</p>
         </div>
       </div>
     </div>
     <div :class="['textarea', showComment && 'textarea--active']">
       <textarea placeholder="请输入评论" class="textarea__input" placeholder-style="color:#cccccc" :fixed="false" :show-confirm-bar="false" :cursor-spacing="210" :focus="commentFocus" :adjust-position="true" :auto-focus="false" @blur="blurComment" maxlength="200"></textarea>
       <div class="textarea__btn">发送</div>
     </div>
     <popup
      @closePopup="sharePopup = false"
      :show="sharePopup"
      :default-close="true"
      :scale-ani="false"
      popup-type="center"
      >
        <div class="share">
          <div class="share__canvas">
            <canvas :style="{'opacity': sharePopup ? 1 : 0}" id="canvas" class="canvas" canvas-id="share"></canvas>
          </div>
          <div class="share__btn layer" @click="savePic">
            <img class="layer__img" src="/static/images/detail__btn.png">
            保存图片
          </div>
        </div>
      </popup>
  </scroll-view>
</template>

<script>
import { generateShareImg, saveCanvasImg } from '@/utils/index'
import popup from '@/components/popup'
export default {
  components: {
    popup
  },

  data () {
    return {
      commentFixed: true,
      showComment: false,
      commentFocus: false,
      sharePopup: false
    }
  },

  created () {
  },

  methods: {
    commentClick () {
      this.showComment = true
      this.commentFocus = true
    },
    blurComment () {
      this.commentFocus = false
      this.showComment = false
    },
    async shareClick () {
      await generateShareImg('share', {
        img: '/static/images/share__demo.png',
        name: '商品名称'
      }).catch((err) => {
        console.log(err)
      })
      this.sharePopup = true
    },
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
.detail{
  padding-bottom: 20/@bs;
  &__top{
    display: block;
    width: 1080/@bs;
  }
  &__title{
    margin-top: 48/@bs;
    padding: 0 30/@bs;
    color: #333333;
    font-weight: bolder;
    font-size: 54/@bs;
    line-height: 82/@bs;
  }
  &__info{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 34/@bs;
    margin-bottom: 34/@bs;
    padding: 0 30/@bs;
    height: 85/@bs;
    &__avatar{
      margin-right: 20/@bs;
      margin-left: 20/@bs;
      width: 85/@bs;
      height: 85/@bs;
      border-radius: 50%;
    }
    &__name{
      flex: 1;
      color: #333333;
      font-size: 36/@bs;
    }
    &__share{
      display: flex;
      align-items: center;
      box-sizing: border-box;
      margin-right: 20/@bs;
      padding: 0 24/@bs;
      height: 70/@bs;
      border: 1px dashed #588122;
      border-radius: 70/@bs;
      background-color: #f0f2f3;
      color: #498a68;
      font-size: 36/@bs;
      img{
        margin-left: 10/@bs;
        width: 46/@bs;
        height: 46/@bs;
      }
    }
  }
  &__time{
    padding: 0 50/@bs;
    color: #777777;
    font-size: 36/@bs;
    line-height: 42/@bs;
  }
  &__labels{
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20/@bs;
    padding: 0 40/@bs;
    &__item{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10/@bs;
      padding: 0 15/@bs;
      height: 70/@bs;
      border-radius: 5/@bs;
      background-color: #f7f7f7;
      color: #333333;
      font-size: 24/@bs;
    }
  }
  &__desc{
    margin-top: 70/@bs;
    margin-bottom: 70/@bs;
    padding: 0 50/@bs;
    color: #333333;
    font-size: 45/@bs;
    line-height: 70/@bs;
  }
  &__imgs{
    display: flex;
    flex-direction: column;
    &__item{
      display: block;
      margin: 15/@bs 0;
      width: 100%;
    }
  }
  &__apply{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 32/@bs;
    height: 94/@bs;
    border-radius: 94/@bs;
    background-color: #498a68;
    color: #fff;
    font-size: 54/@bs;
  }
  &__comment{
    padding: 0 50/@bs;
    &__title{
      display: flex;
      align-items: center;
      align-items: center;
      flex-direction: row;
      flex-direction: row;
      height: 90/@bs;
      color: #498a68;
      font-weight: bolder;
      font-size: 50/@bs;
      span{
        display: flex;
        display: flex;
        align-items: center;
        align-items: center;
        justify-content: center;
        justify-content: center;
        margin-left: 30/@bs;
        padding: 0 30/@bs;
        height: 60/@bs;
        border-radius: 30/@bs;
        background-color: #ff4d4d;
        color: #fff;
        font-weight: lighter;
        font-size: 42/@bs;
      }
    }
    &__item{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin: 15/@bs 0;
      &__avatar{
        margin-right: 20/@bs;
        width: 85/@bs;
        height: 85/@bs;
        border-radius: 50%;
      }
      &__content{
        flex: 1;
        flex-direction: column;
        .name{
          margin-top: 15/@bs;
          color: #999999;
          font-size: 36/@bs;
          line-height: 60/@bs;
        }
        .desc{
          color: #333333;
          font-size: 45/@bs;
          line-height: 70/@bs;
        }
      }
    }
    &__btn{
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      margin-top: 40/@bs;
      margin-bottom: 20/@bs;
      height: 85/@bs;
      &__avatar{
        margin-right: 20/@bs;
        width: 85/@bs;
        height: 85/@bs;
        border-radius: 50%;
      }
      &__desc{
        padding: 8/@bs 0;
        color: #999;
        font-size: 45/@bs;
        line-height: 68/@bs;
      }
    }
  }
}
.textarea{
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30/@bs 50/@bs;
  border-top: 1px solid #cccccc;
  background-color: #fff;
  transition: all 0.3s ease;
  transform: translateY(100%);
  &--active{
    transform: translateY(0);
  }
  &__input{
    width: 100%;
    height: 210/@bs;
    color: #333333;
    font-size: 45/@bs;
    line-height: 70/@bs;
  }
  &__btn{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30/@bs;
    width: 600/@bs;
    height: 70/@bs;
    border: 1px dashed #588122;
    border-radius: 70/@bs;
    background-color: #f0f2f3;
    color: #498a68;
    font-weight: bolder;
    font-size: 36/@bs;
  }
}
.share{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 640/@bs;
  &__canvas{
    width: 540/@bs;
    height: 960/@bs;
  }
  &__btn{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 50/@bs;
    width: 640/@bs;
    height: 90/@bs;
    color: #1e333f;
    font-weight: bolder;
    font-size: 40/@bs;
  }
}
.canvas{
  width: 540/@bs;
  height: 960/@bs;
}
</style>
