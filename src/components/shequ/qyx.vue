<template>
  <div class="qyx-wrap">
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
      <div class="denglu-top">
        <div>
          <!--<router-link to="/shequ"> -->
            <img src="../denglu/images/jiantou.png"  @click="$router.back(-1)" width="9px ">
          <!--</router-link>-->
        </div>
        企业秀
      </div>
    </div>
    <div v-if="sqcon" class="shequ-content-wrap">
      <div v-for="st in sub_content" class="shequ-content-al" style="border-bottom: 1px solid #9e9e9e;">
        <div class="shequ-content-all">

            <p class="shequ-content-top">
              <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
              <img v-if="st.user.headimgurl" :src="'http://m.gangmao.biz/'+st.user.headimgurl" @click="clickImg($event)" style="border-radius:50%" alt="" height="33px">
              <span v-else>
              <img src="../cpxq/images/cpxq-kwt.png" @click="clickImg($event)" style="border-radius:50%" alt="" height="33px"></span>
              <span><span>{{st.user.nickname}}</span><br/>
            <span class="pltm">{{st.updated_at}}</span></span>
            </p>
          <router-link :to="{path:'/quanwen',query: {id:st.id}}">
            <div class="shequ-content-con">
              <span>{{st.title}}</span>
              {{st.content}}
            </div>
          </router-link>
            <div  style="border-bottom: 1px solid #9e9e9e;" v-if="st.imgs" class="shequ-content-con1 clear">
              <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
              <img v-for="im in JSON.parse(st.imgs)" @click="clickImg($event)" :src="'http://m.gangmao.biz/'+im" height="119.3" alt="">
            </div>
            <div v-else  style="border-bottom: 1px solid #9e9e9e;"></div>

          <div class="shequ-content-fx clear">
            <div class="shequ-content-fxi"><img src="./images/Share.png" alt=""height="16px" @click="tac"></div>
            <div class="shequ-content-fxi"><img src="./images/pl.png" alt=""height="16px"> {{st.commentCnt}}</div>
            <div class="shequ-content-fxi"><img src="./images/good.png" alt=""height="16px"> {{st.agree}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import BigImg from '../tool/tpfd.vue';
  export default {
    name: 'qyx',
    data(){
      return{
          showImg:false,
          imgSrc: '',
        bk:true,
        bk1:false,
        sqcon:true,
        sqcon1:false,
        tc:false,
        sub_content:[]
      }
    },
    created:function () {
        this.get_sub()
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
      get_sub(){
          var sid=String(this.$route.query.sid);
          console.log(sid)
          this.$http.get('/v1/subject-contents?page=1&suppress_response_code=1',{
              headers:{
                  "Authorization":"Bearer "+this.token,
                  "subjectid":sid
              }
          },
          {
              emulateJSON:true
          }).then((response)=>{
              this.$set(this,'sub_content',response.data.data)
              console.log(response)
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

