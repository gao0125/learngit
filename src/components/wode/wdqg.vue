<template>
  <div class="wdqg-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wode"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        我的求购
      </div></div>
    <router-link v-for="item in askBuy" :to="{path:'/xxqg',query:{xg:item}}"><div class="wdqg-content-wrap">
       <div class="wdqg-content-all clear">
         <div v-if="item.type==2" class="wdqg-content-all-left">
           <div class="wdqg-content-all-left-top">
             产品名称: <span>{{item.product_title}}</span>
           </div>
           <div class="wdqg-content-all-left-top">
             规格: <span>{{item.specification}}</span>
           </div>
           <div v-for="items in material" v-if="item.m_materialid==items.id" class="wdqg-content-all-left-top">
             材质要求: <span>{{items.name}}</span>
           </div>
           <p class="wdqg-content-all-left-top1">提交时间 <span>{{item.updated_at}}</span></p>
         </div>
         <div class="wdqg-content-all-left" v-else>
           <div class="wdqg-content-all-left-top">
             手机号码: <span>{{item.cellphone}}</span>
           </div>
           <div class="wdqg-content-all-left-top">
             文字说明: <span>{{item.mem}}</span>
           </div>
           <div class="wdqg-content-all-left-top">
             语言说明: <span style="color: red">播放</span>
           </div>
           <p class="wdqg-content-all-left-top1">提交时间 <span>{{item.updated_at}}</span></p>
         </div>
         <div class="wdqg-content-all-right">
           <p v-if="item.status==1" class="wdqg-content-all-right-top">待处理</p>
           <p v-if="item.status==2" style="color:#8e8e8e " class="wdqg-content-all-right-top">已处理</p>
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
          askBuy:{},
          material:[],
      }
  },
  created:function () {
      this.get_qg()
  },
  methods:{
      get_qg(){
          this.$http.get("/v1/demands?page=1&suppress_response_code=1",
          {
              headers:{
                  "Authorization":"Bearer "+this.token,
                  "userid":"26"
              }
          },
          {
              emulateJSON:true
          }).then((response)=>{
              this.$set(this,"askBuy",response.data.data)
              this.get_cz()
          })
      },
      get_cz(){
          this.$http.get("/v1/metas/material?suppress_response_code=1",
              {
                  headers:{
                      "Authorization":"Bearer "+this.token,
//                      "cataid":k
                  }
              },
              {
                  emulateJSON:true
              }).then((res)=>{
              this.$set(this,"material",res.data.data)
          })
      }

  }



}
</script>

