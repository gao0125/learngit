<template>
  <div class="rzgl-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wode"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        认证管理
      </div>
    </div>
    <div class="rzgl-con">
      <div class="rzgl-con-text">
        会员认证开通后，该用户下的所有活动将视为企业行为。由该企业承担相应的权益和责任。

      </div>
    </div>
    <div class="rzgl-con-1">
      <div class="rzgl-con-1-text clear">
        <div class="rzgl-con-1-text-le">公司名称</div>
        <div class="rzgl-con-1-text-ri"><input type="text" placeholder="请输入公司名称"></div>
      </div>
    </div>
    <div class="rzgl-con-1">
      <div class="rzgl-con-1-text clear">
        <div class="rzgl-con-1-text-le">统一社会信用代码</div>
        <div class="rzgl-con-1-text-ri"><input type="text" placeholder="请输入统一社会信用代码"></div>
      </div>
    </div>
    <div class="rzgl-con-1">
      <div class="rzgl-con-1-text clear">
        <div class="rzgl-con-1-text-le">开户银行</div>
        <div class="rzgl-con-1-text-ri"><input type="text" placeholder="开户银行"></div>
      </div>
    </div>
    <div class="rzgl-con-1">
      <div class="rzgl-con-1-text clear">
        <div class="rzgl-con-1-text-le">银行账号</div>
        <div class="rzgl-con-1-text-ri"><input type="text" placeholder="请输入银行账号"></div>
      </div>
    </div>
    <div class="rzgl-con-1">
      <div class="rzgl-con-1-text clear">
        <div class="rzgl-con-1-text-le">固定电话</div>
        <div class="rzgl-con-1-text-ri"><input type="text" placeholder="请输入固定电话"></div>
      </div>
    </div>
    <div class="rzgl-con-1">
      <div class="rzgl-con-1-text clear">
        <div class="rzgl-con-1-text-le">公司地址</div>
        <div class="rzgl-con-1-text-ri"><input type="text" placeholder="请输入公司地址"></div>
      </div>
    </div>

    <div class="rzgl-con-1">
      <div class="rzgl-con-1-text clear">
        <div class="rzgl-con-1-text-le">上传营业执照</div>
        <div class="rzgl-con-1-text-img"><img src="./images/xj.png" alt="" height="21.5px"></div>
      </div>
    </div>
    <div class="rzgl-con-1">
      <div class="rzgl-con-1-text clear">
        <div class="rzgl-con-1-text-le">上传开票资料</div>
        <div class="rzgl-con-1-text-img"><img src="./images/xj.png" alt="" height="21.5px"></div>
      </div>
    </div>
    <div class="rzgl-con-1">
      <div class="rzgl-con-1-text clear">
        <div class="rzgl-con-1-text-le">上传联系人名片（正）</div>
        <div class="rzgl-con-1-text-img"><img src="./images/xj.png" alt="" height="21.5px"></div>
      </div>
    </div>
    <div class="rzgl-con-1">
      <div class="rzgl-con-1-text clear">
        <div class="rzgl-con-1-text-le">上传联系人名片（反）</div>
        <div class="rzgl-con-1-text-img"><img src="./images/xj.png" alt="" height="21.5px"></div>
      </div>
    </div>
    <div class="zc-zc"><router-link to="/zzrz">提交认证</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'rzgl'
}
</script>

