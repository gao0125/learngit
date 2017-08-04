<template>
  <div class="yhj-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wdzc"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        优惠券
      </div></div>
    <div class="yhj-top-wrap clear">
      <div class="yhj-top-text" :class="{ 'yhjtop-text': yhjtoptext }" @click="yhjtoptexta">未开始</div>
      <div class="yhj-top-text" :class="{ 'yhjtop-text': yhjtoptext1 }" @click="yhjtoptexta1">进行中</div>
      <div class="yhj-top-text" :class="{ 'yhjtop-text': yhjtoptext3 }" @click="yhjtoptexta3">已使用</div>
      <div class="yhj-top-text" :class="{ 'yhjtop-text': yhjtoptext2 }" @click="yhjtoptexta2">已失效</div>
    </div>
    <div class="yhj-kwt" v-if="coupo.length==0">
      <img src="./images/yhjkwt.png" alt="" width="100%">
    </div>
    <div class="yhj-kwt" >
      {{coupo.name}}
      时间
    </div>
  </div>
</template>

<script>
export default {
  name: 'yhj',
  data(){
      return{
        yhjtoptext:true,
        yhjtoptext1:false,
        yhjtoptext2:false,
        yhjtoptext3:false,
        yhjkwt:true,
          coupo:{}
      }
  },
    created:function () {
      this.get_yhq(0)
    },
  methods:{
    yhjtoptexta(){
        this.yhjtoptext=true;
        this.yhjtoptext1=false;
        this.yhjtoptext2=false;
        this.yhjtoptext3=false;
        this.get_yhq()
    },
    yhjtoptexta1(){
      this.yhjtoptext1=true;
      this.yhjtoptext=false;
      this.yhjtoptext2=false;
      this.yhjtoptext3=false;
      this.get_yhq(1)
    },
    yhjtoptexta2(){
      this.yhjtoptext2=true;
      this.yhjtoptext=false;
      this.yhjtoptext1=false;
      this.yhjtoptext3=false;
        this.get_yhq(3)
    },
    yhjtoptexta3(){
        this.yhjtoptext3=true;
        this.yhjtoptext=false;
        this.yhjtoptext1=false;
        this.yhjtoptext2=false;
        this.get_yhq(2)
    },
      get_yhq(k=0){
        this.$http.get("/v1/user-coupons?page=1&suppress_response_code=1",
        {
          headers:{
              "Authorization":"Bearer "+this.token,
              "userid":"26",
              "status":String(k)
          }
        },
        {
            emulateJSON:true
        }).then((response)=>{
            this.$set(this,"coupo",response.data.data)
        })
      }
  }

}
</script>

