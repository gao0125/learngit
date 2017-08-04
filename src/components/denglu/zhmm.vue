<template>
  <div class="denglu-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div>
          <router-link to="/denglu"><img src="./images/jiantou.png" width="9px "></router-link>
        </div>
        找回密码
      </div>
    </div>
    <div class="gmzc">
      <span class="gmzc-phon"><img src="./images/phon.png" height="14.5px" alt=""></span>
      <input type="text" placeholder="请输入手机号">
      <span class="hqyzm">获取验证码</span>
    </div>
    <div class="gmzc-1">
      <span class="gmzc-phon"><img src="./images/ys.png" height="14.5px" alt=""></span>
      <input type="text" placeholder="请输入验证码">
    </div>
    <div class="gmzc-1">
      <span class="gmzc-phon gmzc-phon-1"><img src="./images/suo.png" height="11" alt=""></span>
      <input type="text" placeholder="请输入密码">
    </div>
    <div class="gmzc-1">
      <span class="gmzc-phon gmzc-phon-1"><img src="./images/suo.png" height="11" alt=""></span>
      <input type="text" placeholder="请再次输入密码">
    </div>
    <div class="zc-zc">修改密码</div>


  </div>

</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  export default {
    name: 'zhmm',
  }

</script>
<style>
  @import "denglu.css";
</style>

