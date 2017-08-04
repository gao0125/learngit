<template>
    <div class="xianhuo-wrap">
        <div class="fl-top1">
            <div class="shouye-top clear">
                <div class="shouye-top-left">
                    <!--<router-link to="/fenlei">-->
                        <img src="../denglu/images/jiantou.png"  @click="$router.back(-1)" alt="" width="9px">
                    <!--</router-link>-->

                </div>
                <div class="shouye-top-con">
                    <div class="shouye-top-con-ba"></div>
                    <img src="../shouye/images/search.png" alt="" height="15px">
                    <input type="text" placeholder="请输入商品名">
                </div>
                </div>
        </div><br><br>
            <div v-for="items in pList" class="xianhuo-content">
                <router-link :to="{path:'/cpxq',query: {id:items.id}}">
                    <div class="xianhuo-content-text clear">
                        <div class="xianhuo-content-le">
                            <img :src="'http://m.gangmao.biz/'+items.imgurl" alt="" width="135px" height="135px">
                        </div>
                        <div class="xianhuo-content-ri">
                            <p class="xianhuo-content-ri-top">{{items.title}}</p>
                            <div class="xianhuo-content-ri-con">材质：<span>{{items.material_name}}</span></div>
                            <div class="xianhuo-content-ri-con">规格：<span>{{items.specification_label}}</span></div>
                            <div class="xianhuo-content-ri-con">标准：<span>{{items.standard}}</span></div>
                            <div class="xianhuo-content-ri-con">产地：<span>{{items.manufacturer_name}}</span></div>
                            <div class="xianhuo-content-ri-con">仓库：<span>{{items.warehouse_name}}</span><span v-if="items.quantity<50&&items.quantity>0" style="color: #f96f29">（库存紧张）</span>
                                <span v-else-if="items.quantity==0" style="color: #f96f29">（库存已售罄）</span></div>
                            <div class="xianhuo-content-ri-co">￥{{items.price.toFixed(2)}}/{{items.unit_name}}</div>
                        </div>
                    </div>
                </router-link>
                <div class="xianhuo-gwc"><img src="./images/gwc.png" alt="" height="23px"></div>


            </div>
        <div class="gwctj-wrap">
            <span>1</span>
        </div>
    </div>
</template>

<script>

    export default{
        name:'cplb',
        data(){
            return{
                pList:[],
            }
        },
        created:function(){
            this.getList();
        },
        methods:{
            getList(){
                var id = this.$route.query.id;
                var a='{"cataid":["'+id+'"]}';
                var b=encodeURIComponent(a);
                console.log(b)

                this.$http.get('/v1/products/search/'+b+'?page=1?suppress_response_code=1',
                    {
                        headers:{"Authorization":"Bearer "+this.token}
                    },
                    {
                        emulateJSON : true
                    }).then((response) => {
                    this.$set(this, 'pList', response.data.list);
                    console.log(response)
                })

            }
        }

    }
</script>
<style>
    .fl-top1{
        width: 100%;
        background: #f96f29;
        position: fixed;
        top: 0;
        height: 45px;
        z-index: 2222;
    }
</style>
