<template>
  <div >
      <div class="home">图片</div>
      <div class="indexBt">
         <router-link to="/" class="a">商品</router-link>
          <router-link to="/evaluate">评价</router-link>
          <router-link to="/business">商家</router-link>
      </div>
      <router-view/>
      <!-- 购物车 -->
      
<div><ShoppingCart /></div>
  </div>
</template>

<script>
import ShoppingCart from './ShoppingCart'
  export default {
    components:{
      ShoppingCart
    },
    methods:{
    
    }
  }
</script>

<style lang="less" scoped>
.home{
  width: 100%;
  height: 150px;
  background: aqua;
}
.indexBt{
  display: flex;
  justify-content: space-around;
  a{
    text-decoration:none
  }
}



</style>
