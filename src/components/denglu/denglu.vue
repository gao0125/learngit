<template>
  <div class="denglu-wrap" v-if="denglu">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div>
          <router-link to="/wode"> <img src="./images/jiantou.png" width="9px "></router-link>
        </div>
        登录
      </div>
    </div>
    <div class="zhanghao">
      <span>账号</span>
      <input type="text" ref="username"  v-model="username" placeholder="请输入账号">
    </div>
    <div class="mima">
      <span>密码</span>
      <input type="text" ref="password" v-model="password" placeholder="请输入密码">
      <img src="./images/mima.png" alt="" height="14px">
    </div>
    <div class="zc-zh-wrap">
      <div class="zc">
        <router-link to="/zc">注册</router-link>
      </div>
      <div class="zh">
        <router-link to="/zhmm">找回密码</router-link>
      </div>
    </div>
    <div @click="login()" class="dl">
     登录
    </div>
    <div class="weixin-wrap">

      <div class="wx">
        <router-link to="/lhdl"><img src="./images/wx.png" height="71px" alt=""></router-link>
      </div>
      <div class="qq">
        <router-link to="/lhdl"><img src="./images/QQ.png" height="71px" alt=""></router-link>
      </div>
    </div>
  </div>

</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
//    import {setCookie,getCookie} from '../../assets/js/cookie.js'
  export default {
    name: 'denglu',
    data() {
      return {
        denglu: true,
          username: '',
          password: '',
      }
    },
    created:function(){
//       this.getList();
    },
//      mounted(){
//        /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
//          if(getCookie('username')){
//              this.$router.push('/')
//          }
//      },
    methods:{

        login:function () {
            var u_pattern=/^\S{3,20}$/g
            var p_pattern=/^\S{6,20}$/g
            if(!u_pattern.test(this.username)||!p_pattern.test(this.password)){
                alert("请完善信息");
            }else{
                var a=this.username+":"+this.password;
                this.$http.get('/v1/user-logins/loginname='+this.username+'?loginType=2&suppress_response_code=1',
              {
                headers:{
                    "Authorization":"Bearer 08b40c663eec8cb53090a9381c4d3e89_$1",
                    "login":a
                }
              },
              {
                  emulateJSON : true
              })
              .then((response) => {
//                    console.log(response.data)
                  if(response.data.success){
////                      setCookie('username',this.username,1000*60)
//                      setCookie('userid',response.data.data.id,1000*60)
//                      setTimeout(function(){
//                          this.$router.push({path: '/'})
//                      }.bind(this),1000)
                      try {
                          if(this.$route.query.redirect){
                              let url =decodeURIComponent(this.$route.query.redirect)
                              this.$router.push({path: url});
                          }else{
                              this.$router.push({path: '/'});
                          }
                      }catch(err){
                          this.$router.push({path: '/'});
                      }
                  }else{
                      alert(response.data.data.message);
                  }
              })
            }
        },
//      xgmm: function() {
//          this.$http.get('/v1/cata-filters',
//              {
//                headers:{"Authorization":"Bearer 06e36ff714f60b6a025ca6f4378fbe32_$1","cataid":"1"}
//              },
//              {
//                  emulateJSON : true
//              })
//              .then((response) => {
//                  this.$set(this, 'userlist', response.data)
//                  this.userlist = response.data
//
//                  console.log(response.data[0]);
//              })
//              .catch(function(response) {
//                  console.log(response)
//              })
//      },
//        sc: function() {
//            this.$http.delete('/v1/orders/13?suppress_response_code=1',
//
//                {
//
//                    headers:{"Authorization":"Bearer 90711b3ee4eb8543dd9ba3afa92fe9d7_$1","userid":"4","id":"13"}
//                },
//                {
//                    emulateJSON : true
//                })
//                .then((response) => {
//                    this.$set(this, 'userlist', response.data)
//                    this.userlist = response.data
//
//                    console.log(response.data[0]);
//                })
//                .catch(function(response) {
//                    console.log(response)
//                })
//        }
    }

  }

</script>
<style>
  @import "denglu.css";
</style>

