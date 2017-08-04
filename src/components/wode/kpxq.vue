<template>
  <div class="kpxq-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wdfp"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        开票详情
      </div></div>
    <div class="wdqg-xxqg-content-wrap">
      <p class="kpxq-cpxq">开票信息</p>
      <div class="kpxq-cpxq-content-wrap clear">
        <div class="kpxq-cpxq-content-left">
          公司名称：
        </div>
        <div class="kpxq-cpxq-content-right">
          <div>{{kp.company_name}}</div>
        </div>
      </div>
      <div class="kpxq-cpxq-content-wrap clear">
        <div class="kpxq-cpxq-content-left">
          税号：
        </div>
        <div class="kpxq-cpxq-content-right">
          <div>{{kp.duty_paragraph}}</div>
        </div>
      </div>
      <div class="kpxq-cpxq-content-wrap clear">
        <div class="kpxq-cpxq-content-left">
          银行账号：
        </div>
        <div class="kpxq-cpxq-content-right">
          <div>{{kp.bank_account}}</div>
        </div>
      </div>
      <div class="kpxq-cpxq-content-wrap clear">
        <div class="kpxq-cpxq-content-left">
          开户银行：
        </div>
        <div class="kpxq-cpxq-content-right">
          <div>{{kp.bank}}</div>
        </div>
      </div>
      <div class="kpxq-cpxq-content-wrap clear">
        <div class="kpxq-cpxq-content-left">
          地址：
        </div>
        <div class="kpxq-cpxq-content-right">
          <div>{{kp.address}}</div>
        </div>
      </div>
      <div class="kpxq-cpxq-content-wrap clear">
        <div class="kpxq-cpxq-content-left">
          固定电话：
        </div>
        <div class="kpxq-cpxq-content-right">
          <div>{{kp.tel}}</div>
        </div>
      </div>
    </div>
    <div class="wdqg-xxqg-content-wrap">
      <p class="kpxq-cpxq">发票地址信息</p>
      <div class="kpxq-cpxq-content-wrap clear">
        <div class="kpxq-cpxq-content-left">
          收件人：
        </div>
        <div class="kpxq-cpxq-content-right">
          <div>{{kp.consignee}}</div>
       </div>
      </div>
      <div class="kpxq-cpxq-content-wrap clear">
        <div class="kpxq-cpxq-content-left">
          联系电话：
        </div>
        <div class="kpxq-cpxq-content-right">
          <div>{{kp.consignee_tel}}</div>
        </div>
      </div>
      <div class="kpxq-cpxq-content-wrap clear">
        <div class="kpxq-cpxq-content-left">
          邮编：
        </div>
        <div class="kpxq-cpxq-content-right">
          <div>{{kp.zip_code}}</div>
         </div>
      </div>
      <div class="kpxq-cpxq-content-wrap clear">
        <div class="kpxq-cpxq-content-left">
          传真：
        </div>
        <div class="kpxq-cpxq-content-right">
          <div>{{kp.fax}}</div>
         </div>
      </div>
      <div class="kpxq-cpxq-content-wrap clear">
        <div class="kpxq-cpxq-content-left">
          地址：
        </div>
        <div class="kpxq-cpxq-content-right">
          <div>{{kp.consignee_address}}</div>
       </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'kpxq',
    data(){
      return {
        kp:{}
      }
    },
    created:function () {
        this.get_kp()

    },
    methods:{
        get_kp(){
            this.kp=JSON.parse(localStorage.getItem('name'))
        }
    }
}
</script>

