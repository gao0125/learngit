<template>
  <div class="wdqg-xxqg">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div>
          <router-link to="/wdwl"><img src="../denglu/images/jiantou.png" width="9px "></router-link>
        </div>
       物流订单详情
      </div>
    </div>
    <div class="wdqg-xxqg-content-wrap">
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">装点:</div>
        <span>上海市，上海-市辖区，东城区</span>
      </div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">卸点:</div>
        <span>江苏省，盐城市，东台区</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">货物:</div>
        <span>热卷</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">吨位:</div>
        <span>5.00</span></div>

      <div class="wdqg-xxqg-content-all1 clear">
        <div class="wdqg-xxqg-content-all1-left">照片：</div>
        <div class="wdqg-xxqg-content-all1-right">
          <img src="./images/cpxq-kwt.png" alt="" height="45px" width="80px">
        </div>
      </div>


      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">备注:</div>
        <span>携带</span>
      </div>



      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">联系电话:</div>
        <span>15121093979</span>
      </div>

    </div>
    <div class="wdqg-xxqg-content-wrap wdqg-xxqg-content-wrap4">
      <p class="wdqg-xxqg-content-te">
        状态：<span>待审核</span>
      </p>


    </div>
    <div class="wdqg-xxqg-content-wrap wdqg-xxqg-content-wrap4">
      <p class="wdqg-xxqg-content-te">
        运费：<span>￥1155000.00</span>
      </p>
    </div>
    <div class="wdqg-xxqg-content-wrap wdqg-xxqg-content-wrap4">
      <p class="wdqg-xxqg-content-te">
        <span class="agree-yuan agree-yuan33" @click="gx">
       <img src="../denglu/images/gx.png" height="13px" width="13px" alt="" v-if="gx1">
     </span>同意<span>钢猫物流管理协议</span>
      </p>
    </div>

    <div class="wdqg-xxqg-footer clear">
      <div class="wdqg-xxqg-footer-text">取消申请</div>
      <div class="wdqg-xxqg-footer-text wdqg-xxqg-footer-text1" @click="tcc">我要付款</div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'xxqg',
  data(){
      return{
        tc:false,
        gx1: false
      }
  },
  methods: {
   tcc(){
      this.tc=true;
    },
    kf1(){
      this.tc=false;
    },
    gx: function () {
      this.gx1 = !this.gx1
    }
  }
}
</script>

