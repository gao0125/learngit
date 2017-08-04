<template>
  <div class="wdqg-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wode"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        我的特制订单
      </div></div>
    <router-link v-for="item in dat" :to="{path:'/wdddtz',query:{tz:JSON.stringify(item)}}"><div class="wdqg-content-wrap">
      <div class="wdqg-content-all clear">
        <div class="wdqg-content-all-left">
          <div class="wdqg-content-all-left-top">
            订单描述: <span>{{item.desc}}</span>
          </div>
          <div class="wdqg-content-all-left-top">
            联系方式: <span>{{item.cellphone}}</span>
          </div>

          <p class="wdqg-content-all-left-top1">提交时间 <span>{{item.updated_at}}</span></p>
        </div>
        <div class="wdqg-content-all-right">
          <p class="wdqg-content-all-right-top">{{item.status==1?'待处理':'已处理'}}</p>
          <div class="wdqg-content-all-right-top1">
            <img src="./images/wdqg.png" alt="" height="20px">
            <p>查看详情</p>
          </div>
        </div>
      </div>
    </div></router-link>

  </div>
</template>

<script>
export default {
  name: 'wdqg',
  data(){
      return {
         dat:{},
      }
  },
  created:function () {
    this.get_tz()
  },
  methods:{
      get_tz(){
          this.$http.get("/v1/order-customs?page=1&suppress_response_code=1",
          {
              headers:{
                  "Authorization":"Bearer "+this.token,
                  "userid":"26"
              }
          },
          {
              emulateJSON:true
          }).then((response)=>{
              this.$set(this,'dat',response.data.data)

          })
      }
  }
}
</script>

