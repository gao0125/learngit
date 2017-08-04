<template>
  <div class="jiagong-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/zyd"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        资源单预览
      </div>
    </div>
    <div class="zyd-content-wrap zydyl-content-wrap">
    <div class="zyd-content-all">
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          公司名称：<span>{{zyxx.company_name}}</span>
        </div>
      </div>
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          大类： <span v-for="item in cataxx"  v-if="item.id==zyxx.cataid">{{item.name}}</span>
        </div>
      </div>
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          主营品种： <span>{{zyxx.sub_cata}}</span>
        </div>
      </div>
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          交货地：<span>{{zyxx.warehouse_name}}</span>
        </div>
      </div>
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          主营钢厂：<span>{{zyxx.steel_factory}}</span>
        </div>
      </div>
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          联系人：<span>{{zyxx.contact}}</span>
        </div>
      </div>
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          联系电话：<span>{{zyxx.phone}}</span>
        </div>
      </div>
      <div class="zyd-content-all-text clear">
        <div class="zyd-content-all-text-left">
          资源单说明：<span>{{zyxx.desc}}</span>
        </div>
      </div>
    </div>
    </div>
    <div class="zydyl-content-all">
      上拉收起资源单详情
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
          zyxx:{},
          cataxx:{},
          kk:''
      }
  },
    created:function () {
        this.get_xx()
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
    get_xx(){
        this.kk=String(this.$route.query.id)
        this.zyxx=JSON.parse(this.$route.query.zyid)[this.kk]
        this.cataxx=JSON.parse(this.$route.query.catas)
        console.log(this.zyxx)
    }

  }
}
</script>

