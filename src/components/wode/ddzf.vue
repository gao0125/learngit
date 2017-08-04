<template>
  <div class="wode-wddd-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wddd"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
         订单支付
      </div></div>
     <div class="wode-ddzf-top-wrap">
         <div class="wode-ddzf-top clear">
           <div class="wode-ddzf-top-left">
             订单金额
           </div>
           <div class="wode-ddzf-top-right">
             100.00元
           </div>
         </div>
     </div>
    <div class="wode-ddzf-top-wrap1">
      <div class="wode-ddzf-top clear">
        <div class="wode-ddzf-top-left">
          支付比例
        </div>
      </div>
    </div>
    <div class="wode-ddzf-zfbl-wrap clear">
      <div class="wode-ddzf-zfbl" :class="{ 'ddzf': ddzf1 }" @click="ddzf11"><img src="./images/zfdh.png" alt="" height="12px" v-if="zfdh1">金额支付</div>
      <div class="wode-ddzf-zfbl" :class="{ 'ddzf': ddzf2 }" @click="ddzf22"><img src="./images/zfdh.png" alt="" height="12px" v-if="zfdh2">承诺金支付</div>
      <div class="wode-ddzf-zfbl" :class="{ 'ddzf': ddzf3 }" @click="ddzf33"><img src="./images/zfdh.png" alt="" height="12px" v-if="zfdh3">最低30%</div>
    </div>
    <div class="wode-ddzf-top-wrap2">
      <div class="wode-ddzf-top clear">
        <div class="wode-ddzf-top-left">
          支付方式
        </div>
      </div>
    </div>

    <div class="wode-ddzf-content-wrap">
       <div class="wode-ddzf-content-all clear">
         <div class="wode-ddzf-content-left clear">
            <div class="wode-ddzf-content-left-le">
              <img src="./images/ico_kj.png" alt="">
            </div>
            <div class="wode-ddzf-content-left-ri">
              <p class="wode-ddzf-content-left-text">余额支付</p>
              <p class="wode-ddzf-content-left-tex">钢猫余额支付服务</p>
            </div>
         </div>
         <div class="wode-ddzf-content-right" @click="dui11">
           <img src="../denglu/images/gx.png" alt="" v-if="dui">
         </div>
       </div>
    </div>
    <div class="wode-ddzf-content-wrap">
      <div class="wode-ddzf-content-all clear">
        <div class="wode-ddzf-content-left clear">
          <div class="wode-ddzf-content-left-le">
            <img src="./images/ico_wx.png" alt="">
          </div>
          <div class="wode-ddzf-content-left-ri">
            <p class="wode-ddzf-content-left-text">微信支付</p>
            <p class="wode-ddzf-content-left-tex">微信安全支付</p>
          </div>
        </div>
        <div class="wode-ddzf-content-right" @click="dui22">
          <img src="../denglu/images/gx.png" alt="" v-if="dui1">
        </div>
      </div>
    </div>
    <div class="wode-ddzf-content-wrap">
      <div class="wode-ddzf-content-all clear">
        <div class="wode-ddzf-content-left clear">
          <div class="wode-ddzf-content-left-le">
            <img src="./images/ico_zfb.png" alt="">
          </div>
          <div class="wode-ddzf-content-left-ri">
            <p class="wode-ddzf-content-left-text">支付宝支付</p>
            <p class="wode-ddzf-content-left-tex">支付宝安全支付</p>
          </div>
        </div>
        <div class="wode-ddzf-content-right" @click="dui33">
          <img src="../denglu/images/gx.png" alt="" v-if="dui2">
        </div>
      </div>
    </div>
    <router-link to="/gdgfk">
    <div class="wode-ddzf-content-wrap">
      <div class="wode-ddzf-content-all clear">
        <div class="wode-ddzf-content-left clear">
          <div class="wode-ddzf-content-left-le">
            <img src="./images/gdgzf.png" alt="">
          </div>
          <div class="wode-ddzf-content-left-ri">
            <p class="wode-ddzf-content-left-text">公对公付款</p>
            <p class="wode-ddzf-content-left-tex">提交银行付款水单</p>
          </div>
        </div>
        <div class="wode-ddzf-content-right" @click="dui44">
          <img src="../denglu/images/gx.png" alt="" v-if="dui3">
        </div>
      </div>
    </div>
    </router-link>
    <p class="wode-ddzf-content-text">*承诺金有效期为24小时，预期未继续付款，系统将视为自动放弃货物，承诺金将
    不予退还</p>
    <div class="ddtz-footer">确定</div>
  </div>
</template>

<script>
export default {
  name: 'wdpj',
  data(){
      return{
        zfdh1:true,
        zfdh2:false,
        zfdh3:false,

        ddzf1:true,
        ddzf2:false,
        ddzf3:false,

        dui:true,
        dui1:false,
        dui2:false,
        dui3:false,
      }
  },
  methods:{
    ddzf11(){
        this.ddzf1=true;
        this.ddzf2=false;
        this.ddzf3=false;
        this.zfdh1=true;
        this.zfdh2=false;
        this.zfdh3=false;
    },
    ddzf22(){
      this.ddzf2=true;
      this.ddzf1=false;
      this.ddzf3=false;
      this.zfdh2=true;
      this.zfdh1=false;
      this.zfdh3=false;
    },
    ddzf33(){
      this.ddzf3=true;
      this.ddzf1=false;
      this.ddzf2=false;
      this.zfdh3=true;
      this.zfdh1=false;
      this.zfdh2=false;
    },
    dui11(){
          this.dui=true,
          this.dui1=false;
          this.dui2=false;
          this.dui3=false;
    },
    dui22(){
      this.dui1=true;
        this.dui=false;
        this.dui2=false;
        this.dui3=false;
    },
    dui33(){
      this.dui2=true;
        this.dui=false;
        this.dui1=false;
        this.dui3=false;
    },
    dui44(){
      this.dui3=true;
        this.dui=false;
        this.dui1=false;
        this.dui2=false;
    }

  }
}
</script>

