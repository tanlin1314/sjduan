<template>
    <div>
         <transition name="slide-fade">
        <div v-show="showboard" class="shoppnr">
            
        </div>
        </transition>
        <div @click="showboard=!showboard" class="ShoppingCart">购物车1</div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                showboard:false,
               
            }
        },
        created(){
          console.log(this.$store.state);
          
        },
        methods:{

        }
        
    }
</script>

<style lang="less" scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.shoppnr{
    width: 100%;
  height: 200px;
  position: fixed;
  bottom: 50px;
  background-color: beige;

}
.ShoppingCart{
  width: 100%;
  height: 50px;
  background: aqua;
  position: fixed;
  bottom: 0;
}
</style>