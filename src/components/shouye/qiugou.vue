<template>
  <div class="qiugou1-wrap">
    <div class="denglu-top-wrap">
      <div class="denglu-top">
        <div><router-link to="/shouye"><img src="../denglu/images/jiantou.png" width="9px "></router-link></div>
        我的求购
      </div>
    </div>
    <div class="qiugou-wrap clear">
     <div @click="ta" :class="{ 'active': select }"  class="qiugou-left">
       快速求购
     </div>
     <div @click="ta1" :class="{ 'active1': select1 }"  class="qiugou-right">
       详细求购
     </div>
    </div>
    <div v-if="tab1">
    <div class="yhfk-con">
      <div contenteditable="true">请输入您的求购要求</div>
    </div>
    <div class="yhfk-img">
      <img src="../wode/images/dhk.png" alt="" height="56px">
      <span>最多上传五张照片</span>
    </div>
    <div class="sy-sh-wrap">
      <img src="./images/say.png" alt="" height="17.5px">
      按住说话
    </div>
    <div class="yuyin">（你也可以通过语音输入您的求购要求）</div>
     <div class="sy-ddtz-wrap">
       <img src="./images/iph.png" height="15px" alt="">
       <span></span>
       <input type="text" placeholder="请输入您的手机号">
     </div>
    </div>
    <div v-if="tab2">
       <div class="xxqg-wrap">
         <div class="xxqg-all clear">
           <div class="xxqg-all-left">产品种类:</div>
           <div class="xxqg-all-right">
             <img src="./images/arrow.png" alt="" height="4.5px">
           </div>
         </div>
         <div class="xxqg-all clear">
           <div class="xxqg-all-left">产品名称:</div>
           <div class="xxqg-all-right">

           </div>
         </div>
         <div class="xxqg-all clear">
           <div class="xxqg-all-left">材质要求:</div>
           <div class="xxqg-all-right">
             <img src="./images/arrow.png" alt="" height="4.5px">
           </div>
         </div>
         <div class="xxqg-all clear">
           <div class="xxqg-all-left">规格要求:</div>
           <div class="xxqg-all-right">

           </div>
         </div>

         <div class="xxqg-all clear">
           <div class="xxqg-all-left">数量:</div>
           <div class="xxqg-all-right">
             <img src="./images/arrow.png" alt="" height="4.5px">
             <span>选择单位</span>
           </div>
         </div>
         <div class="xxqg-all clear">
           <div class="xxqg-all-left">照片:</div>
           <div class="xxqg-all-right1 clear">
             <img src="./images/xj.png" alt="" height="45px">
             <div>点击上传照片</div>
           </div>
         </div>
         <div class="xxqg-all clear">
           <div class="xxqg-all-left">备注:</div>
           <div class="xxqg-all-right">

           </div>
         </div>
       </div>
      <div class="xxqg-wrap xxqg-wrap1">
        <div class="xxqg-all clear">
          <div class="xxqg-all-left">收货人:</div>
          <div class="xxqg-all-right">

          </div>
        </div>
        <div class="xxqg-all clear">
          <div class="xxqg-all-left">联系方式:</div>
          <div class="xxqg-all-right">

          </div>
        </div>
        <div class="xxqg-all clear">
          <div class="xxqg-all-left">收货地址:</div>
          <div class="xxqg-all-right">

          </div>
        </div>
      </div>
    </div>
    <div class="ddtz-footer">提交求购需求</div>
  </div>

</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
  export default {
    name: 'qiugou',
    data(){
        return{
            tab1:true,
            tab2:false,
          select:true,
          select1:false,
        }
    },
    methods:{
        ta:function () {
          this.tab1=true;
          this.tab2=false;
          this.select=true;
          this.select1=false;
        },
      ta1:function () {
        this.tab1=false;
        this.tab2=true;
        this.select1=true;
        this.select=false;
      },
    }

  }

</script>

