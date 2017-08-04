<template>
  <div class="fenlei-wrap">
    <div class="fl-top">
      <div class="shouye-top clear">
        <div class="shouye-top-left">
          <router-link to="/quanguo">
            <p>全国</p>
            <p class=""><img src="../shouye/images/dw.png" alt="" height="6px"></p>
          </router-link>

        </div>
        <div class="shouye-top-con">
          <div class="shouye-top-con-ba"></div>
          <img src="../shouye/images/search.png" alt="" height="15px">
          <input type="text" placeholder="请输入商品名">
        </div>
        <div class="shouye-top-right">
          <router-link to="/xiaoxi">
            <img src="../wode/images/xx.png" alt="" height="17.5px">
          </router-link>
        </div>

      </div>
    </div>

    <div class="fenlei-content-wrap clear">
      <ul class="fenlei-content-left">
        <li  v-for="(item,key) in catalist" class="scs" :class="{ 'scst': nav }" @click="navcx1(item.id)">{{item.name}}</li>
      </ul>
      <div v-for="items in catalists" v-if="nav"  class="fenlei-content-right">
       <p class="fenlei-content-right-top">{{items.name}}</p>
        <div class="fenlei-content-right-con clear">

          <div v-for="itemss in items.son" class="fenlei-content-right-con-le">
            <router-link :to="{path:'/cplb',query: {id:itemss.id}}">
            <div v-if="itemss.ico">
              <img :src="'http://m.gangmao.biz/'+itemss.ico" alt="" height="49px">
            </div>
            <div v-else>
              <!--<img src="./images/banner_empty.png" alt="meiyou" height="49px">-->
              <img src="./images/cpkwt.png" alt="" height="49px">
            </div>
            </router-link>

            <p>{{itemss.name}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="wd-footer-bar-wrap clear">
      <router-link to="/shouye">
      <div class="wd-footer-bar">
        <div><img src="../wode/images/sy@2x.png" alt="" height="21px"></div>
        <p>首页</p>
      </div>
      </router-link>


        <div class="wd-footer-bar">
          <div><img src="../wode/images/fenlei_cur@2x.png" alt="" height="21px"></div>
          <p>分类</p>
        </div>

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
export default {
  name: 'fenlei',
  data(){
    return{
      nav: true,
      nav1: false,
      nav2: false,
      nav3: false,
      nav4: false,
      nav5: false,
      nav6: false,
      catalist:[],
      catalists:[],

    }
  },
    created:function(){
        this.getList();
//        this.sho();
    },
  methods:{
    navcx1(key){
//        alert(key);
      this.nav =true;
      this.nav1=false;
      this.nav2=false;
      this.nav3=false;
      this.nav4=false;
      this.nav5=false;
      this.nav6=false;
        this.$http.get('/v1/catas?suppress_response_code=1',
            {

                headers:{"Authorization":"Bearer c9417824296769475271a2a256b0826a_$1","cataid":key}
            },
            {
                emulateJSON : true
            }).then((response) => {
            this.$set(this, 'catalists', response.data.data.son);

        })
    },
//    navcx2(){
//      this.nav1=true;
//      this.nav=false;
//      this.nav2=false;
//      this.nav3=false;
//      this.nav4=false;
//      this.nav5=false;
//      this.nav6=false;
//    },
//    navcx3(){
//      this.nav2=true;
//      this.nav=false;
//      this.nav1=false;
//      this.nav3=false;
//      this.nav4=false;
//      this.nav5=false;
//      this.nav6=false;
//    },
//    navcx4(){
//      this.nav3=true;
//      this.nav=false;
//      this.nav2=false;
//      this.nav1=false;
//      this.nav4=false;
//      this.nav5=false;
//      this.nav6=false;
//    },
//    navcx5(){
//      this.nav4=true;
//      this.nav=false;
//      this.nav2=false;
//      this.nav3=false;
//      this.nav1=false;
//      this.nav5=false;
//      this.nav6=false;
//    },
//    navcx6(){
//      this.nav5=true;
//      this.nav=false;
//      this.nav2=false;
//      this.nav3=false;
//      this.nav4=false;
//      this.nav1=false;
//      this.nav6=false;
//    },
//    navcx7(){
//      this.nav6=true;
//      this.nav=false;
//      this.nav2=false;
//      this.nav3=false;
//      this.nav4=false;
//      this.nav5=false;
//      this.nav1=false;
//    },
      getList(){
          this.$http.get('/v1/catas?suppress_response_code=1',
              {

                  headers:{"Authorization":"Bearer c9417824296769475271a2a256b0826a_$1","cataid":"0"}
              },
              {
                  emulateJSON : true
              }).then((response) => {
              this.$set(this, 'catalist', response.data.data);
          });
          this.$http.get('/v1/catas?suppress_response_code=1',
              {

                  headers:{"Authorization":"Bearer "+this.token,"cataid":"2"}
              },
              {
                  emulateJSON : true
              }).then((response) => {
              this.$set(this, 'catalists', response.data.data.son);
                      console.log(response.data.data.son);console.log(event)
              })

      }
  }
}
</script>
<style>
  @import "fenlei.css";
</style>
