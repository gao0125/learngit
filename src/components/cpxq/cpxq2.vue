<template>
    <div class="cpxq-wrap">
        <transition name="fade">
            <div  v-if="tc" class="sq-bk"></div>
        </transition>
        <transition name="fade">
            <div  v-if="tc" class="sqtc-con">
                <div class="sqtc-con-top clear">
                    <div>
                        <img src="../shequ/images/wechat.png" alt="" height="60">
                        <p>微信好友</p>
                    </div>
                    <div>
                        <img src="../shequ/images/pyq.png" alt="" height="60">
                        <p>微信朋友圈</p>
                    </div>
                    <div>
                        <img src="../shequ/images/qq.png" alt="" height="60">
                        <p>QQ</p>
                    </div>


                    <div>
                        <img src="../shequ/images/qqkj.png" alt="" height="60">
                        <p>QQ空间</p>
                    </div>
                    <div>
                        <img src="../shequ/images/yj.png" alt="" height="60">
                        <p>邮件</p>
                    </div>
                    <div>
                        <img src="../shequ/images/dx.png" alt="" height="60">
                        <p>短信</p>
                    </div>
                </div>
                <div class="sqtc-con-bottom" @click="xs">取消</div>
            </div>
        </transition>
        <div class="cpxq-top-wrap">
            <div class="cpxq-top-all clear">
                <div class="cpxq-top-left">
                    <router-link to="/shouye">
                        <img src="../denglu/images/jiantou.png" @click="$router.back(-1)" alt="" width="9px">
                    </router-link>
                </div>
                <ul class="cpxq-top-con clear">
                    <li class="cpxq-top-con-text"  :class="{ 'cpxqsty': cpxqtop }" @click="navcx1">商品</li>
                    <li class="cpxq-top-con-text"  :class="{ 'cpxqsty': cpxqtop1 }" @click="navcx2">详情</li>
                    <li class="cpxq-top-con-text"  :class="{ 'cpxqsty': cpxqtop2 }" @click="navcx3">评价</li>
                </ul>
                <div class="cpxq-top-right">
                    <img src="./images/share.png" alt="" height="16px" @click="tac">
                </div>
            </div>
        </div>


        <div v-if="cpxqcon">
            <!--点击放大图片-->
            <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
            <swiper :options="swiperOption" ref="mySwiperA">
                <!-- 幻灯内容 -->
                <swiper-slide v-for="(pi,index) in pic">
                    <img :src="'http://m.gangmao.biz/'+pi.url" @click="show(index)" alt="" height="366px" width="100%">

                </swiper-slide>
                <div v-transfer-dom>
                    <previewer :pic="pic" ref="previewer" :options="options"></previewer>
                </div>

                <swiper-slide v-if="pic==''"><img src="./images/cpxq-kwt.png" alt="" height="366px" width="100%"></swiper-slide>
                <!-- 以下控件元素均为可选 -->
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-pagination1" slot="pagination1"></div>
            </swiper>

            <div class="cpxq-js-wrap">
                <p>
                    {{pList.title}}
                    {{pMaterial.name}}
                    {{pList.production_tech}}
                    {{pList.specification}}
                    {{pList.standard}}
                </p>
                <div class="cpxq-js-text">￥ <span>{{pList.price}}/{{pList.unit_name}}</span></div>

            </div>
            <div style="width: 100%;background: #ffffff">
                <div class="cpxq-js-tex clear">
                    <div>领劵</div>
                    <p><img @click="lq()" src="./images/yd.png" alt="" height="5px"></p>
                </div>
            </div>
            <div class="cpxq-yx-wrap">
                <div class="cpxq-yx-all clear">
                    <div class="cpxq-yx-left">已选<span >螺纹钢φ25*9 φ25*9</span></div>
                    <div class="cpxq-yx-right"><img src="./images/yd.png" alt="" height="5px"></div>
                </div>
            </div>
            <div class="cpxq-yx-wrap">
                <div class="cpxq-yx-all clear">
                    <div class="cpxq-yx-left">地址<span >登录之后展示默认收货地址</span></div>
                    <div class="cpxq-yx-right"><img src="./images/yd.png" alt="" height="5px"></div>
                </div>
            </div>
            <div class="cpxq-pinglun-wrap">
                <div class="cpxq-pinglun-top1">
                    <div class="cpxq-pinglun-top">
                        评论 <span>({{pl.length}})</span>
                    </div>
                </div>
                <div v-for="items in pl" class="cpxq-pl-content-wrap">
                    <div class="cpxq-pl-content-all">
                        <div class="cpxq-pl-content-top clear">
                            <div class="cpxq-pl-content-top-le">
                                <img v-if="items.level==3" src="./images/star.png" alt="" height="12px">
                                <img v-if="items.level==2" v-for="im in 2" src="./images/star.png"                                  alt="" height="12px">
                                <img v-if="items.level==1" v-for="im in 3" src="./images/star.png" alt="" height="12px">
                            </div>
                            <div class="cpxq-pl-content-top-ri">{{items.nickname}}</div>
                        </div>
                        <div class="cpxq-pl-content-text">
                            {{items.comment}}
                        </div>
                        <!--产品评论图片-->
                        <div v-if="items.imgs.length<5" class="cpxq-pingjia-con-img clear">

                        </div>
                        <div v-else>
                            <img v-for="tp in JSON.parse(items.imgs)" @click="clickImg($event)" :src="'http://m.gangmao.biz/'+tp" alt="" width="70px" style="margin:5px 12px 0px 0px " height="70px" />
                        </div>
                        <div class="cpxq-pl-content-date">
                            {{items.created_at}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
        <div class="cpxq-top-wrap1" v-if="cpxqcon1">
            <div class="cpxq-xq-top-wrap">
                <div class="cpxq-xq-top-all clear">
                    <div class="cpxq-xq-top-all-text"   :class="{ 'cpxqcpjs': cpxqtop0 }" @click="navcx11">产品介绍</div>
                    <div class="cpxq-xq-top-all-text"   :class="{ 'cpxqcpjs': cpxqtop11 }" @click="navcx22">规格参数</div>
                    <div class="cpxq-xq-top-all-text"   :class="{ 'cpxqcpjs': cpxqtop22 }" @click="navcx33">售后服务</div>
                </div>
            </div>
        </div>
        <div v-if="cpxqcon2">
            <div v-for="items in pl" class="cpxq-pingjia-wrap">
                <div class="cpxq-pingjia-all">
                    <div class="cpxq-pingjia-top clear">
                        <div class="cpxq-pingjia-top-left">
                            <img v-if="items.level==3" src="./images/star.png" alt="" height="12px">
                            <img v-if="items.level==2" v-for="im in 2" src="./images/star.png"                                  alt="" height="12px">
                            <img v-if="items.level==1" v-for="im in 3" src="./images/star.png" alt="" height="12px">
                        </div>
                        <div class="cpxq-pingjia-top-right">
                            {{items.nickname}}
                        </div>
                    </div>
                    <div class="cpxq-pingjia-con">
                        {{items.comment}}
                    </div>
                    <div v-if="items.imgs.length<5" class="cpxq-pingjia-con-img clear">

                    </div>
                    <div v-else>
                        <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
                        <img v-for="tp in JSON.parse(items.imgs)" :src="'http://m.gangmao.biz/'+tp" alt="" width="70px" @click="clickImg($event)" style="margin:5px 12px 0px 0px " height="70px" />
                    </div>
                    <div class="cpxq-pingjia-con1">
                        {{items.created_at}}
                    </div>
                </div>
            </div>

        </div>
        <div class="cpxq-footer-wrap clear">
            <div class="cpxq-footer-left clear">
                <div class="cpxq-footer-left-con">
                    <img src="./images/kf.png" alt="" height="17px">
                    <p>客服</p>
                </div>
                <div class="cpxq-footer-left-con">
                    <img src="./images/dp.png" alt="" height="17px">
                    <p>店铺</p>
                </div>
                <div class="cpxq-footer-left-con">
                    <img src="./images/sc.png" alt="" height="17px"v-if="sc2" @click="scb">
                    <img src="./images/sc1.png" alt="" height="17px" v-if="sc1" @click="sca">
                    <p>收藏</p>
                </div>
                <router-link :to="{path:'/gwc',query:{gwc_id:String(this.$route.query.id)}}">
                <div class="cpxq-footer-left-con">
                    <img src="./images/gwc.png" alt="" height="17px">
                    <p>购物车</p>
                </div>
                </router-link>
            </div>
            <div class="cpxq-footer-right">加入购物车</div>
        </div>
    </div>
</template>

<script>
    import BigImg from '../tool/tpfd.vue';
    import { Previewer, TransferDom } from 'vux'
    export default {
        directives: {
            TransferDom
        },
        name: 'cpxq',
        data(){
            return{
                showImg:false,
                imgSrc: '',
                tc:false,
                sc2:true,
                sc1:false,
                cpxqtop:true,
                cpxqtop1:false,
                cpxqtop2:false,
                cpxqtop0:true,
                cpxqtop11:false,
                cpxqtop22:false,
                cpxqcon:true,
                cpxqcon1:false,
                cpxqcon2:false,
                swiperOption: {
                    notNextTick: true,
                    autoplay: 2500,
                    slideTo:true,
                    initialSlide: true,
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: true,
                    pagination : '.swiper-pagination',
                    paginationType : 'fraction',
                    paginationClickable :true,
                    mousewheelControl : true,
                    observeParents:true,
                    autoplayDisableOnInteraction : false,
                    loop : true,
                    uniqueNavElements :false,
                },
                pList:{},
                pMaterial:{},
                pl:{},
                hh:{},
                pic:[],
                options: {
                    getThumbBoundsFn (index) {
                        // find thumbnail element
                        let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
                        // get window scroll Y
                        let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                        // optionally get horizontal scroll
                        // get position of element relative to viewport
                        let rect = thumbnail.getBoundingClientRect()
                        // w = width
                        return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
                        // Good guide on how to get element coordinates:
                        // http://javascript.info/tutorial/coordinates
                    }
                },

            }
        },
        created:function(){
//            console.log(12);
            this.get_xq();

        },
        components: {
            'big-img':BigImg,
            Previewer,
        },
        methods: {
            show (index) {
                this.$refs.previewer.show(index)
            },
            tac(){
                this.tc=true
            },
            xs(){
                this.tc=false
            },
            navcx1(){
                this.cpxqtop=true;
                this.cpxqtop1=false;
                this.cpxqtop2=false;
                this.cpxqcon=true;
                this.cpxqcon1=true;
                this.cpxqcon2=false;
            },
            navcx2(){
                this.cpxqtop1=true;
                this.cpxqtop=false;
                this.cpxqtop2=false;
                this.cpxqcon1=true;
                this.cpxqcon=false;
                this.cpxqcon2=false;
            },
            navcx3(){
                this.cpxqtop2=true;
                this.cpxqtop=false;
                this.cpxqtop1=false;
                this.cpxqcon2=true;
                this.cpxqcon1=false;
                this.cpxqcon=false;
            },
            navcx11(){
                this.cpxqtop0=true;
                this.cpxqtop11=false;
                this.cpxqtop22=false;
            },
            navcx22(){
                this.cpxqtop11=true;
                this.cpxqtop0=false;
                this.cpxqtop22=false;
            },
            navcx33(){
                this.cpxqtop22=true;
                this.cpxqtop0=false;
                this.cpxqtop11=false;
            },
            scb(){
                this.sc1=true;
                this.sc2=false;
            },
            sca(){
                this.sc2=true;
                this.sc1=false;
            },
            get_xq(){
                var id = String(this.$route.query.id); //获取传递的参数
                //调用产品详情接口
                this.$http.get('/v1/products/'+id+'?suppress_response_code=1',
                {
                    headers:{"Authorization":"Bearer "+this.token}
                },
                {
                    emulateJSON : true
                }).then((response) => {
                this.$set(this, 'pList', response.data.data);
                this.$set(this, 'pMaterial', response.data.data.material);
                this.get_pl();
                });
            },
            get_pl(){
                //调用产品评论接口
                var id = String(this.$route.query.id); //获取传递的参数
                this.$http.get('/v1/product-comments?page=1&suppress_response_code=1',
                    {
                        headers:{
                            "Authorization":"Bearer "+this.token,"productid":id
                        }
                    },
                    {
                        emulateJSON : true
                    }).then((response) => {
                    this.$set(this, 'pl', response.data.data);
                    this.get_pic();
                });
            },
            lq(){
                alert(12)
            },
            get_pic(){//获取产品详情轮播图片
                var id = String(this.$route.query.id); //获取传递的参数
                this.$http.get('/v1/product-imgs?suppress_response_code=1',
                    {
                        headers:{
                            "Authorization":"Bearer "+this.token,"productid":id
                        }
                    },
                    {
                        emulateJSON : true
                    }).then((response) => {
                    this.$set(this, 'pic', response.data.data);
                });
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
    @import "cpxq.css";
    .cpxq-wrap .swiper-pagination{
        width: 40px;
        height: 40px;
        background: #999999;
        border-radius: 40px;
        line-height: 40px;
        color: #ffffff;
        font-size: 12px;
        margin-top: 170px;
        margin-left: 83%;
    }
    .cpxq-wrap .swiper-pagination span{
        background: none;

    }
</style>
