<template>
  <div class="jiagong-wrap">
   <div class="zyd-top-wrap">
     <div class="zyd-top-all clear">
       <div class="zyd-top-all-left">
         <router-link to="/shouye">
         <img src="../denglu/images/jiantou.png" alt="" width="9px ">
         </router-link>
       </div>
       <div class="zyd-top-all-con clear">
         <div class="shouye-top-con-ba"></div>
         <div class="zyd-top-all-con-left">
           <div @click="top1">
           <span>{{test==''?'全部资源':test}} <img src="./images/ico_biger1.png" alt="" height="6px"></span>
           </div>
           <img src="./images/ico_biger.png" alt="" height="6px" class="jtou" v-if="top">
           <transition name="fade">
           <ul class="zyd-xl" v-if="top">
             <li @click="show('','全部资源')" class="zyd-xl-text">全部资源</li>
             <li v-for="item in cata" @click="show(item.id,item.name)" class="zyd-xl-text">{{item.name}}</li>
           </ul>
           </transition>
         </div>
         <div class="zyd-top-all-con-right">
           <input v-model="str" type="text" placeholder="公司/品种/交货地/钢厂">
         </div>
       </div>
       <div @click="search(flid)" class="zyd-top-all-right">
         <img src="./images/search.png" alt="" height="16px">
       </div>
     </div>
   </div>
    <div v-for="(items,index) in zydList" class="zyd-content-wrap">
    <div class="zyd-content-all">
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          公司名称： <span>{{items.company_name}}</span>
        </div>
        <div class="zyd-content-all-text-right">
          <img src="./images/arrow.png" alt="" height="6px" v-if="jt1" @click="xs">
          <img src="./images/jt.png" alt="" height="6px" v-if="jt" @click="xs">
        </div>
      </div>
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          大类： <span v-for="item in cata"  v-if="item.id==items.cataid">{{item.name}}</span>
        </div>
      </div>
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          主营品种： <span>{{items.sub_cata}}</span>
        </div>
      </div>

      <div v-if="zyd">
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          交货地： <span>{{items.warehouse_name}}</span>
        </div>
      </div>
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          主营钢厂：<span>{{items.steel_factory}}</span>
        </div>
      </div>
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          联系人：<span>{{items.contact}}</span>
        </div>
      </div>
        <div class="zyd-content-all-text clear">
          <div class="zyd-content-all-text-left">
            联系电话：<span>{{items.phone}}</span>
          </div>
        </div>
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          资源单说明：<span>{{items.desc}}</span>
        </div>
      </div>
      </div>
    </div>
    <div class="zyd-content-footer-wrap">
      <div class="zyd-content-footer-all clear">
        <div class="zyd-content-footer-le">
          交货地： <span>{{items.warehouse_name}}</span>
        </div>
        <div class="zyd-content-footer-ri">
          <router-link :to="{path:'/zydyl',query:{id:index,zyid:ddd,catas:eee}}">
          <img src="./images/yu.png" alt="" height="12px">
          <span>预览</span>
          </router-link>
        </div>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'more',
  data(){
      return{
        zyd:false,
        jt:false,
        top:false,
        jt1:true,
        cata:{},
        str:'',
        zydList:{},
        ddd:'',
        eee:'',
        test:'',
        flid:''
      }
  },
  created:function () {
      this.get_cata()
  },
  methods:{
      xs(){
          this.zyd=!this.zyd;
          this.jt=!this.jt;
          this.jt1=!this.jt1;
      },
    top1(){
          this.top=!this.top;
    },
    get_cata(){
        this.$http.get('/v1/catas?suppress_response_code=1',
            {

                headers:{"Authorization":"Bearer "+this.token,"cataid":"0"}
            },
            {
                emulateJSON : true
            }).then((response) => {
            this.$set(this, 'cata', response.data.data);
            localStorage.setItem("name",JSON.stringify(this.cata))
            this.eee=localStorage.name
//            console.log(response)
              this.get_zyd('')
        });
    },
    get_zyd(k){
        var str=this.str;
        var ca={"cataid":[k],"searchStr":str};
        ca=JSON.stringify(ca)
        ca=encodeURIComponent(ca)
        this.$http.get('/v1/resources/search/'+ca+'?page=1&suppress_response_code=1',
            {

                headers:{"Authorization":"Bearer "+this.token}
            },
            {
                emulateJSON : true
            }).then((response) => {
            this.$set(this, 'zydList', response.data.data.list);
            localStorage.setItem("name",JSON.stringify(this.zydList))
            this.ddd=localStorage.name
        });
    },
    show(k,h){
       this.get_zyd(k)
        this.test=h
        this.flid=k
        this.top=!this.top;

    },
      search(m){
        this.get_zyd(m)
    }

  }
}
</script>

