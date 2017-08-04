<template>
  <div class="gdgzf-gdgfk-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/gdgfk"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
         公对公付款
      </div></div>

    <div class="gdgfk-gdg-top">
      <div class="gdgfk-gdg-top-all clear">
        <div class="gdgfk-gdg-top-all-text">下单成功</div>
        <div class="gdgfk-gdg-top-all-text gdgfk-gdg-top-all-text1">付款中...</div>
        <div class="gdgfk-gdg-top-all-text">付款成功</div>
      </div>
    </div>
    <div style="background: #ffffff;">
     <div class="gdgzf-content-wrap">
       <div class="gdgzf-content-al">
         公司名称：<span>上海钢猫电子商务有限公司</span>
       </div>
       <div class="gdgzf-content-al">
         开户银行：<span>中国工商银行股份有限公司上海市普陀支行</span>
       </div>
       <div class="gdgzf-content-al">
         银行账号：<span>1001 3235 0930 0026 277</span>
       </div>
       <div class="gdgzf-content-all clear">
          <div class="gdgzf-content-all-left">
            电子合同：
            <span class="gdgzf-content-all-left1" @click="gx1"><img src="../denglu/images/gx.png" alt="" v-if="gx"></span>同意
          </div>
          <div class="gdgzf-content-all-right">
            查看 <img src="./images/wddd.png" alt="" height="12px">
          </div>
       </div>
       <div class="gdgzf-content-all clear">
         <div class="gdgzf-content-all-left">
           需付款
         </div>
         <div class="gdgzf-content-all-right gdgzf-content-all-right1">
           ￥230337.00
         </div>
       </div>
       <div class="gdgzf-content-all clear">
         <div class="gdgzf-content-all-left">
           银行水单：
           <span class="gdgzf-content-all-left11"><img src="./images/xj.png" alt="" height="27px"></span>
           <span class="gdgzf-content-all-left111">点击上传银行水单以供查验</span>
         </div>

       </div>
       <div class="gdgzf-content-all clear">
         <div class="gdgzf-content-all-left">
           留言：
         </div>
        <div class="gdgzf-content-text">
          <input type="text">
        </div>
       </div>
       <div class="gdgzf-content-all clear">
         <div class="gdgzf-content-all-left">
           联系人：
         </div>
         <div class="gdgzf-content-text1">
           <input type="text">
         </div>
       </div>
       <div class="gdgzf-content-all clear">
         <div class="gdgzf-content-all-left">
           联系电话：
         </div>
         <div class="gdgzf-content-text1">
           <input type="text">
         </div>
       </div>
     </div>
    </div>
    <div class="ddtz-footer">提交</div>
  </div>
</template>

<script>
export default {
  name: 'wdpj',
  data(){
    return{
      gx:false,
    }
  },
  methods:{
    gx1(){
        this.gx=!this.gx;
    }
  }
}
</script>

