<template>
  <div class="wdqg-xxqg">
    <transition name="fade">
      <div  v-if="tc" class="sq-bk"></div>
    </transition>
    <transition name="fade">
      <div v-if="tc" class="lxkf-wrap">
        <div class="lxkf-top">客服电话</div>
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
          <router-link to="/wdqg"><img src="../denglu/images/jiantou.png" width="9px "></router-link>
        </div>
        详细求购
      </div>
    </div>
    <div v-if="xorder.type==2" class="wdqg-xxqg-content-wrap">
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">产品名称:</div>
        <span>{{xorder.product_title}}</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">材质要求:</div>
        <span>合金钢</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">规格要求:</div>
        <span>{{xorder.specification}}</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">数量:</div>
        <span>{{xorder.quantity}}</span></div>
      <div class="wdqg-xxqg-content-all1 clear">
        <div class="wdqg-xxqg-content-all1-left">照片：</div>
        <div class="wdqg-xxqg-content-all1-right">
          <img :src="'http://m.gangmao.biz/'+JSON.parse(xorder.img_urls)[0]" alt="" height="45px" width="80px">
        </div>
      </div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">备注:</div>
        <span>{{xorder.mem}}</span>
      </div>

      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">收货人:</div>
        <span>{{xorder.userid}}</span>
      </div>

      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">联系方式:</div>
        <span>{{xorder.cellphone}}</span>
      </div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">收货地址:</div>
        <span>{{xorder.address}}</span>
      </div>
    </div>
    <div class="wdqg-xxqg-content-wrap" v-else>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">手机号码:</div>
        <span>{{xorder.cellphone}}</span>
      </div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">文字说明:</div>
        <span>{{xorder.mem}}</span></div>
      <div class="wdqg-xxqg-content-all clear">
        <div class="wdqg-xxqg-content-all1-left">语音说明:</div>
        <span>---------</span></div>
    </div>

    <div class="wdqg-xxqg-content-wrap wdqg-xxqg-content-wrap4">
      <p class="wdqg-xxqg-content-te">
        状态：<span>{{xorder.status==1?"待处理":"已处理"}}</span>
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
        xorder:[]
      }
  },
    created:function () {
        this.get_xxqg()
        console.log(this.xorder)
    },
    methods: {
   tcc(){
      this.tc=true;
    },
    kf1(){
      this.tc=false;
    },
    get_xxqg(){
        var id=this.$route.query.xg;
        this.xorder=id
    }

  }
}
</script>

