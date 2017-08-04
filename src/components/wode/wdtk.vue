<template>
  <div class="wdqg-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div>
          <router-link to="/wode"><img src="../denglu/images/jiantou.png" width="9px "></router-link>
        </div>
        退款/售后
      </div>
    </div>
    <div v-for="item in ref" class="wdtk-content-wrap">
      <div class="wdtk-content-top">
        <div class="wdtk-content-top-all clear">
          <div class="wdtk-content-top-left">订单号：{{item.no}}</div>
          <div class="wdtk-content-top-right">售后处理</div>
        </div>
      </div>
      <div v-for="items in item.orderDetails" class="wdtk-content-con clear">
         <div class="wdtk-content-con-left">
           <img :src="'http://m.gangmao.biz/'+items.imgurl" alt="">
         </div>
         <div class="wdtk-content-con-right">
           <div class="wdtk-content-con-right-top clear">
             <div class="wdtk-content-con-right-top-left">
               {{items.title}}
             </div>
             <div class="wdtk-content-con-right-top-right">
               ￥{{items.price}}/{{items.unit_name}}
             </div>
           </div>
           <div class="wdtk-content-con-right-top1 clear">
             <div class="wdtk-content-con-right-top-left1">
               {{JSON.parse(items.extra_info).specification_label}}
             </div>
             <div class="wdtk-content-con-right-top-right1">
               x{{items.num}}
             </div>
           </div>
           <div class="wdtk-content-con-right-top1 clear">
             <div class="wdtk-content-con-right-top-left1">
               {{items.standard}}
             </div>
           </div>
         </div>
      </div>
      <div class="wdtk-content-sf">
        <div class="wdtk-content-sf-all clear">
          <div class="wdtk-content-sf1">
            共{{item.total_quantity}}件商品 实付：￥{{item.total_price}}<span v-if="item.m_shippingid==2">（含运费￥{{item.shipping_fee}}元）</span><span v-else>（不含运费）</span>
          </div>
        </div>
      </div>
      <div class="wdtk-content-sf wdtk-content-sf4">
        <div class="wdtk-content-sf-all clear">
          <router-link :to="{path:'/sqtk',query:{shid:item.id}}">
          <div class="wdtk-cktk">
            查看退款
          </div>
          </router-link>
        </div>
      </div>
    </div>
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
          this.$http.get("/v1/orders?page=1&suppress_response_code=1",
              {
                  headers:{
                      "Authorization":"Bearer "+this.token,
                      "userid":"26",
                      "status":"12"
                  }
              },
              {
                  emulateJSON:true
              }).then((response)=>{
              this.ref=response.data.data
          })
      }
  }
}
</script>

