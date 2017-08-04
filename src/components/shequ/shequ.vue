<template>
  <div class="shequ-wrap">
    <transition name="fade">
    <div  v-if="tc" class="sq-bk"></div>
    </transition>
    <transition name="fade">
    <div  v-if="tc" class="sqtc-con">
      <div class="sqtc-con-top clear">
        <div>
          <img src="./images/wechat.png" alt="" height="60">
          <p>微信好友</p>
        </div>
        <div>
          <img src="./images/pyq.png" alt="" height="60">
          <p>微信朋友圈</p>
        </div>
        <div>
          <img src="./images/qq.png" alt="" height="60">
          <p>QQ</p>
        </div>


        <div>
          <img src="./images/qqkj.png" alt="" height="60">
          <p>QQ空间</p>
        </div>
        <div>
          <img src="./images/yj.png" alt="" height="60">
          <p>邮件</p>
        </div>
        <div>
          <img src="./images/dx.png" alt="" height="60">
          <p>短信</p>
        </div>
      </div>
      <div class="sqtc-con-bottom" @click="xs">取消</div>
    </div>
    </transition>
     <div class="shequ-top-wrap">
       <div class="shequ-top clear">
         <div class="shequ-top-left" :class="{ 'shequtop': bk }" @click="rm">
           热门
         </div>
         <div class="shequ-top-right" :class="{ 'shequtop': bk1 }"  @click="ht">
           话题
         </div>
       </div>
     </div>

    <div v-if="sqcon" class="shequ-content-wrap">

      <div v-for="item in hot_comment"  class="shequ-content-al">
      <div class="shequ-content-all">

        <p class="shequ-content-top">
            <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
          <img v-if="item.user.headimgurl" :src="'http://m.gangmao.biz/'+item.user.headimgurl"  @click="clickImg($event)" style="border-radius:60%" alt="" height="33px">
          <span v-else>
              <img src="../cpxq/images/cpxq-kwt.png" @click="clickImg($event)" style="border-radius:50%" alt="" height="33px"></span>
          <span><span>{{item.user.nickname}}</span><br/>
        <span class="pltm">{{item.updated_at}}</span></span>
        </p>
          <router-link :to="{path:'/quanwen',query: {id:item.id}}">
        <div class="shequ-content-con">
          <span>{{item.title}}</span>
          {{item.content}}
        </div>
          </router-link>
        <div v-if="item.imgs" class="shequ-content-con1 clear">
            <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
          <img v-for="im in JSON.parse(item.imgs)" :src="'http://m.gangmao.biz/'+im"  @click="clickImg($event)" height="119.3" alt="">
        </div>

        <div class="shequ-content-fx clear">
           <div class="shequ-content-fxi"><img src="./images/Share.png" alt=""height="16px" @click="tac"></div>
           <div class="shequ-content-fxi" style="border-left:1px solid #9e9e9e; "><img src="./images/pl.png" alt=""height="16px"> {{item.commentCnt}}</div>
           <div class="shequ-content-fxi" style="border-left:1px solid #9e9e9e; "><img src="./images/good.png" alt=""height="16px"> {{item.agree}}</div>
        </div>
      </div>
      </div>

    </div>

    <div v-if="sqcon1" class="ht">
      <div v-for="s1 in sub" class="sq-ht-wrap clear">
        <img :src="'http://m.gangmao.biz/'+s1.ico" alt="" height="47.5px" class="sq-ht-le">
        <div class="sq-ht-co">
          <p>{{s1.name}}</p>
          <div>{{s1.desc}}</div>
        </div>
        <div class="sq-ht-ri">
          <router-link :to="{path:'/qyx',query:{sid:s1.id}}">
          看看
          </router-link>
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

      <router-link to="/fenlei">
        <div class="wd-footer-bar">
          <div><img src="../wode/images/ico_fenlei@2x.png" alt="" height="21px"></div>
          <p>分类</p>
        </div>
      </router-link>

        <div class="wd-footer-bar">
          <div><img src="../wode/images/cur_shequ@2x.png" alt="" height="21px"></div>
          <p>社区</p>
        </div>

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
    import BigImg from '../tool/tpfd.vue';
export default {
  name: 'shequ',
  data(){
    return{
        showImg:false,
        imgSrc: '',
      bk:true,
      bk1:false,
      sqcon:true,
      sqcon1:false,
      tc:false,
      hot_comment:[],
      sub:[]
    }
  },
    created:function () {
      this.get_hot()
    },
    components: {
        'big-img':BigImg
    },
  methods: {
    rm(){
      this.bk = true;
      this.bk1 = false;
      this.sqcon = true;
      this.sqcon1 = false;
    },
    ht(){
      this.bk1 = true;
      this.bk = false;
      this.sqcon1 = true;
      this.sqcon = false;
        this.$http.get('/v1/subjects?suppress_response_code=1',{
                headers:{
                    "Authorization":"Bearer "+this.token
                }
            },
            {
                emulateJSON:true
            }).then((response)=>{
            this.$set(this,"sub",response.data.data)
            console.log(response.data.data)
        })
    },
    tac(){
        this.tc=true
    },
    xs(){
      this.tc=false
    },
    get_hot(){
       this.$http.get('/v1/subject-contents?page=1&suppress_response_code=1',{
           headers:{
               "Authorization":"Bearer "+this.token,"ishot":"1"
           }
       },
       {
          emulateJSON:true
       }).then((response)=>{
           this.$set(this,"hot_comment",response.data.data)
           console.log(response.data.data)
       })
    },
      clickImg(e) {
          console.log(e)
          this.showImg = true;
          // 获取当前图片地址
          this.imgSrc =e.currentTarget.src;
      },
      viewImg(){
          this.showImg = false;
      },
  }
}
</script>
<style>
  @import "sheq.css";
</style>

