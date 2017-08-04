<template>
  <div class="gwc-wrap">
    <div class="gwc-top-wrap">
      <div class="gwc-top">
      购物城
        <router-link to="/xiaoxi">
      <img src="../wode/images/xx.png" alt="" height="17.5" class="gwc-top-xx">
        </router-link>
      <p class="gwc-top-xx1" @click="bja" v-if="bj">编辑</p>
        <p class="gwc-top-xx1" @click="wca"  v-if="wc">完成</p>
      </div>
    </div>


    <div v-for="dp in shopping" v-if="dp.content.length>6" class="gwc-content-wrap">
      <div v-for="con in JSON.parse(dp.content)" class="gwc-content-all clear">
        <div class="gwc-content-le">
          <p>{{dp.shopid==1?"现货":"自营"}}</p>
          <div class="gwc-content-le-gx" @click="cx">
            <img src="./images/gx.png" alt="" height="17px" v-if="gx">
          </div>
        </div>
        <div class="gwc-content-con clear">
          <img :src="'http://m.gangmao.biz/'+con.imgurl" alt="">
          <div class="gwc-scpq-wrap">
            <p>{{con.title}}</p>
            <div class="gwc-scpq-text">材质：{{JSON.parse(con.extra_info).material}}</div>
            <div class="gwc-scpq-text">规格：{{JSON.parse(con.extra_info).specification_label}}</div>
            <div class="gwc-scpq-text">生产标准：{{con.standard}}</div>
            <div class="gwc-scpq-text">工艺：{{JSON.parse(con.extra_info).production_tech}}</div>
            <div class="gwc-scpq-text">仓库：{{JSON.parse(con.extra_info).warehouse_name}}</div>
            <div class="gwc-scpq-text1">￥{{con.price}}/{{con.unit_name}}</div>
          </div>
        </div>
        <div class="gwc-content-ri">
          <div @click="g_down(con,dp)" class="gwc-content-ri-jj">-</div>
          <div class="gwc-content-ri-text"><input style="width:42px;border:0px solid white;text-align:center;padding:1px 2px;"  type="text" :value="con.num"/></div>
          <div class="gwc-content-ri-jj">+</div>
        </div>
      </div>
    </div>


    <div class="gwc-js-wrap clear">
      <div class="gwc-js-left">
        <span>
        <div class="gwc-content-le-gx" @click="jsa">
          <img src="./images/gx.png" alt="" height="17px" v-if="js">
        </div>
        全选</span>
        <span class="gwc-js-left-hj">合计：<span>￥111:00</span></span>
      </div>
      <div class="gwc-js-right" v-if="qjs">
        去结算（<span >{{fa}}</span>）
      </div>
      <div class="gwc-js-right" v-if="sc">
        删除（<span>1</span>）
      </div>
    </div>
    <div class="wd-footer-bar-wrap clear">
      <router-link to="/shouye">
        <div class="wd-footer-bar">
          <div><img src="../wode/images/sy@2x.png" alt="" height="21px"></div>
          <p>首页</p>
        </div>
      </router-link>
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

        <div class="wd-footer-bar">
          <div class="gwc-c"><img src="../wode/images/cur_cart@2x.png" alt="" height="21px">
          <span class="gwc-a">{{nums}}</span>
          </div>
          <p>购物车</p>

        </div>


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
  name: 'gwc',
  data(){
      return{
          gx:false,
          js:false,
          qjs:true,
          sc:false,
          bj:true,
          wc:false,
          shopping:[],
          nums:'',
          fa:''
      }
  },
    created:function () {
      this.get_gwc();
    },
  methods: {
    cx(){
      this.gx = !this.gx
    },
    jsa(){
      this.js = !this.js;
      this.gx = !this.gx
    },
    bja(){
      this.bj = false;
      this.wc = true;
      this.qjs = false;
      this.sc = true;
      this.js = false;
      this.gx = false
    },
    wca(){
      this.wc = false;
      this.bj = true;
      this.sc = false;
      this.qjs = true;
      this.js = false;
      this.gx = false
    },
      get_gwc(){
        this.$http.get('/v1/order-carts?suppress_response_code=1',{
            headers:{
                "Authorization":"Bearer "+this.token,
                "userid":"26"
            }
        },{
            emulateJSON:true
        }).then((response)=>{
            this.$set(this,"shopping",response.data.data)
            var fa=0;
            for (let item of response.data.data){
               var fa=fa+parseInt(item.total_quantity);
            }
            this.$set(this,"nums",fa)
//            console.log(fa)
//            console.log(response.data.data)
        })
      },
      //加减购物车
      g_down(con,dp){
          var num=con.num;
          if(parseInt(num)>0){
              num=num-1;
          }else{
              num=0;
          }
//          var ao=[];
//          ao.push('"id":"44"');
//          ao.push('"imgurl":'+con.imgurl);
//          ao.push('"title":'+con.title);
//          ao.push('"num":"-1"');
//          ao.push('"price":'+con.price);
//          ao.push('"specification":'+con.specification);
//          ao.push('"unit_name":'+con.unit_name);
//          ao.push('"quantity":'+con.quantity);
//          ao.push('"standard":'+con.standard);
//          ao.push('"unit_name":'+con.unit_name);
          var ao={
              "id":"44",
              "imgurl":con.imgurl,
              "title":con.title,
              "num":"-1",
              "price":con.price,
              "specification":con.specification,
              "unit_name":con.unit_name,
              "quantity":con.quantity,
              "standard":con.standard,
              "extra_info":con.extra_info
          };
          console.log(ao);
          ao=JSON.stringify(ao);

          console.log(ao);
          var bo={
              "shopid":String(dp.shopid),
              "userid":"26",
              "products":ao
          };
          console.log(bo);
//          var bo='{"id":"'+con.id+'","imgurl":"'+con.imgurl+'","title":"'+con.title+'","num":"'+num+'","price":"'+con.price+'","specification":"'+con.specification+'","unit_name":"'+con.unit_name+'","quantity":"'+con.quantity+'","standard":"'+con.standard+'","shopid":"'+dp.shopid+'"}';
//          var bo={"id":con.id,"imgurl":con.imgurl,"title":con.title,"num":num,"price":con.price,"specification":con.specification,"unit_name":con.unit_name,"quantity":con.quantity,"standard":con.standard,"shopid":dp.shopid};
//          bo=JSON.stringify(bo);
//          console.log(bo)
//          bo=encodeURIComponent(bo);
//          console.log(bo)
          this.$http.put('/v1/order-carts/26?suppress_response_code=1',bo
              ,{
              headers:{
                  "Authorization":"Bearer "+this.token,
                  "userid":"26"
              }
          },{
              emulateJSON:true
          }).then((response)=>{
              this.get_gwc()
          })
      }
  }
}
</script>
<style>
  @import "gwc.css";
</style>

