<template>
  <div class="yhfk-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/shouye"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        订单特制
      </div>
    </div>
    <div class="yhfk-con">
      <div contenteditable="true">请输入您的订单要求</div>
    </div>
    <div class="yhfk-img">
      <img src="../wode/images/dhk.png" alt="" height="56px">
      <span>最多上传五张照片</span>
    </div>
     <div class="sy-ddtz-wrap">
       <img src="./images/iph.png" height="15px" alt="">
       <span></span>
       <input type="text" placeholder="请输入您的手机号">
     </div>
    <div class="ddtz-footer">订单特制</div>
  </div>

</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  export default {
    name: 'ddtz',

  }

</script>

