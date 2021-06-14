<template>
    <div @click="tan">
        评价 {{name}}
    </div>
</template>

<script>
    export default {
        created(){
            console.log(this.$store);
        },
        // 把取值放在计算属性中
        computed:{
            name(){
             return  this.$store.state.num
            }
        },
        methods:{
            tan(){
                this.$store.commit('tan1',1)
            }
        }
    }
</script>

<style lang="less" scoped>

</style>