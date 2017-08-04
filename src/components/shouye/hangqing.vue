<template>
  <div class="hyzx-wrap">
    <div class="denglu-top-wrap"><div class="denglu-top"><div><a href="#/shouye" class=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAiCAYAAABStIn6AAAArElEQVRIia3Wuw0CMRBF0bfQgnuhcciogGgDOqGASwArwWptz28kR5aObM9HXgAlokm6SuKURO6SLpLOAiKrASufWIFWggAqQbxQF/FAQ8QKTRELZEJmkBkZQS6kB7mRIyiE7KEw8gulkA1KIxv0+iLPKAIoM4/+o/JqZY9dmv7SgkxhvY2Spg1hsyOXDDYXZk1vyfA3Ya7qHWFeqItFoEMsCu2xxwLpj9ZNEm+VP6vrQGCcgAAAAABJRU5ErkJggg==" width="9px "></a></div>
      行业资讯
    </div></div>

    <swiper :options="swiperOption" ref="mySwiperA">
      <!-- 幻灯内容 -->
      <swiper-slide><img src="./images/banner2.png" alt="" height="164px" width="100%"></swiper-slide>
      <swiper-slide><img src="./images/banner1.png" alt="" height="164px" width="100%"></swiper-slide>
      <swiper-slide><img src="./images/bnaner3.png" alt="" height="164px" width="100%"></swiper-slide>
      <swiper-slide><img src="./images/banner_empty.png" alt="" height="164px" width="100%"></swiper-slide>
      <!-- 以下控件元素均为可选 -->
      <div class="swiper-pagination" slot="pagination" style="width: 160%;"></div>
    </swiper>

    <div class="hyzx-content-wrap">
      <div class="hyzx-content-all clear">
        <div class="hyzx-content-left">
          <img src="./images/sc.png" alt="">
        </div>
        <div class="hyzx-content-right">
          <p class="hyzx-content-right-top">
            你好
          </p>
          <p class="hyzx-content-right-top1">
            我好
          </p>
          <div class="hyzx-content-right-top2 clear">
            <p class="hyzx-content-right-top2-left">大家好</p>
            <p class="hyzx-content-right-top2-right">05-18</p>
          </div>
        </div>
      </div>
    </div>
    <div class="hyzx-content-wrap">
      <div class="hyzx-content-all clear">
        <div class="hyzx-content-left">
          <img src="./images/more.png" alt="">
        </div>
        <div class="hyzx-content-right">
          <p class="hyzx-content-right-top">
            你好
          </p>
          <p class="hyzx-content-right-top1">
            我好
          </p>
          <div class="hyzx-content-right-top2 clear">
            <p class="hyzx-content-right-top2-left">大家好</p>
            <p class="hyzx-content-right-top2-right">05-18</p>
          </div>
        </div>
      </div>
    </div>
    <div class="hyzx-content-wrap">
      <div class="hyzx-content-all clear">
        <div class="hyzx-content-left">
          <img src="./images/sc.png" alt="">
        </div>
        <div class="hyzx-content-right">
          <p class="hyzx-content-right-top">
            你好
          </p>
          <p class="hyzx-content-right-top1">
            我好
          </p>
          <div class="hyzx-content-right-top2 clear">
            <p class="hyzx-content-right-top2-left">大家好</p>
            <p class="hyzx-content-right-top2-right">05-18</p>
          </div>
        </div>
      </div>
    </div>
    <div class="hyzx-content-wrap">
      <div class="hyzx-content-all clear">
        <div class="hyzx-content-left">
          <img src="./images/more.png" alt="">
        </div>
        <div class="hyzx-content-right">
          <p class="hyzx-content-right-top">
            你好
          </p>
          <p class="hyzx-content-right-top1">
            我好
          </p>
          <div class="hyzx-content-right-top2 clear">
            <p class="hyzx-content-right-top2-left">大家好</p>
            <p class="hyzx-content-right-top2-right">05-18</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>

  export default{
    name:'xianhuo',
    data(){
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 2500,
          slideTo:true,
          initialSlide: true,
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          autoplayDisableOnInteraction : false,
          loop : true,
        }
      }
    }
  }
</script>
<style>
  .hyzx-wrap .swiper-container{
    top: 44px;
    z-index: 0;
    margin-bottom: 40px;
  }


</style>
