<template>
  <div class="zhye-wrap">
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

    <div class="denglu-top-wrap">
      <div class="denglu-top1"><div class="qunr-fx1">
        <router-link to="/wdzc" class="">
          <img src="../denglu/images/jiantou.png" width="9px ">
        </router-link></div>
      账户余额
      <div class="qunr-fx zhye-tk" @click="kf">
       退款
      </div>
    </div>
    </div>
     <div class="zhye-top-wrap">
        <div class="zhye-top-zje">总金额（<span>元</span>）</div>
       <p class="zhye-top-je"><span  v-if="sc2">￥ <span>{{mon.amount}}</span></span><span v-if="sc1">****</span><img src="./images/mac.png" alt="" height="16px" v-if="sc2" @click="scb">
         <img src="./images/man.png" alt="" height="16px" v-if="sc1" @click="sca"></p>
     </div>

    <div class="zhye-zjmx-wrap">
      <div class="zhye-zjmx-all clear">
        <div class="zhye-zjmx-left">
          <img src="./images/mon.png" alt="" height="16px">
          <span>资金明细</span>
        </div>
        <div class="zhye-zjmx-right">
          <img src="./images/sx.png" alt="" height="16px">
          <span @click="tm1">筛选</span>
        </div>
      </div>
    </div>
    <transition name="fade">
    <div v-if="tm"  class="zhye-sx-all clear">
      <div class="zhye-sx-all-left" :class="{ 'zhye-sx-all-bk': zhyesxallbka }" @click="zhyesxallbkb">
        全部
      </div>
      <div class="zhye-sx-all-left" :class="{ 'zhye-sx-all-bk': zhyesxallbka1 }" @click="zhyesxallbkb1">
        消费
      </div>
      <div class="zhye-sx-all-left" :class="{ 'zhye-sx-all-bk': zhyesxallbka2 }" @click="zhyesxallbkb2">
        转账
      </div>
    </div>
    </transition>
    <transition name="fade">
    <div v-if="tm" class="tm"></div>
    </transition>
    <div v-for="item in yemx" class="wdjf-content-wrap">
      <div class="wdjf-content clear">
        <div class="wdjf-content-left">
          {{item.subject}}
          <p>{{item.created_at}}</p>
        </div>
        <div class="wdjf-content-right">
          {{item.amount}}
          <p>{{item.amount}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'zhye',
  data(){
      return{
        sc2:true,
        sc1:false,
        tc:false,
        zhyesxallbka1:false,
        tm:false,
        zhyesxallbka:true,
        zhyesxallbka2:false,
        mon:'',
        yemx:[]
      }
  },
    created:function () {
      this.get_ye()
    },
  methods: {
    scb(){
      this.sc1=true;
      this.sc2=false;
    },
    sca(){
      this.sc2=true;
      this.sc1=false;
    },
    kf(){
      this.tc=true;
    },
    kf1(){
      this.tc=false;
    },
      tm1(){
          this.tm=!this.tm;
      },
    zhyesxallbkb(){
      this.zhyesxallbka=true;
      this.zhyesxallbka1=false;
      this.zhyesxallbka2=false;
      this.get_ye_mx();
      this.tm=!this.tm;
    },
    zhyesxallbkb1(){
      this.zhyesxallbka1=true;
      this.zhyesxallbka=false;
      this.zhyesxallbka2=false;
      this.get_ye_mx(1);
      this.tm=!this.tm;
    },
    zhyesxallbkb2(){
        this.zhyesxallbka2=true;
        this.zhyesxallbka=false;
        this.zhyesxallbka1=false;
        this.get_ye_mx(2);
        this.tm=!this.tm;
    },

    get_ye(){
        this.$http.get("/v1/user-balances?suppress_response_code=1",
        {
            headers:{
                "Authorization":"Bearer "+this.token,
                "userid":"26"
            }
        },
        {
            emulateJSON:true
        }).then((response)=>{

            this.$set(this,'mon',response.data.data[0])
            this.get_ye_mx()
        })
    },
    get_ye_mx(k=''){
       this.$http.get("/v1/user-balance-logs?page=1&suppress_response_code=1",
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
            this.$set(this,'yemx',response.data.data);
       })
    }
  }
}
</script>

