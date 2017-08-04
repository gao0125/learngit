  <template>
    <div class="xianhuo-wrap">
      <div class="denglu-top-wrap"><div class="denglu-top"><div><a href="#/shouye" class=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAiCAYAAABStIn6AAAArElEQVRIia3Wuw0CMRBF0bfQgnuhcciogGgDOqGASwArwWptz28kR5aObM9HXgAlokm6SuKURO6SLpLOAiKrASufWIFWggAqQbxQF/FAQ8QKTRELZEJmkBkZQS6kB7mRIyiE7KEw8gulkA1KIxv0+iLPKAIoM4/+o/JqZY9dmv7SgkxhvY2Spg1hsyOXDDYXZk1vyfA3Ya7qHWFeqItFoEMsCu2xxwLpj9ZNEm+VP6vrQGCcgAAAAABJRU5ErkJggg==" width="9px "></a></div>
        商城
      </div></div>
      <div class="xianhuo-nav">
        <ul class="xianhuo-nav-all clear">
          <li v-for="(item,key) in catalist" class="xianhuo-nav-text" :class="{ 'xianhuonavstyle': nav  }" @click="navcx1(item.id)">
            {{item.name}}
          </li>
          <!--<li class="xianhuo-nav-text" @click="navcx2">-->
            <!--热卷-->
          <!--</li>-->
          <!--<li class="xianhuo-nav-text" :class="{ 'xianhuonavstyle': nav2 }" @click="navcx3">-->
            <!--中厚板-->
          <!--</li>-->
          <!--<li class="xianhuo-nav-text" :class="{ 'xianhuonavstyle': nav3  }" @click="navcx4">-->
            <!--冷轧涂渡-->
          <!--</li>-->
          <!--<li class="xianhuo-nav-text" :class="{ 'xianhuonavstyle': nav4  }" @click="navcx5">-->
            <!--管材-->
          <!--</li>-->
          <!--<li class="xianhuo-nav-text" :class="{ 'xianhuonavstyle': nav5  }" @click="navcx6">-->
            <!--型钢-->
          <!--</li>-->
          <!--<li class="xianhuo-nav-text" :class="{ 'xianhuonavstyle': nav6  }" @click="navcx7">-->
            <!--优特钢-->
          <!--</li>-->
        </ul>
      </div>

      <div v-if="nav" class="xianhuo-content-wrap">
        <div v-for="items in pList" class="xianhuo-content">
          <router-link :to="{path:'/cpxq',query: {id:items.id}}">
          <div class="xianhuo-content-text clear">
            <div class="sc-content-le">
              <img :src="'http://m.gangmao.biz/'+items.shop_logo" alt="">
            </div>
            <div class="xianhuo-content-ri">
              <div class="xianhuo-content-ri-con">品名：<span>{{items.title}}</span></div>
              <div class="xianhuo-content-ri-con">材质：<span>{{items.material_name}}</span></div>
              <div class="xianhuo-content-ri-con">标准：<span>{{items.standard}}</span></div>
              <div class="xianhuo-content-ri-con">仓库：<span>{{items.warehouse_name}}</span><span v-if="items.quantity<50&&items.quantity>0" style="color: #f96f29">（资源紧张）</span>
                <span v-else-if="items.quantity==0" style="color: #f96f29">（库存已售罄）</span></div>
              <div class="xianhuo-content-ri-con" style="color: #f96f29">￥<span>{{items.price.toFixed(2)}}/{{items.unit_name}}</span></div>
            </div>
            <div class="sc-right">
              <div class="xianhuo-content-ri-con">规格：<span>{{items.specification_label}}</span></div>
              <div class="xianhuo-content-ri-con">产地：<span>{{items.manufacturer_name}}</span></div>

            </div>
          </div>
          </router-link><br/>
          <div class="sc-xg">选购</div>
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
                  nav6: false,
                  catalist:[],
                  pList:[],
              }
          },
          created:function () {
              this.getList()
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
                  var a='{"cataid":["'+key+'"],"range":{"shopid":{"min":"2"}}}';
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

              },
          }

      }
  </script>

