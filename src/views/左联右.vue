<template>
<div>
    <div  v-show="imgflag"  class="dity">
        <!-- 左  如果cueserlt==index -->  
        <div id="dityz" class="dityz">
            <div class="dityz1">
                <!-- :class="{样式名A: 是否开启, 样式名2:是否开启,.......}" -->
                <div v-for="(item,index) in goodsListName" :class="{p:true,tirleActive:cueserlt==index}" @click="clicklief(index)"  :key="item.name">
                {{ item.name }}
            </div>
            </div>
        </div>
        <!-- 右 -->
        <div class="dityy" id="dityy">
            <div class="dityy1">
                <div :id="index"  v-for="(item,index) in goodsListName" :key="item.name">
                <p>{{item.name}}</p>
                <div v-for="items in item.foods" :key="items.id">
                    <div class="dityynr">
                        <img :src="items.imgUrl" alt="" width="50px" height="50px">
                    <p>{{items.name}}</p>
                    <span>月售 {{items.rating}}</span>
                    <span>好评 {{items.sellCount}}</span>
                    <span>价格{{items.price}}</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    <img v-show="!imgflag" src="@/assets/default.jpg" alt="" width="100%">
</div>
    
</template>

<script>
    import BScroll from 'better-scroll'
    import { API_ADD_list } from "@/api/api.js";
    export default {
        data(){
            return{
                goodsListName:[],
                imgflag:false, //没有加载到数据  
                cueserlt:0 //当前选中的索引
            }
        },
        created(){
            API_ADD_list().then(res=>{
                console.log(res.data.goodsList);
                    setTimeout(()=>{
                        this.imgflag=true;
            this.goodsListName=res.data.goodsList
                    },3000)
                console.log(this.goodsListName);
            })
            
        },
        updated(){
            var beleft= new BScroll('#dityz',{
                click: true
            })
            // 左侧

            // 右侧
             this.bereft = new BScroll(document.getElementById('dityy'),{
                click: true,
                 probeType:3 
            })

            this.bereft.on('scroll',(obj)=>{
                // obj.y  上下距离
                // obj.x  左右距离
                // console.log(obj.y);
                let _y=Math.abs(obj.y); 
                console.log(_y);
                console.log(this.getHeightarr);

                for(let obj of this.getHeightarr){
                    if(_y>=obj.min && _y<obj.max){
                        this.cueserlt=obj.index
                        return
                    }
                }
                
                
                
            })
            console.log(beleft);
            },
         methods:{
            clicklief(index){
                console.log(index);
                this.cueserlt=index
                this.bereft.scrollToElement(document.getElementById(index),600)
                
            }
        },
        computed:{
            getHeightarr(){
                 // 循环坐标数组，对比_y在哪个区间段内，就选中左侧对应的索引   
                // 原生js获取高度，才能运算？怎么获取DIV的高度 //0-9每个div的高度  
                let arr=[]//0-9每个div的高度
                let totalHeight=0   //之前高度总和  
                for(let i=0;i<this.goodsListName.length;i++){
                let divHeight=document.getElementById(i).offsetHeight  //当前高度
                arr.push({index:i,max:divHeight+totalHeight,min:totalHeight})
                totalHeight += divHeight
                }
                 console.log(arr);
                 return  arr

                //  索引：_y>=之前高度总和&&<之前高度总+自己高度
            //    {index:0,max:1589,min:0}
            //    {index:1,max:1589+547,min:1589}
            //    {index:2,max:1589+547+441,min:1589+547}
            }
        }
        }
</script>

<style lang="less" scoped>

.dity{

.tirleActive{
        background-color: rebeccapurple;
    }
    height: 480px;
    display: flex;
    .dityz{
        width: 30%;
        height: 100%;
        overflow:auto;
        .dityz1{
        }
        .p{
            width: 100%;
            height: 40px;
            // line-height: 60px;
            text-align: center;
            margin-top: 20px;
            
        }
    }
    .dityy{
        flex: 1;
         height: 480px;
            width: 100%;
        overflow:auto;
        .dityy1{

        }
    }

}
</style>