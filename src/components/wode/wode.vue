<template>
  <div class="wode-wrap">
    <transition name="fade">
      <div  v-if="tc1" class="sq-bk"></div>
    </transition>
    <transition name="fade">
      <div  v-if="tc1" class="sqtc-con">
        <div class="sqtc-con-top clear">
          <div>
            <img src="../shequ/images/wechat.png" alt="" height="60">
            <p>微信好友</p>
          </div>
          <div>
            <img src="../shequ/images/pyq.png" alt="" height="60">
            <p>微信朋友圈</p>
          </div>
          <div>
            <img src="../shequ/images/qq.png" alt="" height="60">
            <p>QQ</p>
          </div>


          <div>
            <img src="../shequ/images/qqkj.png" alt="" height="60">
            <p>QQ空间</p>
          </div>
          <div>
            <img src="../shequ/images/yj.png" alt="" height="60">
            <p>邮件</p>
          </div>
          <div>
            <img src="../shequ/images/dx.png" alt="" height="60">
            <p>短信</p>
          </div>
        </div>
        <div class="sqtc-con-bottom" @click="xs">取消</div>
      </div>
    </transition>
    <transition name="fade">
      <div  v-if="tc" class="sq-bk"></div>
    </transition>
    <transition name="fade">
      <div v-if="tc" class="lxkf-wrap">
        <div class="lxkf-top">退款请联系钢猫客服</div>
        <div class="lxkf-top1">
          021-62672111
        </div>
        <div class="lxkf-top2 clear">
          <div class="lxkf-top2-left" @click="kf1">取消</div>
          <div class="lxkf-top2-right">呼叫</div>
        </div>
      </div>
    </transition>
       <div class="wode-top-wrap">
        <div class="wode-top-sz clear">
          <router-link to="/xiaoxi"><img src="./images/xx.png" alt="" height="17.5px"></router-link>
          <p><router-link to="/shezhi">设置</router-link></p>
        </div>
        <div class="wode-top-dl-wrap clear">
         <div class="wode-top-dl-left clear">
            <div class="wode-top-dl-left-img"><router-link to="/wodexinxi"><img src="./images/txkwt.png" alt="" height="68px"></router-link>
            <p>
               <router-link to="/denglu">登录</router-link>
              / <router-link to="/zc">注册</router-link>
            </p>
            </div>
           <div class="wode-top-dl-left-ri">
             <div class="wode-top-dl-left-ri-te1">用户账号昵称</div>
             <div class="wode-top-dl-left-ri-te2"><router-link to="/zjf"><img src="./images/ico_jfll.png" alt="" height="12px"><span>15886点</span></router-link></div>
             <div class="wode-top-dl-left-ri-te3"><router-link to="/gmhy"><img src="./images/yp.png" alt="" height="17px">白银会员</router-link></div>
           </div>
         </div>
         <div class="wode-top-dl-right clear"><router-link to="/rzgl"> <img src="./images/you.png" alt="" height="12.5px"><span>认证管理</span></router-link></div>
        </div>
      </div>
       <div class="wode-dd-wrap">
         <div style="background: #ffffff">

         <div class="wode-dd-top clear">
           <p>我的订单</p>
           <router-link to="/qbdd">
           <div>查看全部订单 <img src="./images/wddd.png" alt="" height="14px"></div>
           </router-link>
         </div>

         </div>
         <div style="height: 1px;width: 100%;  border-bottom: 1px solid #ebeaea;"></div>
         <div class="wode-dd-img-all clear">
           <router-link to="/wddd?s=1">
          <div class="wode-dd-img">
            <img src="./images/1_03.png" alt="" height="22px">
            <p>待付款</p>
          </div>
           </router-link>
           <router-link to="/wddd?s=2">
           <div class="wode-dd-img">
             <img src="./images/1_05.png" alt="" height="22px">
             <p>待结清</p>
           </div>
           </router-link>
           <router-link to="/wddd?s=4">
           <div class="wode-dd-img">
             <img src="./images/1_07.png" alt="" height="22px">
             <p>待提货</p>
           </div>
           </router-link>
           <router-link to="/wddd?s=5">
           <div class="wode-dd-img">
             <img src="./images/1_09.png" alt="" height="22px">
             <p>待收货</p>
           </div>
           </router-link>
           <router-link to="/wddd?s=9">
           <div class="wode-dd-img">
             <img src="./images/1_11.png" alt="" height="22px">
             <p>待评价</p>
           </div>
           </router-link>
         </div>
       </div>
       <div class="wode-all-wrap clear">
         <router-link to="/wdpj">
      <div class="wode-all">
        <img src="./images/wd_08.png" alt="" height="25px">
        <p>我的评价</p>
      </div>
         </router-link>
         <router-link to="/wdzc">
      <div class="wode-all">
        <img src="./images/wd_10.png" alt="" height="25px">
        <p>我的资产</p>
      </div>
         </router-link>
     <router-link to="/wdqg">
      <div class="wode-all">
        <img src="./images/wd_03.png" alt="" height="25px">
        <p>我的求购</p>
      </div>
     </router-link>
     <router-link to="/zhyaq">
      <div class="wode-all">
        <img src="./images/wd_05.png" alt="" height="25px">
        <p>账户与安全</p>
      </div>
     </router-link>
         <router-link to="/wdjg">
      <div class="wode-all">
        <img src="./images/wd_17.png" alt="" height="25px">
        <p>加工</p>
      </div>
         </router-link>
         <router-link to="/wdjy">
      <div class="wode-all">
        <img src="./images/wd_19.png" alt="" height="25px">
        <p>检验</p>
      </div>
         </router-link>
         <router-link to="/wdwl">
      <div class="wode-all">
        <img src="./images/wd_21.png" alt="" height="25px">
        <p>物流</p>
      </div>
         </router-link>
         <router-link to="/wdtz">
      <div class="wode-all">
        <img src="./images/wd_23.png" alt="" height="25px">
        <p>特制</p>
      </div>
         </router-link>

