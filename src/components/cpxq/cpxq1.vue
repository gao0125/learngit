<template>
  <div class="cpxq-wrap">
    <transition name="fade">
      <div  v-if="tc" class="sq-bk"></div>
    </transition>
    <transition name="fade">
      <div  v-if="tc" class="sqtc-con">
        <div class="sqtc-con-top clear">
          <div>
            <img src="../shequ/images/wechat.png" alt="" height="60">
            <p>微信好友</p>
          </div>
          <div>
            <img src="../shequ/images/pyq.png" alt="" height="60">
            <p>微信朋友圈</p>
          </div>
          <div>
            <img src="../shequ/images/qq.png" alt="" height="60">
            <p>QQ</p>
          </div>


          <div>
            <img src="../shequ/images/qqkj.png" alt="" height="60">
            <p>QQ空间</p>
          </div>
          <div>
            <img src="../shequ/images/yj.png" alt="" height="60">
            <p>邮件</p>
          </div>
          <div>
            <img src="../shequ/images/dx.png" alt="" height="60">
            <p>短信</p>
          </div>
        </div>
        <div class="sqtc-con-bottom" @click="xs">取消</div>
      </div>
    </transition>
    <div class="cpxq-top-wrap">
      <div class="cpxq-top-all clear">
        <div class="cpxq-top-left">
          <router-link to="/shouye">
          <img src="../denglu/images/jiantou.png" alt="" width="9px">
          </router-link>
        </div>
        <ul class="cpxq-top-con clear">
          <li class="cpxq-top-con-text"  :class="{ 'cpxqsty': cpxqtop }" @click="navcx1">商品</li>
          <li class="cpxq-top-con-text"  :class="{ 'cpxqsty': cpxqtop1 }" @click="navcx2">详情</li>
          <li class="cpxq-top-con-text"  :class="{ 'cpxqsty': cpxqtop2 }" @click="navcx3">评价</li>
        </ul>
        <div class="cpxq-top-right">
          <img src="./images/share.png" alt="" height="16px" @click="tac">
        </div>
      </div>
    </div>


    <div v-if="cpxqcon">
    <swiper :options="swiperOption" ref="mySwiperA">
      <!-- 幻灯内容 -->
      <swiper-slide><img src="./images/cpxq-kwt.png" alt="" height="366px" width="100%"></swiper-slide>
      <swiper-slide><img src="./images/cpxq-kwt.png" alt="" height="366px" width="100%"></swiper-slide>
      <swiper-slide><img src="./images/cpxq-kwt.png" alt="" height="366px" width="100%"></swiper-slide>
      <swiper-slide><img src="./images/cpxq-kwt.png" alt="" height="366px" width="100%"></swiper-slide>
      <swiper-slide><img src="./images/cpxq-kwt.png" alt="" height="366px" width="100%"></swiper-slide>
      <!-- 以下控件元素均为可选 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-pagination1" slot="pagination1"></div>
    </swiper>

      <div class="cpxq-js-wrap">
        <p>
          {{pList.title}}
          {{pMaterial.name}}
          {{pList.production_tech}}
          {{pList.specification}}
          {{pList.standard}}
        </p>
        <div class="cpxq-js-text">￥ <span>{{pList.price}}/{{pList.unit_name}}</span></div>

      </div>

      <div style="width: 100%;background: #ffffff">
    <div class="cpxq-js-tex clear">
      <div>领劵</div>
      <p><img src="./images/yd.png" alt="" height="5px"></p>
    </div>
    </div>
    <div class="cpxq-yx-wrap">
        <div class="cpxq-yx-all clear">
           <div class="cpxq-yx-left">已选<span >螺纹钢φ25*9 φ25*9</span></div>
           <div class="cpxq-yx-right"><img src="./images/yd.png" alt="" height="5px"></div>
        </div>
    </div>
    <div class="cpxq-yx-wrap">
      <div class="cpxq-yx-all clear">
        <div class="cpxq-yx-left">地址<span >登录之后展示默认收货地址</span></div>
        <div class="cpxq-yx-right"><img src="./images/yd.png" alt="" height="5px"></div>
      </div>
    </div>
    <div class="cpxq-pinglun-wrap">
      <div class="cpxq-pinglun-top1">
        <div class="cpxq-pinglun-top">
          评论 <span>()</span>
        </div>
      </div>
      <!--<div v-for="items in pl" class="cpxq-pl-content-wrap">-->
        <!--<div class="cpxq-pl-content-all">-->
          <!--<div class="cpxq-pl-content-top clear">-->
             <!--<div class="cpxq-pl-content-top-le">-->
               <!--<img src="./images/star.png" alt="" height="12px">-->
               <!--<img src="./images/star.png" alt="" height="12px">-->
               <!--<img src="./images/star.png" alt="" height="12px">-->
             <!--</div>-->
             <!--<div class="cpxq-pl-content-top-ri">Lucky</div>-->
          <!--</div>-->
          <!--<div class="cpxq-pl-content-text">-->
            <!--{{items.comment}}-->
          <!--</div>-->
          <!--<div class="cpxq-pl-content-date">-->
            <!--{{items.created_at}}-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
    </div>
    <div class="cpxq-top-wrap1" v-if="cpxqcon1">
      <div class="cpxq-xq-top-wrap">
        <div class="cpxq-xq-top-all clear">
        <div class="cpxq-xq-top-all-text"   :class="{ 'cpxqcpjs': cpxqtop0 }" @click="navcx11">产品介绍</div>
        <div class="cpxq-xq-top-all-text"   :class="{ 'cpxqcpjs': cpxqtop11 }" @click="navcx22">规格参数</div>
        <div class="cpxq-xq-top-all-text"   :class="{ 'cpxqcpjs': cpxqtop22 }" @click="navcx33">售后服务</div>
        </div>
      </div>
    </div>
    <div v-if="cpxqcon2">
      <div class="cpxq-pingjia-wrap">
        <div class="cpxq-pingjia-all">
        <div class="cpxq-pingjia-top clear">
          <div class="cpxq-pingjia-top-left">
            <img src="./images/star.png" alt="" height="12px">
          </div>
          <div class="cpxq-pingjia-top-right">
            Lucky
          </div>
        </div>
          <div class="cpxq-pingjia-con">你们好</div>
          <div class="cpxq-pingjia-con1">2017-05-02 19:57:07</div>
        </div>
      </div>
      <div class="cpxq-pingjia-wrap">
        <div class="cpxq-pingjia-all">
          <div class="cpxq-pingjia-top clear">
            <div class="cpxq-pingjia-top-left">
              <img src="./images/star.png" alt="" height="12px">
            </div>
            <div class="cpxq-pingjia-top-right">
             沉默
            </div>
          </div>
          <div class="cpxq-pingjia-con">你们好哈</div>
          <div class="cpxq-pingjia-con1">2017-05-02 19:57:07</div>
        </div>
      </div>
      <div class="cpxq-pingjia-wrap">
        <div class="cpxq-pingjia-all">
          <div class="cpxq-pingjia-top clear">
            <div class="cpxq-pingjia-top-left">
              <img src="./images/star.png" alt="" height="12px">
            </div>
            <div class="cpxq-pingjia-top-right">
              沉默是金
            </div>
          </div>
          <div class="cpxq-pingjia-con">你们好哈</div>
          <div class="cpxq-pingjia-con-img clear">
            <img src="./images/cpxq-kwt.png" alt="">
            <img src="./images/cpxq-kwt.png" alt="">
            <img src="./images/cpxq-kwt.png" alt="">
            <img src="./images/cpxq-kwt.png" alt="">
            <img src="./images/cpxq-kwt.png" alt="">
          </div>
          <div class="cpxq-pingjia-con1">2017-05-02 19:57:07</div>
        </div>
      </div>
      <div class="cpxq-pingjia-wrap">
        <div class="cpxq-pingjia-all">
          <div class="cpxq-pingjia-top clear">
            <div class="cpxq-pingjia-top-left">
              <img src="./images/star.png" alt="" height="12px">
            </div>
            <div class="cpxq-pingjia-top-right">
              Lucky
            </div>
          </div>
          <div class="cpxq-pingjia-con">你们好</div>
          <div class="cpxq-pingjia-con1">2017-05-02 19:57:07</div>
        </div>
      </div>
      <div class="cpxq-pingjia-wrap">
        <div class="cpxq-pingjia-all">
          <div class="cpxq-pingjia-top clear">
            <div class="cpxq-pingjia-top-left">
              <img src="./images/star.png" alt="" height="12px">
            </div>
            <div class="cpxq-pingjia-top-right">
              沉默
            </div>
          </div>
          <div class="cpxq-pingjia-con">你们好哈</div>
          <div class="cpxq-pingjia-con1">2017-05-02 19:57:07</div>
        </div>
      </div>
      <div class="cpxq-pingjia-wrap">
        <div class="cpxq-pingjia-all">
          <div class="cpxq-pingjia-top clear">
            <div class="cpxq-pingjia-top-left">
              <img src="./images/star.png" alt="" height="12px">
            </div>
            <div class="cpxq-pingjia-top-right">
              沉默是金
            </div>
          </div>
          <div class="cpxq-pingjia-con">你们好哈</div>
          <div class="cpxq-pingjia-con-img clear">
            <img src="./images/cpxq-kwt.png" alt="">
            <img src="./images/cpxq-kwt.png" alt="">
            <img src="./images/cpxq-kwt.png" alt="">
            <img src="./images/cpxq-kwt.png" alt="">
            <img src="./images/cpxq-kwt.png" alt="">
          </div>
          <div class="cpxq-pingjia-con1">2017-05-02 19:57:07</div>
        </div>
      </div>
    </div>
    <div class="cpxq-footer-wrap clear">
      <div class="cpxq-footer-left clear">
        <div class="cpxq-footer-left-con">
          <img src="./images/kf.png" alt="" height="17px">
          <p>客服</p>
        </div>
        <div class="cpxq-footer-left-con">
          <img src="./images/dp.png" alt="" height="17px">
          <p>店铺</p>
        </div>
        <div class="cpxq-footer-left-con">
          <img src="./images/sc.png" alt="" height="17px"v-if="sc2" @click="scb">
          <img src="./images/sc1.png" alt="" height="17px" v-if="sc1" @click="sca">
          <p>收藏</p>
        </div>
        <div class="cpxq-footer-left-con">
          <img src="./images/gwc.png" alt="" height="17px">
          <p>购物车</p>
        </div>
      </div>
      <div class="cpxq-footer-right">加入购物车</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cpxq',
  data(){
      return{
        tc:false,
        sc2:true,
        sc1:false,
        cpxqtop:true,
        cpxqtop1:false,
        cpxqtop2:false,
        cpxqtop0:true,
        cpxqtop11:false,
        cpxqtop22:false,
        cpxqcon:true,
        cpxqcon1:false,
        cpxqcon2:false,
        swiperOption: {
          notNextTick: true,
          autoplay: 2500,
          slideTo:true,
          initialSlide: true,
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationType : 'fraction',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          autoplayDisableOnInteraction : false,
          loop : true,
          uniqueNavElements :false,

//            pList:''
        },
//          pList:[],
//          pMaterial:[],
//          pl:{}
      }
  },
    created: function() {
      this.get_xq();

    },
  methods: {

    tac(){
      this.tc=true
    },
    xs(){
      this.tc=false
    },
    navcx1(){
      this.cpxqtop=true;
      this.cpxqtop1=false;
      this.cpxqtop2=false;
      this.cpxqcon=true;
      this.cpxqcon1=true;
      this.cpxqcon2=false;
    },
    navcx2(){
      this.cpxqtop1=true;
      this.cpxqtop=false;
      this.cpxqtop2=false;
      this.cpxqcon1=true;
      this.cpxqcon=false;
      this.cpxqcon2=false;
    },
    navcx3(){
      this.cpxqtop2=true;
      this.cpxqtop=false;
      this.cpxqtop1=false;
      this.cpxqcon2=true;
      this.cpxqcon1=false;
      this.cpxqcon=false;
    },
  navcx11(){
    this.cpxqtop0=true;
    this.cpxqtop11=false;
    this.cpxqtop22=false;
  },
  navcx22(){
    this.cpxqtop11=true;
    this.cpxqtop0=false;
    this.cpxqtop22=false;
  },
  navcx33(){
    this.cpxqtop22=true;
    this.cpxqtop0=false;
    this.cpxqtop11=false;
  },
    scb(){
      this.sc1=true;
      this.sc2=false;
    },
    sca(){
      this.sc2=true;
      this.sc1=false;
    },
    get_xq(){
//        var id = this.$route.query.id;
//        this.$http.get('/v1/products/'+id+'?suppress_response_code=1',
//            {
//                headers:{"Authorization":"Bearer c9417824296769475271a2a256b0826a_$1"}
//            },
//            {
//                emulateJSON : true
//            }).then((response) => {
//
//            console.log(response.data);
////            this.$set(this, 'pList', response.data.data);
////            this.$set(this, 'pMaterial', response.data.data.material);
//        });
        this.$http.get('/v1/product-comments?page=1&suppress_response_code=1',
            {
                headers:{"Authorization":"Bearer c9417824296769475271a2a256b0826a_$1","userid":26}
            },
            {
                emulateJSON : true
            }).then((response) => {

//            this.$set(this, 'pl', response.data);
            console.log(response);
        });
    }
  }
}
</script>
<style>
  @import "cpxq.css";
  .cpxq-wrap .swiper-pagination{
    width: 40px;
    height: 40px;
    background: #999999;
    border-radius: 40px;
    line-height: 40px;
    color: #ffffff;
    font-size: 12px;
    margin-top: 170px;
    margin-left: 83%;
  }
 .cpxq-wrap .swiper-pagination span{
   background: none;

  }
</style>

