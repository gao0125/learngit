<template>
  <div class="quanwen">
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

    <div class="denglu-top-wrap">
      <div class="denglu-top1">
        <div class="qunr-fx1">
      <!--<router-link to="/shequ">-->
      <img src="../denglu/images/jiantou.png" @click="$router.back(-1)" width="9px ">
      <!--</router-link>-->
    </div>
      全文内容
        <div class="qunr-fx"><img src="./images/Share1.png" alt="" height="16px" @click="tac"></div>
    </div>
    </div>

    <div v-if="sqcon" class="shequ-content-wrap">
      <div  class="shequ-content-al shequ-content-al33">
      <div class="shequ-content-all">
        <p class="shequ-content-top">
          <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
          <img v-if="content_one.user.headimgurl" :src="'http://m.gangmao.biz/'+content_one.user.headimgurl" @click="clickImg($event)" style="border-radius:60%" alt="" height="33px">
          <span v-else>
              <img src="../cpxq/images/cpxq-kwt.png" @click="clickImg($event)" style="border-radius:50%" alt="" height="33px"></span>
          <span><span>{{content_one.user.nickname}}</span><br/>
        <span class="pltm">{{content_one.updated_at}}</span></span>
        </p>
        <div class="shequ-content-con">
          <span>{{content_one.title}}</span>
          {{content_one.content}}
        </div>
        <div v-if="content_one.imgs" class="shequ-content-con1 clear">
          <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
          <img v-for="im in JSON.parse(content_one.imgs)" @click="clickImg($event)" :src="'http://m.gangmao.biz/'+im" height="119.3" alt="">
        </div>

      </div>
        <div class="shequ-content-fx clear">
          <div class="shequ-content-fxi">评论（{{content_one.commentCnt}}）</div>
          <div class="shequ-content-fxi"><img src="./images/good.png" alt=""height="16px"><span style="margin-left: 5px">{{content_one.agree}}</span></div>
        </div>
        <div v-for="comm in content_comment" class="qw-pl-wrap">
          <p class="shequ-content-top">
            <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
            <img :src="'http://m.gangmao.biz/'+comm.user.headimgurl" @click="clickImg($event)" style="border-radius:50%" alt="" height="33px">
            <span>
              <span>{{comm.user.nickname}}</span><br/>
              <span  class="pl-time">{{comm.created_at}}</span>
            </span>
          <img src="./images/good.png" alt="" height="16px" class="pl-zan"><br/>
          <span class="pl-con"><span>{{comm.comment}}</span></span>
          </p>
        </div>
    </div>
    </div>

<div  v-if="sr"  class="pl-srk">
  <input type="text" autofocus="autofocus">
</div>
   <div class="qw-bottom clear">
     <div class="qw-bottom-left"><img src="./images/good.png" alt="" height="16px">点赞</div>
     <div class="qw-bottom-right" @click="srf"><img src="./images/pl.png" alt="" height="16px">评论
     </div>
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
      sr:false,
      content_one:[],
      content_user:{},
      content_comment:[]
    }
  },
    created:function () {
        this.get_content();
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
    },
    tac(){
        this.tc=true
    },
    xs(){
      this.tc=false
    },
    srf(){
      this.sr=true
    },
    get_content(){
        var cid=String(this.$route.query.id);
        console.log(cid)
        this.$http.get("/v1/subject-contents/"+cid+"?suppress_response_code=1",{
            headers:{"Authorization":"Bearer "+this.token}
        },
        {
            emulateJSON : true
        }).then((response)=>{
            this.$set(this,"content_one",response.data.data);
            this.$set(this,"content_user",response.data.data.user);
            console.log(response.data.data);
            this.get_comment(response.data.data.id)
        })
    },
    get_comment(){
        var cid=String(this.$route.query.id);
        this.$http.get("/v1/subject-comments?page=0&suppress_response_code=1",{
                headers:{
                    "Authorization":"Bearer "+this.token,
                    "subjectContentid":cid,
//                    "userid":"26"
                }
            },
            {
                emulateJSON : true
            }).then((response)=>{
            this.$set(this,"content_comment",response.data.data);

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

