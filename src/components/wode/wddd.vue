<template>
  <div class="wode-wddd-wrap">
    <div class="shezhi-tc">
      <div class="zhezhao" v-if="kzz"></div>
      <div class="qcbdhc-wrap" v-if="khc">
        <div class="qcbdhc-text">确定清除本地缓存？</div>
        <div class="qcbdhc-tex clear">
          <div class="qcbdhc-tex-le" @click="gtc(1)">取消</div>
          <div class="qcbdhc-tex-ri" @click="gtc(2)">确定</div>
        </div>
      </div>
    </div>
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div>
          <router-link to="/wode"><img src="../denglu/images/jiantou.png" width="9px "></router-link>
        </div>
        我的订单
      </div>
    </div>
    <div class="wode-wddd-top-wrap clear">
      <div class="wode-wddd-top-text" :class="{ 'wdddtop': cpxqtop1 }" @click="navcx1">待付款</div>
      <div class="wode-wddd-top-text" :class="{ 'wdddtop': cpxqtop2 }" @click="navcx2">待结清</div>
      <div class="wode-wddd-top-text" :class="{ 'wdddtop': cpxqtop3 }" @click="navcx3">待提货</div>
      <div class="wode-wddd-top-text" :class="{ 'wdddtop': cpxqtop4 }" @click="navcx4">待收货</div>
      <div class="wode-wddd-top-text" :class="{ 'wdddtop': cpxqtop5 }" @click="navcx5">待评价</div>
    </div>


    <div v-for="item in orderSt" class="wdtk-content-wrap">
      <div class="wdtk-content-top">
        <div class="wdtk-content-top-all clear">
          <div class="wdtk-content-top-left">订单号：{{item.no}}</div>
          <div v-if="item.status==1" class="wdtk-content-top-right">等待买家付款</div>
          <div v-if="item.status==2" class="wdtk-content-top-right">买家付款中</div>
          <div v-if="item.status==4" class="wdtk-content-top-right">买家已付清</div>
          <div v-if="item.status==5" class="wdtk-content-top-right">已发货</div>
          <div v-if="item.status==9" class="wdtk-content-top-right">交易成功</div>
        </div>
      </div>
      <div class="wode-wddd-con">
        <div v-for="items in item.orderDetails" class="wdtk-content-con clear">
          <div class="wdtk-content-con-left">
            <img :src="'http://m.gangmao.biz/'+items.imgurl" alt="">
          </div>
          <div class="wdtk-content-con-right">
            <div class="wdtk-content-con-right-top clear">
              <div class="wdtk-content-con-right-top-left">
                {{items.title}}
              </div>
              <div class="wdtk-content-con-right-top-right">
                ￥{{items.price}}/{{items.unit_name}}
              </div>
            </div>
            <div class="wdtk-content-con-right-top1 clear">
              <div class="wdtk-content-con-right-top-left1">
                {{JSON.parse(items.extra_info).specification_label}}
              </div>
              <div class="wdtk-content-con-right-top-right1">
                x{{items.num}}
              </div>
            </div>
            <div class="wdtk-content-con-right-top1 clear">
              <div class="wdtk-content-con-right-top-left1">
                {{items.standard}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wdtk-content-sf">
        <div class="wdtk-content-sf-all clear">
          <div class="wdtk-content-sf1">
            共{{item.total_quantity}}件商品 实付：￥{{item.total_price}}<span v-if="item.m_shippingid==2">（含运费￥{{item.shipping_fee}}元）</span><span v-else>（不含运费）</span>
          </div>
        </div>
      </div>
      <div class="wdtk-content-sf wdtk-content-sf4">
        <div v-if="item.status==1" class="wdtk-content-sf-all clear">
          <router-link to="/ddzf">
            <div class="wdtk-cktk1 wdtk-cktk">
              付款
            </div>
          </router-link>
          <div @click="cancle_order(item.id)" style="color: #000;border: 1px solid #000;" class="wdtk-cktk1">
            取消订单
          </div>
        </div>
        <div v-if="item.status==2" class="wdtk-content-sf-all clear">
          <router-link to="/ddzf">
            <div style="color: #000;border: 1px solid #000;" class="wdtk-cktk1 wdtk-cktk">
              继续付款
            </div>
          </router-link>

        </div>
        <div v-if="item.status==4" class="wdtk-content-sf-all clear">
            <div @click="confirm_sh(4,item.id)" class="wdtk-cktk1 wdtk-cktk">
              确认收货
            </div>
        </div>
        <div v-if="item.status==5" class="wdtk-content-sf-all clear">

            <div @click="confirm_sh(5,item.id)" class="wdtk-cktk1 wdtk-cktk">
              确认收货
            </div>

          <router-link to="/ddzf">
          <div style="color: #000;border: 1px solid #000;" class="wdtk-cktk1">
            查看物流
          </div>
          </router-link>
        </div>
        <div v-if="item.status==9" class="wdtk-content-sf-all clear">
          <router-link to="/ddzf">
            <div class="wdtk-cktk1 wdtk-cktk">
              评价
            </div>
          </router-link>
          <div @click="again_buy(0,item.orderDetails)" style="color: #000;border: 1px solid #000;" class="wdtk-cktk1">
            再次求购
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
        kzz:false,
        khc:false,
        ddj:'',
        ddk:'',
        cpxqtop1: true,
        cpxqtop2: false,
        cpxqtop3: false,
        cpxqtop4: false,
        cpxqtop5: false,
        orderSt:{}
      }
    },
    created:function () {
      var a;
      if(this.$route.query.s==1){
          this.navcx1()
          a=1;
      }else if(this.$route.query.s==2){
          this.navcx2()
          a=2;
      }else if(this.$route.query.s==4){
          this.navcx3()
          a=4;
      }else if(this.$route.query.s==5){
          this.navcx4()
          a=5;
      }else if(this.$route.query.s==9){
          this.navcx5()
          a=9;
      }
      this.get_order(a)
    },
    methods: {
      confirm_sh(j,k){
          this.kzz=true;
          this.khc=true;
          this.ddj=j;
          this.ddk=k;

      },
      gtc(k){
          if(k==1){
              this.kzz=false
              this.khc=false
          }
          if(k==2){

              this.confirm_pro(this.ddj,this.ddk)
          }
      },
      navcx1(){
        this.cpxqtop1 = true;
        this.cpxqtop2 = false;
        this.cpxqtop3 = false;
        this.cpxqtop4 = false;
        this.cpxqtop5 = false;
        this.get_order(1)
      },
      navcx2(){
        this.cpxqtop2 = true;
        this.cpxqtop1 = false;
        this.cpxqtop3 = false;
        this.cpxqtop4 = false;
        this.cpxqtop5 = false;
          this.get_order(2)
      },
      navcx3(){
        this.cpxqtop3 = true;
        this.cpxqtop1 = false;
        this.cpxqtop2 = false;
        this.cpxqtop4 = false;
        this.cpxqtop5 = false;
          this.get_order(4)
      },
      navcx4(){
        this.cpxqtop4 = true;
        this.cpxqtop1 = false;
        this.cpxqtop2 = false;
        this.cpxqtop3 = false;
        this.cpxqtop5 = false;
          this.get_order(5)
      },
      navcx5(){
        this.cpxqtop5 = true;
        this.cpxqtop1 = false;
        this.cpxqtop2 = false;
        this.cpxqtop4 = false;
        this.cpxqtop3 = false;
          this.get_order(9)
      },
      get_order(k){

          this.$http.get("/v1/orders?page=1&suppress_response_code=1",
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
              this.orderSt=response.data.data
          })
      },//取消订单
      cancle_order(k){
          this.$http.delete('/v1/orders/'+String(k)+'?suppress_response_code=1',
              {
                  headers:{
                      "Authorization":"Bearer "+this.token,
                      "userid":"26",
                      "id":String(k)
                  }
              },{
                  emulateJSON:true
              }).then((response)=>{
//            console.log(response);
              this.get_order(1);
          })
      },
      confirm_pro(j,k){//确认收货

          this.$http.put('/v1/orders/'+k+'?suppress_response_code=1',
              {
                  "status":"9"
              },
              {
                  headers:{
                      "Authorization":"Bearer "+this.token,
                      "userid":"26"
                  }
              },{
                  emulateJSON:true
              }).then((response)=>{
              this.get_order(j);
              this.kzz=false
              this.khc=false
          })
      },
      again_buy(index,k){//再次求购
          console.log(k)
          if( index >= k.length ){
              return this.$router.push({path:'/gwc'});
          }
//                console.log(k[index])
          this.$http.get("/v1/products/"+k[index].productid+"?suppress_response_code=1",
              {
                  headers:{"Authorization":"Bearer "+this.token}
              },
              {
                  emulateJSON : true
              }).then((response) => {
              var po=response.data.data;
              var ao=[{
                  "id":po.id,
                  "imgurl":po.imgurl,
                  "title":po.title,
                  "num":k[index].num,
                  "price":po.price,
                  "specification":po.specification,
                  "unit_name":po.unit_name,
                  "quantity":po.quantity,
                  "standard":po.standard,
                  "extra_info":k[index].extra_info
              }];
              var bo=JSON.stringify(ao);
              var co={"shopid":String(JSON.parse(k[index].extra_info).shopid), "userid":"26", "products":bo};
              this.$http.put('/v1/order-carts/26?suppress_response_code=1',co,
                  {
                      headers:{
                          "Authorization":"Bearer "+this.token,
                          "userid":"26"
                      }
                  },
                  {
                      emulateJSON:true
                  }).then((res)=>{
                  index++;
                  this.again_buy(index,k)
              })
          });

      }
    }
  }
</script>

