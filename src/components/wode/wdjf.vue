<template>
  <div class="wdjf-wrap">
    <div class="denglu-top-wrap wdjf-top">
      <div class="denglu-top1"><div class="qunr-fx1">
        <router-link to="/wdzc" class="">
          <img src="../denglu/images/jiantou.png" width="9px ">
        </router-link></div>
        我的积分
        <div class="qunr-fx zhye-tk">
          兑换记录
        </div>
      </div>
    </div>
    <div class="zhye-top-wrap">
      <div class="zhye-top-zje">总积分</div>
      <p class="zhye-top-je"><img src="./images/wdjfjf.png" alt="" height="16px"> <span>{{cred.amount}}分</span>
        <span class="dh"><router-link :to="{path:'/jfdh',query:{jid:cred.amount}}">兑换</router-link></span>
       </p>
    </div>

    <div class="zhye-zjmx-wrap clear">
      <div class="zhye-zjmx-all">
        <div class="zhye-zjmx-left">
          <img src="./images/wdjf-mx.png" alt="" height="16px">
          <span>资金明细</span>
        </div>
        <div class="zhye-zjmx-right">
          <img src="./images/wdjfsx.png" alt="" height="16px">
          <span @click="tm1">筛选</span>
        </div>
      </div>
    </div>
    <div v-for="items in jfmx" class="wdjf-content-wrap">
      <div class="wdjf-content clear">
        <div class="wdjf-content-left">
          {{items.subject}}
          <p>{{items.created_at}}</p>
        </div>
        <div class="wdjf-content-right">
          {{items.amount}}
          <p>{{items.amount}}</p>
        </div>
      </div>
    </div>
    <div v-if="tm" class="wdjf-sc-wrap clear">
      <div class="wdjf-sc-all" :class="{ 'wdjf-sc-all-bk': zhyesxallbka }" @click="zhyesxallbkb">全部</div>
      <div class="wdjf-sc-all" :class="{ 'wdjf-sc-all-bk': zhyesxallbka1 }" @click="zhyesxallbkb1">积分获得</div>
      <div class="wdjf-sc-all" :class="{ 'wdjf-sc-all-bk': zhyesxallbka2 }" @click="zhyesxallbkb2">积分扣除</div>
    </div>
    <transition name="fade">
      <div v-if="tm" class="tm">

      </div>
    </transition>
  </div>

</template>

<script>
export default {
  name: 'wdjf',
  data(){
      return{
        zhyesxallbka:true,
        zhyesxallbka1:false,
        zhyesxallbka2:false,
        tm:false,
          jfmx:{},
          cred:[]
      }
  },
    created:function () {
        this.get_jf()
    },
  methods: {
    tm1(){
      this.tm = !this.tm;
    },
        zhyesxallbkb(){
          this.zhyesxallbka=true;
          this.zhyesxallbka1=false;
          this.zhyesxallbka2=false;
          this.get_jf_mx();
            this.tm = !this.tm;
        },
        zhyesxallbkb1(){
          this.zhyesxallbka1=true;
          this.zhyesxallbka=false;
          this.zhyesxallbka2=false;
          this.get_jf_mx(1)
            this.tm = !this.tm;
        },
    zhyesxallbkb2(){
      this.zhyesxallbka2=true;
      this.zhyesxallbka=false;
      this.zhyesxallbka1=false;
      this.get_jf_mx(2);
        this.tm = !this.tm;
    },
      get_jf(){
          this.$http.get("/v1/user-credits?suppress_response_code=1",
              {
                  headers:{
                      "Authorization":"Bearer "+this.token,
                      "userid":"26"
                  }
              },
              {
                  emulateJSON:true
              }).then((response)=>{
              console.log(response.data.data[0])
              this.$set(this,'cred',response.data.data[0]);
              this.get_jf_mx()
          })
      },
      get_jf_mx(k=''){
          this.$http.get("/v1/user-credit-logs?page=1&suppress_response_code=1",
              {
                  headers:{
                      "Authorization":"Bearer "+this.token,
                      "userid":"26",
                      "type":String(k)
                  }
              },
              {
                  emulateJSON:true
              }).then((response)=>{
              this.$set(this,'jfmx',response.data.data);
          })
      },

  }
}
</script>

