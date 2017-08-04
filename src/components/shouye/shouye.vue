<template>
  <div class="shouye">
    <swiper :options="swiperOption" ref="mySwiperA">
      <!-- 幻灯内容 -->

      <swiper-slide v-for="i_ad in adsList">
        <div v-for="i_ads in i_ad.contents">
          <router-link :to="{path:'/cpxq',query: {id:i_ads.value}}">
        <img :src="'http://m.gangmao.biz/'+i_ads.content" alt="" height="164px" width="100%">
          </router-link>
        </div>
      </swiper-slide>
      <swiper-slide v-if="adsList==''"><img src="./images/banner_empty.png" alt="" height="164px" width="100%"></swiper-slide>
      <!-- 以下控件元素均为可选 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>


    <transition name="fade">
    <div class="shouye-nav" v-if="nav">
    </div>
    </transition>

      <div class="shouye-top clear">
     <div class="shouye-top-left">
       <router-link to="/quanguo">
         <p>{{AreaName}}</p>
         <p class=""><img src="./images/dw.png" alt="" height="6px"></p>
       </router-link>

     </div>
      <div class="shouye-top-con">
        <div class="shouye-top-con-ba"></div>
        <img src="./images/search.png" alt="" height="15px">
        <input type="text" placeholder="请输入商品名">
      </div>
      <div class="shouye-top-right">
        <router-link to="/xiaoxi">
          <img src="../wode/images/xx.png" alt="" height="17.5px">
        </router-link>
      </div>
    </div>

    <div class="shouye-content-wrap">
      <div class="shouye-content clear">
        <div class="shouye-content-all">
          <router-link to="/xianhuo">
          <img src="./images/sy.png" alt="" height="42px">
          <p>现货</p>
          </router-link>
        </div>
        <div class="shouye-content-all">
          <router-link to="/shangcheng">
          <img src="./images/sy1.png" alt="" height="42px">
          <p>商城</p>
          </router-link>
        </div>
        <div class="shouye-content-all">
          <router-link to="/zyd">
          <img src="./images/sy2.png" alt="" height="42px">
          <p>资源单</p>
          </router-link>
        </div>
        <div class="shouye-content-all">
          <router-link to="/ddtz">
          <img src="./images/sy3.png" alt="" height="42px">
          <p>订单特制</p>
          </router-link>
        </div>
        <div class="shouye-content-all">
          <router-link to="/qiugou">
          <img src="./images/sy4.png" alt="" height="42px">
          <p>求购</p>
          </router-link>
        </div>


        <div class="shouye-content-all">
          <router-link to="/jiagong">
          <img src="./images/sy5.png" alt="" height="42px">
          <p>加工</p>
          </router-link>
        </div>
        <div class="shouye-content-all">
          <router-link to="/cpjy">
          <img src="./images/sy6.png" alt="" height="42px">
          <p>产品检验</p>
          </router-link>
        </div>
        <div class="shouye-content-all">
          <router-link to="/wuliu">
          <img src="./images/sy7.png" alt="" height="42px">
          <p>物流</p>
          </router-link>
        </div>
        <div class="shouye-content-all">
          <router-link to="/hangqing">
          <img src="./images/sy8.png" alt="" height="42px">
          <p>行情</p>
          </router-link>
        </div>
        <div class="shouye-content-all">
          <router-link to="/more">
          <img src="./images/sy9.png" alt="" height="42px">
          <p>更多</p>
          </router-link>
        </div>

      </div>
    </div>
    <div class="shouye-zytj-wrap">
      <div class="shouye-zytj-top">
        <img src="./images/zytj.png" alt="" height="12px">
      </div>
      <div class="shouye-zytj-all clear">
        <div v-for="item in pList" class="shouye-zytj-al">
          <div class="shouye-zytj-le">
            <router-link :to="{path:'/cpxq',query: {id:item.id}}">
            <img :src="'http://m.gangmao.biz/'+item.imgurl" alt="" width="100%" height="160px">
            </router-link>
            <p class="shouye-zytj-le-te">{{item.title}}（{{item.specification}})</p>
            <p class="shouye-zytj-le-text1">{{item.area_name}}</p>
            <p class="shouye-zytj-le-text">￥{{item.price.toFixed(2)}}/{{item.unit_name}}</p>
          </div>
        </div>
      </div>
    </div>


    <div class="wd-footer-bar-wrap clear">

        <div class="wd-footer-bar">
          <div><img src="../wode/images/cur_index@2x.png" alt="" height="21px"></div>
          <p>首页</p>
        </div>

      <router-link to="/fenlei">
      <div class="wd-footer-bar">
        <div><img src="../wode/images/ico_fenlei@2x.png" alt="" height="21px"></div>
        <p>分类</p>
      </div>
      </router-link>
      <router-link to="/shequ">
      <div class="wd-footer-bar">
        <div><img src="../wode/images/sq@2x.png" alt="" height="21px"></div>
        <p>社区</p>
      </div>
      </router-link>
        <router-link to="/gwc">
      <div class="wd-footer-bar">
        <div><img src="../wode/images/gwc@2x.png" alt="" height="21px"></div>
        <p>购物车</p>
      </div>
        </router-link>
      <router-link to="/wode">
        <div class="wd-footer-bar">
        <div><img src="../wode/images/wd@2x.png" alt="" height="21px"></div>
        <p>我的</p>
      </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default{
      name:'shouye',
    data(){
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 1500,
          slideTo:true,
          initialSlide: true,
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          autoplayDisableOnInteraction : false,
          loop : true,
        },
        scroll: '',
        nav:false,
        transitionName: 'expand',
          pList:[],
          adsList:{},
          AreaName:"全国"
      }
    },
    created:function(){
        this.tuijian();
        this.ad();
    },
    methods: {
      menu() {
        if( this.scroll = document.body.scrollTop>20){
          this.nav = true;
        }if( this.scroll = document.body.scrollTop < 20){
          this.nav = false;
        }
      },
        //产品推荐
      tuijian(){
          var a='{"is_recommendation":["1"]}';
          var b=encodeURIComponent(a);
          this.$http.get('/v1/products/search/'+b+'?page=1?suppress_response_code=1',
              {
                  headers:{"Authorization":"Bearer "+this.token}
              },
              {
                  emulateJSON : true
              }).then((response) => {
                  if(this.$route.query.areaid){
                      return this.get_area(this.$route.query.areaid);
                  }else{
                      this.$set(this, 'pList', response.data.list);
                  }


          })
    },
        //调取广告
    ad(){
      this.$http.get("/v1/ads?suppress_response_code=1",
          {
              headers:{"Authorization":"Bearer "+this.token,"plantform":"1","sectionid":"1"}
          },
          {
              emulateJSON : true
          }).then((response) => {
          this.$set(this,'adsList',response.data.data)
      })
    },
    get_area(k){
        var k=String(k);
        var a='{"is_recommendation":["1"],"m_cn_areaid":['+k+']}';
        var b=encodeURIComponent(a);
        this.$http.get('/v1/products/search/'+b+'?page=1?suppress_response_code=1',
            {
                headers:{"Authorization":"Bearer "+this.token}
            },
            {
                emulateJSON : true
            }).then((response) => {
                this.$set(this, 'pList', response.data.list);
                this.$set(this, 'AreaName',this.$route.query.areaname );
        })
    },
    mounted() {
      window.addEventListener('scroll', this.menu,)
    },
  /*  computed: {
      swiper() {
        return this.$refs.mySwiperA.swiper
      }
    },
    mounted() {
      this.swiper.slideTo(5, 5000, true)
    }*/
  }}
</script>
<style>
 @import "shouye.css";
 .swiper-pagination{
   top: 143px;
 }
 .swiper-pagination span{
   background: #fd6e15;
 }
</style>
