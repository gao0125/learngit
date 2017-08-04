<template>
  <div class="wdzc-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wode"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        账户与安全
      </div></div>



    <router-link to="/bdsj"><div class="wdzc-content-wrap">
      <div class="wdzc-content-all clear">
        <div class="wdzc-content-left">
          <img src="./images/iconshouji.png" alt="" height="38px" class="wdzc-content-left-img">
          <span>绑定手机</span>
        </div>
        <div class="wdzc-content-right">
          <img src="./images/wddd.png" alt="" height="10px">
        </div>
      </div>
    </div></router-link>
    <router-link to="/xgmm"><div class="wdzc-content-wrap">
      <div class="wdzc-content-all clear">
        <div class="wdzc-content-left">
          <img src="./images/iconshuo.png" alt="" height="38px" class="wdzc-content-left-img">
          <span>修改登录密码</span>
        </div>
        <div class="wdzc-content-right">
          <img src="./images/wddd.png" alt="" height="10px">
        </div>
      </div>
    </div></router-link>
    <router-link to="/xgzfmm"><div class="wdzc-content-wrap">
      <div class="wdzc-content-all clear">
        <div class="wdzc-content-left">
          <img src="./images/iconyu.png" alt="" height="38px" class="wdzc-content-left-img">
          <span>修改支付密码</span>
        </div>
        <div class="wdzc-content-right">
          <img src="./images/wddd.png" alt="" height="10px">
        </div>
      </div>
    </div></router-link>
     <router-link to="/bdyx"><div class="wdzc-content-wrap">
    <div class="wdzc-content-all clear">
      <div class="wdzc-content-left">
        <img src="./images/iconyu.png" alt="" height="38px" class="wdzc-content-left-img">
        <span>绑定邮箱</span>
      </div>
      <div class="wdzc-content-right">
        <img src="./images/wddd.png" alt="" height="10px">
      </div>
    </div>
  </div></router-link>

  </div>
</template>

<script>
export default {
  name: 'zhyan'
}
</script>

