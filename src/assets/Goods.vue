<template>
    <div class="goods-div">
        <div class="left-div">
            <!-- 想要实现better-scroll效果必须加一个ul，class必须为content -->
            <ul class="content">
                <div @click="clickLeftTitle(index)" :class="{leftGoods:true,selected:index == curSelected}" v-for="(item,index) in goodslist" :key="item.name">
                    <img v-show="item.type == 1" src="../assets/imgs/decrease_3@2x.png" alt="">
                    <img v-show="item.type == 2" src="../assets/imgs/discount_3@2x.png" alt="">
                    <span>{{ item.name }}</span>
                </div>
            </ul>
        </div>
        <div class="right-div">
            <ul class="content">
               <div class="right-foods" :id="index" v-for="(item,index) in goodslist" :key="index">
                    <div class="title">
                        <p>{{item.name}}</p>
                    </div>
                    <div class="good">
                        <div class="good-list"  v-for="(obj,i) in item.foods" :key="i">
                            <div class="img">
                                <img :src="obj.icon" alt="">
                            </div>
                            <div class="msg">
                                <p class="name">{{obj.name}}</p>
                                <p class="description">{{obj.description}}</p>
                                <p>
                                    <span class="sellCount">月售{{obj.sellCount}}份  </span>
                                    <span class="rating">评分{{obj.rating}}</span>
                                </p>
                                <p>
                                    <span class="price">￥{{obj.price}}  </span>
                                    <span class="oldPrice">{{obj.oldPrice}}</span>
                                </p>
                            </div>
                            <div class="btn">
                                <button v-show="obj.num>0" @click="clickBtn(obj.name,-1)">-</button>
                                <label v-show="obj.num>0">{{obj.num}}</label>
                                <button @click="clickBtn(obj.name,1)">+</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </ul>
        </div>
    </div>
</template>

<script>
import { getGoods } from "../api/apis.js"
import BScroll from 'better-scroll'


export default {
  data() {
    return {
        curSelected:0
    };
  },
  created() {
    getGoods().then(res => {
        this.$store.commit('initGoodsList',res.data.data)
    });
  },
  mounted(){
      //new BScroll(节点，)
      //左侧
      new BScroll(document.querySelector('.left-div'),{
            click: true  //允许点击
        });
        //右侧
      this.rightDiv = new BScroll(document.querySelector('.right-div'),{
          probeType:3  //实时派发滚动事件
      });
      this.rightDiv.on('scroll',({y})=>{
          let _y = Math.abs(y) //取绝对值
          for(let obj of this.getMath){
              if(_y>=obj.min && _y<obj.max){
                  this.curSelected = obj.index
                  return
              }
          }
      })
  },
  methods:{
      clickLeftTitle(index){
        this.curSelected = index
        this.rightDiv.scrollToElement(document.getElementById(index),600)
      },
      clickBtn(name,val){
        this.$store.commit('chengGoodsNum',{
            name,
            val
        })
      }
  },
  //计算属性：会进行计算结果缓存，提高性能
  computed:{
      //获取每个div高度，高频获取
      getMath(){
          let arr = []
          let total = 0
          for(let i=0; i<this.goodslist.length; i++){
              let divHeight = document.getElementById(i).offsetHeight
              arr.push({min:total,max:total+divHeight,index:i})
              total += divHeight //循环一次加一次div高度
          }
          return arr
      },
      goodslist(){
          return this.$store.state.goodslist
      }
  }
};
</script>

<style lang="less" scoped>
.selected{
    background-color: #fff;
}
.goods-div {
  display: flex;
  height: 600px;
  .left-div {
    width: 80px;
    height: 100%;
    background:#f4f5f7;
    overflow: scroll;
    .leftGoods{
        height: 70px;
        font-size: 12px;
        padding: 0 8px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ddd;
        img{
            width: 12px;
            align-self: flex-start;
            margin-top: 20px;
        }
    }
  }
  .right-div {
    flex: 1;
    height: 100%;
    overflow: scroll;
    .right-foods{
        .title{
            height: 30px;
            background: #f4f5f7;
            border-left: 2px solid #ccc;
            p{
                line-height: 30px;
                text-indent: 1em;
            }
        }
        .good{
            padding:0 20px;
            .good-list{
                position: relative;
                display: flex;
                padding:20px 0;
                border-bottom: 1px solid #ccc;
                .img{
                    width: 60px;
                    height: 60px;
                    margin-right: 10px;
                    img{
                        width: 60px;
                        height: 60px;
                    }
                }
                .msg{
                    flex: 1;
                    color: #95989d;
                    font-size: 12px;
                    .name{
                        color: #000;
                        font-size: 14px;
                    }
                    .description{
                        width: 100px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    p{
                        .price{
                            font-size: 16px;
                            color: #fa1c0f;
                            font-weight: bold;
                        }
                        .oldPrice{
                            font-size: 12px;
                            text-decoration:line-through
                        }
                    }
                }
                .btn{
                    position: absolute;
                    right: 10px;
                    bottom: 10px;
                    button{
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        border: 0;
                        background: cornflowerblue;
                        color: #fff;
                        font-weight: bold;
                        outline: none;                
                    }
                }
            }
        }
    }
  }
}
</style>