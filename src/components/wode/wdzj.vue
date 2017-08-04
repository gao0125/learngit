<template>
  <div class="zhye-wrap scj-wrap">


    <div class="denglu-top-wrap">
      <div class="denglu-top1"><div class="qunr-fx1">
        <router-link to="/wode" class="">
          <img src="../denglu/images/jiantou.png" width="9px ">
        </router-link></div>
     我的足迹
      <div class="qunr-fx zhye-tk" @click="kf">
        <img src="./images/sc.png" alt="" height="16px">
      </div>
    </div>
    </div>
   <p class="scj-sc"><span>最近一个月收藏</span></p>
   <div class="scj-content-wrap">
     <div class="scj-content-all clear">
      <div class="scj-content-left clear">
        <img src="../shouye/images/zytj_03.png" alt="" height="75px">

        <p>
          <span>螺纹钢φ25*9</span><br>
          <span style="color: #9e9e9e;">φ25*9</span><br>
          <span style="color: #9e9e9e;">dadasda</span>
        </p>

      </div>
      <div class="scj-content-right">
        <p class="scj-content-right-top">￥0.01</p>
        <p class="scj-content-right-top1">
          <img src="./images/fenxiang.png" alt="" height="12px">
          分享
        </p>
      </div>
     </div>
   </div>
    <div class="scj-content-wrap">
      <div class="scj-content-all clear">
        <div class="scj-content-left clear">
          <img src="../shouye/images/zytj_03.png" alt="" height="75px">

          <p>
            <span>螺纹钢φ25*9</span><br>
            <span style="color: #9e9e9e;">φ25*9</span><br>
            <span style="color: #9e9e9e;">dadasda</span>
          </p>

        </div>
        <div class="scj-content-right">
          <p class="scj-content-right-top">￥0.01</p>
          <p class="scj-content-right-top1">
            <img src="./images/fenxiang.png" alt="" height="12px">
            分享
          </p>
        </div>
      </div>
    </div>
    <div class="scj-content-wrap">
      <div class="scj-content-all clear">
        <div class="scj-content-left clear">
          <img src="../shouye/images/zytj_03.png" alt="" height="75px">

          <p>
            <span>螺纹钢φ25*9</span><br>
            <span style="color: #9e9e9e;">φ25*9</span><br>
            <span style="color: #9e9e9e;">dadasda</span>
          </p>

        </div>
        <div class="scj-content-right">
          <p class="scj-content-right-top">￥0.01</p>
          <p class="scj-content-right-top1">
            <img src="./images/fenxiang.png" alt="" height="12px">
            分享
          </p>
        </div>
      </div>
    </div>
    <div class="scj-content-wrap">
      <div class="scj-content-all clear">
        <div class="scj-content-left clear">
          <img src="../shouye/images/zytj_03.png" alt="" height="75px">

          <p>
            <span>螺纹钢φ25*9</span><br>
            <span style="color: #9e9e9e;">φ25*9</span><br>
            <span style="color: #9e9e9e;">dadasda</span>
          </p>

        </div>
        <div class="scj-content-right">
          <p class="scj-content-right-top">￥0.01</p>
          <p class="scj-content-right-top1">
            <img src="./images/fenxiang.png" alt="" height="12px">
            分享
          </p>
        </div>
      </div>
    </div>
    <div class="scj-content-wrap">
      <div class="scj-content-all clear">
        <div class="scj-content-left clear">
          <img src="../shouye/images/zytj_03.png" alt="" height="75px">

          <p>
            <span>螺纹钢φ25*9</span><br>
            <span style="color: #9e9e9e;">φ25*9</span><br>
            <span style="color: #9e9e9e;">dadasda</span>
          </p>

        </div>
        <div class="scj-content-right">
          <p class="scj-content-right-top">￥0.01</p>
          <p class="scj-content-right-top1">
            <img src="./images/fenxiang.png" alt="" height="12px">
            分享
          </p>
        </div>
      </div>
    </div>
    
    <div class="scj-content-wrap">
      <div class="scj-content-all clear">
        <div class="scj-content-left clear">
          <img src="../shouye/images/zytj_03.png" alt="" height="75px">

          <p>
            <span>螺纹钢φ25*9</span><br>
            <span style="color: #9e9e9e;">φ25*9</span><br>
            <span style="color: #9e9e9e;">dadasda</span>
          </p>

        </div>
        <div class="scj-content-right">
          <p class="scj-content-right-top">￥0.01</p>
          <p class="scj-content-right-top1">
            <img src="./images/fenxiang.png" alt="" height="12px">
            分享
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zhye',
  data(){
      return{
        sc2:true,
        sc1:false,
        tc:false,
        zhyesxallbka1:false,
        tm:false,
        zhyesxallbka:true,
      }
  },
  methods: {
    scb(){
      this.sc1=true;
      this.sc2=false;
    },
    sca(){
      this.sc2=true;
      this.sc1=false;
    },
    kf(){
      this.tc=true;
    },
    kf1(){
      this.tc=false;
    },
    zhyesxallbkb(){
      this.zhyesxallbka=true;
      this.zhyesxallbka1=false;
    },
    zhyesxallbkb1(){
      this.zhyesxallbka1=true;
      this.zhyesxallbka=false;
    },
    tm1(){
      this.tm=!this.tm;
    }
  }
}
</script>

