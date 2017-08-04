<template>
  <div class="wdxx-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wode"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        我的信息
      </div>
    </div>
    <div class="wdxx-con">
      <div class="wdxx-con-text clear">
      <div class="wdxx-con-text-le">头像</div>
      <div class="wdxx-con-text-ri clear">
        <div class="wdxx-con-text-ri-le"><img src="./images/wddd.png" alt="" height="11.5px"></div>
        <div class="wdxx-con-text-ri-ri"><img :src="userlist.headimgurl" alt="" height="40px"></div>
      </div>
      </div>
    </div>
    <div class="wdxx-con1">
      <div class="wdxx-con-text clear">
        <div class="wdxx-con-text-le">用户名</div>
        <div class="wdxx-con-text-ri clear">
          <div class="wdxx-con-text-ri-le1"><img src="./images/wddd.png" alt="" height="11.5px"></div>
          <div class="wdxx-con-text-ri-ri"><p>{{userlist.nickname}}</p></div>
        </div>
      </div>
    </div>
    <div class="wdxx-con1">
      <div class="wdxx-con-text clear">
        <div class="wdxx-con-text-le">姓名</div>
        <div class="wdxx-con-text-ri clear">
          <div class="wdxx-con-text-ri-le1"><img src="./images/wddd.png" alt="" height="11.5px"></div>

        </div>
      </div>
    </div>
    <div class="wdxx-con1">
      <div class="wdxx-con-text clear">
        <div class="wdxx-con-text-le">性别</div>
        <div class="wdxx-con-text-ri clear">
          <div class="wdxx-con-text-ri-le1"><img src="./images/wddd.png" alt="" height="11.5px"></div>
          <div class="wdxx-con-text-ri-ri"><p>{{userlist.sex}}</p></div>
        </div>
      </div>
    </div>
    <div class="wdxx-con1">
      <div class="wdxx-con-text clear">
        <div class="wdxx-con-text-le">出生日期</div>
        <div class="wdxx-con-text-ri clear">
          <div class="wdxx-con-text-ri-le1"><img src="./images/wddd.png" alt="" height="11.5px"></div>
          <div class="wdxx-con-text-ri-ri"><p>{{userlist.birth}}</p></div>
        </div>
      </div>
    </div>
    <div class="wdxx-con1">
      <div class="wdxx-con-text clear">
        <div class="wdxx-con-text-le">手机号码</div>
        <div class="wdxx-con-text-ri clear">
          <div class="wdxx-con-text-ri-le1">11111111</div>
        </div>
      </div>
    </div>
    <div class="wdxx-con1">
      <div class="wdxx-con-text clear">
        <div class="wdxx-con-text-le">邮箱</div>
       <!-- <div class="wdxx-con-text-ri clear">
          <div class="wdxx-con-text-ri-le1"><img src="./images/wddd.png" alt="" height="11.5px"></div>
          <div class="wdxx-con-text-ri-ri"><p>Lucky</p></div>
        </div>-->
      </div>
    </div>
    <div class="wdxx-con1">
      <div class="wdxx-con-text clear">
        <div class="wdxx-con-text-le">公司名称</div>
        <div class="wdxx-con-text-ri clear">
          <div class="wdxx-con-text-ri-le1"><img src="./images/wddd.png" alt="" height="11.5px"></div>
        </div>
      </div>
    </div>
    <div class="wdxx-con1">
      <div class="wdxx-con-text clear">
        <div class="wdxx-con-text-le">职位</div>
        <div class="wdxx-con-text-ri clear">
          <div class="wdxx-con-text-ri-le1"><img src="./images/wddd.png" alt="" height="11.5px"></div>
        </div>
      </div>
    </div>
    <div class="wdxx-con1">
      <div class="wdxx-con-text clear">
        <div class="wdxx-con-text-le">办公地址</div>
        <div class="wdxx-con-text-ri clear">
          <div class="wdxx-con-text-ri-le1"><img src="./images/wddd.png" alt="" height="11.5px"></div>
        </div>
      </div>
    </div>
    <div class="wdxx-con1">
      <div class="wdxx-con-text clear">
        <div class="wdxx-con-text-le">收货地址</div>
        <div class="wdxx-con-text-ri clear">
          <div class="wdxx-con-text-ri-le1"><img src="./images/wddd.png" alt="" height="11.5px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'wodexinxi',
    data() {
        return {
            wodexinxi: true,
            userlist:[],
        }
    },
    created:function(){
        this.getUser();
    },
    methods:{
        getUser: function() {
            this.$http.get('/v1/users/1', {headers:{"Authorization":"Bearer 666183fc579807517dc96e0f89d2474d_$1","userid":"1"}},{emulateJSON: true})
                .then((response) => {
                    this.$set(this, 'userlist', response.data)
                    this.userlist = response.data

                    console.log(response.data[0]);
                })
                .catch(function(response) {
                    console.log(response)
                })
        }
    }

}
</script>

