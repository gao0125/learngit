<template>
  <div class="wdqg-xxqg">
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
        <div>
          <router-link to="/wdjy"><img src="../denglu/images/jiantou.png" width="9px "></router-link>
        </div>
        检验订单详情
      </div>
    </div>
    <div class="wdqg-xxqg-content-wrap">
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">货物类型:</div>
        <span>管材</span>
      </div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">产品名称:</div>
        <span>管材</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">生产标准:</div>
        <span>建筑钢材</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">材质:</div>
        <span>不锈钢</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">规格:</div>
        <span>广告歌</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">数量:</div>
        <span>189789</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">检验结构:</div>
        <span>无锡钢猫电子商务有限公司</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">检验方式:</div>
        <span>光滑度</span></div>





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
        状态：<span>提交成功</span>
      </p>

    </div>
    <div class="wdqg-xxqg-footer clear">
      <div class="wdqg-xxqg-footer-text">取消申请</div>
      <div class="wdqg-xxqg-footer-text wdqg-xxqg-footer-text1" @click="tcc">联系客服</div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'xxqg',
  data(){
      return{
        tc:false,
      }
  },
  methods: {
   tcc(){
      this.tc=true;
    },
    kf1(){
      this.tc=false;
    }
  }
}
</script>

