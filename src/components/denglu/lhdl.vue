<template>
  <div class="lhdl-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div>
          <router-link to="/denglu"><img src="./images/jiantou.png" width="9px "></router-link>
        </div>
        联合登录
      </div>
    </div>
    <div class="lhdl-tx"><img src="./images/tx.png" height="90px" alt=""></div>
    <div class="lhdl-yh">
      <span class="lhdl-yh-text">亲爱的QQ用户：</span><span>{{ msg }}</span>
    </div>
    <div class="lhdl-gl">
      为了给您更好的服务，请关联一个钢猫账号
    </div>
    <div class="lhdl-no">
      还没有钢猫账号？
    </div>
    <div class="zc-zc">
      <router-link to="/zc">注册</router-link>
    </div>
    <div class="lhdl-no">
      已有账号
    </div>
    <div class="ljgl">
      <router-link to="/ljgl">立即关联</router-link>
      </div>
  </div>

</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  export default {
    name: 'lhdl',
    data() {
      return {
        msg: 'Lucky'
      }
    }
  }
</script>
<style>
  @import "denglu.css";
</style>

