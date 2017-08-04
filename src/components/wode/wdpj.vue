<template>
  <div class="wdpj-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wode"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        我的评价
      </div></div>
    <div v-for="item in comment" class="wdpj-all">
    <div class="wdpj-content-wrap">
     <div class="wdpj-content">
       <div class="wdpj-content-top clear">
          <div class="wdpj-content-top-left">
            <img :src="'http://m.gangmao.biz/'+item.imgurl" alt="">
          </div>
          <div class="wdpj-content-top-right">
            {{item.title}}
          </div>
       </div>
       <div class="wdpj-content-con">
         {{item.comment}}
       </div>
       <div v-if="item.imgs.length<5" class="cpxq-pingjia-con-img clear">

       </div>
       <div v-else>
         <img v-for="tp in JSON.parse(item.imgs)" :src="'http://m.gangmao.biz/'+tp" alt="" width="40px" style="margin:5px 12px 0px 0px " height="40px" />
       </div>
       <div class="wdpj-time">
         {{item.created_at}}
       </div>
     </div>
    </div>
   </div>

  </div>
</template>

<script>
export default {
  name: 'wdpj',
  data(){
     return {
         comment:{}
     }
  },
  created:function () {
    this.get_comm()
  },
  methods:{
      get_comm(){
          this.$http.get("/v1/product-comments?page=2&suppress_response_code=1",
          {
            headers:{
                "Authorization":"Bearer "+this.token,
                "userid":"26"
            }
          },
          {
              emulateJSON:true
          }).then((response)=>{
              this.$set(this,"comment",response.data.data)
          })
      }
  }
}
</script>

