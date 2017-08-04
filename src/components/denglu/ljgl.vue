<template>
 <div class="ljgl-wrap">
   <div class="denglu-top-wrap">
     <div class="denglu-top">
       <div>
         <router-link to="/lhdl"><img src="./images/jiantou.png" width="9px "></router-link>
       </div>
       关联账号
     </div>
   </div>
   <div class="ljgl-gl">
     <div class="ljgl-gl-zh">关联已有钢猫账号</div>  
   </div>
   <div class="gmzc gmzc1">
     <span class="gmzc-phon"><img src="./images/phon.png" height="14.5px" alt=""></span>
     <input type="text" placeholder="请输入账号">
   </div>
   <div class="gmzc-1">
     <span class="gmzc-phon gmzc-phon-1"><img src="./images/suo.png" height="11" alt=""></span>
     <input type="text" placeholder="请输入密码">
   </div>
   <div class="ljgl-gl">
     <div class="ljgl-gl-zh">关联后，您的QQ账号和钢猫账号都可以登录</div>
   </div>
   <div class="dl dl2">登录</div>
   <div class="ljgl-gl">
     <div class="ljgl-gl-zhmm"><router-link to="/zhmm"> 找回密码</router-link></div>

   </div>
 </div>
</template>

<script>
export default {
  name: 'ljgl'
}
</script>