<router-link to="/scj">
      <div class="wode-all">
        <img src="./images/wd_28.png" alt="" height="25px">
        <p>收藏夹</p>
      </div>
</router-link>
         <router-link to="/wdfp">
      <div class="wode-all">
        <img src="./images/wd_30.png" alt="" height="25px">
        <p>开票</p>
      </div>
         </router-link>
         <router-link to="/wdhy">
      <div class="wode-all">
        <img src="./images/wd_32.png" alt="" height="25px">
        <p>好友</p>
      </div>
         </router-link>
         <router-link to="/wdzj">
      <div class="wode-all">
        <img src="./images/wd_33.png" alt="" height="25px">
        <p>足迹</p>
      </div>
         </router-link>


      <div class="wode-all" @click="lxkf1">
        <img src="./images/wd_k_03.png" alt="" height="25px">
        <p>推荐好友</p>
      </div>
      <div class="wode-all" @click="lxkf">
        <img src="./images/wd_k_05.png" alt="" height="25px">
        <p>联系客服</p>
      </div>
         <router-link to="/wdtk">
      <div class="wode-all">
        <img src="./images/sh.png" alt="" height="25px">
        <p>退货/售后</p>
      </div>
         </router-link>
    </div>
       <div class="wd-footer-bar-wrap clear">
         <router-link to="/shouye">
         <div class="wd-footer-bar">
           <div><img src="./images/sy@2x.png" alt="" height="21px"></div>
           <p>首页</p>
         </div>
         </router-link>
         <router-link to="/fenlei">
         <div class="wd-footer-bar">
           <div><img src="./images/ico_fenlei@2x.png" alt="" height="21px"></div>
           <p>分类</p>
         </div>
         </router-link>
           <router-link to="/shequ">
         <div class="wd-footer-bar">
           <div><img src="./images/sq@2x.png" alt="" height="21px"></div>
           <p>社区</p>
         </div>
           </router-link>
             <router-link to="/gwc">
         <div class="wd-footer-bar">
           <div><img src="./images/gwc@2x.png" alt="" height="21px"></div>
           <p>购物车</p>
         </div>
             </router-link>
        <div class="wd-footer-bar">
          <div><img src="./images/cur_mine@2x.png" alt="" height="21px"></div>
          <p>我的</p>
        </div>
       </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  export default {
    name: 'wode',
    data(){
        return{
            tc:false,
            tc1:false,
        }
    },
    methods: {
      lxkf(){
        this.tc=true;
      },
      kf1(){
        this.tc=false;
      },
      lxkf1(){
        this.tc1=true;
      },
      xs(){
        this.tc1=false;
      }
    }
  }
</script>
<style>
@import "wode.css";
</style>

