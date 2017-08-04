<template>
  <div class="wode-wddd-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wode"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        我的订单
      </div></div>

    <div v-for="order in ord" class="wdtk-content-wrap wdtk-content-wrap1">
      <div class="wdtk-content-top">
        <div class="wdtk-content-top-all clear">
          <div class="wdtk-content-top-left">订单号：{{order.no}}</div>
          <div v-if="order.status==1" class="wdtk-content-top-right">等待买家付款</div>
          <div v-else-if="order.status==2" class="wdtk-content-top-right">买家付款中</div>
          <div v-else-if="order.status==4" class="wdtk-content-top-right">买家已付清</div>
          <div v-else-if="order.status==5" class="wdtk-content-top-right">卖家已发货</div>
          <div v-else-if="order.status==9" class="wdtk-content-top-right">交易成功</div>
          <div v-else-if="order.status==10 || order.status==11" class="wdtk-content-top-right">已评价</div>
          <div v-else-if="order.status==12" class="wdtk-content-top-right">售后处理</div>
          <div v-else-if="order.status==13" class="wdtk-content-top-right">超时失效订单</div>
        </div>
      </div>
      <div class="wode-wddd-con">
        <div v-for="ods in order.orderDetails" class="wdtk-content-con clear">
          <div class="wdtk-content-con-left">
            <img :src="'http://m.gangmao.biz/'+ods.imgurl" alt="">
          </div>
          <div class="wdtk-content-con-right">
            <div class="wdtk-content-con-right-top clear">
              <div class="wdtk-content-con-right-top-left">
                {{ods.title}}
              </div>
              <div class="wdtk-content-con-right-top-right">
                ￥{{ods.price}}/{{ods.unit_name}}
              </div>
            </div>
            <div class="wdtk-content-con-right-top1 clear">
              <div class="wdtk-content-con-right-top-left1">
                {{JSON.parse(ods.extra_info).specification_label}}
              </div>
              <div class="wdtk-content-con-right-top-right1">
                x{{ods.num}}
              </div>
            </div>
            <div class="wdtk-content-con-right-top1 clear">
              <div class="wdtk-content-con-right-top-left1">
                {{ods.standard}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wdtk-content-sf">
        <div class="wdtk-content-sf-all clear">
          <div class="wdtk-content-sf1">
            共{{order.total_quantity}}件商品 合计：￥{{order.total_price}}<span v-if="order.shipping_fee==0">（不含运费）</span><span v-else>（含运费￥{{order.shipping_fee}}）</span>
          </div>
        </div>
      </div>
      <div class="wdtk-content-sf wdtk-content-sf4">
        <div class="wdtk-content-sf-all clear">
          <div v-if="order.status==1" class="wdtk-cktk1">
            付款
          </div>
          <div v-else-if="order.status==4 || order.status==5" @click="confirm_pro(order.id)" class="wdtk-cktk1">
            确认收货
          </div>
          <div v-else-if="order.status==9" class="wdtk-cktk1">
            评价订单
          </div>
          <div v-else-if="order.status==10" @click="again_buy(0,order.orderDetails)" class="wdtk-cktk1">
            再次购买
          </div>
          <div v-else-if="order.status==13" class="wdtk-cktk1">
            查看订单
          </div>
          <router-link v-if="order.status==12" :to="{path:'/sqtk',query:{shid:order.id}}">
          <div class="wdtk-cktk1">
              查看售后
          </div>
          </router-link>
          <!--                                                   -->
          <div v-if="order.status==1" @click="cancle_order(order.id)" class="wdtk-cktk12">
            取消订单
          </div>
          <div v-if="order.status==2" class="wdtk-cktk12">
            继续付款
          </div>
          <div v-else-if="order.status==5" class="wdtk-cktk12">
            查看物流
          </div>
          <div v-else-if="order.status==9" @click="again_buy(0,order.orderDetails)" class="wdtk-cktk12">
            再次购买
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
                ord:[]
            }
        },
        created:function () {
            this.get_order()
        },
        methods:{
            get_order(){//获取订单
                this.$http.get('/v1/orders?page=1&suppress_response_code=1',{
                    headers:{
                        "Authorization":"Bearer "+this.token,
                        "userid":"26"
                    }
                },{
                    emulateJSON:true
                }).then((response)=>{
//            console.log(response.data.data)
                    this.$set(this,'ord',response.data.data)
                })
            },
            confirm_pro(k){//确认收货
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
//            console.log(response);
                    this.get_order();
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
                    this.get_order();
                })
            },
            again_buy(index,k){
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

//    ,
//    update_credit(){//更新积分
//        this.$http.post("/v1/user-credits?suppress_response_code=1",{
//            "userid":"26",
//            "code":"FIRST_BUY",
//            "from":"2"
//        },{
//            headers:{
//                "Authorization":"Bearer "+this.token,
//                "userid":"26"
//            }
//        },{
//            emulateJSON:true
//        }).then((response)=>{
//            console.log(response)
//            this.get_order();
//        })
//    },

        }
    }
</script>

