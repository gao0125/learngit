<template>
  <div class="yhfk-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/shezhi"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        意见反馈
      </div>
    </div>
    <div class="yhfk-con">
      <div contenteditable="true">请输入您的宝贵意见</div>
    </div>
    <div class="yhfk-con-le">
      <span>0</span>/ <span>100</span>
    </div>
    <div class="yhfk-img">
      <img src="./images/dhk.png" alt="" height="56px">
      <span>最多上传五张照片</span>
    </div>
    <div class="yhfk-phon clear">
     <div>电话号码：</div>
      <p><input type="text"></p>
    </div>
    <div class="zc-zc">提交</div>
  </div>

</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  export default {
    name: 'yhfk',

  }

</script>
<style>
  @import "wode.css";
</style>

