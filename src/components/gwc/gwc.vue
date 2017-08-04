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


    <div class="gwc-content-wrap" style="padding-bottom: 105px;">
      <div class="gwc-content-all clear" v-for="item in shopping">
        <div class="gwc-content-le">
          <p>钢猫</p>
          <div class="gwc-content-le-gx" @click="cx(item)">
            <input type="checkbox" >
            <img src="./images/gx.png" alt="" height="17px" v-if="item.selected">
          </div>
        </div>
        <div class="gwc-content-con clear">
          <img src="../shouye/images/zytj_03.png" alt="">
          <div class="gwc-scpq-wrap">
            <p>{{item.message}}</p>
            <div class="gwc-scpq-text">φ10</div>
            <div class="gwc-scpq-text">sadsadasd</div>
            <div class="gwc-scpq-text1">￥<span>{{item.price}}</span></div>
          </div>
        </div>
        <div class="gwc-content-ri">
          <button class="gwc-content-ri-jj" @click="del(item)">-</button>
          <div class="gwc-content-ri-text">
            <input type="tel" v-model="item.num" maxlength="4" v-on:input="change(item)">
          </div>
          <button class="gwc-content-ri-jj" @click="add(item)">+</button>
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
        <span class="gwc-js-left-hj">合计：￥<span>{{sum}}</span></span>
      </div>
      <div class="gwc-js-right" v-if="qjs">
        去结算（<span>{{num_sum}}</span>）
      </div>
      <div class="gwc-js-right" v-if="sc">
        删除（<span>{{num_sum}}</span>）
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
      <span class="gwc-a">{{num_sum}}</span>
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
        test_num:'1',
        staus:false,
        items: [{
          message: '工业线材φ10',
          selected: false,
          num: 8,
          price: 5
        }, {
          message: '工业线材φ10',
          selected: true,
          num: 4,
          price: 10
        }, {
          message: '工业线材φ10',
          selected: true,
          num: 6,
          price: 15
        }, {
          message: '工业线材φ10',
          selected: true,
          num: 5,
          price: 20
        }],
        shopping:{}
      }

  },
    created:function () {
        this.get_gwc();
        this.gwc_id=this.$route.query.gwc_id;
    },
  methods: {
    /*单选按钮*/
    cx(item){
      item.selected = !item.selected;
    },
    /*全选按钮*/
    jsa(){
      var self=this;
      self.js = !self.js;
      for(let i=0;i<self.items.length;i++){
        self.items[i].selected=self.js;
      }
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
    /*验证操作*/
    change(item){
      item.num=item.num.replace(/[^0-9]/g, '');
      if(item.num.substr(0,1)==0){
        item.num=item.num.substr(1);
      }
    },
    add(item){
      if(item.num==9999)return;
      item.num++;
    },
    del(item){
      if(item.num==0)return;
      item.num--;
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
              var fee=0;
              for (let item of response.data.data){
                  fa=fa+parseInt(item.total_quantity);
                  fee=fee+item.total_price
              }
              this.$set(this,"nums",fa)
              this.$set(this,'total_price',fee)
////            console.log(fa)
//            console.log(response)
          })
      },
  },
  computed:{
      sum(){
        var sum=0;
        var flag=0;
        for(let i=0;i<this.items.length;i++){
            if(this.items[i].selected==true){
                sum+=this.items[i].price*this.items[i].num;
                flag++;
            }
        }
        if(flag==0){
            this.js=false;
        }
        if(flag==4){
          this.js=true;
        }
//        console.log(flag);
        return sum;
      },
      num_sum(){
        var num_sum=0;
        for(let i=0;i<this.items.length;i++){
          if(this.items[i].selected==true){
            num_sum+=this.items[i].num;
          }
        }
        return num_sum;
      }
  }
}
</script>
<style>
  @import "gwc.css";
</style>

