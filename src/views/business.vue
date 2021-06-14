<template>
    <div @click="tan">
商家  {{name}}
    </div>
</template>

<script>
    export default {
        methods:{
            tan(){
                this.$store.commit('tan1',1)
            }
        },
        computed:{
             name(){
             return  this.$store.state.num
            }
        }
    }
</script>

<style lang="less" scoped>

</style>