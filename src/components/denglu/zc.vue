<template>
  <div class="zc-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div>
          <router-link to="/denglu"><img src="./images/jiantou.png" width="9px "></router-link>
        </div>
        钢猫注册
      </div>
    </div>
    <div class="gmzc">
      <span class="gmzc-phon"><img src="./images/phon.png" height="14.5px" alt=""></span>
      <input type="text" placeholder="请输入手机号">
      <span class="hqyzm" @click="yzm">获取验证码</span>
    </div>
    <div class="gmzc-1">
      <span class="gmzc-phon"><img src="./images/ys.png" height="14.5px" alt=""></span>
      <input type="text" placeholder="请输入验证码">
    </div>
    <div class="gmzc-1">
      <span class="gmzc-phon gmzc-phon-1"><img src="./images/suo.png" height="11" alt=""></span>
      <input type="text" placeholder="请输入密码">
    </div>
    <div class="zc-agree">
     <span class="agree-yuan" @click="gx">
       <img src="./images/gx.png" height="13px" width="13px" alt="" v-if="gx1">
     </span>
      <span class="zc-agree1"><span class="zc-agree1-tex">同意</span>
      <span class="zc-agree1-text">钢猫用户注册协议</span>
      </span>
    </div>
    <div class="zc-zc">注册</div>
  </div>

</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
    export default {
        name: 'zc',
        data() {
            return {
                gx1: false
            }
        },
//    created:function(){
//          this.yzm();
//    },
        methods: {
//      gx: function () {
//        this.gx1 = !this.gx1
//      },
            yzm:function()
            {
                this.$http.post('/v1/phone-captchas?suppress_response_code=1',
                    {
                        data:{
                            "cellphone":"15515973301"
                        },
                        headers:{
                            "Authorization":"6386667b5d7c3d85f152c885de7667c8_$1"
                        }
                    },
                    {
                        emulateJSON : true
                    })
                    .then((response) => {
                        this.$set(this, 'userlist', response.data)
                        this.userlist = response.data
                        console.log(response.data[0]);
                    })
                    .catch(function(response) {
                        console.log(response)
                    })
            }
        }
    }

</script>
<style>
  @import "denglu.css";
</style>

