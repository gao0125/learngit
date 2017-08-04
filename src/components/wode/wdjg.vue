<template>
  <div class="wdqg-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wode"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        我的加工订单
      </div></div>
    <router-link v-for="(item,index) in dat" :to="{path:'/jgddxq',query:{id:index,jdata:ddd}}"><div class="wdqg-content-wrap">
       <div class="wdqg-content-all clear">
         <div v-for="items in item.details" class="wdqg-content-all-left">
           <div class="wdqg-content-all-left-top">
             产品名称: <span>{{items.product_title}}</span>
           </div>
           <div class="wdqg-content-all-left-top">
             加工方式: <span v-for="fs in met" v-if="fs.id==items.m_process_methodid">{{fs.name}}</span>
           </div>

           <p class="wdqg-content-all-left-top1">提交时间 <span>{{item.updated_at}}</span></p>
         </div>
         <div class="wdqg-content-all-right">
           <p v-if="item.status==1" class="wdqg-content-all-right-top">待处理</p>
           <p v-else class="wdqg-content-all-right-top">已处理</p>
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
         met:{},
         ddd:''
     }
  },
  created:function () {
    this.get_jg()
  },
  methods:{
      get_jg(){
          this.$http.get("/v1/product-processes?page=1&suppress_response_code=1",
          {
              headers:{
                  "Authorization":"Bearer "+this.token,
                  "userid":"26"
              }
          },
          {
              emulateJSON:true
          }).then((response)=>{
              this.get_jg_method()
              this.dat=response.data.data
              localStorage.setItem("name",JSON.stringify(this.dat))
              this.ddd=localStorage.name
          })
      },
      get_jg_method(){
          this.$http.get("/v1/metas/processMethod?suppress_response_code=1",
              {
                  headers:{
                      "Authorization":"Bearer "+this.token,
                  }
              },
              {
                  emulateJSON:true
              }).then((response)=>{
              this.met=response.data.data
          })
      },

  }
}
</script>

