<template>
  <div class="rzsb">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/rzgl"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        认证管理
      </div>
    </div>
    <div class="zzrz-img">
      <img src="./images/rzsb.png" alt="" height="42px">
    </div>
    <div class="zzrz-text">
      认证失败
    </div>
    <div class="zzrz-text1">
      请检查您的<span>开户银行</span>信息，并重新认证
    </div>

      <p class="rzsb-con">重新认证</p>

  </div>
</template>

<script>
export default {
  name: 'rzsb'
}
</script>

