<template>
  <div class="wdjf-wrap jfdh-wrap">
    <div class="denglu-top-wrap wdjf-top">
      <div class="denglu-top1"><div class="qunr-fx1">
        <router-link to="/wdjf " class="">
          <img src="../denglu/images/jiantou.png" width="9px ">
        </router-link></div>
        积分兑换
        <div class="qunr-fx zhye-tk">
          使用规则
        </div>
      </div>
    </div>
    <div class="zhye-top-wrap">
      <div class="zhye-top-zje">总积分</div>
      <p class="zhye-top-je"><img src="./images/wdjfjf.png" alt="" height="16px"> <span>{{this.$route.query.jid}}分</span>
      </p>
    </div>

    <div v-for="item in coup" class="jfdh-content-wrap">
      <div class="jfdh-content-all clear">
        <div class="fdh-content-left clear">
          <img :src="'http://m.gangmao.biz/'+item.icon" alt="" width="60px" height="60px">
          <div class="fdh-content-left-con">
            <p>{{item.name}}</p>
            <div>￥{{item.amount}}</div>
            <div>所需积分：<span>{{item.credit}}</span></div>
          </div>
        </div>
        <div class="fdh-content-right">兑换</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
        coup:{}
    }
  },
  created:function () {
      this.get_dh()
  },
  methods:{
      get_dh(){
          this.$http.get("/v1/metas/creditMall?suppress_response_code=1",
          {
              headers:{
                  "Authorization":"Bearer "+this.token,
              }
          },
          {
              emulateJSON:true
          }).then((response)=>{
              this.$set(this,'coup',response.data.data)
          })
      }
  }
}
</script>

