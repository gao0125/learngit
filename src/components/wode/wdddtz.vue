<template>
  <div class="wdzc-wrap wdddtz-wrap">
    <transition name="fade">
      <div  v-if="tc" class="sq-bk"></div>
    </transition>
    <transition name="fade">
      <div v-if="tc" class="lxkf-wrap">
        <div class="lxkf-top">退款请联系钢猫客服</div>
        <div class="lxkf-top1">
          021-62672111
        </div>
        <div class="lxkf-top2 clear">
          <div class="lxkf-top2-left" @click="kf1">取消</div>
          <div class="lxkf-top2-right">呼叫</div>
        </div>
      </div>
    </transition>
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wdtz"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
       订单特制
      </div></div>

    <div class="wdddte-content-wrap">
       <div class="wdddte-content-top">
         订单要求：<span>{{xxtz.desc}}</span>
       </div>
      <div class="wdddte-content-sjtz">
        设计图纸：
        <p v-if="xxtz.imgs.length<5">
          <img src="./images/dhk.png" alt="" height="56px">
        </p>
        <p v-else>
          <img v-for="ig in JSON.parse(xxtz.imgs)" style="margin-left: 15px" :src="'http://m.gangmao.biz/'+ig" alt="" height="50px" width="50px">
        </p>
      </div>
      <div class="wdddte-content-top1">
        手机号码：<span>{{xxtz.cellphone}}</span>
      </div>
    </div>
    <div class="wdqg-xxqg-content-wrap wdqg-xxqg-content-wrap4"><p class="wdqg-xxqg-content-te">
      状态：<span>{{xxtz.status==1?'待处理':'已处理'}}</span></p></div>

    <div class="wdqg-xxqg-footer clear">
      <div class="wdqg-xxqg-footer-text wdqg-xxqg-footer-text1">取消申请</div>
      <div class="wdqg-xxqg-footer-text" @click="tcc">联系客服</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wdzc',
  data(){
    return{
      tc:false,
        xxtz:{}
    }
  },
  created:function () {
    this.get_tzdd()
  },
  methods: {
    tcc(){
      this.tc=true;
    },
    kf1(){
      this.tc=false;
    },
    get_tzdd(){
        this.xxtz=JSON.parse(this.$route.query.tz);
    }
  }
}
</script>

