<template>
  <div class="wdqg-xxqg">
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
      <div class="denglu-top">
        <div>
          <router-link to="/wdjg"><img src="../denglu/images/jiantou.png" width="9px "></router-link>
        </div>
        加工订单详情
      </div>
    </div>
    <div class="wdqg-xxqg-content-wrap">
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">货物所在城市:</div>
        <span v-for="im in whouse" v-if="dat.warehouseid==im.id">{{im.warehouse_address}}</span>
      </div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">货物所在仓库:</div>
        <span v-for="im in whouse" v-if="dat.warehouseid==im.id">{{im.name}}</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">加工方式:</div>
        <span v-for="jg in met" v-if="dat.m_process_methodid==jg.id">{{jg.name}}</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">产品名称:</div>
        <span>{{dat.product_title}}</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">规格:</div>
        <p class="wdqg-xxqg-content-all1-right"><span>外径（mm）:{{dat.specification.split("*")[0]}}</span>
         <br> <span>壁厚（mm）:{{dat.specification.split("*")[1]}}</span></p>
      </div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">材质:</div>
        <span>{{dat.material}}</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">重量（吨）:</div>
        <span>{{dat.weight}}</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">包装:</div>
        <span>{{dat.package}}</span></div>
      <div class="wdqg-xxqg-content-all1 clear">
        <div class="wdqg-xxqg-content-all1-left">照片：</div>
        <div v-if="dat.imgurls" class="wdqg-xxqg-content-all1-right">
          <img :src="'http://m.gangmao.biz/'+dat.imgurls" alt="" height="45px" width="80px">

        </div>
        <div v-else class="wdqg-xxqg-content-all1-right">
          <img src="./images/cpxq-kwt.png" alt="" height="45px" width="80px">
        </div>
      </div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">备注:</div>
        <span>{{dat.mem}}</span>
      </div>



      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">联系电话:</div>
        <span>{{JSON.parse(this.$route.query.jdata)[this.$route.query.id].tel}}</span>
      </div>

    </div>
    <div class="wdqg-xxqg-content-wrap wdqg-xxqg-content-wrap4">
      <p class="wdqg-xxqg-content-te">
        状态：<span>{{JSON.parse(this.$route.query.jdata)[this.$route.query.id].status==1?'待处理':'已处理'}}</span>
      </p>

    </div>
    <div class="wdqg-xxqg-footer clear">
      <div class="wdqg-xxqg-footer-text wdqg-xxqg-footer-text1">取消申请</div>
      <div class="wdqg-xxqg-footer-text" @click="tcc">联系客服</div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'xxqg',
  data(){
      return{
        tc:false,
          dat:{},
        whouse:{},
        met:{}
      }
  },
  created:function () {
      this.get_warehouse()
      this.get_jg_method()
  },
  methods: {
   tcc(){
      this.tc=true;
    },
    kf1(){
      this.tc=false;
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

            this.dat=JSON.parse(this.$route.query.jdata)[this.$route.query.id]['details']['0']
            console.log(this.dat)
            console.log(this.dat.specification.split("*")[0])
        })
    },
    get_warehouse(){
        this.$http.get("/v1/metas/warehouse?suppress_response_code=1",
            {
                headers:{
                    "Authorization":"Bearer "+this.token,
                }
            },
            {
                emulateJSON:true
            }).then((response)=>{
            this.whouse=response.data.data
            console.log(this.whouse)
        })
    }
  }
}
</script>

