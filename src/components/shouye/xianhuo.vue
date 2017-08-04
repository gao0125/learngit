<template>
  <div class="xianhuo-wrap">
    <div class="denglu-top-wrap"><div class="denglu-top"><div><a href="#/shouye" class=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAiCAYAAABStIn6AAAArElEQVRIia3Wuw0CMRBF0bfQgnuhcciogGgDOqGASwArwWptz28kR5aObM9HXgAlokm6SuKURO6SLpLOAiKrASufWIFWggAqQbxQF/FAQ8QKTRELZEJmkBkZQS6kB7mRIyiE7KEw8gulkA1KIxv0+iLPKAIoM4/+o/JqZY9dmv7SgkxhvY2Spg1hsyOXDDYXZk1vyfA3Ya7qHWFeqItFoEMsCu2xxwLpj9ZNEm+VP6vrQGCcgAAAAABJRU5ErkJggg==" width="9px "></a></div>
      现货
    </div></div>
    <div class="xianhuo-nav">
      <ul class="xianhuo-nav-all clear">
        <li v-for="(item,key) in catalist" class="xianhuo-nav-text" :class="{ 'xianhuonavstyle': nav  }" @click="navcx1(item.id)">
          {{item.name}}
        </li>
      </ul>
    </div>

    <div v-if="nav"  class="xianhuo-content-wrap">
      <div v-for="items in pList" class="xianhuo-content">
        <router-link :to="{path:'/cpxq',query: {id:items.id}}">
        <div class="xianhuo-content-text clear">
          <div class="xianhuo-content-le">
            <img :src="'http://m.gangmao.biz/'+items.imgurl" alt="" width="135px" height="135px">
          </div>
          <div class="xianhuo-content-ri">
            <p class="xianhuo-content-ri-top">{{items.title}}</p>
            <div class="xianhuo-content-ri-con">材质：<span>{{items.material_name}}</span></div>
            <div class="xianhuo-content-ri-con">规格：<span>{{items.specification}}</span></div>
            <div class="xianhuo-content-ri-con">标准：<span>{{items.standard}}</span></div>
            <div class="xianhuo-content-ri-con">产地：<span>{{items.manufacturer_name}}</span></div>
              <div class="xianhuo-content-ri-con">仓库：<span>{{items.warehouse_name}}</span><span v-if="items.quantity<50&&items.quantity>0" style="color: #f96f29">（库存紧张）</span>
                  <span v-else-if="items.quantity==0" style="color: #f96f29">（库存已售罄）</span>
              </div>
            <div class="xianhuo-content-ri-co">￥{{items.price.toFixed(2)}}/{{items.unit_name}}</div>
          </div>
        </div>
        </router-link>
        <div class="xianhuo-gwc"><img src="./images/gwc.png" alt="" height="23px"></div>


      </div>
    </div>
    <div class="gwctj-wrap">
      <span>1</span>
    </div>
  </div>
</template>

  <script>

  export default{
    name:'xianhuo',
    data(){
        return{
            selected: false,
            xhall: true,
            nav: true,
            nav1: false,
            nav2: false,
            nav3: false,
            nav4: false,
            nav5: false,
          catalist:[],
            pList:[],
        }
    },
    created:function(){
        this.getList();
    },
    methods:{
      navcx1(key){
        this.nav=true;
        this.nav1=false;
        this.nav2=false;
        this.nav3=false;
        this.nav4=false;
        this.nav5=false;
        this.nav6=false;

        var a='{"cataid":['+key+'],"shopid":["1"]}';
        var b=encodeURIComponent(a);
        this.$http.get('/v1/products/search/'+b+'?page=1?suppress_response_code=1',
        {
            headers:{"Authorization":"Bearer "+this.token}
        },
        {
            emulateJSON : true
        }).then((response) => {
        this.$set(this, 'pList', response.data.list);
        })
      },
        getList(){
            this.$http.get('/v1/catas?suppress_response_code=1',
                {

                    headers:{"Authorization":"Bearer "+this.token,"cataid":"0"}
                },
                {
                    emulateJSON : true
                }).then((response) => {
                    this.$set(this, 'catalist', response.data.data);
                });
            var a='{"cataid":["24"],"shopid":["1"]}';
            var b=encodeURI(a);
            this.$http.get('/v1/products/search/'+b+'?page=1?suppress_response_code=1',
                {
                    headers:{"Authorization":"Bearer "+this.token}
                },
                {
                    emulateJSON : true
                }).then((response) => {
                    this.$set(this, 'pList', response.data.list);
                })

        }
    }

  }
</script>

