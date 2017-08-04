<template>
  <div class="quanguo">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div>
          <router-link to="/shouye"><img src="../denglu/images/jiantou.png" width="9px "></router-link>
        </div>
        选择城市
      </div>
    </div>
    <div class="quanguo-wrap">
      <div class="quanguo-all">
        <p><img src="./images/dw1.png" alt="" height="16px"><span>当前城市</span></p>
        <div class="zzdw">正在定位</div>
      </div>
      <div class="quanguo-all">
        <p><img src="./images/hot.png" alt="" height="16px"><span>热门城市</span></p>
        <ul>
          <router-link :to="{path: '/shouye'}">
          <li class="zzdw1"  style="float: left;width:30%">全国</li>
          </router-link>
          <router-link v-for="item in area" :to="{path: '/shouye', query: { 'areaid': item.id ,'areaname':item.name}}">

          <li class="zzdw1"  style="float: left;width:30%" :value="item.id">{{item.name}}</li>

          </router-link>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quanguo',
    data(){
      return {
          area:[]
      }
    },
    created:function () {
        this.get_area();
    },
    methods:{
        get_area(){
            this.$http.get("/v1/metas/cnHotArea?suppress_response_code=1",
            {
                headers:{
                    "Authorization":"Bearer "+this.token
                }
            },
            {
                emulateJSON:true
            }).then((response)=>{
                this.$set(this,'area',response.data.data)
            })
        }
    }

}
</script>

