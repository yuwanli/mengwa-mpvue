<template>
  <scroll-view class="container">
    <img mode="aspectFit" class="base__top" src="/static/images/add__top.png" alt="">
    <div class="logo">
      <img mode="aspectFit" class="logo__bg" src="/static/images/add__logo.png">
      <p class="logo__desc">小区里的母婴闲置平台</p>
      <img mode="aspectFit" class="logo__frog" src="/static/images/add__frog.png">
      <div class="logo__address">
        <p class="logo_address__text">杭州市</p>
        <image mode="aspectFit" class="logo__address__arrow" src="/static/images/add__arrow.png"></image>
      </div>
    </div>
    <template v-if="list.length > 0">
      <div class="select">
        <p class="select__title">请选择小区{{activeIndex}}</p>
        <add-select :list="list" :active-index="activeIndex" @changeIndex="changeIndex"></add-select>
        <div class="btn">进入小区</div>
        <p class="add">添加我的小区</p>
      </div>
    </template>
    <template v-else>
      <div class="no-data">
        <p class="no-data__title">该区域还没有小区</p>
        <div class="no-data__btn" @click="openForm">
          <img src="/static/images/add__label.png">
          <p>添加我的小区</p>
        </div>
      </div>
    </template>
    <p class="protocol">选择小区并进入<br>视为同意<span>《用户服务协议》</span></p>
    <img mode="aspectFit" class="base__bottom" src="/static/images/add__bottom.png" alt="">
    <popup @closePopup="ifFormPopup = false" :show="ifFormPopup" :default-close="true" popup-type="center" >
      <div class="form">
        <p class="form__title">添加我的小区</p>
        <input placeholder="请输入要添加的小区名称" class="form__input" type="text">
        <div class="form__btn">确定添加</div>
      </div>
    </popup>
    <popup @closePopup="ifFormPopup = false" :show="ifFormPopup" :default-close="true" popup-type="center" >
      <div class="form">
        <p class="form__title">添加我的小区</p>
        <input placeholder="请输入要添加的小区名称" class="form__input" type="text">
        <div class="form__btn">确定添加</div>
      </div>
    </popup>
    <popup @closePopup="ifSuccessPopup = false" :show="ifSuccessPopup" :default-close="true" popup-type="center" >
      <div class="success">
        <p class="success__title">添加成功</p>
        <p class="success__desc">请等待管理员审核</p>
        <div class="success__btn">关闭</div>
        <p class="success__recommend">随便逛逛</p>
        <p class="success__item">一个小区名称最多字控制在18</p>
        <p class="success__item">这是第二个小区名字</p>
      </div>
    </popup>
  </scroll-view>
</template>

<script>
import addSelect from '@/components/select'
import popup from '@/components/popup'

export default {
  data () {
    return {
      list: [
        // '这是默认第1个小区',
        // '这是默认第2个小区',
        // '这是默认第3个小区',
        // '这是默认第4个小区',
        // '这是默认第5个小区',
        // '这是默认第6个小区',
        // '这是默认第7个小区',
        // '这是默认第8个小区'
      ],
      activeIndex: 0,
      ifFormPopup: false,
      ifSuccessPopup: false
    }
  },

  components: {
    addSelect,
    popup
  },

  methods: {
    changeIndex (index) {
      this.activeIndex = index
    },
    openForm () {
      // this.ifFormPopup = true
      this.ifSuccessPopup = true
    }
  },

  created () {
  }
}
</script>

