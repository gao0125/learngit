<template>
  <div class="wdqg-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div @click="$router.back(-1)">
          <img src="../denglu/images/jiantou.png" width="9px ">
        </div>
        申请退款
      </div>
    </div>
    <div class="sqtk-content-wrap">
      <div class="sqtk-content-top-wrap">
        退款原因 <span>*</span>
      </div>
      <div class="sqtk-content-con"><span>{{ref.reason}}</span></div>
    </div>
    <div class="sqtk-content-wrap">
    <div class="sqtk-content-top-wrap">
      退款金额 <span>*</span>
    </div>
    <div class="sqtk-content-con"><span>{{ref.num}}</span></div>
  </div>
    <div class="sqtk-content-wrap">
      <div class="sqtk-content-top-wrap">
        退款说明 <span>*</span>
      </div>
      <div class="sqtk-content-con1"><span>{{ref.explain}}</span></div>
    </div>
    <div style="margin-top: 33px" class="sqtk-content-wrap">
      <div class="sqtk-content-con">
        <img style="margin-right: 15px" v-for="item in JSON.parse(ref.imgs)" :src="'http://m.gangmao.biz/'+item" width="70px" height="70px" />
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
          var shid=String(this.$route.query.shid);
          this.$http.get("/v1/order-refunds?suppress_response_code=1",
          {
              headers:{
                  "Authorization":"Bearer "+this.token,
                  "userid":"26",
                  "orderid":shid
              }
          },
          {
              emulateJSON:true
          }).then((response)=>{
              this.ref=response.data.data[0]
          })
      }
  }
}
</script>

