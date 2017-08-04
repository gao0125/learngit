<template>
  <div class="bdsj-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/zhyaq"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        修改密码
      </div></div>
    <div class="xgmm-content-wrap">
       <div class="xgmm-content-all">
         <input type="text" placeholder="输入新密码">
       </div>
      <div class="xgmm-content-all">
        <input type="text" placeholder="确认新密码">
      </div>
      <p class="bdsj-yzm-wr1">密码由6-20位英文字母，数字或符号组成</p>
    </div>
    <div class="zc-zc">修改</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

