<template>
  <div class="gmhy-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/wode"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        钢猫会员
      </div>
    </div>
    <div class="gmhy-top">
      <div class="gmhy-top-con clear">
        <div class="gmhy-top-con-le">
            <p>5.00</p>
            <p>我的积分</p>
        </div>
        <div class="gmhy-top-con-co">
          <img src="./images/txkwt.png" alt="" height="50px">
          <p><span>lucky</span>| <span>黄铜会员</span> </p>
        </div>
        <div class="gmhy-top-con-ri clear">
          <p>5</p>
          <p>成长值</p>
        </div>
      </div>
    </div>
    <div class="gmhy-content clear">
      <img src="./images/tp.png" alt="" height="50px">
      <div class="gmhy-content-text">
        <p>黄铜会员（1000成长值）</p>
        <div>黄铜会员可享受没消费100元可获得1点成长值</div>
      </div>
    </div>
    <div class="gmhy-content clear">
      <img src="./images/yp.png" alt="" height="50px">
      <div class="gmhy-content-text">
        <p>白银会员（700000成长值）</p>
        <div>白银会员可享受没消费100元可获得1.2点成长值</div>
      </div>
    </div>
    <div class="gmhy-content clear">
      <img src="./images/jp.png" alt="" height="50px">
      <div class="gmhy-content-text">
        <p>黄金会员（1000000成长值）</p>
        <div>黄金会员可享受没消费100元可获得1.5点成长值</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gmhy'
}
</script>

