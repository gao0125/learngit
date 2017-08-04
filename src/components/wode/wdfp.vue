<template>
  <div class="wdqg-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wode"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        我的发票
      </div></div>
    <!--<router-link v-for="(item,index) in ref" @click="rt(index)" to="/kpxq">-->
    <div v-for="(item,index) in ref" @click="rt(item)" class="wdqg-content-wrap wdfp-all">
       <div class="wdqg-content-all clear">
         <div class="wdqg-content-all-left">
           <div class="wdqg-content-all-left-top">
             订单号： <span>{{item.no}}</span>
           </div>
           <div class="wdqg-content-all-left-top">
            公司名称: <span>{{item.company_name}}</span>
           </div>
           <div class="wdqg-content-all-left-top">
             开票金额: <span>￥<span>{{item.price}}</span></span>
           </div>
         </div>
         <div class="wdqg-content-all-right wdfp-time">
           <p class="wdqg-content-all-right-top">{{item.status==0?'已提交':(item.status==1?'已开票':'开票失败')}}</p>
           <div class="wdqg-content-all-right-top1">
             <p>{{item.updated_at}}</p>
           </div>
         </div>
       </div>
    </div>
  <!--</router-link>-->

  </div>
</template>

<script>
export default {
  name: 'wdqg',
  data(){
      return {
          ref:{}
      }
  },
  created:function () {
      this.get_ref()
  },
  methods:{
      get_ref(){
//          var shid=String(this.$route.query.shid);
          this.$http.get("/v1/order-invoices?page=1&suppress_response_code=1",
              {
                  headers:{
                      "Authorization":"Bearer "+this.token,
                      "userid":"26",
                  }
              },
              {
                  emulateJSON:true
              }).then((response)=>{
              this.ref=response.data.data

//              localStorage.setItem('name',JSON.stringify())
          })
      },
      rt(k){
          localStorage.setItem('name',JSON.stringify(k))
//          console.log((this.ref)[k])
          this.$router.push({path:'/kpxq'})
      }
  }
}
</script>

