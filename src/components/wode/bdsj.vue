<template>
  <div class="bdsj-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/zhyaq"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        修改手机号码
      </div></div>
    <p class="bdsj-top">当前绑定手机号： <span>13801737861</span></p>

    <div class="bdsj-yzm-wrap clear">
      <div class="bdsj-yzm-left"><img src="./images/ys.png" alt="" height="15px"></div>
      <input type="text" placeholder="获取验证码" class="bdsj-yzm-con">
      <div class="bdsj-yzm-right">获取验证码</div>
    </div>
    <div class="zc-zc">下一步</div>
    <p class="bdsj-yzm-wr">为确保账号安全，更换手机号前，需验证原手机号</p>
  </div>
</template>

<script>
export default {
  name: 'bdsj'
}
</script>

