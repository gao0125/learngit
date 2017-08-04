<template>
  <div class="zzrz-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/rzgl"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        认证管理
      </div>
    </div>
    <div class="zzrz-img">
      <img src="./images/rz.png" alt="" height="42px">
    </div>
    <div class="zzrz-text">
      正在认证中...
    </div>
    <div class="zzrz-text1">
      您的认证正在处理中，请耐心等待
    </div>
    <div style="text-align: center;margin-top: 30px">
      <button><router-link to="/rzsb">失败</router-link></button>
      <button><router-link to="/rzcg">成功</router-link></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zzrz'
}
</script>

