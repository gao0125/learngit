<template>
    <div class="shezhi-wrap">
      <div class="shezhi-tc">
        <div class="zhezhao" v-if="kzz"></div>
        <div class="qcbdhc-wrap" v-if="khc">
     <div class="qcbdhc-text">确定清除本地缓存？</div>
      <div class="qcbdhc-tex clear">
        <div class="qcbdhc-tex-le" @click="gtc">取消</div>
        <div class="qcbdhc-tex-ri">确定</div>
      </div>
    </div>
        <div class="qcbdhc-wrap" v-if="khc1">
      <div class="qcbdhc-text">确定退出登录？</div>
      <div class="qcbdhc-tex clear">
        <div class="qcbdhc-tex-le" @click="gtc1">取消</div>
        <div class="qcbdhc-tex-ri" @click="tuichu">确定</div>
      </div>
    </div>
      </div>



    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wode"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
      更多设置
    </div></div>
    <div class="shezhi-all">
      <div class="shezhi-all-text clear">
       <p>推送消息设置</p>
        <img src="./images/wddd.png" alt="" height="12px">
      </div>
    </div>
    <div class="shezhi-all">
      <div class="shezhi-all-text shezhi-all-tex clear">
        <p>非wifi环境下手动下载图片</p>
        <img src="./images/kaiguan.png" alt="" height="30px" v-if="kai" @click="kaiguan">
        <img src="./images/kaiguan1.png" alt="" height="30px" v-if="guan" @click="kaiguan">
      </div>
    </div>
    <div class="shezhi-all" @click="kaitc">
      <div class="shezhi-all-text clear">
        <p>清除本地缓存</p>
       <div>4.43M</div>
      </div>
    </div>
   <router-link to="./yhfk"><div class="shezhi-all">
     <div class="shezhi-all-text clear">
       <p>用户反馈</p>
       <img src="./images/wddd.png" alt="" height="12px">
     </div>
   </div></router-link>
    <div class="shezhi-all">
      <div class="shezhi-all-text clear">
        <p>关于我们</p>
        <img src="./images/wddd.png" alt="" height="12px">
      </div>
    </div>
    <div class="zc-zc" @click="tcdl">退出登录</div>
    <p class="shezhi-now">当前版本 <span>1.0</span></p>
  </div>

</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  export default {
    name: 'wode',
    data(){
        return {
            guan:false,
            kai:true,
            kzz:false,
            khc:false,
            khc1:false,
        }
    },
  methods: {
    kaiguan: function () {
      this.kai =!this.kai;
      this.guan = !this.guan
    },
    kaitc:function () {
      this.kzz = true;
      this.khc = true
    },
    gtc:function () {
      this.kzz = false;
      this.khc = false
    },
    tcdl:function () {
      this.kzz = true;
      this.khc1 = true
    },
    gtc1:function () {
      this.kzz = false;
      this.khc1 = false
    },
    tuichu:function(){
        this.$router.back(-1)
    }
  }
  }

</script>
<style>
  @import "wode.css";
</style>