<style lang="less" scoped>
@import '~@/utils/less/var.less';
.container{
  position: relative;
  z-index: 10;
  width: 1080/@bs;
  height: 100%;
  background-color: @theme__green;
}
.success{
  display: flex;
  align-items: center;
  flex-direction: column;
  &__title{
    color: #fff;
    font-size: 60/@bs;
    line-height: 120/@bs;
  }
  &__desc{
    color: #e4ff00;
    font-size: 48/@bs;
    line-height: 72/@bs;
  }
  &__btn{
    margin-top: 64/@bs;

    .popup__btn;
  }
  &__recommend{
    margin-top: 120/@bs;
    margin-bottom: 20/@bs;
    color: #fff;
    text-align: center;
    font-weight: bolder;
    font-size: 40/@bs;
  }
  &__item{
    color: #f4ffbf;
    text-align: center;
    font-size: 36/@bs;
    line-height: 60/@bs;
  }
}
.form{
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20/@bs 0;
  width: 640/@bs;
  &__title{
    color: #e4ff00;
    font-weight: bolder;
    font-size: 48/@bs;
    line-height: 70/@bs;
  }
  &__input{
    margin-top: 30/@bs;
    width: 100%;
    height: 130/@bs;
    border-radius: 30/@bs;
    background-color: #fff;
    text-align: center;
    font-size: 40/@bs;
    line-height: 130/@bs;
  }
  &__btn{
    margin-top: 15/@bs;

    .popup__btn;
  }
}
.popup__btn{
  width: 100%;
  height: 90/@bs;
  border-radius: 90/@bs;
  background-image: linear-gradient(to right,#e5f61a,#a0fc4e);
  color: #1e333f;
  text-align: center;
  font-weight: bolder;
  font-size: 40/@bs;
  line-height: 90/@bs;
}
.base{
  &__top{
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 1080/@bs;
    height: 268/@bs;
  }
  &__bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 1080/@bs;
    height: 340/@bs;
  }
}
.logo{
  position: relative;
  z-index: 10;
  margin: 178/@bs auto 0;
  width: 468/@bs;
  height: 468/@bs;
  &__bg{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 468/@bs;
    height: 468/@bs;
  }
  &__desc{
    position: absolute;
    top: 270/@bs;
    left: 0;
    width: 100%;
    color: @theme__yellow;
    text-align: center;
    font-weight: bolder;
    font-size: 38/@bs;
    line-height: 70/@bs;
  }
  &__frog{
    position: absolute;
    bottom: 36/@bs;
    left: 50%;
    z-index: -1;
    width: 82/@bs;
    height: 105/@bs;
    transform: translateX(-41/@bs);
  }
  &__address{
    position: absolute;
    top: 100%;
    left: 50%;
    z-index: 10;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    width: 260/@bs;
    height: 64/@bs;
    border: 1px dashed #efff97;
    border-radius: 10/@bs;
    background-color: @theme__green;
    color: @theme__yellow;
    font-size: 36/@bs;
    transform: translate(-130/@bs, -56/@bs);
    &__arrow{
      margin-left: 20/@bs;
      width: 33/@bs;
      height: 19/@bs;
    }
  }
}
.select{
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60/@bs;
  &__title{
    margin-bottom: 30/@bs;
    color: rgba(255,255,255,0.5);
    text-align: center;
    font-size: 48/@bs;
    line-height: 80/@bs;
  }
}
.btn{
  margin: 50/@bs auto 0;
  width: 700/@bs;
  height: 90/@bs;
  border-radius: 10/@bs;
  background-color: #3b6b08;
  color: #efff97;
  text-align: center;
  font-weight: bolder;
  font-size: 40/@bs;
  line-height: 90/@bs;
}
.add{
  margin-top: 16/@bs;
  color: #010101;
  text-align: center;
  text-decoration: underline;
  font-size: 36/@bs;
  line-height: 52/@bs;
}
.protocol{
  position: absolute;
  bottom: 180/@bs;
  left: 0;
  width: 100%;
  color: #000;
  text-align: center;
  font-size: 30/@bs;
  span{
    text-decoration: underline;
  }
}
.no-data{
  display: flex;
  align-items: center;
  flex-direction: column;
  &__title{
    margin-top: 50/@bs;
    color: #3b6b08;
    font-size: 48/@bs;
    line-height: 70/@bs;
  }
  &__btn{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    margin-top: 56/@bs;
    width: 410/@bs;
    height: 90/@bs;
    border: 2px dashed #efff97;
    border-radius: 10/@bs;
    color: #efff97;
    font-size: 36/@bs;
    img{
      margin-right: 30/@bs;
      width: 36/@bs;
      height: 36/@bs;
    }
  }
}
</style>
