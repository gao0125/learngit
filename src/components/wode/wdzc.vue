<template>
  <div class="wdzc-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wode"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        我的资产
      </div></div>



    <router-link to="/zhye"><div class="wdzc-content-wrap">
      <div class="wdzc-content-all clear">
        <div class="wdzc-content-left">
          <img src="./images/zhye.png" alt="" height="38px" class="wdzc-content-left-img">
          <span>账户余额</span>
        </div>
        <div class="wdzc-content-right">
          <img src="./images/wddd.png" alt="" height="10px">
        </div>
      </div>
    </div></router-link>
    <router-link to="/wdjf"><div class="wdzc-content-wrap">
     <div class="wdzc-content-all clear">
       <div class="wdzc-content-left">
         <img src="./images/wdjf.png" alt="" height="38px" class="wdzc-content-left-img">
         <span>我的积分</span>
       </div>
       <div class="wdzc-content-right">
         <img src="./images/wddd.png" alt="" height="10px">
       </div>
     </div>
   </div></router-link>
    <router-link to="/yhj"><div class="wdzc-content-wrap">
      <div class="wdzc-content-all clear">
        <div class="wdzc-content-left">
          <img src="./images/yhj.png" alt="" height="38px" class="wdzc-content-left-img">
          <span>优惠券</span>
        </div>
        <div class="wdzc-content-right">
          <img src="./images/wddd.png" alt="" height="10px">
        </div>
      </div>
    </div></router-link>
   <!-- <router-link to="/zhye">--><div class="wdzc-content-wrap">
      <div class="wdzc-content-all clear">
        <div class="wdzc-content-left">
          <img src="./images/gmd.png" alt="" height="38px" class="wdzc-content-left-img">
          <span>钢猫贷</span>
        </div>
        <div class="wdzc-content-right">
          <img src="./images/wddd.png" alt="" height="10px">
        </div>
      </div>
    </div><!--</router-link>-->

  </div>
</template>

<script>
export default {
  name: 'wdzc'
}
</script>

